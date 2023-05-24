import React from "react";
import Footer from "./components/footer";
import Cta from "./components/cta";
import Navbar from "./components/navbar";
import Features from "./components/features";
import Image from "next/image";
import QuoteBlock from "./components/quoteBlock";

export default function Home() {
  return (
    <>
      <main className="">
        <Navbar />
        <QuoteBlock />
        <Cta />
        <div className="w-full h-full">
          <Image
            src="/stock-image-trimmed.png"
            height={1379}
            width={423}
            alt="banner"
            layout="responsive"
          />
        </div>
        <Features />
        <Footer />
      </main>
    </>
  );
}
