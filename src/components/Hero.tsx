import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  label?: string;
  headline: string;
  subtitle: string;
  cta?: { label: string; href: string };
  large?: boolean;
  image?: string;
}

export default function Hero({ label, headline, subtitle, cta, large, image }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-accent-900">
      {/* Background image or decorative elements */}
      {image ? (
        <div className="absolute inset-0">
          <Image src={image} alt="" fill className="object-cover opacity-30" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/80 via-primary-900/70 to-accent-900/80" />
        </div>
      ) : (
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        </div>
      )}

      <div className={`relative mx-auto max-w-7xl px-6 ${large ? "py-40 md:py-52" : "py-28 md:py-36"}`}>
        <div className="max-w-3xl">
          {label && (
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-300 mb-4">
              {label}
            </p>
          )}
          <h1
            className={`font-bold tracking-tight text-white leading-tight ${
              large ? "text-4xl md:text-6xl lg:text-7xl" : "text-3xl md:text-5xl"
            }`}
          >
            {headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-200 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          {cta && (
            <div className="mt-10">
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                {cta.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
