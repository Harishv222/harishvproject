"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { UploadCloud, FileImage, X } from "lucide-react";

export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      setFiles((prev) => [...prev, ...Array.from(selectedFiles)]);
    }
  };

  const handleUpload = () => {
    if (files.length === 0) return;
    setIsUploading(true);
    // Simulate upload delay
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      setFiles([]);
      setTimeout(() => setUploadSuccess(false), 3000);
    }, 2000);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles && droppedFiles.length > 0) {
      setFiles((prev) => [...prev, ...Array.from(droppedFiles)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6 pt-40 pb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Upload Your Project</h1>
            <p className="text-muted-foreground">Upload your raw files or high-res JPEGs for editing.</p>
          </div>

          <div 
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleBrowseClick}
            className={`w-full p-16 rounded-[2rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center gap-6 cursor-pointer
              ${isDragging ? "border-accent bg-accent/5" : "border-border glass hover:glass-hover"}`}
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
              multiple 
              accept="image/jpeg, image/png, image/tiff, .raw" 
            />
            <div className="w-20 h-20 rounded-full bg-zinc-800/50 flex items-center justify-center">
              <UploadCloud className={`w-10 h-10 ${isDragging ? "text-accent" : "text-muted-foreground"}`} />
            </div>
            <div className="text-center">
              <p className="text-xl font-medium mb-2">Drag & drop your files here</p>
              <p className="text-sm text-muted-foreground">or click to browse from your computer</p>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Supports RAW, TIFF, JPEG, PNG (Max 50MB per file)</p>
          </div>

          {files.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 glass p-8 rounded-[2rem]"
            >
              <h3 className="text-lg font-medium mb-6">Selected Files ({files.length})</h3>
              <div className="flex flex-col gap-4">
                {files.map((file, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/50">
                    <div className="flex items-center gap-4">
                      <FileImage className="w-6 h-6 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{file.name}</p>
                        <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                    <button onClick={() => removeFile(i)} className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
                      <X className="w-4 h-4 text-muted-foreground hover:text-white" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={handleUpload}
                  disabled={isUploading}
                  className="px-8 py-3 rounded-full bg-foreground text-background font-medium hover:bg-accent transition-colors disabled:opacity-50"
                >
                  {isUploading ? "Uploading..." : "Upload Files"}
                </button>
              </div>
            </motion.div>
          )}

          {uploadSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 rounded-xl bg-green-500/20 text-green-400 text-center font-medium border border-green-500/30"
            >
              Files uploaded successfully!
            </motion.div>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
