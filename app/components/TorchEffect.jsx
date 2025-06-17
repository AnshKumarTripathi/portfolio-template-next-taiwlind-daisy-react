'use client';
import { useEffect, useRef } from 'react';

export default function TorchEffect({ radius = 18 }) {
  const torchRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (torchRef.current) {
        torchRef.current.style.setProperty('--torch-x', `${x}px`);
        torchRef.current.style.setProperty('--torch-y', `${y}px`);
      }
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Theme detection (tailwind/daisyUI)
  useEffect(() => {
    const updateColor = () => {
      const themeAttr = document.documentElement.getAttribute('data-theme');
      let isDark;
      if (themeAttr === 'dark') {
        isDark = true;
      } else if (themeAttr === 'light') {
        isDark = false;
      } else {
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      // Dark maroon for light, subtle blueish white for dark
      const color = isDark
        ? 'rgba(93, 226, 231,0.3)' // subtle blueish white
        : 'rgba(128,0,32,0.98)'; // dark maroon, high intensity
      if (torchRef.current) {
        torchRef.current.style.setProperty('--torch-color', color);
      }
    };
    updateColor();
    window.addEventListener('storage', updateColor);
    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => {
      window.removeEventListener('storage', updateColor);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={torchRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        '--torch-x': '50vw',
        '--torch-y': '50vh',
        '--torch-radius': `${radius}px`,
        '--torch-color': 'rgba(128,0,32,0.98)', // default dark maroon
        background: `radial-gradient(circle var(--torch-radius) at var(--torch-x) var(--torch-y), var(--torch-color) 0%, transparent 100%)`,
        transition: 'background 0.2s',
        mixBlendMode: 'lighten',
      }}
      aria-hidden="true"
    />
  );
} 