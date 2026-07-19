"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.3,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
      <Image
        src="/images/hero/Hero.campaign.jpg"
        alt="Amoret Rêve eau de parfum campaign photography"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-noir/40 via-noir/10 to-noir/50" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-2">
          <span className="font-display text-sm tracking-[0.5em] text-ivory">
            Amoret Rêve
          </span>
          <span className="text-[0.6rem] uppercase tracking-[0.4em] text-ivory/70">
            Maison de Parfum · Paris
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-10 font-display text-[44px] font-light leading-[1.05] tracking-tight text-ivory sm:text-[58px] md:text-[74px] lg:text-[86px]"
        >
          The Art of
          <br />
          French Perfumery
        </motion.h1>

        <motion.span variants={fadeUp} className="mt-8 h-px w-16 bg-gold/70" />

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-md text-balance font-sans text-sm font-light leading-relaxed text-ivory/80 md:text-base"
        >
          Crafted in Paris. Created for timeless elegance.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-col items-center gap-5 sm:flex-row"
        >
          <Link
            href="/collection"
            className="inline-flex items-center justify-center rounded-full border border-ivory bg-ivory px-10 py-4 text-[0.65rem] uppercase tracking-[0.3em] text-noir transition-all duration-700 hover:bg-transparent hover:text-ivory"
          >
            Explore Collection
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-ivory/50 px-10 py-4 text-[0.65rem] uppercase tracking-[0.3em] text-ivory transition-all duration-700 hover:border-ivory hover:bg-ivory/10"
          >
            Maison Story
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-ivory/15 px-6 py-6"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 text-center sm:flex-row sm:justify-between sm:gap-0">
          <div className="flex items-center gap-2">
            <span className="text-[0.55rem] uppercase tracking-[0.3em] text-ivory/50">
              Maison
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-ivory/90">
              Amoret Rêve
            </span>
          </div>

          <span className="hidden h-4 w-px bg-ivory/15 sm:block" />

          <div className="flex items-center gap-2">
            <span className="text-[0.55rem] uppercase tracking-[0.3em] text-ivory/50">
              Signature
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-ivory/90">
              Extrait de Parfum
            </span>
          </div>

          <span className="hidden h-4 w-px bg-ivory/15 sm:block" />

          <div className="flex items-center gap-2">
            <span className="text-[0.55rem] uppercase tracking-[0.3em] text-ivory/50">
              Since
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-ivory/90">
              2026
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}