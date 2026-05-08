"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, Mail, User } from "lucide-react";

export default function BookPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-6 pt-40 pb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full glass p-10 md:p-16 rounded-[3rem]"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Book a Session</h1>
            <p className="text-muted-foreground">Schedule a consultation to discuss your project requirements.</p>
          </div>

          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-muted-foreground ml-2">Name</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <User className="w-5 h-5" />
                  </div>
                  <input type="text" className="w-full bg-zinc-900/50 border border-border rounded-full py-4 pl-12 pr-6 outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-muted-foreground ml-2">Email</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input type="email" className="w-full bg-zinc-900/50 border border-border rounded-full py-4 pl-12 pr-6 outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-muted-foreground ml-2">Preferred Date</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <input type="date" className="w-full bg-zinc-900/50 border border-border rounded-full py-4 pl-12 pr-6 outline-none focus:border-accent transition-colors" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-muted-foreground ml-2">Preferred Time</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <Clock className="w-5 h-5" />
                  </div>
                  <input type="time" className="w-full bg-zinc-900/50 border border-border rounded-full py-4 pl-12 pr-6 outline-none focus:border-accent transition-colors" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-muted-foreground ml-2">Project Details</label>
              <textarea 
                rows={4} 
                className="w-full bg-zinc-900/50 border border-border rounded-3xl py-4 px-6 outline-none focus:border-accent transition-colors resize-none" 
                placeholder="Tell us about the scope of your project, number of images, and desired aesthetic..."
              ></textarea>
            </div>

            <button type="button" className="mt-4 w-full py-4 rounded-full bg-foreground text-background font-medium hover:bg-accent hover:scale-[1.02] transition-all duration-300">
              Confirm Booking
            </button>
          </form>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
