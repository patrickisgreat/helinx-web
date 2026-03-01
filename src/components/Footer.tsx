import Link from "next/link";
import site from "../../content/site.json";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-4">{site.companyName}</h3>
            <p className="text-primary-200 text-sm leading-relaxed">{site.tagline}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-300 mb-4">Pages</h4>
            <ul className="space-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-200 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-300 mb-4">Contact</h4>
            <address className="not-italic text-sm text-primary-200 space-y-1 mb-6">
              {site.footer.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </address>
            <div className="flex gap-4">
              {site.footer.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-200 hover:text-white transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-800 text-center text-sm text-primary-400">
          &copy; {new Date().getFullYear()} {site.footer.copyright}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
