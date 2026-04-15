import Link from "next/link";
import { type Project } from "@/lib/data";
import { Chip } from "@/components/common/chip";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group block rounded-[28px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-[var(--shadow)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--primary)]",
        featured && "md:p-8",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--primary)]">
            {project.period}
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
            {project.title}
          </h3>
          <p className="mt-3 text-base whitespace-nowrap leading-7 text-[color:var(--muted-foreground)]">
            {project.subtitle}
          </p>
        </div>
        <span className="rounded-full bg-[color:var(--primary-soft)] px-3 py-2 text-sm font-semibold text-[color:var(--primary)] transition group-hover:bg-[color:var(--primary)] group-hover:text-white">
          View
        </span>
      </div>

      <p className="mt-6 text-sm leading-7 text-[color:var(--muted-foreground)]">
        {project.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.techStack.slice(0, 4).map((stack) => (
          <Chip key={stack} label={stack} />
        ))}
      </div>
    </Link>
  );
}
