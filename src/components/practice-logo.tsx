import Image from "next/image";

type PracticeLogoProps = {
  className?: string;
  priority?: boolean;
};

export function PracticeLogo({ className = "h-16 w-auto", priority = false }: PracticeLogoProps) {
  return (
    <Image
      src="/images/logo-bloem-v3.png"
      alt="Bloem Huisartsen Amstelveen"
      width={896}
      height={540}
      priority={priority}
      unoptimized
      className={`object-contain object-left ${className}`}
    />
  );
}
