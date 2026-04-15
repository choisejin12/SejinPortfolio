"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ShowcaseItem = {
  title: string;
  image: string;
  description: string;
  features: readonly string[];
};

type ProjectShowcaseSliderProps = {
  items: readonly ShowcaseItem[];
  projectTitle: string;
};

export type { ShowcaseItem };

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const isPrev = direction === "prev";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrev ? "이전 화면" : "다음 화면"}
      className={cn(
        "absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-[rgba(255,255,255,0.88)] text-[color:var(--foreground)] shadow-[0_12px_26px_rgba(24,32,18,0.14)] backdrop-blur transition hover:scale-105 hover:border-[color:var(--primary)] hover:text-[color:var(--primary)]",
        isPrev ? "left-4" : "right-4",
      )}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isPrev ? "" : "rotate-180"}
      >
        <path
          d="M15 5L8 12L15 19"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export function ProjectShowcaseSlider({
  items,
  projectTitle,
}: ProjectShowcaseSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (items.length === 0) {
    return null;
  }

  const currentItem = items[currentIndex];

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--primary)]">
          Screen Flow
        </p>
      </div>

      <div className="rounded-[28px] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4 md:p-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${projectTitle}-${currentItem.title}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-[20px] border border-[color:var(--border)] bg-white">
              <ArrowButton
                direction="prev"
                onClick={() =>
                  setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
                }
              />
              <ArrowButton
                direction="next"
                onClick={() =>
                  setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
                }
              />

              <img
                src={currentItem.image}
                alt={`${projectTitle} ${currentItem.title}`}
                className="w-full object-cover"
              />
            </div>

            <div className="mt-5">
              <h3 className="text-sm md:text-xl font-semibold tracking-tight text-[color:var(--foreground)]">
                {currentItem.title}
              </h3>
              <p className="text-sm mt-3 md:text-base leading-8 text-[color:var(--muted-foreground)]">
                {currentItem.description}
              </p>
              <ul className="mt-5 grid gap-3 md:grid-cols-3 text-center">
                {currentItem.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 text-[10px] md:text-sm leading-5 text-[#E0676A]"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`${item.title} 보기`}
            className={cn(
              "h-2.5 rounded-full transition-all",
              index === currentIndex
                ? "w-10 bg-[color:var(--primary)]"
                : "w-2.5 bg-[rgba(89,115,70,0.24)] hover:bg-[rgba(89,115,70,0.42)]",
            )}
          />
        ))}
      </div>
    </div>
  );
}
