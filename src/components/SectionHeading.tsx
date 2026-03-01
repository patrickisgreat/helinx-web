interface SectionHeadingProps {
  label?: string;
  heading: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ label, heading, subtitle, centered }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-600 mb-2">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">{heading}</h2>
      {subtitle && (
        <p className={`mt-4 text-lg text-gray-600 leading-relaxed ${centered ? "mx-auto max-w-2xl" : "max-w-3xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
