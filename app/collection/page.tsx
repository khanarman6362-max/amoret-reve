"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#1A1A1A]">

      {/* ================= HERO ================= */}

<section className="relative h-screen min-h-[900px] overflow-hidden">
<Image
  src="/images/collection/collection-luxury-bg.jpg"
  alt="Amoret Rêve Collection"
  fill
  priority
 className="object-cover object-center scale-110 brightness-[0.82] contrast-125 saturate-105"
/>

<div className="absolute inset-0 bg-black/45" />

<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,220,170,0.08),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908]/35 via-[#0a0908]/20 to-[#F7F3EC]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">

          <motion.p
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.8}}
            className="uppercase tracking-[0.6em] text-[12px] text-[#A67C32]"
          >
            Maison de Parfum
          </motion.p>

          <motion.h1
            initial={{opacity:0,y:30}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.2,duration:1}}
           className="mt-8 font-display italic font-light text-white text-6xl md:text-8xl drop-shadow-[0_8px_25px_rgba(0,0,0,0.45)]"
          >
            The Collection
          </motion.h1>

          <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.5}}
            className="mt-8 max-w-3xl text-lg leading-9 text-white/85"
          >
            Three fragrances.
            Three personalities.
            One philosophy —
            <span className="italic text-black">
              {" "}Crafted To Be Remembered.
            </span>
          </motion.p>

          <motion.div
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.8}}
            className="mt-14 flex flex-wrap justify-center gap-6"
          >

            <Link
              href="#nocturne"
              className="rounded-full border border-white bg-black px-9 py-4 text-xs uppercase tracking-[0.35em] text-ivory transition hover:scale-105"
            >
              Nocturne
            </Link>

            <Link
              href="#unerose"
              className="rounded-full border border-white bg-black px-9 py-4 text-xs uppercase tracking-[0.35em] text-ivory transition hover:scale-105 bg-black hover:text-white"
            >
              Une Rose
            </Link>

            <Link
              href="#orpale"
              className="rounded-full border border-white bg-black px-9 py-4 text-xs uppercase tracking-[0.35em] text-ivory transition hover:scale-105 bg-black hover:text-white"
            >
              Or Pâle
            </Link>

          </motion.div>

        </div>

      </section>

      {/* ===== PART 2 STARTS BELOW ===== */}
      {/* ================= NOCTURNE ================= */}

<section
  id="nocturne"
  className="bg-[#F7F3EC] py-24 md:py-32"
>
  <div className="mx-auto max-w-7xl px-6">

    {/* Campaign Image */}

    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="overflow-hidden rounded-[34px]"
    >

      <Image
        src="/images/nocturne-campaign.jpg"
        alt="Nocturne Campaign"
        width={1800}
        height={900}
        className="w-full rounded-[34px] object-cover"
      />

    </motion.div>

    {/* Content */}

    <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

      {/* Bottle */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex justify-center"
      >

        <Image
          src="/images/nocturne.jpg"
          alt="Nocturne Bottle"
          width={360}
          height={720}
          className="transition duration-700 hover:scale-105"
        />

      </motion.div>

      {/* Details */}

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >

        <p className="uppercase tracking-[0.45em] text-sm text-[#A67C32]">
          FOR MEN
        </p>

        <h2 className="mt-6 font-serif text-6xl italic">
          Nocturne
        </h2>

        <p className="mt-8 leading-9 text-neutral-600 text-lg">
          A fragrance created for evenings that leave an unforgettable
          impression. Black amber meets smoked vetiver with soft white
          musk, creating an elegant signature that lingers long after
          you ve left the room.
        </p>

        <div className="mt-12 space-y-8">

          <div>
            <h4 className="uppercase tracking-[0.3em] text-[#A67C32] text-sm">
              Top Notes
            </h4>

            <p className="mt-3 text-neutral-700">
              Black Pepper • Bergamot • Cardamom
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.3em] text-[#A67C32] text-sm">
              Heart Notes
            </h4>

            <p className="mt-3 text-neutral-700">
              Smoked Vetiver • Leather • Incense
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.3em] text-[#A67C32] text-sm">
              Base Notes
            </h4>

            <p className="mt-3 text-neutral-700">
              Black Amber • Oud • White Musk
            </p>
          </div>

        </div>

        <div className="mt-14 flex items-center gap-8">

          <span className="text-4xl font-semibold">
            ₹2849
          </span>

  <Link
  href="/checkout?product=nocturne"
  className="rounded-full bg-black px-10 py-4 text-xs uppercase tracking-[0.35em] text-white transition hover:bg-[#A67C32]"
>
  Buy Now
</Link>

        </div>

      </motion.div>

    </div>

  </div>
</section>
{/* ================= UNE ROSE ================= */}

<section
  id="unerose"
  className="bg-[#FCF8F2] py-24 md:py-32"
>
  <div className="mx-auto max-w-7xl px-6">

    {/* Campaign Image */}

    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="overflow-hidden rounded-[34px]"
    >
      <Image
        src="/images/une-rose-campaign.jpg"
        alt="Une Rose Campaign"
        width={1800}
        height={900}
        className="w-full rounded-[34px] object-cover"
      />
    </motion.div>

    {/* Content */}

    <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

      {/* Details */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >

        <p className="uppercase tracking-[0.45em] text-sm text-[#B8895D]">
          FOR WOMEN
        </p>

        <h2 className="mt-6 font-serif text-6xl italic">
          Une Rose
        </h2>

        <p className="mt-8 text-lg leading-9 text-neutral-600">
          A delicate interpretation of Damask Rose wrapped in creamy sandalwood
          and soft white musk. Elegant, graceful and unforgettable.
        </p>

        <div className="mt-12 space-y-8">

          <div>
            <h4 className="uppercase tracking-[0.3em] text-[#B8895D] text-sm">
              Top Notes
            </h4>

            <p className="mt-3 text-neutral-700">
              Pink Pepper • Litchi • Bergamot
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.3em] text-[#B8895D] text-sm">
              Heart Notes
            </h4>

            <p className="mt-3 text-neutral-700">
              Damask Rose • Peony • Geranium
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.3em] text-[#B8895D] text-sm">
              Base Notes
            </h4>

            <p className="mt-3 text-neutral-700">
              Sandalwood • White Musk • Cedarwood
            </p>
          </div>

        </div>

        <div className="mt-14 flex items-center gap-8">

          <span className="text-4xl font-semibold">
            ₹899
          </span>

<Link
  href="/checkout?product=unerose"
    className="rounded-full bg-black px-10 py-4 text-xs uppercase tracking-[0.35em] text-white transition hover:bg-[#A67C32]"
>
  Buy Now
</Link>
        </div>

      </motion.div>

      {/* Bottle */}

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex justify-center"
      >

        <Image
          src="/images/une-rose.jpg"
          alt="Une Rose Bottle"
          width={360}
          height={720}
          className="transition duration-700 hover:scale-105"
        />

      </motion.div>

    </div>

  </div>

</section>
{/* ================= OR PALE ================= */}

<section
  id="orpale"
  className="bg-[#F7F3EC] py-24 md:py-32"
>
  <div className="mx-auto max-w-7xl px-6">

    {/* Campaign Image */}

    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="overflow-hidden rounded-[34px]"
    >
      <Image
        src="/images/or-pale-campaign.jpg"
        alt="Or Pale Campaign"
        width={1800}
        height={900}
        className="w-full rounded-[34px] object-cover"
      />
    </motion.div>

    {/* Content */}

    <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

      {/* Bottle */}

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex justify-center"
      >
        <Image
          src="/images/or-pale.jpg"
          alt="Or Pale Bottle"
          width={360}
          height={720}
          className="transition duration-700 hover:scale-105"
        />
      </motion.div>

      {/* Details */}

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >

        <p className="uppercase tracking-[0.45em] text-sm text-[#C29A52]">
          FOR MEN
        </p>

        <h2 className="mt-6 font-serif text-6xl italic">
          Or Pâle
        </h2>

        <p className="mt-8 text-lg leading-9 text-neutral-600">
          A warm golden composition inspired by precious amber and soft
          vanilla. Rich tobacco leaves blend with creamy woods to create
          an elegant fragrance that feels luxurious from the very first
          spray until the final dry down.
        </p>

        <div className="mt-12 space-y-8">

          <div>
            <h4 className="uppercase tracking-[0.3em] text-[#C29A52] text-sm">
              Top Notes
            </h4>

            <p className="mt-3 text-neutral-700">
              Saffron • Cinnamon • Bergamot
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.3em] text-[#C29A52] text-sm">
              Heart Notes
            </h4>

            <p className="mt-3 text-neutral-700">
              Golden Amber • Tobacco Leaf • Cashmere Wood
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.3em] text-[#C29A52] text-sm">
              Base Notes
            </h4>

            <p className="mt-3 text-neutral-700">
              Vanilla • Tonka Bean • Sandalwood
            </p>
          </div>

        </div>

        <div className="mt-14 flex items-center gap-8">

          <span className="text-4xl font-semibold">
            ₹1459
          </span>

<Link
  href="/checkout?product=orpale"
    className="rounded-full bg-black px-10 py-4 text-xs uppercase tracking-[0.35em] text-white transition hover:bg-[#A67C32]"
>
  Buy Now
</Link>

        </div>

      </motion.div>

    </div>

  </div>
</section>
</main>
);
}