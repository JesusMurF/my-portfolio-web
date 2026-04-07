---
title: "Recursos que vale la pena leer (y por qué)"
description: "Una selección curada de libros, artículos y talks que me han cambiado la forma de escribir software."
date: 2026-04-07
tags: ["recursos", "aprendizaje"]
draft: false
---

## Por qué esta lista es diferente

No voy a listar los 50 libros que "todo developer debería leer". Esas listas no sirven para nada.

Esta es una lista corta de recursos que **cambió algo concreto en cómo escribo código**. Con el contexto de por qué lo incluyo.

---

## Libros

### A Philosophy of Software Design — John Ousterhout

El mejor libro sobre diseño de software que he leído en los últimos años. No habla de patrones ni de frameworks. Habla de **profundidad vs superficialidad** en los módulos, de cómo los comentarios deberían explicar el *por qué* y no el *qué*, de por qué las clases pequeñas no siempre son mejores.

**Cambió cómo pienso en interfaces.** Una buena interfaz es una que oculta complejidad, no una que la expone de forma granular.

### The Pragmatic Programmer — Hunt & Thomas

Clásico por una razón. Especialmente útil el concepto de **"broken windows"**: el código descuidado atrae más código descuidado. Mantener el estándar alto desde el principio es más fácil que recuperarlo después.

### Staff Engineer — Will Larson

Si te interesa crecer más allá del rol de individual contributor senior, este libro es imprescindible. Muy concreto, con entrevistas reales.

---

## Artículos

### "Parse, don't validate" — Alexis King

Corto y denso. El argumento: en lugar de validar datos y luego usarlos (arriesgándote a usar datos inválidos más tarde), **parsea los datos a tipos que solo pueden existir si son válidos**. Cambia cómo pienso el diseño de tipos en TypeScript.

### "The Wrong Abstraction" — Sandi Metz

"Duplicación es mucho más barata que la abstracción equivocada." Una de esas frases que parece obvia pero que tardé años en interiorizar de verdad.

---

## Talks

### "Simple Made Easy" — Rich Hickey (Strange Loop 2011)

La distinción entre *simple* (una sola responsabilidad) y *fácil* (familiar, cercano) es fundamental. Algo puede ser fácil de usar pero complejo en su implementación. Lo simple es una elección de diseño.

### "The Art of Code" — Dylan Beattie (NDC)

Técnicamente no es una talk de mejores prácticas, pero es la mejor introducción al por qué importa el craft en software. Divertida y profunda a la vez.

---

## Cómo consumo recursos

No leo/veo todo de corrido. Tomo notas mientras leo, escribo en mis propias palabras lo que aprendí, e intento aplicarlo a algo concreto en los siguientes días.

Si no puedo explicarlo ni aplicarlo, no lo aprendí — solo lo leí.
