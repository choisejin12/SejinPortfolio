import Link from "next/link";
import { FadeUp } from "@/components/motion/fade-up";
import { SectionHeading } from "@/components/common/section-heading";
import { profile } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="section-gap">
      <div className="container-shell">
        <FadeUp>
          <div className=" rounded-[32px] p-5 md:p-12">
            <SectionHeading
              eyebrow="Contact"
              title="구조를 고민하고 문제를 해결하는 개발자로 함께 일하고 싶습니다."
              description="포트폴리오와 프로젝트에 대해 더 이야기하고 싶으시다면 아래 채널로 편하게 연락 부탁드립니다."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <Link
                href={`mailto:${profile.contact.email}`}
                className="rounded-[24px] border border-[color:var(--border)]  p-6 transition hover:border-[color:var(--primary)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">
                  Email
                </p>
                <p className="mt-3 text-lg font-semibold text-[color:var(--foreground)]">
                  {profile.contact.email}
                </p>
              </Link>

              <Link
                href={profile.contact.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-[24px] border border-[color:var(--border)] p-6 transition hover:border-[color:var(--primary)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">
                  GitHub
                </p>
                <p className="mt-3 text-lg font-semibold text-[color:var(--foreground)]">
                  github.com/choisejin12
                </p>
              </Link>
            </div>

            <div className="mt-3 p-6 text-[12px] md:text-lg text-base leading-8 text-[color:var(--muted-foreground)]">
              <p>사용자 경험만큼이나 그 뒤의 데이터 구조와 흐름을 중요하게 생각합니다. </p>
              <p>실무에서 신뢰할 수 있는 구조를 함께 만들어 갈 기회를 기다리고 있습니다.</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
