import Image from "next/image";

type PracticeLogoProps = {
  className?: string;
  priority?: boolean;
};

export function PracticeLogo({ className = "h-12 w-auto", priority = false }: PracticeLogoProps) {
  return (
    <Image
      src="/images/logo-bloem-huisartsen.png"
      alt="Bloem Huisartsen"
      width={863}
      height={318}
      priority={priority}
      className={`object-contain object-left ${className}`}
    />
  );
}
