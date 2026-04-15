import { cn } from "@/lib/utils";

type ChipProps = {
  label: string;
  strong?: boolean;
};

export function Chip({ label, strong }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-4 py-2 text-sm font-medium",
        strong
          ? "border-transparent bg-[color:var(--primary)] text-white"
          : "border-[color:var(--border)] bg-[color:var(--surface-muted)] text-[color:var(--foreground)]",
      )}
    >
      {label}
    </span>
  );
}
