"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "홈", href: "#home", id: "home" },
  { label: "경험", href: "#experience", id: "experience" },
  { label: "프로젝트", href: "#projects", id: "projects" },
  { label: "기술", href: "#skills", id: "skills" },
  { label: "연락", href: "#contact", id: "contact" },
];

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("home");
  const [hasLeftHome, setHasLeftHome] = useState(false);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-18% 0px -62% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");

      if (!homeSection) {
        return;
      }

      const rect = homeSection.getBoundingClientRect();
      const leavePoint = 120;

      setHasLeftHome(rect.bottom <= leavePoint);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const isHome = activeSection === "home";

  return (
    <header
      className={cn(
        "pointer-events-none fixed inset-x-0 z-50 hidden transition-[top] duration-300 md:block",
        isHome && !hasLeftHome ? "top-90" : "top-5",
      )}
    >
      <div className="container-shell flex justify-center">
        <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/60 bg-[rgba(232,232,232,0.78)] px-5 py-4 shadow-[0_14px_40px_rgba(24,32,18,0.12)] backdrop-blur-xl">
          <div className="mr-4 flex items-center gap-2.5">
            <span className="h-4 w-4 rounded-full bg-[#2f80ed]" />
            <span className="h-4 w-4 rounded-full bg-[#2dc653]" />
            <span className="h-4 w-4 rounded-full bg-[#d7ef00]" />
          </div>

          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition duration-200",
                    isActive
                      ? "bg-transparent text-[color:var(--foreground)]"
                      : "text-[rgba(24,32,18,0.5)] hover:text-[color:var(--foreground)]",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
