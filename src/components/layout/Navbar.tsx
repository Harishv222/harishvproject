"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Camera } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Camera className="w-6 h-6 text-foreground group-hover:text-accent-hover transition-colors" />
          <span className="text-lg font-medium tracking-tight">Lumina Edit Studio</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link>
          <Link href="/upload" className="hover:text-foreground transition-colors">Upload</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Log In
          </Link>
          <Link href="/signup" className="hidden sm:block px-5 py-2.5 rounded-full glass hover:glass-hover text-sm font-medium transition-colors">
            Sign Up
          </Link>
          <Link href="/book" className="px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-accent transition-colors">
            Book Session
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
