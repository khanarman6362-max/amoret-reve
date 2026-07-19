import Image from "next/image";

export default function JournalPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">

      {/* Background Image */}
      <Image
        src="/images/journal/journal-bg.jpg"
        alt="Amoret Rêve Journal"
        fill
        priority
        className="object-cover object-center scale-110 brightness-[0.6]"
      />

      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25" />

      {/* Golden Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,220,170,0.10),transparent_40%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.05),transparent_45%)]" />

      <div className="absolute inset-0 backdrop-blur-[1.5px]" />

      <section className="relative z-10 px-8 py-32 md:px-20">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}

          <div className="max-w-3xl">

            <div className="flex items-center gap-5">

              <span className="h-px w-20 bg-[#C8A86B]" />

              <p className="text-xs uppercase tracking-[0.45em] text-[#C8A86B]">
                JOURNAL
              </p>

            </div>

            <h1 className="mt-10 font-display text-6xl font-light italic leading-[0.95] tracking-[-0.03em] text-white md:text-[7rem]">
              Stories Behind
              <br />
              the Scent
            </h1>

            <div className="mt-10 h-px w-32 bg-gradient-to-r from-[#D6B36C] via-[#F7D98D] to-transparent" />

            <p className="mt-12 max-w-2xl text-[18px] leading-[2.1] text-white/75">
              Discover the inspiration, craftsmanship and timeless elegance
              behind every Amoret Rêve fragrance. Every story reveals the
              artistry hidden inside each bottle.
            </p>

          </div>

          {/* Cards */}

          <div className="mt-24 grid gap-10 md:grid-cols-3">

            <article className="rounded-[30px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-md transition-all duration-700 hover:-translate-y-2 hover:border-[#C8A86B] hover:bg-white/[0.06]">

              <span className="text-[11px] uppercase tracking-[0.35em] text-[#C8A86B]">
                Chapter I
              </span>

              <h2 className="mt-8 font-display text-3xl italic text-white">
                The Art of Perfumery
              </h2>

              <p className="mt-6 leading-8 text-white/65">
                Discover how the worlds rarest ingredients transform into
                unforgettable compositions through patience, artistry and
                French craftsmanship.
              </p>

            </article>

            <article className="rounded-[30px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-md transition-all duration-700 hover:-translate-y-2 hover:border-[#C8A86B] hover:bg-white/[0.06]">

              <span className="text-[11px] uppercase tracking-[0.35em] text-[#C8A86B]">
                Chapter II
              </span>

              <h2 className="mt-8 font-display text-3xl italic text-white">
                Signature Scents
              </h2>

              <p className="mt-6 leading-8 text-white/65">
                Learn how fragrance becomes an extension of identity,
                expressing elegance without saying a single word.
              </p>

            </article>

            <article className="rounded-[30px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-md transition-all duration-700 hover:-translate-y-2 hover:border-[#C8A86B] hover:bg-white/[0.06]">

              <span className="text-[11px] uppercase tracking-[0.35em] text-[#C8A86B]">
                Chapter III
              </span>

              <h2 className="mt-8 font-display text-3xl italic text-white">
                Behind the Bottle
              </h2>

              <p className="mt-6 leading-8 text-white/65">
                Every Amoret Rêve bottle reflects timeless design, exceptional
                materials and meticulous attention to every detail.
              </p>

            </article>

          </div>

        </div>

      </section>

    </main>
  );
}