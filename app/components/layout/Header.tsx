// components/layout/Header.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Collection", href: "/collection" },
  { label: "The Maison", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-olive-dark bg-noir/90 py-4 backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
   <Link
  href="/"
  className="group flex items-center gap-4"
>
  <Image
    src="/logo/logo.png"
    alt="Amoret Rêve"
    width={60}
    height={50}
    className="object-contain transition duration-500 group-hover:scale-105"
  />

  <div>
    <h1 className="text-3xl tracking-[0.18em] text-white font-[var(--font-cormorant)] font-semibold uppercase">
      Amoret Rêve
    </h1>

    <p className="mt-1 text-[10px] uppercase tracking-[0.45em] text-white/60">
      Maison de Parfum
    </p>
  </div>
</Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
  key={item.href}
  href={item.href}
  scroll={true}
  onClick={(e) => {
    if (item.href === "/#contact") {
      e.preventDefault();

      if (window.location.pathname !== "/") {
        window.location.href = "/#contact";
        return;
      }

      document
        .getElementById("contact")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }
  }}
  className="relative text-sm uppercase tracking-[0.15em] text-ivory/80 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-ivory hover:after:w-full"
>
  {item.label}
</Link>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="h-px w-6 bg-ivory" />
          <span className="h-px w-6 bg-ivory" />
        </button>
      </div>
      

      <div
        className={`fixed inset-0 z-10 flex flex-col bg-noir transition-all duration-500 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <span className="font-display text-2xl tracking-[0.2em] text-ivory">
            Amoret Rêve
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="relative h-6 w-6"
          >
            <span className="absolute left-0 top-1/2 h-px w-6 rotate-45 bg-ivory" />
            <span className="absolute left-0 top-1/2 h-px w-6 -rotate-45 bg-ivory" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          {NAV_ITEMS.map((item) => (
           <Link
  key={item.href}
  href={item.href}
  onClick={(e) => {
    setMenuOpen(false);

    if (item.href === "/#contact") {
      e.preventDefault();

      if (window.location.pathname !== "/") {
        window.location.href = "/#contact";
        return;
      }

      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 300);
    }
  }}
  className="font-display text-3xl tracking-wide text-ivory transition-colors duration-300 hover:text-gold"
>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}