import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060908] border-t border-white/8 py-10">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* Left: wordmark + location */}
          <div className="flex items-center gap-3">
            <span
              className="text-xs tracking-[0.2em] uppercase text-white/40"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
            >
              VAHA
            </span>
            <span className="w-px h-3 bg-white/10" />
            <span
              className="text-xs text-white/20"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Water Infrastructure · Bengaluru, India
            </span>
          </div>

          {/* Center: nav links */}
          <nav className="flex items-center gap-6">
            {[
              { label: "Home", href: "/" },
              { label: "Pilot", href: "/pilot" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-[11px] tracking-widest uppercase text-white/20 hover:text-white/50 transition-colors"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right: copyright */}
          <p
            className="text-xs text-white/20"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            © 2024 Vaha
          </p>

        </div>
      </div>
    </footer>
  );
}
