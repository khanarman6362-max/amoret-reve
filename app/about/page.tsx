import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">

      {/* Background */}
      <Image
        src="/images/the-maison/maison-bg.jpg"
        alt="Amoret Rêve Maison"
        fill
        priority
        className="object-cover object-center scale-110 brightness-[0.65]"
      />

      {/* Luxury overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,220,170,0.12),transparent_40%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.05),transparent_45%)]" />

      <div className="absolute inset-0 backdrop-blur-[1.5px]" />

      {/* Content */}
      <section className="relative z-10 flex min-h-screen items-center px-8 py-32 md:px-20">

        <div className="max-w-3xl rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-md md:p-16">

          {/* Heading */}
          <div className="flex items-center gap-5">

            <span className="h-px w-20 bg-[#C8A86B]" />

            <p className="text-xs uppercase tracking-[0.45em] text-[#C8A86B]">
              THE MAISON
            </p>

          </div>

          <h1 className="mt-10 font-display text-6xl font-light italic leading-[0.95] tracking-[-0.03em] text-white md:text-[7rem]">
            Welcome to
            <br />
            Amoret Rêve
          </h1>

          <div className="mt-10 h-px w-32 bg-gradient-to-r from-[#D6B36C] via-[#F7D98D] to-transparent" />

          {/* Text */}
          <p className="mt-12 max-w-2xl text-[18px] leading-[2.1] text-white/80">
            Amoret Rêve is not simply a perfume house. It is an atelier where
            memories become fragrance, where emotion is distilled into every
            bottle, and where timeless French elegance meets modern artistry.
          </p>

          <p className="mt-8 max-w-2xl text-[18px] leading-[2.1] text-white/68">
            Every composition begins with patience, crafted from exceptional
            raw materials, refined through months of perfection, and released
            only when every note feels unforgettable. Every bottle reflects
            quiet luxury rather than loud extravagance.
          </p>

          {/* Philosophy */}
          <div className="mt-20 border-l border-[#C8A86B]/70 pl-8">

            <h2 className="font-display text-3xl italic text-white">
              Our Philosophy
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-white/70">
              Luxury is never loud. It is whispered through craftsmanship,
              remembered through emotion, and revealed through scent.
            </p>

          </div>

          {/* Button */}
          <Link
            href="/collection"
            className="group mt-16 inline-flex items-center gap-5 border-b border-[#C8A86B] pb-3 text-[11px] uppercase tracking-[0.45em] text-white transition-all duration-500 hover:border-white hover:text-[#E8C77A]"
          >
            Discover the Collection

            <span className="transition-transform duration-500 group-hover:translate-x-2">
              →
            </span>
          </Link>

        </div>

      </section>
    </main>
  );
}