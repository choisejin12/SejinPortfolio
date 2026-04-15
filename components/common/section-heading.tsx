import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="mb-4 text-[11px] md:text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">
        {eyebrow}
      </p>
      <h2 className="text-balance text-lg md:text-2xl font-semibold tracking-tight text-[color:var(--foreground)] ">
        {title}
      </h2>
      <p className="text-base leading-8 text-[color:var(--muted-foreground)] text-[11px] md:text-sm">
        {description}
      </p>
    </div>
  );
}
