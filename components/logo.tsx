import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-20 h-20 relative">
      <Image
        src="/images/logo/logo.png"
        alt="Inffynks Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}