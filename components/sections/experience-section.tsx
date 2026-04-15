"use client";

import { useEffect, useState } from "react";
import { FadeUp } from "@/components/motion/fade-up";
import { SectionHeading } from "@/components/common/section-heading";
import { test2, type Test } from "@/lib/data";
import { test } from "@/lib/data";

function ExperienceModal({
  experience,
  onClose,
}: {
  experience: Test | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!experience) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [experience, onClose]);

  if (!experience) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(24,32,18,0.42)] px-4 py-8 backdrop-blur-sm">
      <button
        type="button"
        aria-label="모달 닫기"
        className="absolute inset-0"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-2xl rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface)] p-7 shadow-[0_30px_80px_rgba(24,32,18,0.18)] md:p-9">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">
              {experience.period}
            </p>
            <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
              {experience.team}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full md:w-20 border border-[color:var(--border)] px-4 py-2 text-[10px] font-semibold text-[color:var(--muted-foreground)] transition hover:text-[color:var(--foreground)]"
          >
            닫기
          </button>
        </div>


        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--primary)]">
            주요 내용
          </p>
          {experience.description.map((item,index) => (
            <div key={index} className="text-sm ">{item}</div>
          ))}
          
          
        </div>

      </div>
    </div>
  );
}

export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<Test | null>(
    null,
  );

  return (
    <>
      <section id="experience" className="section-gap pt-0">
        <div className="container-shell">
          <FadeUp>
            <SectionHeading
              eyebrow="경력 사항"
              title="이전 경험에서 발견한 문제를, 개발자의 시선으로 다시 풀어가고 있습니다."
              description="다양한 업무와 프로젝트를 통해 경험과 노하우를 쌓고 있습니다."
            />
          </FadeUp>

          <FadeUp>
            <div>
              <div className="flex  gap-4 items-center md:max-w-[768px] mx-auto mt-12 mb-8">
                <div className="w-full h-[1px] bg-gray-500 from-foreground/15"></div>
                <div className="flex-shrink-0 text-xs md:text-sm text-foreground/50">업무 경력</div>
                <div className="w-full h-[1px] bg-gray-500 from-foreground/15"></div>
              </div>
              <div className="flex flex-col items-center md:max-w-[768px] mx-auto mt-12 mb-8">
                {test.map((test)=> (
                  <div className="grid  grid-row-[50px_1fr] md:grid-cols-[180px_1fr] gap-6 mt-5 w-full">
                    <div className="text-[color:var(--primary)] ">🚩 {test.period}</div>
                    <div>
                      <div className="font-semibold">{test.title}</div>
                      <div className="text-[color:var(--primary)]">{test.team}</div>
                      <button
                        type="button"
                        onClick={() => setSelectedExperience(test)}
                        className="mt-3 inline-flex items-center text-base font-semibold text-[#485FF7] transition hover:text-[color:var(--primary-strong)]"
                      >
                        <div className="text-[14px]">
                          주요 업무 내용 보기
                        </div>                      
                      </button>
                    </div>
                    <div>     
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex gap-4 items-center md:max-w-[768px] mx-auto mt-12 mb-8">
                <div className="w-full h-[1px] bg-gray-500 from-foreground/15"></div>
                <div className="flex-shrink-0 text-xs md:text-sm text-foreground/50">프로젝트</div>
                <div className="w-full h-[1px] bg-gray-500 from-foreground/15"></div>
              </div>
              <div className="flex flex-col items-center md:max-w-[768px] mx-auto mt-12 mb-8">
                {test2.map((test)=> (
                  <div className="grid grid-row-[50px_1fr] md:grid-cols-[180px_1fr] gap-6 mt-5 w-full">
                    <div className="text-[color:var(--primary)] ">🚩 {test.period}</div>
                    <div>
                      <div className="font-semibold">{test.title}</div>
                      <div className="text-[color:var(--primary)]">{test.team}</div>
                      <button
                        type="button"
                        onClick={() => setSelectedExperience(test)}
                        className="mt-3 inline-flex items-center text-base font-semibold text-[#485FF7] transition hover:text-[color:var(--primary-strong)]"
                      >
                        <div className="text-[14px]">
                          담당 역할 보기
                        </div>                      
                      </button>
                    </div>
                    <div>     
                    </div>
                  </div>
                ))}
              </div>              
            </div>

          </FadeUp>
        </div>
      </section>

      <ExperienceModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </>
  );
}
