import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import content from "../../content/home.json";

function SectionImage({ image, alt }: { image?: string; alt: string }) {
  if (image) {
    return (
      <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
        <Image src={image} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
    );
  }
  return (
    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
      <div className="text-center p-8">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 opacity-60" />
        <p className="text-sm text-gray-400">Image placeholder</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero
        headline={content.hero.headline}
        subtitle={content.hero.subtitle}
        cta={content.hero.cta}
        image={content.hero.image}
        large
      />

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading label={content.about.label} heading={content.about.heading} />
              <p className="text-gray-600 leading-relaxed text-lg">{content.about.text}</p>
              <div className="mt-8">
                <Link
                  href={content.about.cta.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  {content.about.cta.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <SectionImage image={content.about.image} alt={content.about.heading} />
          </div>
        </div>
      </section>

      {/* Technology Preview */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <SectionImage image={content.technology.image} alt={content.technology.heading} />
            </div>
            <div className="order-1 md:order-2">
              <SectionHeading label={content.technology.label} heading={content.technology.heading} />
              <p className="text-gray-600 leading-relaxed text-lg">{content.technology.text}</p>
              <div className="mt-8">
                <Link
                  href={content.technology.cta.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  {content.technology.cta.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Preview */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading label={content.impact.label} heading={content.impact.heading} />
              <p className="text-gray-600 leading-relaxed text-lg">{content.impact.text}</p>
              <div className="mt-8">
                <Link
                  href={content.impact.cta.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  {content.impact.cta.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <SectionImage image={content.impact.image} alt={content.impact.heading} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading={content.cta.heading}
        text={content.cta.text}
        buttonLabel={content.cta.buttonLabel}
        buttonHref={content.cta.buttonHref}
      />
    </>
  );
}
