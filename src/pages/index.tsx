import Image from "next/image";
import { Ubuntu_Sans } from "next/font/google";
import ReadDocsButton from "@/components/ReadDocsButton";
import GetEarlyAccessButton from "@/components/GetEarlyAccessButton";
import { useState } from "react";
import Card from "@/components/Card";
import Link from "next/link";
import { motion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import KeyFeatures from "@/components/KeyFeatures";

gsap.registerPlugin(useGSAP);

const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
});

export default function Home() {
  const [cards, setCards] = useState([
    {
      title: "AI That Understands You",
      textInfo:
        "Forget wrestling with code. Magna's AI learns your style, so generation is smooth, maintenance is a breeze.",
      imgUrl: "/images/card1.png",
      imgAlt: "",
    },
    {
      title: "Speed & Precision",
      textInfo:
        "Slash development time without sacrificing quality or security. Imagine shipping features faster.",
      imgUrl: "/images/card2.png",
      imgAlt: "",
    },
    {
      title: "Future-Proof Security",
      textInfo:
        "Sleep soundly knowing Magna's AI audits catch vulnerabilities before they become nightmares.",
      imgUrl: "/images/card3.png",
      imgAlt: "",
    },
  ]);

  return (
    <div
      className={`${ubuntuSans.variable} font-[family-name:var(--font-ubuntu-sans)] bg-[#050301] px-10`}
    >
      {/* banner */}
      <div className="relative mb-[100px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 2.5,
            scale: { type: "tween" },
          }}
        >
          <div className="bg-[url(/images/bg_banner.png)] h-[763px] bg-cover bg-center"></div>

        </motion.div>
        <div className="">
          <div
            className="
            flex
            absolute 
            left-0 
            top-[3%] 
            bg-[#251711] 
            py-[8px] 
            px-[12px]
            text-white
            rounded-xl
          "
          >
            <Image
              src="/images/magna_small.png"
              alt="magna small"
              width={32}
              height={32}
            />
            <h1>MAGNA</h1>
          </div>

          <div className="absolute -top-[50%] w-full h-full ">
            <div className="flex justify-center items-center w-full h-full">
              <motion.div
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 85,
                  repeat: Infinity,
                  restSpeed: 5,
                }}
              >
                <Image
                  className="origin-center"
                  src="/images/banner_circle.png"
                  alt="banner"
                  width={0}
                  height={0}
                  sizes="50vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </motion.div>
            </div>
          </div>
          <div className="absolute right-0 top-[5%] ">
            <ReadDocsButton />
          </div>
        </div>

        <div className="text-white absolute bottom-[10%] left-0 text-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0,
              scale: { type: "spring", visualDuration: 0.5, bounce: 0.4 },
            }}
          >
            <div className="text-center text-[42px]">
              <h1 className=" ">
                Code Smarter. <i>Build Faster.</i>
              </h1>
              <h1>Deploy Seamlessly</h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0,
              scale: { type: "tween", visualDuration: 0.4, bounce: 0.4 },
            }}
          >
            <div className="mt-5 w-50 flex justify-center align-center basis-full">
              <GetEarlyAccessButton />
              <ReadDocsButton />
            </div>
          </motion.div>
        </div>
      </div>

      {/* key feature */}
      <KeyFeatures />

      {/* prepare for ai */}
      <div className=" h-[1200px] mt-10 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 4,
            scale: { type: "tween", },
          }}
        >
          <div className="prepare_for_ai_container h-[1200px] ">
          </div>
        </motion.div>

        <div className="absolute top-0 left-0 w-full">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center flex-col font-light">
              <div className="flex justify-center items-center flex-col py-20 w-[420px] text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 50 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 1,
                      type: "spring"
                    }
                  }}
                >
                  <div className="mb-6 row-start-1 row-end-1 flex justify-left align-center">
                    <div className="mt-2 mr-2">
                      <div className=" bg-[#FF500B] w-[8px] h-[8px]"></div>
                    </div>
                    <h5 className="text-[#FF500B]">For Beloved Developer</h5>
                  </div>

                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 50 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 0.5,
                      duration: 1.3,
                      type: "spring"
                    }
                  }}
                >
                  <div className="text-4xl text-white">
                    <h1>
                      Prepare for <i>AI-Powered</i> Plugins
                    </h1>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 50 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 1,
                      duration: 1,
                      type: "spring"
                    }
                  }}
                >
                  <div>
                    <p className="text-[#B4B4B4] text-base">
                      Supercharge your plugin development with Magna&apos;s Plugin AI SDK.
                      Coming soon, bringing the power of AI to your fingertips.
                    </p>
                  </div>
                </motion.div>

              </div>

              <div className="">
                <Image
                  className="code_editor_container rounded-lg"
                  src="/images/code-editor.png"
                  alt="banner"
                  width={895}
                  height={438}
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* benefit  */}
      <div className="mt-[55px]">
        <div className="">
          <div className="mb-6 row-start-1 row-end-1 flex justify-left align-center">
            <div className="mt-2 mr-2">
              <div className=" bg-[#FF500B] w-[8px] h-[8px]"></div>
            </div>
            <h5 className="text-[#FF500B]">Benefit</h5>
          </div>

          <div className="mt-8">
            <div className="flex flex-col gap-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: -100 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    type: "tween"
                  }
                }}
              >
                <div className="flex justify-end ">
                  <h1 className="text-white text-4xl font-light w-[500px]">
                    Tired of wrestling with code? Let Magna&apos;s AI be your
                    <i>coding sensei!</i>
                  </h1>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: 100 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 0.5,
                    duration: 2,
                    type: "tween"
                  }
                }}
              >
                <div className="flex justify-start ">
                  <p className="text-[#B4B4B4] text-basis font-light w-[500px]">
                    Our AI-powered platform illuminates your development process,
                    providing intelligent code generation, real-time analytics,
                    and autonomous agents to handle the heavy lifting.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* cards */}
        <div className="flex justify-between mt-[60px] py-10 px-6 gap-10 overflow-auto">
          {cards.map((card, idx) => {
            return (
              <motion.div key={idx}
                initial={{ opacity: 0, scale: 0.5, x: -300 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 1,
                    duration: 3,
                    type: "spring"
                  }
                }}
              >
                <Card
                  title={card.title}
                  imgUrl={card.imgUrl}
                  imgAlt={card.imgAlt}
                  textInfo={card.textInfo}
                />
              </motion.div>

            );
          })}
        </div>
      </div>

      {/* thinks like you */}
      <div className="bg-[url(/images/magna-bg.png)] bg-cover bg-top pt-10 mt-[155px]">

        <div className="bg-[url(/images/magna-bg.png)] bg-cover bg-top"></div>
        <div className="">
          <div className="flex justify-between ">
            <div className="flex flex-col gap-3">
              <i className="text-lg text-[#A19A9A]">Index</i>
              <Link className="transition-all hover:scale-110 block flex text-white text-lg gap-2" href="/">
                <Image
                  src="/arrow-up.svg"
                  alt="arrow up"
                  width={16}
                  height={16}
                />
                About Us
              </Link>
              <Link className=" transition-all hover:scale-110 block flex text-white text-lg gap-2" href="/">
                <Image
                  src="/arrow-up.svg"
                  alt="arrow up"
                  width={16}
                  height={16}
                />
                Features
              </Link>
              <Link className="transition-all hover:scale-110 block flex text-white text-lg gap-2" href="/">
                <Image
                  src="/arrow-up.svg"
                  alt="arrow up"
                  width={16}
                  height={16}
                />
                Docs
              </Link>
            </div>
            <div className="w-96 flex flex-col justify-center items-center">
              <div className="mb-10">
                <h1 className="text-4xl text-white text-center font-light">
                  AI That <i>Thinks Like You</i>, Codes Like You
                </h1>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: 50 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  scale: 1.2,
                  transition: {
                    duration: 1,
                    type: "spring"
                  }
                }}
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.5},
                }}
              >
                <GetEarlyAccessButton />

              </motion.div>
            </div>
            <div className="">
              <div className="flex flex-col gap-3 items-end">
                <i className="text-lg text-[#A19A9A]">Connect</i>
                <Link className="transition-all hover:scale-110 block flex text-white text-lg gap-2" href="/">
                  <Image
                    src="/arrow-up.svg"
                    alt="arrow up"
                    width={16}
                    height={16}
                  />
                  Twitter
                </Link>
                <Link className="transition-all hover:scale-110 block flex text-white text-lg gap-2" href="/">
                  <Image
                    src="/arrow-up.svg"
                    alt="arrow up"
                    width={16}
                    height={16}
                  />
                  Telegram
                </Link>
                <Link className="transition-all hover:scale-110 block flex text-white text-lg gap-2" href="/">
                  <Image
                    src="/arrow-up.svg"
                    alt="arrow up"
                    width={16}
                    height={16}
                  />
                  Github
                </Link>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 3,
              scale: { type: "tween" },
            }}
          >
            <div className="mt-[50px]">
              <Image
                src="/images/magna-footer.png"
                alt="magna logo footer"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto", mixBlendMode: "screen" }}
              />
            </div>
          </motion.div>

        </div>


      </div>
    </div >
  );
}
