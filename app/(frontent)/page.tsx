import Image from "next/image";
import banner from "./assets/banner.jpg";
import Slider from "./components/Slider/Slider";
import { getPayload } from "payload";
import config from "@payload-config";
import { IframeComponent } from "./components/Iframe/Iframe";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import { CMS_URL } from "./constant/constants";

export default async function Home() {
  const payload = await getPayload({ config });

  const homepage = await payload.findGlobal({
    slug: "homepage",
    depth: 2,
  });

  const { banner, albums, video } = homepage;

  return (
    <div className="">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src={`${CMS_URL}${banner?.url}`}
          alt="banner"
          width={banner.width}
          height={banner.height}
          priority
        />
        <div className="pb-40 pt-10 px-20 w-full relative">
          <div className="">
            <Slider data={albums} />
          </div>
          <p className="text-9xl cursor-default tracking-wider absolute bottom-0 left-[20px] text-[#e9e9e9] font-semibold">
            MUSIC
          </p>
          <Link className="absolute bottom-0 right-0" href={"/music"}>
            <div className="flex items-center gap-1">
              <p className="">Music</p>
              <div className="w-6 h-[1px] bg-black" />
            </div>
          </Link>
        </div>

        <div className="py-40 px-20 w-full relative bg-black mb-[30px]">
          <div className="justify-items-center  p-2 ">
            <div className="border border-white p-1 max-w-[840px] w-full">
              <IframeComponent embed_url={video} />
            </div>
          </div>
          <p className="text-9xl cursor-default tracking-wider absolute bottom-0 left-[20px] text-[#ffffff47] font-semibold">
            VIDEO
          </p>
          <Link className="absolute bottom-[30px] right-0" href={"/music"}>
            <div className="flex items-center gap-1">
              <p className="text-white">Video</p>
              <div className="w-6 h-[1px] bg-white" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
