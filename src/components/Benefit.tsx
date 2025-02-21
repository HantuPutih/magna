import { motion } from "motion/react";
import Card from "./Card";
import { useState } from "react";

export default function Benefit() {
  const [cards] = useState([
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
    <div className="  p-5 lg:p-0 mt-10 lg:mt-[55px]">
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
                <h1 className="text-white text-3xl lg:text-4xl font-light w-[500px]">
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
                <p className="text-[#B4B4B4] text-sm lg:text-basis font-light w-[500px]">
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
      <div className="flex lg:flex-row flex-col justify-between mt-10 lg:mt-[60px] py-10 px-6 gap-10 overflow-auto">
        {cards.map((card, idx) => {
          return (
            <div key={idx} className="">
              <motion.div 
                className="hidden lg:block"
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
              <div className="block lg:hidden">
                <Card
                  title={card.title}
                  imgUrl={card.imgUrl}
                  imgAlt={card.imgAlt}
                  textInfo={card.textInfo}
                />
              </div>

            </div>


          );
        })}
      </div>
    </div>
  )
}