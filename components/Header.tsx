"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#what-i-do", label: "What I Do" },
  { href: "/#experience", label: "Experience" },
  { href: "/#mindset", label: "Mindset" },
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/resume", label: "Resume" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-accent">
      <div className="container-narrow flex items-center justify-between h-16">
        <Link href="/" className="font-display font-bold text-lg text-text">
          Anuj Sharma
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-grey hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="hidden md:inline-flex items-center rounded-full bg-primary text-white text-sm font-medium px-5 py-2.5 hover:bg-secondary transition-colors"
        >
          Let&apos;s Connect
        </Link>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-text"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-accent bg-bg">
          <div className="container-narrow flex flex-col py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-grey hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-primary text-white text-sm font-medium px-5 py-2.5"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
