import { FadeUp } from "@/components/motion/fade-up";
import { SectionHeading } from "@/components/common/section-heading";
import { profile } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="section-gap">
      <div className="container-shell">
        <FadeUp>
          <SectionHeading
            eyebrow="About"
            title="문제의 원인을 구조로 정리하고, 해결 가능한 서비스로 연결합니다."
            description="왜 개발을 시작하게 되었는지, 그리고 어떤 기준으로 서비스를 설계하는지를 담았습니다."
          />
        </FadeUp>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeUp className="section-card rounded-[32px] p-8 md:p-10">
            <div className="space-y-5 text-base leading-8 text-[color:var(--muted-foreground)]">
              {profile.shortBio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="section-card rounded-[32px] p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">
              Direction
            </p>
            <ul className="mt-6 space-y-4">
              {profile.direction.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[color:var(--border)] bg-white px-5 py-4 text-base leading-7 text-[color:var(--foreground)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
