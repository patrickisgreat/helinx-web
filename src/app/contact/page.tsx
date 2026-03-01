"use client";

import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import content from "../../../content/contact.json";

export default function ContactPage() {
  return (
    <>
      <Hero
        label={content.hero.label}
        headline={content.hero.headline}
        subtitle={content.hero.subtitle}
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <SectionHeading heading={content.form.heading} />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form submission placeholder — connect to your backend or service.");
                }}
                className="space-y-6"
              >
                {content.form.fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        rows={5}
                        placeholder={field.placeholder}
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                      />
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                      />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  {content.form.submitLabel}
                </button>
              </form>
            </div>

            {/* Info */}
            <div>
              <SectionHeading heading={content.info.heading} />
              <p className="text-gray-600 mb-8">
                Email us at{" "}
                <a
                  href={`mailto:${content.info.email}`}
                  className="text-primary-600 font-medium hover:text-primary-700"
                >
                  {content.info.email}
                </a>
              </p>
              <div className="space-y-6">
                {content.info.items.map((item, i) => (
                  <div key={i} className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
