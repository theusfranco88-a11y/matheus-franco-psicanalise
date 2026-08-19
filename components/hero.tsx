"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 110]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 54]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.82], [1, 0.18]);

  const rise = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-end overflow-hidden border-b hairline">
      <motion.div
        aria-hidden="true"
        style={{ y: glowY }}
        className="absolute inset-[-10%] bg-[radial-gradient(circle_at_72%_28%,rgba(200,169,126,0.16),transparent_24%)]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_58%,rgba(255,255,255,0.025)_58.1%,transparent_58.35%)]" />
      <div className="absolute right-[8%] top-[15%] hidden h-[58vh] w-px bg-white/10 md:block" />
      <div className="absolute right-[8%] top-[15%] hidden h-px w-[34vw] bg-white/10 md:block" />

      <div className="shell relative z-10 pb-10 pt-32 md:pb-16">
        <motion.p
          {...rise}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow mb-8"
        >
          Matheus Franco · Psicanálise Clínica
        </motion.p>

        <motion.div style={{ y: titleY, opacity: titleOpacity }}>
          <motion.h1
            {...rise}
            transition={{ duration: 0.95, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="display max-w-5xl text-[clamp(3.3rem,9vw,8.5rem)] leading-[0.88] tracking-[-0.055em]"
          >
            O que não é dito
            <span className="block italic text-[var(--accent)]">retorna.</span>
          </motion.h1>
        </motion.div>

        <div className="mt-12 grid gap-10 border-t hairline pt-8 md:grid-cols-[1fr_1fr] md:items-end">
          <motion.p
            {...rise}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-base leading-7 text-white/65 md:text-lg"
          >
            Há momentos em que a vida parece repetir a mesma cena com personagens diferentes.
            A escuta começa quando deixamos de perguntar apenas “por quê?” e passamos a perceber
            o que insiste em voltar.
          </motion.p>

          <motion.div
            {...rise}
            transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="flex md:justify-end"
          >
            <a
              href="#escuta"
              className="group inline-flex min-h-12 items-center gap-5 border border-white/20 px-6 py-3 text-sm transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              Conhecer o processo
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          {...rise}
          transition={{ duration: 0.8, delay: 0.42 }}
          className="mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-white/35"
          aria-hidden="true"
        >
          <span className="h-px w-10 bg-white/25" />
          role para escutar
        </motion.div>
      </div>
    </section>
  );
}
