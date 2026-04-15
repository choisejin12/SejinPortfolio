import { cn } from "@/lib/utils";

type ProjectDetailBlockProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function ProjectDetailBlock({
  title,
  children,
  className,
}: ProjectDetailBlockProps) {
  return (
    <section
      className={cn(
        "rounded-[28px] border border-[color:var(--border)] bg-[color:var(--surface)] p-7 shadow-[var(--shadow)] md:p-9",
        className,
      )}
    >
      <h2 className="text-xl font-semibold tracking-tight text-[color:var(--foreground)] md:text-2xl">
        {title}
      </h2>
      <div className="mt-5 text-base leading-8 text-[color:var(--muted-foreground)]">
        {children}
      </div>
    </section>
  );
}
