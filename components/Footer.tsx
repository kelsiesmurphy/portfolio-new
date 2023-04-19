import Image from "next/image";
import logomark from "../public/logomark.png";

const Footer = () => {
  return (
    <div className="w-full px-4 md:px-24 z-10 snap-start gap-6">
      <div className="flex border-t py-6  justify-between items-center gap-4 flex-wrap">
        <Image alt="Kelsie Murphy Logo" src={logomark} width="60" height="0" />
        <p className="text-stone-500">
          © {new Date().getFullYear()} Kelsie S. Murphy. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
