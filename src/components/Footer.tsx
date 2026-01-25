import Link from "next/link";
import { Linkedin, Mail, Github } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/rickimai",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/rickimai",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:rick@rickimai.com",
    icon: Mail,
  },
];

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-lg font-semibold text-white transition-colors hover:text-primary-400"
            >
              Rick Imai
            </Link>
            <p className="mt-2 text-sm text-neutral-400">
              Senior Technical Program Manager specializing in enterprise
              security and data platforms.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="link-hover text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Connect
            </h3>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-neutral-800 p-2 text-neutral-400 transition-all hover:bg-neutral-700 hover:text-primary-400"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-8 text-center">
          <p className="text-sm text-neutral-500">
            &copy; {currentYear} Rick Imai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
