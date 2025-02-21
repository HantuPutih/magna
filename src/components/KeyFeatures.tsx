import { motion } from "motion/react";
import Image from "next/image";

export default function KeyFeatures() {
  return (
    <div className="snap-y snap-mandatory">
      {/* <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0,
          scale: { type: "tween", visualDuration: 0.3, bounce: 0.3 },
        }}
        className="snap-center"
      > */}

      <div className="grid grid-cols-5 grid-rows-2 mb-10">
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
          <div className="row-start-1 row-end-1 flex justify-left align-center">
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
            <div className="text-white text-4xl">
              <h1>
                What Makes <i>Magna Different?</i>
              </h1>
              <h1 className="">Our Key Features</h1>
            </div>
          </motion.div>

        </div>

        <div className="text-[#B4B4B4] col-start-4 col-span-2 row-start-3  row-end-3 mt-auto ">
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
          <p className="text-base">
              Discover how Magna&apos;s innovative features can help you build
              better, faster, and more secure
            </p>
        </motion.div>

        </div>
      </div>
      {/* </motion.div> */}



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
            <div className="relative feature-bg-info-linear h-[419px] border border-[#492215] grid grid-cols-2 grid-rows-1 gap-5 w-full ">
              <div className=" p-5 col-start-1 flex items-end">
                <div className="">
                  <h1 className="text-white text-[42px]">
                    AI-Assisted Code Editor
                  </h1>
                  <p className="text-[#B4B4B4] text-base w-[80%]">
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
                    bottom-[10%] 
                    left-[45%] 
                    bg-[#EDC0AD33] 
                    border
                    border-[#8E542B]
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
                  <h1 className="text-white text-center text-4xl">AI</h1>
                  <h2 className="text-[#D7CFE2] text-xl">Powered</h2>
                </motion.div>
              </div>

              <div className=" col-start-2 flex  items-end">
                <Image
                  className=""
                  src="/images/codeprev.png"
                  alt="banner"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "95%", height: "auto", maxHeight: "412px" }}
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
            <div className="mt-10 h-[419px] border border-[#492215] grid grid-cols-2 grid-rows-1 gap-5 w-full">
              <div className="p-5 col-start-1 ">
                <Image
                  className=""
                  src="/images/graphprev.png"
                  alt="banner"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "95%", height: "auto", maxHeight: "400px" }}
                />
              </div>

              <div className="col-start-2 flex items-end justify-end p-10 basis-full">
                <div className="w-[80%]">
                  <h1 className="text-white text-[42px]">
                    Real-Time Analytics & Insights{" "}
                  </h1>
                  <p className=" text-justify text-[#B4B4B4] text-base">
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
            <div className="mt-10  h-[419px] border border-[#492215] grid grid-cols-2 grid-rows-1 gap-5 w-full ">
              <div className=" p-5 col-start-1 flex items-end">
                <div className="">
                  <h1 className="text-white text-[42px]">
                    Autonomous Web3 Agents
                  </h1>
                  <p className="text-[#B4B4B4] text-base w-[80%]">
                    Deploy AI-driven agents that monitor blockchain activity,
                    execute automated strategies, and interact with protocols
                    autonomously—whether it’s trading, or contract execution,
                    Magna keep your dApps running smoothly.
                  </p>
                </div>
              </div>
              <div className=" col-start-2 flex items-end">
                <Image
                  className=""
                  src="/images/mangaimg2.png"
                  alt="banner"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "95%", height: "auto", maxHeight: "412px" }}
                />
              </div>
            </div>

          </motion.div>

        </div>
      </div >
    </div >
  )
}