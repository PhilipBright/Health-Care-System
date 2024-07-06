import Image from "next/image";
import healthcare from '@/public/healthcare.webp'
import React from "react";

export default function Home() {
  return (
  <div className="flex h-screen max-h-screen">
    <section className=" remove-scrollbar container my-auto ">
      <div className=" sub-container max-w-[496px]">
        <Image src={healthcare} width={1000} height={1000} alt="" className=" mb-12 h-10 w-fit" />
      </div>
    </section>
  </div>
  );
}
