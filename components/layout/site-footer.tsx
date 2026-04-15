export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] py-8">
      <div className="container-shell flex flex-col gap-2 text-sm text-[color:var(--muted-foreground)] md:flex-row md:items-center md:justify-between">
        <p>© 2026 최세진. Professional web developer portfolio.</p>
        <p>Built with Next.js, TypeScript, Tailwind CSS, Framer Motion.</p>
      </div>
    </footer>
  );
}
