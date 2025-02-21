import { Ubuntu_Sans } from "next/font/google";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import KeyFeatures from "@/components/KeyFeatures";
import Banner from "@/components/banner";
import PrepareAi from "@/components/PrepareAi";
import Benefit from "@/components/Benefit";
import ThinksLikeYou from "@/components/ThinksLikeYou";

gsap.registerPlugin(useGSAP);

const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${ubuntuSans.variable} font-[family-name:var(--font-ubuntu-sans)] bg-[#050301] lg-px-10`}
    >
      {/* banner */}
      <Banner/>

      {/* key feature */}
      <KeyFeatures />

      {/* prepare for ai */}
      <PrepareAi/>

      {/* benefit  */}
      <Benefit/>

      {/* thinks like you */}
      <ThinksLikeYou/>
    </div >
  );
}
