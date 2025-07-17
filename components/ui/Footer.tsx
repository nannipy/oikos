import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center gap-3 mb-4 md:mb-0">
        <Image src="/logo.svg" alt="Logo Oikos" width={32} height={40} />
        <span className="font-b612-mono font-normal text-[10px] leading-[26px] uppercase text-white w-[235px] h-[26px] block">OXY STUDIO © | WEB DEVELOPMENT AGENCY</span>
      </div>
      <div className="font-b612-mono font-normal text-[10px] leading-[26px] uppercase text-white w-[235px] h-[26px] block"> TERMS OF SERVICE | PRIVACY POLICY</div>
    </footer>
  );
}
