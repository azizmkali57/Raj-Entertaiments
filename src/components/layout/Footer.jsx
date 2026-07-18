import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { label: "Facebook", href: "/facebook.com/rajentertainmentindore", icon: FaFacebookF },
  { label: "Instagram", href: "/instagram.com/rajentertainment246?", icon: FaInstagram },
  { label: "YouTube", href: "/", icon: FaYoutube },
];

const CONTACT_ITEMS = [
  {
    icon: FiPhone,
    label: "Call",
    value: "+919752054039",
    href: "tel:+919752054039",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+91 97520 54039",
    href: "https://wa.me/919752054039",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "Rajentertainment@gmail.com",
    href: "mailto:Rajentertainment@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      <Image
        src="/footer.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-10 object-cover"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[5] bg-black/55"
      />

      {/* CTA band */}
      <div className="container relative z-10 border-b border-ink-line/60 py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="relative block h-12 w-12 shrink-0 sm:h-14 sm:w-14"
            >
              <img
                src="/raj-evernt-logo.png"
                alt="Raj Events Logo"
                className="h-full w-full object-contain"
              />
            </Link>
            <div>
              <h2 className="font-display text-xl font-bold leading-tight text-bone sm:text-2xl">
                Ready to Plan Your Next Event?
              </h2>
              <p className="mt-1.5 max-w-xs text-sm text-bone-muted">
                Let&rsquo;s create something unforgettable together.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            {CONTACT_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-3"
              >
                <item.icon
                  size={32}
                  className="shrink-0 text-crimson transition-colors duration-300 group-hover:text-bone"
                />
                <span>
                  <span className="block text-[11px] font-medium uppercase tracking-widest2 text-bone-muted">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block text-sm font-medium text-bone transition-colors duration-300 group-hover:text-crimson">
                    {item.value}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container relative z-10 flex flex-col items-center gap-6 py-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-widest2 text-bone-muted transition-colors duration-300 hover:text-crimson"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <p className="text-[11px] text-bone-muted">
            &copy; {new Date().getFullYear()} Raj Entertainments. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-7 w-7 items-center justify-center text-bone/70 transition-colors duration-300 hover:text-crimson"
              >
                <social.icon size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}