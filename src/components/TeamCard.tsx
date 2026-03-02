import Image from "next/image";

interface TeamCardProps {
  name: string;
  title: string;
  bio: string;
  image?: string;
}

export default function TeamCard({ name, title, bio, image }: TeamCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="group bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg hover:border-primary-100 transition-all duration-300">
      {image ? (
        <div className="w-20 h-20 rounded-full overflow-hidden mb-6 relative">
          <Image src={image} alt={name} fill className="object-cover" sizes="80px" />
        </div>
      ) : (
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 mb-6 flex items-center justify-center text-white text-2xl font-bold">
          {initials}
        </div>
      )}
      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      <p className="text-sm font-medium text-accent-600 mt-1">{title}</p>
      <p className="mt-4 text-sm text-gray-600 leading-relaxed">{bio}</p>
    </div>
  );
}
