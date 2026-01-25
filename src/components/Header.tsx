"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const baseLink =
    "rounded-lg px-4 py-2 text-sm font-medium transition-colors";
  const activeLink = "bg-neutral-900 text-white";
  const inactiveLink =
    "text-neutral-300 hover:bg-neutral-900 hover:text-white";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-neutral-800 bg-black/90 backdrop-blur-sm">
      <nav className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-white transition-colors hover:text-neutral-200"
          >
            Rick Imai
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${baseLink} ${
                  pathname === item.href ? activeLink : inactiveLink
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Keep Resume as primary CTA */}
            <Link href="/resume" className="btn-primary ml-4 px-4 py-2 text-sm">
              Resume
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-lg p-2 text-neutral-300 hover:bg-neutral-900 hover:text-white md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-neutral-800 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    pathname === item.href ? activeLink : inactiveLink
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary mt-2 text-center text-sm"
              >
                Resume
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
