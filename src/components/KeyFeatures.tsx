import { motion } from "motion/react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
 
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: 'italic'
})

export default function KeyFeatures() {
  return (
    <div className="p-5 lg:p-10">
      <div className="flex flex-col gap-4 p-5 lg:grid lg:grid-cols-5 lg:grid-rows-2 mb-1 lg:mb-10">
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
          <div className=" row-start-1 row-end-1 flex justify-left align-center">
            <div className="mt-2 mr-2">
              <div className=" bg-[#FF500B] w-[8px] h-[8px]"></div>
            </div>
            <h5 className="text-[#FF500B]"> Key Features</h5>
          </div>
        </motion.div>

        <div className="col-span-2 row-start-3 row-end-3">
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
            <div className="text-white  text-3xl lg:text-4xl">
              <h1>
                What Makes <i className={` ${playfairDisplay.variable} font-[family-name:var(--font-playfair-display)]`}>Magna Different?</i>
              </h1>
              <h1 className="">Our Key Features</h1>
            </div>
          </motion.div>

        </div>

        <div className="text-[#B4B4B4] col-start-4 col-span-2 row-start-3 row-end-3 mt-auto ">
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
            <p className="text-sm lg:text-base">
              Discover how Magna&apos;s innovative features can help you build
              better, faster, and more secure
            </p>
          </motion.div>

        </div>
      </div>



      {/* feature's feature */}
      <div className="pt-10">
        <div className="font-light">
          {/* 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 2,
              scale: { type: "tween", visualDuration: 0.3, bounce: 0.3 },
            }}
          >
            <div className="relative feature-bg-info-linear h-[419px] border border-[#492215] lg:grid lg:grid-cols-2 lg:grid-rows-1 gap-[70px] lg-gap-5 w-full 
            flex flex-col
            ">
              <div className=" p-5 col-start-1 flex items-end">
                <div className="">
                  <h1 className="text-white text-3xl lg:text-[42px]">
                    AI-Assisted Code Editor
                  </h1>
                  <p className="text-[#B4B4B4] text-sm lg:text-base w-[80%]">
                    Magna doesn’t just generate code—it learns how you code. By
                    understanding your patterns, structure, and preferences, our
                    AI adapts to your style.
                  </p>
                </div>
              </div>

              <div
                className="
                    absolute
                    backdrop-blur-sm 
                    rounded-xl 
                    py-5 px-10 
                    lg:translate-x-0
                    lg:translate-y-0
                    lg:bottom-[10%] 
                    lg:left-[45%] 
                    bg-[#EDC0AD33] 
                    border
                    border-[#8E542B]
                    -translate-y-1/2
                    -translate-x-1/2
                    left-1/2
                    top-[60%]
                  "
              >

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    scale: { type: "spring", visualDuration: 2, bounce: 0.5 },
                  }}
                >
                  <h1 className="text-white text-center text-3xl lg:text-4xl">AI</h1>
                  <h2 className="text-[#D7CFE2] text-xl">Powered</h2>
                </motion.div>
              </div>

              <div className=" col-start-2 flex  items-end">
                <Image
                  className="hidden lg:block"
                  src="/images/codeprev.png"
                  alt="code preview"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "95%", height: "auto", maxHeight: "412px" }}
                />
                <Image
                  className="sm:block lg:hidden"
                  src="/images/codeprev.png"
                  alt="code preview"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", maxHeight: "412px" }}
                />
              </div>
            </div>
          </motion.div>


          {/* 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              scale: { type: "tween", visualDuration: 0.3, bounce: 0.3 },
            }}
          >
            <div className="mt-[120px] lg:mt-10 h-[419px] border border-[#492215] lg:grid lg:grid-cols-2 lg:grid-rows-1 gap-5 w-full">
              <div className="p-5 col-start-1 ">
                <Image
                  className=""
                  src="/images/graphprev.png"
                  alt="grapgh prev"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "95%", height: "auto", maxHeight: "400px" }}
                />
              </div>

              <div className="col-start-2 flex items-end justify-end p-3 lg:p-10 basis-full">
                <div className="lg:w-[80%]">
                  <h1 className="text-white text-3xl lg:text-[42px]">
                    Real-Time Analytics & Insights{" "}
                  </h1>
                  <p className=" text-justify text-[#B4B4B4] text-sm lg:text-base">
                    Gain a competitive edge with unparalleled insights. Magna
                    provides on-chain analytics and AI-powered recommendations
                    to optimize smart contracts, enhance dApp performance, and
                    proactively identify security risks.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>


          {/* 3 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              scale: { type: "tween", visualDuration: 0.3, bounce: 0.3 },
            }}
          >
            <div className="mt-10 h-[419px] border border-[#492215] lg:grid lg:grid-cols-2 lg:grid-rows-1 gap-5 w-full ">
              <div className=" p-5 col-start-1 flex items-end">
                <div className="">
                  <h1 className="text-white text-3xl lg:text-[42px]">
                    Autonomous Web3 Agents
                  </h1>
                  <p className="text-[#B4B4B4] text-sm lg:text-base lg:w-[80%]">
                    Deploy AI-driven agents that monitor blockchain activity,
                    execute automated strategies, and interact with protocols
                    autonomously—whether it’s trading, or contract execution,
                    Magna keep your dApps running smoothly.
                  </p>
                </div>
              </div>
              <div className=" col-start-2 flex items-end justify-center">
                <Image
                  className="hidden lg:block"
                  src="/images/mangaimg2.png"
                  alt="manga img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "950%", height: "auto", maxHeight: "412px" }}
                />

                <Image
                  className="sm:block lg:hidden"
                  src="/images/mangaimg2.png"
                  alt="magna img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "80%", height: "auto", maxHeight: "412px" }}
                />

              </div>
            </div>
          </motion.div>

        </div>
      </div >
    </div >
  )
}