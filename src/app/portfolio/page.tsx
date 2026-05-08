"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const portfolioItems = [
  { id: 1, src: "/images/port1.png", title: "Neon Editorial", category: "Fashion", aspect: "aspect-[3/4]" },
  { id: 2, src: "/images/port2.png", title: "Noir Essence", category: "Product", aspect: "aspect-square" },
  { id: 3, src: "/images/port4.png", title: "Wisdom", category: "Portrait", aspect: "aspect-square" },
  { id: 4, src: "/images/port3.png", title: "Sunset Concrete", category: "Architecture", aspect: "aspect-[4/3]" },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center w-full max-w-7xl mx-auto px-6 pt-40 pb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center gap-6 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-black/50 backdrop-blur-md w-fit">
            <span className="text-xs font-medium text-accent-hover">Selected Works</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A curated collection of our finest retouching and color grading projects.
          </p>
        </motion.div>

        {/* CSS-based Masonry Grid approximation using flex columns or just CSS Columns */}
        <div className="columns-1 md:columns-2 gap-6 w-full space-y-6">
          {portfolioItems.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative w-full rounded-[2rem] overflow-hidden group break-inside-avoid`}
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                <p className="text-accent text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.category}</p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
