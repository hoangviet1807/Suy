import React from "react";
import { IframeComponent } from "../components/Iframe/Iframe";

export default function index() {
  return (
    <div className="bg-[#eeeeee]">
      <div className="max-w-[1128px] m-auto px-5 py-20">
        <div className="flex items-center gap-10">
          <div className="w-1/2">
            <IframeComponent
              embed_url={"https://www.youtube.com/watch?v=RPQO37npkDY"}
            />
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-4xl font-semibold font-[auto]">
              Thịnh Suy - Nói Gì Nữa (Music Video)
            </h1>
            <div className="tracking-wider">SHARE</div>
          </div>
        </div>
      </div>
    </div>
  );
}
