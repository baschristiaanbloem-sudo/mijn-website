import Image from "next/image";

type PracticeLogoProps = {
  className?: string;
  priority?: boolean;
};

export function PracticeLogo({ className = "h-16 w-auto", priority = false }: PracticeLogoProps) {
  return (
    <Image
      src="/images/logo-bloem-huisartsen.png"
      alt="Bloem Huisartsen Amstelveen"
      width={827}
      height={458}
      priority={priority}
      unoptimized
      className={`object-contain object-left ${className}`}
    />
  );
}
