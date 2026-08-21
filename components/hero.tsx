"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 80]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 54]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.82], [1, 0.18]);

  const rise = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-end overflow-hidden border-b hairline">
      <motion.div aria-hidden="true" style={{ y: imageY }} className="absolute inset-[-5%]">
        <Image
          src="/images/Gemini_Generated_Image_dnfc45dnfc45dnfc.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[42%_center] md:object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.16)_0%,rgba(5,5,5,0.28)_43%,rgba(5,5,5,0.82)_70%,rgba(5,5,5,0.96)_100%)] md:bg-[linear-gradient(90deg,rgba(5,5,5,0.08)_0%,rgba(5,5,5,0.2)_42%,rgba(5,5,5,0.72)_66%,rgba(5,5,5,0.94)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,5,5,0.9)_0%,transparent_48%)]" />

      <div className="shell relative z-10 pb-10 pt-32 md:pb-16">
        <div className="ml-auto max-w-3xl md:w-[58%]">
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
              className="display text-[clamp(3.3rem,8vw,7.5rem)] leading-[0.88] tracking-[-0.055em]"
            >
              O que não é dito
              <span className="block italic text-[var(--accent)]">retorna.</span>
            </motion.h1>
          </motion.div>

          <div className="mt-12 grid gap-8 border-t hairline pt-8 md:grid-cols-[1fr_auto] md:items-end">
            <motion.p
              {...rise}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl text-base leading-7 text-white/72 md:text-lg"
            >
              Há momentos em que a vida parece repetir a mesma cena com personagens diferentes.
              A escuta começa quando deixamos de perguntar apenas “por quê?” e passamos a perceber
              o que insiste em voltar.
            </motion.p>

            <motion.div
              {...rise}
              transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href="#escuta"
                className="group inline-flex min-h-12 items-center gap-5 border border-white/25 px-6 py-3 text-sm backdrop-blur-sm transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                Conhecer o processo
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            {...rise}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-white/45"
            aria-hidden="true"
          >
            <span className="h-px w-10 bg-white/35" />
            role para escutar
          </motion.div>
        </div>
      </div>
    </section>
  );
}
