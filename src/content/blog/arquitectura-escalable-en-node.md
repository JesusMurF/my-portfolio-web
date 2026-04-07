---
title: "Arquitectura escalable en Node.js: lo que funciona de verdad"
description: "Patrones concretos para estructurar APIs Node.js que no se convierten en un caos cuando el proyecto crece."
date: 2026-03-24
tags: ["nodejs", "backend", "arquitectura"]
draft: false
---

## El problema

Empiezas un proyecto Node.js. Todo en `index.js`, rutas mezcladas con lógica de negocio, consultas SQL directamente en los controllers. Funciona.

Tres meses después tienes 40 endpoints, nadie sabe dónde está nada, y hacer un cambio simple es aterrador porque no sabes qué rompe.

Esto no es un problema de Node. Es un problema de estructura. Y tiene solución.

## La separación que más importa

La regla de oro: **separa el transporte de la lógica de negocio**.

Un controller HTTP no debería saber nada de base de datos. Un servicio no debería saber que existe Express. Si algún día cambias de Express a Fastify, o de REST a GraphQL, solo tocas la capa de transporte.

```
src/
├── routes/        # Solo HTTP: parsear req, llamar servicio, responder
├── services/      # Lógica de negocio pura: sin Express, sin Prisma
├── repositories/  # Solo base de datos: queries, mapeos
└── domain/        # Tipos, interfaces, entidades
```

## Los tres patrones que más uso

### 1. Repository Pattern

Abstrae el acceso a datos detrás de una interfaz. Tu servicio llama a `userRepository.findById(id)`, no a `prisma.user.findUnique(...)`.

**Ventaja real:** puedes cambiar el ORM, la base de datos, o usar un mock en tests, sin tocar los servicios.

### 2. Result / Either para errores

En lugar de lanzar excepciones, devuelve un objeto con `{ ok: true, data }` o `{ ok: false, error }`.

```typescript
type Result<T> = { ok: true; data: T } | { ok: false; error: AppError };
```

Fuerza a quien llama a manejar el caso de error. Los `try/catch` desaparecen de los controllers.

### 3. Dependency Injection sin framework

No necesitas InversifyJS para inyectar dependencias. Con closures es suficiente:

```typescript
function makeUserService(repo: UserRepository) {
  return {
    async getUser(id: string) {
      return repo.findById(id);
    }
  };
}
```

En `app.ts` ensamblas todo. En tests, pasas un repo mock.

## Lo que no merece la pena añadir demasiado pronto

- **Event sourcing**: potente, pero complejo. Solo si realmente lo necesitas.
- **Microservicios**: el monolito modular primero. Siempre.
- **Colas de mensajes**: solo cuando tienes un problema real de concurrencia o tareas asíncronas pesadas.

## Conclusión

La arquitectura no es un fin en sí mismo. Es un medio para que el código sea fácil de cambiar y de entender. Empieza simple, añade capas solo cuando el dolor sea real.
