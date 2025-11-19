"use client";
import Link from 'next/link';
import { Search, Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-4 py-4 md:px-6">
      <div className="glass-panel rounded-full px-4 py-3 md:px-6 flex items-center justify-between max-w-7xl mx-auto transition-all duration-300 hover:border-white/20 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group z-50">
          <div className="bg-neon-green text-black p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <Sparkles size={20} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-lg md:text-xl tracking-tight">
            BrandMonitor<span className="text-neon-purple">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-400">
          <Link href="/" className="hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">Home</Link>
          <Link href="/features" className="hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">Features</Link>
          <Link href="/pricing" className="hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">Pricing</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 z-50">
          <button className="btn btn-ghost btn-circle btn-sm text-gray-400 hover:text-neon-blue hover:bg-white/5 transition-colors">
            <Search size={20} />
          </button>
          <Link href="/login" className="hidden md:flex btn btn-sm bg-white text-black hover:bg-gray-200 hover:scale-105 border-none rounded-full px-6 font-bold transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Login
          </Link>
          <button 
            className="md:hidden btn btn-ghost btn-circle btn-sm text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 glass-panel rounded-3xl flex flex-col gap-4 md:hidden animate-fade-in-up">
            <Link href="/" className="p-2 hover:bg-white/5 rounded-xl" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/features" className="p-2 hover:bg-white/5 rounded-xl" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link href="/pricing" className="p-2 hover:bg-white/5 rounded-xl" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <div className="h-px bg-white/10 my-2" />
            <Link href="/login" className="btn bg-white text-black hover:bg-gray-200 border-none rounded-xl w-full" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
