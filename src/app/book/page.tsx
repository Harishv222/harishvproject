"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, Mail, User, Loader2, CheckCircle2 } from "lucide-react";

export default function BookPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const formData = new FormData(e.target as HTMLFormElement);
      const booking = {
        name: formData.get("name"),
        email: formData.get("email"),
        date: formData.get("date"),
        time: formData.get("time"),
        details: formData.get("details"),
        id: Date.now()
      };
      
      const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      localStorage.setItem("bookings", JSON.stringify([...existingBookings, booking]));
      
      setIsLoading(false);
      setIsSuccess(true);
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

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

          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-10 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
              <p className="text-muted-foreground max-w-sm">
                We&apos;ve received your request. Our team will contact you shortly to confirm the details.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 px-8 py-3 rounded-full bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-colors"
              >
                Book Another Session
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-muted-foreground ml-2">Name</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <User className="w-5 h-5" />
                    </div>
                    <input required name="name" type="text" className="w-full bg-zinc-900/50 border border-border rounded-full py-4 pl-12 pr-6 outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-muted-foreground ml-2">Email</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input required name="email" type="email" className="w-full bg-zinc-900/50 border border-border rounded-full py-4 pl-12 pr-6 outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
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
                    <input required name="date" type="date" className="w-full bg-zinc-900/50 border border-border rounded-full py-4 pl-12 pr-6 outline-none focus:border-accent transition-colors" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-muted-foreground ml-2">Preferred Time</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Clock className="w-5 h-5" />
                    </div>
                    <input required name="time" type="time" className="w-full bg-zinc-900/50 border border-border rounded-full py-4 pl-12 pr-6 outline-none focus:border-accent transition-colors" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-muted-foreground ml-2">Project Details</label>
                <textarea 
                  rows={4} 
                  required
                  name="details"
                  className="w-full bg-zinc-900/50 border border-border rounded-3xl py-4 px-6 outline-none focus:border-accent transition-colors resize-none" 
                  placeholder="Tell us about the scope of your project, number of images, and desired aesthetic..."
                ></textarea>
              </div>

              <button 
                disabled={isLoading}
                type="submit" 
                className="mt-4 w-full py-4 rounded-full bg-foreground text-background font-medium hover:bg-accent hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Confirming...
                  </>
                ) : "Confirm Booking"}
              </button>
            </form>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
