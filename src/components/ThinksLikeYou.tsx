import { motion } from "motion/react";
import Image from "next/image";
import GetEarlyAccessButton from "./GetEarlyAccessButton";
import Link from "next/link";

export default function ThinksLikeYou() {
  return (<div className="bg-[url(/images/magna-bg.png)] bg-cover bg-top pt-10 lg:mt-[155px]">

    <div className="bg-[url(/images/magna-bg.png)] bg-cover bg-top"></div>
    <div className="">
      {/* mobile */}
      <div className=" lg:hidden w-full p-5 flex flex-col justify-center items-center">
        <div className="mb-10">
          <h1 className="text-3xl text-white text-center font-light">
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
            transition: { duration: 0.5 },
          }}
        >
          <GetEarlyAccessButton />
        </motion.div>
      </div>

      <div className="flex justify-evenly lg:justify-between ">
        <div className="flex flex-col gap-3">
          <i className="text-basis lg:text-lg text-[#A19A9A]">Index</i>
          <Link className="transition-all hover:scale-110 block flex text-white text-basis lg:text-lg gap-2" href="/">
            <Image
              src="/arrow-up.svg"
              alt="arrow up"
              width={16}
              height={16}
            />
            About Us
          </Link>
          <Link className=" transition-all hover:scale-110 block flex text-white text-basis lg:text-lg gap-2" href="/">
            <Image
              src="/arrow-up.svg"
              alt="arrow up"
              width={16}
              height={16}
            />
            Features
          </Link>
          <Link className="transition-all hover:scale-110 block flex text-white text-basis lg:text-lg gap-2" href="/">
            <Image
              src="/arrow-up.svg"
              alt="arrow up"
              width={16}
              height={16}
            />
            Docs
          </Link>
        </div>

        <div className="hidden lg:flex w-96 flex flex-col justify-center items-center">
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
              transition: { duration: 0.5 },
            }}
          >
            <GetEarlyAccessButton />
          </motion.div>
        </div>

        <div className="">
          <div className="flex flex-col gap-3 items-end">
            <i className="text-basis lg:text-lg text-[#A19A9A]">Connect</i>
            <Link className="transition-all hover:scale-110 block flex text-white text-basis lg:text-lg gap-2" href="/">
              <Image
                src="/arrow-up.svg"
                alt="arrow up"
                width={16}
                height={16}
              />
              Twitter
            </Link>
            <Link className="transition-all hover:scale-110 block flex text-white text-basis lg:text-lg gap-2" href="/">
              <Image
                src="/arrow-up.svg"
                alt="arrow up"
                width={16}
                height={16}
              />
              Telegram
            </Link>
            <Link className="transition-all hover:scale-110 block flex text-white text-basis lg:text-lg gap-2" href="/">
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


  </div>)
}