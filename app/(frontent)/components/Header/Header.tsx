import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="sticky top-0 w-full z-10 bg-black">
      <div className="max-w-[1128px] m-auto py-4 px-5">
        <div className="flex justify-between uppercase text-lg text-white">
          <Link
            className="hover:text-[#a9a9a9] transition-all duration-700"
            href="/merch"
          >
            Merch
          </Link>
          <Link
            className="hover:text-[#a9a9a9] transition-all duration-700"
            href="/tour"
          >
            Tour{" "}
          </Link>
          <div className="text-2xl font-bold cursor-default">Thinh Suy</div>
          <Link
            className="hover:text-[#a9a9a9] transition-all duration-700"
            href="/music"
          >
            Music
          </Link>
          <Link
            className="hover:text-[#a9a9a9] transition-all duration-700"
            href="/video"
          >
            Video
          </Link>
        </div>
      </div>
    </div>
  );
}
