import { FadeUp } from "@/components/motion/fade-up";
import { projects } from "@/lib/data";
import Link from "next/link";

const previewBySlug = {
  invenqr: "/project-previews/invenqr-preview.png",
  teamflow: "/project-previews/teamflow-preview.png",
  swingfit: "/project-previews/swingfit-preview.png",  
} as const;

export function ProjectsSection() {
  return (
    <section id="projects" className="section-gap">
      <div className="container-shell">
        <FadeUp>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">
              Projects
            </p>
            <h2 className="mt-5 text-[20px] font-semibold tracking-tight text-[color:var(--foreground)] md:text-2xl">
              프로젝트를 통해 실제 문제를 어떻게 정의하고 해결했는지 보여주고자 했습니다.
            </h2>
            <p className="mt-2 text-[12px] text-base leading-8 text-[color:var(--muted-foreground)] md:text-[15px]">
              각 프로젝트의 핵심 기능과 설계 방식을 단계적으로 확인할 수 있습니다.
            </p>
          </div>
        </FadeUp>

        <div className="mt-12 space-y-8">
          {projects.map((project, index) => (
            <FadeUp key={project.slug} delay={index * 0.08}>
              <article className="group grid gap-6 rounded-[34px] border border-[color:var(--border)] bg-white/90 p-6 shadow-[var(--shadow)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--primary)] lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
                <Link
                  href={`/projects/${project.slug}`}
                  className="block overflow-hidden rounded-[26px] border border-[color:var(--border)] bg-[color:var(--surface-muted)]"
                >
                  <img
                    src={previewBySlug[project.slug as keyof typeof previewBySlug]}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </Link>

                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">
                      {project.period}
                    </p>
                    <Link href={`/projects/${project.slug}`} className="inline-block">
                      <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--foreground)] transition hover:text-[color:var(--primary)]">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="mt-4 text-base leading-8 text-[color:var(--muted-foreground)]">
                      {project.subtitle}
                    </p>
                    <p className="mt-6 text-sm leading-7 text-[color:var(--muted-foreground)]">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.slice(0, 5).map((stack) => (
                        <span
                          key={stack}
                          className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-2 text-sm font-medium text-[color:var(--foreground)]"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-6 inline-flex text-sm font-semibold text-[color:var(--primary)] transition hover:text-[color:var(--primary-strong)]"
                    >
                      상세 페이지 보기
                    </Link>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
