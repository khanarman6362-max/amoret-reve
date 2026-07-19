"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import Hero from "./components/sections/Hero";


const HeroContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const HeroItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};
const PERFUMES = [
  {
    id: "01",
    name: "Nocturne",
    description: "Black amber and smoked vetiver, worn after dark.",
    price: "2849INR",
    image: "/images/nocturne-campaign.jpg",
  },
  {
    id: "02",
    name: "Une Rose",
    description: "Damask rose folded into warm sandalwood and musk.",
    price: "899INR",
    image: "/images/une-rose-campaign.jpg",
  },
  {
    id: "03",
    name: "Or Pâle",
    description: "Golden amber, bergamot, and a whisper of tobacco leaf.",
    price: "1459INR",
    image: "/images/or-pale-campaign.jpg",
  },
];

const FRAGRANCE_NOTES = [
  {
    id: "01",
    name: "Nocturne",
    top: ["Black Pepper", "Bergamot", "Cardamom"],
    heart: ["Smoked Vetiver", "Leather", "Incense"],
    base: ["Black Amber", "Oud", "White Musk"],
  },
  {
    id: "02",
    name: "Une Rose",
    top: ["Pink Pepper", "Litchi", "Bergamot"],
    heart: ["Damask Rose", "Peony", "Geranium"],
    base: ["Sandalwood", "White Musk", "Cedarwood"],
  },
  {
    id: "03",
    name: "Or Pâle",
    top: ["Bergamot", "Saffron", "Mandarin"],
    heart: ["Tobacco Leaf", "Iris", "Honey"],
    base: ["Golden Amber", "Vanilla", "Benzoin"],
  },
];

const TESTIMONIALS = [
  {
    id: "01",
    name: "Camille Laurent",
    city: "Paris, France",
    review:
      "Nocturne doesn't announce itself — it lingers, the way a good memory does. I've been asked three times this week what I'm wearing. I never quite answer.",
  },
  {
    id: "02",
    name: "Isabella Moretti",
    city: "Milan, Italy",
    review:
      "I've worn niche perfume for a decade. Une Rose is the first in years that felt like it was made for a person, not a market. Extraordinary restraint.",
  },
  {
    id: "03",
    name: "Amara Osei",
    city: "London, UK",
    review:
      "Or Pâle arrived beautifully packaged, and the fragrance itself is even better — warm, golden, quietly confident. This is what luxury is supposed to feel like.",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-1.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-gold"
          aria-hidden="true"
        >
          <path d="M12 2.5l2.9 6.4 6.9.7-5.2 4.7 1.5 6.9-6.1-3.6-6.1 3.6 1.5-6.9-5.2-4.7 6.9-.7z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setContactSubmitted(true);
  };    

  return (
  <>
<Hero />
    <div className="h-32 md:h-48 bg-[#F7F4EE]" />

    {/* Collection */}
    ...

<section
  id="collection"
  className="relative overflow-hidden px-6 pt-48 pb-52 md:px-10 md:pt-60 md:pb-64"
>
  <Image
  src="/images/collection/campaign-bg.jpg"
  alt="Amoret Rêve Campaign"
  fill
  className="object-cover"
  priority
/>
<div className="h-32 md:h-44" />
<div className="absolute inset-0 bg-[#000]/45" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4 text-gold">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-[0.65rem] uppercase tracking-[0.5em]">
                Featured
              </span>
              <span className="h-px w-10 bg-[#B58A3C]"  />
            </div>
            <h2 className="font-display text-5xl font-light tracking-[-0.02em] text-white sm:text-6xl md:text-7xl">
              The Collection
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/80 md:text-base">
              Three fragrances, each a chapter unfinished — crafted in
              limited batches for those who wear scent as memory.
            </p>
          </div>

          <div className="mt-20 flex justify-center">
  <Link
    href="/collection"
    className="group inline-flex items-center gap-4 border-b border-[#B58A3C] pb-2 text-[11px] uppercase tracking-[0.45em] text-white transition duration-500 hover:text-[#B58A3C]"
  >
    Discover the Collection

    <span className="transition duration-500 group-hover:translate-x-2">
      →
    </span>
  </Link>
</div>
        </div>
      </section>
      <div className="h-40 bg-[#F7F4EE]" />
 
  <section
  id="about"
  className="relative border-t border-olive-dark bg-noir-soft px-6 py-24 md:px-10 md:py-32"
>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          <div className="flex flex-col md:sticky md:top-32 md:h-fit">
            <div className="flex items-center gap-4 text-gold">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-[0.65rem] uppercase tracking-[0.5em]">
                The Maison
              </span>
            </div>
            <h2 className="mt-6 font-display text-4xl italic leading-[1.15] text-ivory sm:text-5xl md:text-6xl">
              Every scent
              <br />
              begins as a
              <br />
              <span className="text-gold">confession.</span>
            </h2>
            <div className="mt-8 h-px w-16 bg-gradient-to-r from-gold via-olive-light to-transparent" />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-base leading-relaxed text-ivory/70 md:text-lg">
              Amoret Rêve begins not with a formula, but with a feeling — the
              way a memory can arrive uninvited, carried entirely on air. In
              our atelier, perfumers spend months coaxing rare materials
              into balance: Bulgarian rose absolute, aged oud, ambergris
              tinctured slowly in darkness. Nothing is rushed. Each
              fragrance is built in small batches and left to rest, because
              true elegance cannot be manufactured on demand. We believe a
              scent should not simply be worn, but remembered — by the
              person who wears it, and by everyone who catches it in
              passing. This is our quiet rebellion against an industry
              obsessed with speed: we choose craftsmanship over
              convenience, restraint over spectacle, and the timeless over
              the trending. Amoret Rêve is not a fragrance house. It is an
              archive of feeling, bottled one confession at a time.
            </p>

            <Link
              href="/the-maison"
              className="group mt-10 inline-flex w-fit items-center justify-center gap-3 border border-ivory/30 px-8 py-4 text-xs uppercase tracking-[0.25em] text-ivory transition-all duration-500 hover:border-gold hover:text-gold"
            >
              Read Our Story
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative border-t border-olive-dark bg-noir-soft px-6 py-24 md:px-10 md:py-32">
        <div className="group mx-auto flex max-w-3xl animate-fade-up flex-col items-center text-center">
          <div className="flex items-center gap-4 text-gold">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-[0.65rem] uppercase tracking-[0.5em]">
              Founder&rsquo;s Note
            </span>
            <span className="h-px w-10 bg-gold/60" />
          </div>

          <h2 className="mt-8 font-display text-4xl italic text-ivory transition-colors duration-500 group-hover:text-gold sm:text-5xl md:text-6xl">
            Shoaib
          </h2>

          <span className="mt-3 text-xs uppercase tracking-[0.3em] text-ivory/50">
            Founder &amp; Creative Director
          </span>

          <div className="mt-6 flex flex-col items-center">
  <span className="text-[0.6rem] uppercase tracking-[0.35em] text-gold">
    Contact
  </span>

  <a
    href="mailto:khanarman6362@gmail.com"
    className="mt-2 text-sm tracking-wide text-ivory/70 transition-colors duration-300 hover:text-gold"
  >
    khanarman6362@gmail.com
  </a>
</div>

          <div className="mt-8 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-500 group-hover:w-28" />

          <p className="mt-10 font-display text-xl italic leading-relaxed text-ivory/80 md:text-2xl">
            I did not set out to build a perfume house. I set out to bottle
            a feeling — the hush before a confession, the warmth of a hand
            held a moment too long, a room someone had just left. Mon
            Amour began on a kitchen table, mixed by hand, with more
            patience than skill, until patience became a craft of its own.
            I have never believed fragrance was a product to be sold. It is
            closer to a letter written without knowing who will open it —
            worn quietly, remembered loudly. Every note we release carries
            that belief: that true elegance is not what is seen, but what
            is felt, and felt again, years later, without warning.
          </p>

          <span className="mt-10 font-display text-2xl italic text-gold">
            — Shoaib
          </span>
        </div>
      </section>

      <section
  className="relative bg-noir px-6 py-24 md:px-10 md:py-32"
>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4 text-gold">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-[0.65rem] uppercase tracking-[0.5em]">
                Composition
              </span>
              <span className="h-px w-10 bg-gold/60" />
            </div>
            <h2 className="font-display text-4xl italic text-ivory sm:text-5xl md:text-6xl">
              Fragrance Notes
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-ivory/60 md:text-base">
              Every composition unfolds in three movements — a first
              impression, a heart, and a memory that lingers.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-3">
            {FRAGRANCE_NOTES.map((fragrance) => (
              <article
                key={fragrance.id}
                className="group flex flex-col border border-olive-dark p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:bg-noir-soft md:p-10"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl italic text-[#181818] transition-colors duration-300 group-hover:text-[#A57A2F]">
                    {fragrance.name}
                  </h3>
                  <span className="font-display text-sm italic text-ivory/40">
                    No. {fragrance.id}
                  </span>
                </div>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-gold/60 via-olive-light/40 to-transparent" />

                <div className="mt-8 flex flex-1 flex-col gap-7">
                  <div>
                    <span className="text-[0.65rem] uppercase tracking-[0.35em] text-gold">
                      Top Notes
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                      {fragrance.top.join(" · ")}
                    </p>
                  </div>

                  <div>
                    <span className="text-[0.65rem] uppercase tracking-[0.35em] text-gold">
                      Heart Notes
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                      {fragrance.heart.join(" · ")}
                    </p>
                  </div>

                  <div>
                    <span className="text-[0.65rem] uppercase tracking-[0.35em] text-gold">
                      Base Notes
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                      {fragrance.base.join(" · ")}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-olive-dark bg-noir-soft px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4 text-gold">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-[0.65rem] uppercase tracking-[0.5em]">
                Testimonials
              </span>
              <span className="h-px w-10 bg-gold/60" />
            </div>
            <h2 className="font-display text-4xl italic text-ivory sm:text-5xl md:text-6xl">
              Words, Kept
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-ivory/60 md:text-base">
              A house is remembered by those who wear it. Here is what they
              carry with them.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <article
                key={testimonial.id}
                className="group flex flex-col border border-olive-dark bg-noir p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 md:p-10"
              >
                <StarRating />

                <p className="mt-6 flex-1 font-display text-lg italic leading-relaxed text-ivory/80">
                  “{testimonial.review}”
                </p>

                <div className="mt-8 h-px w-12 bg-gradient-to-r from-gold via-olive-light to-transparent transition-all duration-500 group-hover:w-20" />

                <div className="mt-6">
                  <span className="block text-sm tracking-[0.1em] text-ivory">
                    {testimonial.name}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.25em] text-ivory/50">
                    {testimonial.city}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
  id="contact"
  className="relative bg-noir px-6 py-24 md:px-10 md:py-32"
>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 flex items-center justify-center gap-4 text-gold">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-[0.65rem] uppercase tracking-[0.5em]">
                Get in Touch
              </span>
              <span className="h-px w-10 bg-gold/60" />
            </div>
            <h2 className="font-display text-4xl italic text-ivory sm:text-5xl md:text-6xl">
              Contact
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-ivory/60 md:text-base">
              For private consultations, press enquiries, or simply to say
              hello — we would love to hear from you.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-16 md:mt-20 md:grid-cols-2 md:gap-24">
            <div className="flex flex-col justify-center">
              <span className="text-[0.65rem] uppercase tracking-[0.35em] text-gold">
                Founder
              </span>
              <span className="mt-3 font-display text-3xl italic text-ivory">
                Shoaib
              </span>

              <div className="mt-10 h-px w-16 bg-gradient-to-r from-gold via-olive-light to-transparent" />

              <div className="mt-10 flex flex-col gap-8">
                <div>
  <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gold">
    Email
  </span>

  <a
    href="mailto:khanarman6362@gmail.com"
    className="mt-2 block text-sm tracking-wide text-ivory/70 transition-colors duration-300 hover:text-gold"
  >
    khanarman6362@gmail.com
  </a>
</div>

                <div>
                  <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gold">
                    Brand
                  </span>
                  <span className="mt-2 block font-display text-xl bold text-ivory/80">
                    Amoret Rêve
                  </span>
                </div>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col gap-2 border-b border-ivory/30 pb-3 transition-colors duration-300 focus-within:border-gold">
                <label
                  htmlFor="contact-name"
                  className="text-[0.6rem] uppercase tracking-[0.3em] text-gold"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  disabled={contactSubmitted}
                  value={contactForm.name}
                  onChange={(e) =>
                    setContactForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Your full name"
                  className="w-full bg-transparent text-sm text-ivory placeholder:text-ivory/30 focus:outline-none disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-2 border-b border-ivory/30 pb-3 transition-colors duration-300 focus-within:border-gold">
                <label
                  htmlFor="contact-email"
                  className="text-[0.6rem] uppercase tracking-[0.3em] text-gold"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  disabled={contactSubmitted}
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="your@email.com"
                  className="w-full bg-transparent text-sm text-ivory placeholder:text-ivory/30 focus:outline-none disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-2 border-b border-ivory/30 pb-3 transition-colors duration-300 focus-within:border-gold">
                <label
                  htmlFor="contact-message"
                  className="text-[0.6rem] uppercase tracking-[0.3em] text-gold"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  disabled={contactSubmitted}
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm((prev) => ({ ...prev, message: e.target.value }))
                  }
                  placeholder="Tell us what's on your mind"
                  className="w-full resize-none bg-transparent text-sm text-ivory placeholder:text-ivory/30 focus:outline-none disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={contactSubmitted}
                className="mt-4 inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-xs uppercase tracking-[0.25em] text-noir transition-all duration-500 hover:bg-ivory disabled:cursor-default disabled:opacity-70 disabled:hover:bg-gold"
              >
                {contactSubmitted ? "Message Sent" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}