'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [theme, setTheme] = useState('light');
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <div className="bg-base-100 border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="navbar">
          <div className="flex-1">
            <Link href="/" className="text-xl font-medium">
              Your Name
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal">
              <li><Link href="/" className="hover:bg-base-200">Home</Link></li>
              <li><Link href="/projects" className="hover:bg-base-200">Projects</Link></li>
              <li><Link href="/certifications" className="hover:bg-base-200">Certifications</Link></li>
              <li><Link href="/blogs" className="hover:bg-base-200">Blogs</Link></li>
            </ul>
          </div>
          <div className="flex-none">
            <button className="btn btn-ghost hover:bg-base-200" onClick={toggleTheme}>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 