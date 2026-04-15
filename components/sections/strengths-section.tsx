import { FadeUp } from "@/components/motion/fade-up";
import { SectionHeading } from "@/components/common/section-heading";
import { profile } from "@/lib/data";

export function StrengthsSection() {
  return (
    <section className="section-gap pt-0">
      <div className="container-shell">
        <FadeUp>
          <SectionHeading
            eyebrow="핵심 역량"
            title="현실 문제를 구조적으로 해결하는 웹 개발자"
            description="데이터 흐름을 분석하고, 효율적인 구조로 문제를 해결합니다."
            
          />
        </FadeUp>

        <div className="mt-5 grid gap-6 lg:grid-cols-3">
          {profile.strengths.map((strength, index) => (
            <FadeUp key={strength.title} delay={index * 0.08}>
              <article className="section-card h-full rounded-[28px] p-7 md:p-8">
                <p className="text-[10px] md:text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">
                  Strength {index + 1}
                </p>
                <h3 className="mt-3 text-[19px] md:text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
                  {strength.title}
                </h3>
                <p className="mt-2 text-base text-[14px] leading-6 text-[color:var(--muted-foreground)]">
                  {strength.description}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
