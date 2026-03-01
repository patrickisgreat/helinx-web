import Link from "next/link";

interface CTABannerProps {
  heading: string;
  text: string;
  buttonLabel: string;
  buttonHref: string;
}

export default function CTABanner({ heading, text, buttonLabel, buttonHref }: CTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-primary-900 to-accent-900">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{heading}</h2>
        <p className="text-lg text-primary-200 max-w-2xl mx-auto mb-8">{text}</p>
        <Link
          href={buttonHref}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors text-sm"
        >
          {buttonLabel}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
