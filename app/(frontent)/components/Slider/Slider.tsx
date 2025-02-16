"use client";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { CMS_URL } from "../../constant/constants";
export default function Slider({ data }) {
  console.log("cms url", CMS_URL);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map((val, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className=" relative">
                <div className="flex group brightness-50">
                  <Image
                    alt=""
                    src={`${CMS_URL}${val?.image?.url}`}
                    width={val?.image?.width}
                    height={val?.image?.height}
                    className={`w-full h-full aspect-square object-cover`}
                  />
                </div>
                {isActive && (
                  <div className="flex flex-col w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-white font-bold text-lg">
                    <div className="opacity-100  transition-all ">
                      <p className="">{val.title}</p>
                      <Link className="link" href={val.link}>
                        Stream Now
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
