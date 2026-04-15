import Link from "next/link";
import { profile } from "@/lib/data";
import { Chip } from "@/components/common/chip";
import { FadeUp } from "@/components/motion/fade-up";

export function HomeSection() {
  return (
    <section id="home" className="section-gap pt-18 md:pt-24">
      <div className="container-shell">
        <FadeUp className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--primary)]">
            Web Developer Portfolio
          </p>
          <h1 className="mt-8 font-[family-name:var(--font-display)] text-5xl leading-none tracking-tight text-[color:var(--foreground)] md:text-7xl">
            {profile.name}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-balance text-2xl font-semibold leading-snug text-[color:var(--foreground)] md:text-2xl">
            {profile.tagline}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[color:var(--muted-foreground)] md:text-sm">
            {profile.intro}
          </p>
          
        </FadeUp>

        
      </div>
    </section>
  );
}
