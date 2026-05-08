export function Footer() {
  return (
    <footer className="border-t border-border mt-24 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium tracking-tight">Lumina Edit Studio</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lumina Edit Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
