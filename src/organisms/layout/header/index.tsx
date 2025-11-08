import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/molecules/navbar";
import { AdviceButton } from "@/atoms/advice-button";

export const Header = () => {
  return (
    <header className="py-4 px-10 flex items-center justify-between sticky top-0 bg-white">
      <Link href="/">
        <Image
          src="/icons/logo.svg"
          alt="Логотип"
          loading="eager"
          width={64}
          height={64}
        />
      </Link>

      <div className="flex items-center gap-3">
        <Navbar />

        <AdviceButton />
      </div>
    </header>
  );
};
