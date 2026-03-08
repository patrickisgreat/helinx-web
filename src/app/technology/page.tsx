import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import content from "../../../content/technology.json";

export const metadata: Metadata = {
  title: "Technology",
  description: content.hero.subtitle,
};

export default function TechnologyPage() {
  return (
    <>
      <Hero
        label={content.hero.label}
        headline={content.hero.headline}
        subtitle={content.hero.subtitle}
      />

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <SectionHeading heading={content.intro.heading} />
            <p className="text-lg text-gray-600 leading-relaxed">{content.intro.text}</p>
          </div>
        </div>
      </section>

      {/* Peptides */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start bg-white rounded-2xl border border-gray-100 p-8 md:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-600 mb-3">
                {content.peptides.label}
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.peptides.heading}</h2>
              <p className="text-gray-600 leading-relaxed">{content.peptides.text}</p>
            </div>
            <div className="bg-primary-50 rounded-xl p-8">
              <p className="text-gray-700 leading-relaxed">{content.peptides.details}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            heading={content.platforms.heading}
            subtitle={content.platforms.description}
          />

          <div className="space-y-16 mt-16">
            {content.platforms.items.map((platform, i) => (
              <div
                key={i}
                className="grid md:grid-cols-2 gap-12 items-start bg-white rounded-2xl border border-gray-100 p-8 md:p-12"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-accent-600 mb-3">
                    {platform.label}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{platform.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{platform.description}</p>
                </div>
                <div>
                  <div className="bg-primary-50 rounded-xl p-8">
                    <p className="text-gray-700 leading-relaxed">{platform.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact CTA */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <SectionHeading heading={content.impact.heading} subtitle={content.impact.text} centered />
          <a
            href={content.impact.cta.href}
            className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors text-sm"
          >
            {content.impact.cta.label}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
