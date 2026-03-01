import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import TeamCard from "@/components/TeamCard";
import CTABanner from "@/components/CTABanner";
import content from "../../../content/company.json";

export const metadata: Metadata = {
  title: "Company",
  description: content.hero.subtitle,
};

export default function CompanyPage() {
  return (
    <>
      <Hero
        label={content.hero.label}
        headline={content.hero.headline}
        subtitle={content.hero.subtitle}
      />

      {/* About */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading heading={content.about.heading} />
          <div className="max-w-3xl space-y-6">
            {content.about.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-gray-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            heading={content.team.heading}
            subtitle={content.team.subtitle}
            centered
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {content.team.members.map((member, i) => (
              <TeamCard key={i} name={member.name} title={member.title} bio={member.bio} />
            ))}
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            heading={content.board.heading}
            subtitle={content.board.subtitle}
            centered
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {content.board.members.map((member, i) => (
              <TeamCard key={i} name={member.name} title={member.title} bio={member.bio} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Join Our Team"
        text="We're building the future of sustainable biomanufacturing. Come be part of it."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
