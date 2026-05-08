"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ImageSlider } from "@/components/ui/ImageSlider";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background ambient gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-500 to-zinc-700 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <Navbar />

      <main className="flex-1 flex flex-col items-center w-full max-w-7xl mx-auto px-6 pt-40 pb-20 gap-32 relative z-10">
        
        {/* Hero Section */}
        <section className="w-full flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-black/50 backdrop-blur-md w-fit">
              <Sparkles className="w-4 h-4 text-accent-hover" />
              <span className="text-xs font-medium text-accent-hover">Premium Retouching</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Elevate your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
                visual narrative.
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Professional color grading, meticulous retouching, and composition enhancements for photographers who demand perfection.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              <button className="px-8 py-4 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform duration-300">
                Start a Project
              </button>
              <button className="px-8 py-4 rounded-full glass hover:glass-hover font-medium transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-zinc-800/30 to-zinc-500/10 blur-2xl rounded-[3rem] -z-10" />
            <div className="p-2 rounded-3xl glass">
              <ImageSlider 
                beforeImage="/images/before.png" 
                afterImage="/images/after.png" 
              />
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
