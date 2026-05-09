"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Camera, Mail, Lock, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call and save to localStorage
    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify({ email: "user@example.com", name: "Guest User" }));
      setIsLoading(false);
      router.push("/");
      // Force a reload to update Navbar (simple way for now)
      router.refresh();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute top-0 left-0 p-6 z-50">
        <Link href="/" className="flex items-center gap-2 group">
          <Camera className="w-6 h-6 text-foreground group-hover:text-accent-hover transition-colors" />
          <span className="text-lg font-medium tracking-tight">Lumina Edit Studio</span>
        </Link>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-500 to-transparent blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <main className="flex-1 flex items-center justify-center w-full px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md glass p-10 rounded-[3rem] border border-border/50"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome Back</h1>
            <p className="text-sm text-muted-foreground">Log in to manage your editing projects.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-muted-foreground ml-2">Email Address</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                </div>
                <input required type="email" className="w-full bg-zinc-900/50 border border-border rounded-full py-3.5 pl-12 pr-6 outline-none focus:border-accent transition-colors" placeholder="hello@example.com" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-muted-foreground ml-2 flex justify-between">
                <span>Password</span>
                <Link href="#" className="hover:text-white transition-colors">Forgot?</Link>
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Lock className="w-5 h-5" />
                </div>
                <input required type="password" className="w-full bg-zinc-900/50 border border-border rounded-full py-3.5 pl-12 pr-6 outline-none focus:border-accent transition-colors" placeholder="••••••••" />
              </div>
            </div>

            <button 
              disabled={isLoading}
              type="submit" 
              className="mt-2 w-full py-4 rounded-full bg-foreground text-background font-medium hover:bg-accent hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Logging in...
                </>
              ) : "Log In"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Don&apos;t have an account? <Link href="/signup" className="text-white font-medium hover:underline">Sign up</Link>
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
