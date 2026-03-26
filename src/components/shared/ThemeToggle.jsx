import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme') ?? 'dark';
    setTheme(stored);
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className="fixed top-4 right-4 z-50 p-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--fg)] cursor-pointer hover:opacity-80 transition-opacity"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
