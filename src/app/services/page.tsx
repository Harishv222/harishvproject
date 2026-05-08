"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Sparkles, Image as ImageIcon, Zap, Layers, Focus, Camera } from "lucide-react";

export default function ServicesPage() {
  const services = [
    { icon: ImageIcon, title: "High-End Retouching", desc: "Flawless skin work, frequency separation, and dodge & burn for beauty and fashion." },
    { icon: Sparkles, title: "Color Grading", desc: "Cinematic looks, true-to-life tones, and advanced color science." },
    { icon: Zap, title: "Batch Processing", desc: "Consistent style application across hundreds of event or wedding photos." },
    { icon: Layers, title: "Compositing", desc: "Seamless background replacement and element integration." },
    { icon: Focus, title: "Sharpening & Detail", desc: "Advanced noise reduction and micro-contrast enhancements." },
    { icon: Camera, title: "Raw Conversion", desc: "Optimized starting points from raw data to preserve maximum dynamic range." },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-400 to-transparent blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <main className="flex-1 flex flex-col items-center w-full max-w-7xl mx-auto px-6 pt-40 pb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center gap-6 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-black/50 backdrop-blur-md w-fit">
            <span className="text-xs font-medium text-accent-hover">Our Capabilities</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Our Expertise</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Tailored editing solutions for commercial, fashion, and fine-art photography. We treat every pixel with purpose.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-10 rounded-[2rem] glass hover:glass-hover transition-all duration-300 group flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-zinc-800/50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
