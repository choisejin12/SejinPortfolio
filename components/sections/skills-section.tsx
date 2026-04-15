"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/components/motion/fade-up";

type SkillCategory = {
  id: string;
  label: string;
  items: Array<{
    name: string;
    icon: string;
  }>;
};

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "프론트엔드",
    items: [
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Redux", icon: "https://skillicons.dev/icons?i=redux" },
      { name: "React-Query", icon: "https://skillicons.dev/icons?i=react" },      
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
      { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
      { name: "Vite", icon: "https://skillicons.dev/icons?i=vite" },
      { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
      { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },

    ],
  },
  {
    id: "backend",
    label: "백엔드",
    items: [
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
      { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },            
      { name: "Prisma", icon: "https://skillicons.dev/icons?i=prisma" },
      { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },

    ],
  },
  {
    id: "deploy",
    label: "환경 및 배포",
    items: [
      { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
      { name: "Render", icon: "https://cdn.simpleicons.org/render/ef4f9a" },
      { name: "Railway ", icon: "https://cdn.simpleicons.org/railway/000000" },       
    ],
  },
  {
    id: "etc",
    label: "기타",
    items: [
      { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
      { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
      { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
      { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },          
      { name: "Notion", icon: "https://skillicons.dev/icons?i=notion" },          
    ],
  },
];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const activeCategory = useMemo(
    () => skillCategories.find((category) => category.id === activeTab) ?? skillCategories[0],
    [activeTab],
  );

  return (
    <section id="skills" className="section-gap overflow-hidden">
      <div className="container-shell">
        <FadeUp>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">
              기술 스택 및 도구
            </p>
            <h2 className="mt-5 text-lg font-semibold tracking-tight text-[color:var(--foreground)] md:text-5xl">
              아래의 기술을 사용할 수 있습니다.
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div className="mx-auto mt-10 flex w-fit flex-wrap items-center justify-center gap-2 rounded-full bg-[rgba(24,32,18,0.06)] p-2">
            {skillCategories.map((category) => {
              const isActive = category.id === activeTab;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveTab(category.id)}
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-white text-[color:var(--foreground)] shadow-[0_12px_30px_rgba(24,32,18,0.08)]"
                      : "text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </FadeUp>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute left-8 top-8 h-40 w-40 rounded-full bg-[rgba(255,216,87,0.18)] blur-3xl" />
          <div className="absolute right-10 top-16 h-40 w-40 rounded-full bg-[rgba(89,115,70,0.12)] blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-[rgba(74,144,226,0.12)] blur-3xl" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative grid grid-cols-2 justify-items-center gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            >
              {activeCategory.items.map((item, index) => (
                <motion.div
                  key={`${activeCategory.id}-${item.name}`}
                  initial={{ opacity: 0, scale: 0.92, y: 14 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: index * 0.04, ease: "easeOut" }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group flex w-full max-w-[110px] flex-col items-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-[22px] bg-white shadow-[0_14px_34px_rgba(24,32,18,0.1)] ring-1 ring-[rgba(89,115,70,0.08)] transition group-hover:shadow-[0_18px_40px_rgba(24,32,18,0.14)]">
                    <img src={item.icon} alt={item.name} className="h-11 w-11 object-contain" />
                  </div>
                  <p className="mt-3 text-center text-sm font-medium text-[color:var(--foreground)]">
                    {item.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
