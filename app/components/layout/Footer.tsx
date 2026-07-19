export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[#A67C32]/20 bg-[#F7F3EC]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">
          <span className="text-[11px] uppercase tracking-[0.45em] text-[#A67C32]">
            The Art of Perfumery
          </span>

          <h2 className="mt-5 font-display text-5xl italic text-[#1A1A1A]">
            Maison Amoret Rêve
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-[15px] leading-8 text-[#1A1A1A]/70">
            Every fragrance is crafted as a timeless expression of elegance,
            emotion, and individuality. Inspired by French artistry and refined
            luxury, Amoret Rêve transforms precious ingredients into unforgettable
            olfactory experiences designed to leave a lasting impression.
          </p>
        </div>

        <div className="mt-20 grid gap-12 border-y border-[#A67C32]/15 py-12 md:grid-cols-3">

          <div className="text-center">
            <h3 className="text-xs uppercase tracking-[0.35em] text-[#A67C32]">
              Exceptional Oils
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#1A1A1A]/60">
              Crafted using premium fragrance oils selected for remarkable
              richness, elegance and longevity.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xs uppercase tracking-[0.35em] text-[#A67C32]">
              French Inspiration
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#1A1A1A]/60">
              Inspired by the timeless heritage of French haute parfumerie with
              a contemporary signature.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xs uppercase tracking-[0.35em] text-[#A67C32]">
              Signature Longevity
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#1A1A1A]/60">
              Designed to accompany every moment from the first impression until
              the final memory.
            </p>
          </div>

        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>
            <h3 className="font-display text-3xl italic tracking-wide text-[#1A1A1A]">
              Amoret Rêve
            </h3>

            <p className="mt-2 text-[11px] uppercase tracking-[0.45em] text-[#A67C32]">
              Maison de Parfum
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-[#1A1A1A]/55">
              © 2026 Amoret Rêve. All Rights Reserved.
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[#1A1A1A]/35">
              Crafted with Elegance • Inspired by Paris
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}