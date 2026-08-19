"use client";

import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const rise = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden border-b hairline">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(200,169,126,0.12),transparent_24%)]" />
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

        <motion.h1
          {...rise}
          transition={{ duration: 0.95, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="display max-w-5xl text-[clamp(3.3rem,9vw,8.5rem)] leading-[0.88] tracking-[-0.055em]"
        >
          O que não é dito
          <span className="block italic text-[var(--accent)]">retorna.</span>
        </motion.h1>

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
      </div>
    </section>
  );
}
