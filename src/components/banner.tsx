import { motion } from "motion/react";
import Image from "next/image";
import ReadDocsButton from "./ReadDocsButton";
import GetEarlyAccessButton from "./GetEarlyAccessButton";

export default function Banner() {
  return (
    <div className="relative lg:mb-[100px]">
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
            lg:translate-x-0
            lg:translate-y-0
            lg:left-5 
            lg:top-[3%] 
            bg-[#251711] 
            py-[8px] 
            px-[12px]
            text-white
            rounded-xl
            -translate-y-1/2
            -translate-x-1/2
            left-1/2
            top-10
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

        <div className="absolute -top-[20%] lg:-top-[50%] w-full h-full ">
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
                className="origin-center hidden lg:block"
                src="/images/banner_circle.png"
                alt="banner"
                width={0}
                height={0}
                sizes="50vw"
                style={{ width: "100%", height: "auto" }}
              />
              <Image
                className="sm:block lg:hidden origin-center"
                src="/images/banner_circle.png"
                alt="banner"
                width={0}
                height={0}
                sizes="75vw"
                style={{ width: "100%", height: "auto" }}
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute right-0 top-[5%] hidden lg:block">
          <ReadDocsButton />
        </div>
      </div>

      <div className="text-white absolute bottom-[20%] lg:bottom-[10%] left-0 text-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0,
            scale: { type: "spring", visualDuration: 0.5, bounce: 0.4 },
          }}
        >
          <div className="text-center text-3xl lg:text-[42px]">
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
  )
}