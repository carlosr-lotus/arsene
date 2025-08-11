"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center mb-5">
      <h1 className="font-julius text-3xl md:text-4xl">Arsène</h1>
      <nav>
        <ul className="flex items-center gap-6">
          <Link
            href={"/"}
            className={`uppercase cursor-pointer transition hover:text-main-black ${
              pathname === "/" ? "text-main-black" : "text-sec-inactive"
            }`}
          >
            home
          </Link>
          <Link
            href={"/parfum"}
            className={`uppercase cursor-pointer transition hover:text-main-black ${
              pathname === "/parfum" ? "text-main-black" : "text-sec-inactive"
            }`}
          >
            parfum
          </Link>
        </ul>
      </nav>
    </header>
  );
}
