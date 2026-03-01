import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ValueCard from "@/components/ValueCard";
import CTABanner from "@/components/CTABanner";
import content from "../../../content/responsibility.json";

export const metadata: Metadata = {
  title: "Responsibility",
  description: content.hero.subtitle,
};

export default function ResponsibilityPage() {
  return (
    <>
      <Hero
        label={content.hero.label}
        headline={content.hero.headline}
        subtitle={content.hero.subtitle}
      />

      {/* Journey */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <SectionHeading heading={content.journey.heading} />
            <p className="text-lg text-gray-600 leading-relaxed">{content.journey.text}</p>
            <blockquote className="mt-8 pl-6 border-l-4 border-accent-500 text-xl font-medium text-gray-800 italic">
              {content.journey.quote}
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            heading={content.values.heading}
            subtitle={content.values.subtitle}
            centered
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {content.values.items.map((value, i) => (
              <ValueCard key={i} title={value.title} description={value.description} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading heading={content.impact.heading} subtitle={content.impact.text} centered />
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {content.impact.stats.map((stat, i) => (
              <div key={i} className="text-center p-8 rounded-xl bg-primary-50">
                <p className="text-4xl md:text-5xl font-bold text-primary-700 mb-2">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Partner With Us"
        text="We're looking for organizations that share our commitment to sustainable innovation."
        buttonLabel="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
