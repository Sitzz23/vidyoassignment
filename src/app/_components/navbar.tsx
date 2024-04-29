"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-center gap-10 border-b bg-background/50 px-4 backdrop-blur-xl transition-all">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={"/logo.png"}
          alt={"logo"}
          width={100}
          height={24}
          className="aspect-[3.92]"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
