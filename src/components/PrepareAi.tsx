import { motion } from "motion/react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: 'italic'
})

export default function PrepareAi() {
  return (
    <div className=" h-[850px] lg:h-[1200px] mt-10 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 5.5,
          scale: { type: "tween", },
        }}
      >
        <div className="prepare_for_ai_container h-[850px] lg:h-[1200px] ">
        </div>
      </motion.div>

      <div className="absolute top-0 left-0 w-full">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center flex-col font-light">
            <div className="flex justify-center items-center flex-col px-10 lg:px-0 py-20 lg:w-[420px] text-center">
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
                <div className=" text-3xl lg:text-4xl text-white">
                  <h1>
                    Prepare for <i className={` ${playfairDisplay.variable} font-[family-name:var(--font-playfair-display)]`}>AI-Powered</i> Plugins
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
                  <p className="text-[#B4B4B4] text-sm lg:text-base mt-3">
                    Supercharge your plugin development with Magna&apos;s Plugin AI SDK.
                    Coming soon, bringing the power of AI to your fingertips.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="">
              <Image
                className="hidden lg:block code_editor_container rounded-lg"
                src="/images/code-editor.png"
                alt="banner"
                width={895}
                height={438}
                sizes="100vw"
              />
              {/* mobile */}
              <Image
                className=" sm:block lg:hidden code_editor_container rounded-lg"
                src="/images/code-editor.png"
                alt="banner"
                width={0}
                height={0}
                sizes="95vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}