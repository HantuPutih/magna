import Image from "next/image";
import { Ubuntu_Sans } from "next/font/google";
import ReadDocsButton from "@/components/ReadDocsButton";
import GetEarlyAccessButton from "@/components/GetEarlyAccessButton";
import { useState } from "react";
import Card from "@/components/Card";
import Link from "next/link";


const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
});


export default function Home() {
  const [cards, setCards] = useState(
    [
      {
        title: "AI That Understands You",
        textInfo: "Forget wrestling with code. Magna's AI learns your style, so generation is smooth, maintenance is a breeze.",
        imgUrl:"/images/card1.png",
        imgAlt:""
      },
      {
        title: "Speed & Precision",
        textInfo: "Slash development time without sacrificing quality or security. Imagine shipping features faster.",
        imgUrl:"/images/card2.png",
        imgAlt:""
      },
      {
        title: "Future-Proof Security",
        textInfo: "Sleep soundly knowing Magna's AI audits catch vulnerabilities before they become nightmares.",
        imgUrl:"/images/card3.png",
        imgAlt:""
      },
      
    ]
  )

  return (
    <div className={`${ubuntuSans.variable} font-[family-name:var(--font-ubuntu-sans)] bg-[#050301] px-10`}>
      {/* banner */}
      <div className="relative">
        <div
          className="bg-[url(/images/bg_banner.png)] h-[763px] bg-cover bg-center"
        ></div>
        <div className="">
          <div className="
            flex
            absolute 
            left-0 
            top-[3%] 
            bg-[#251711] 
            py-[8px] 
            px-[12px]
            text-white
            rounded-xl
          ">
            <Image
              src="/images/magna_small.png"
              alt="magna small"
              width={32}
              height={32}
            />
            <h1>MAGNA</h1>
          </div>

          <div className="absolute top-0 w-full h-full ">
            <Image
              src="/images/banner.png"
              alt="banner"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div className="absolute right-0 top-[5%]">
            <ReadDocsButton/>
          </div>
        
        </div>

        <div className="text-white absolute bottom-[10%] left-0 text-center w-full">
          <div className="text-center text-[42px]">
            <h1 className=" ">Code Smarter. <i>Build Faster.</i></h1>
            <h1>Deploy Seamlessly</h1>
          </div>
          <div className="mt-5 w-50 flex justify-center align-center basis-full">
            <GetEarlyAccessButton/>
            <ReadDocsButton/>
          </div>
        </div>
      </div>

      {/* key feature */}
      <div>
        <div className="grid grid-cols-5 grid-rows-2 mb-10">
          <div className="row-start-1 row-end-1 flex justify-left align-center">
            <div className="mt-2 mr-2">
              <div className=" bg-[#FF500B] w-[8px] h-[8px]"></div>
            </div>
            <h5 className="text-[#FF500B]"> Key Features</h5>
          </div>

          <div className="col-span-2 row-start-3 row-end-3">
            <div className="text-white text-4xl">
              <h1>What Makes <i>Magna Different?</i></h1>
              <h1 className="">Our Key Features</h1>
            </div>
          </div>

          <div className="text-[#B4B4B4] col-start-4 col-span-2 row-start-3  row-end-3 mt-auto ">
            <p className="text-base">Discover how Magna's innovative features can help you build better, faster, and more secure</p>
          </div> 
        </div>
        

        {/* feature's feature */}
        <div>
          <div className="font-light">
            {/* 1 */}
            <div className="relative feature-bg-info-linear h-[419px] border border-[#492215] grid grid-cols-2 grid-rows-1 gap-5 w-full ">
              <div className=" p-5 col-start-1 flex items-end">
                <div className="">
                  <h1 className="text-white text-[42px]">AI-Assisted Code Editor</h1> 
                  <p className="text-[#B4B4B4] text-base w-[80%]">Magna doesn’t just generate  code—it learns how you code. By understanding your patterns, structure, and preferences, our AI adapts to your style.</p>
                </div>
              </div>
              <div className="
                absolute
                backdrop-blur-sm 
                rounded-xl 
                py-5 px-10 
                bottom-[10%] 
                left-[45%] 
                bg-[#EDC0AD33] 
                border
                border-[#8E542B]
              ">
                <h1 className="text-white text-center text-4xl">AI</h1>
                <h2 className="text-[#D7CFE2] text-xl">Powered</h2>
              </div>
              <div className=" col-start-2 flex  items-end">
                <Image
                className=""
                  src="/images/codeprev.png"
                  alt="banner"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '95%', height: 'auto', maxHeight: '412px', }}
                />
              </div>
            </div>

             {/* 2 */}
            <div className="mt-10 h-[419px] border border-[#492215] grid grid-cols-2 grid-rows-1 gap-5 w-full">
              
              <div className="p-5 col-start-1 ">
                <Image
                className=""
                  src="/images/graphprev.png"
                  alt="banner"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '95%', height: 'auto', maxHeight: '400px', }}
                />
              </div>

              <div className="col-start-2 flex items-end justify-end p-10 basis-full">
                <div className="w-[80%]">
                  <h1 className="text-white text-[42px]">Real-Time Analytics & Insights </h1> 
                  <p className=" text-justify text-[#B4B4B4] text-base">Gain a competitive edge with unparalleled insights. Magna provides on-chain analytics and AI-powered recommendations to optimize smart contracts, enhance dApp performance, and proactively identify security risks.</p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="mt-10  h-[419px] border border-[#492215] grid grid-cols-2 grid-rows-1 gap-5 w-full ">
              <div className=" p-5 col-start-1 flex items-end">
                <div className="">
                  <h1 className="text-white text-[42px]">Autonomous Web3 Agents</h1> 
                  <p className="text-[#B4B4B4] text-base w-[80%]">Deploy AI-driven agents that monitor blockchain activity, execute automated strategies, and interact with protocols autonomously—whether it’s trading, or contract execution, Magna keep your dApps running smoothly.</p>
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
                  style={{ width: '95%', height: 'auto', maxHeight: '412px', }}
                />
              </div>
            </div>

          </div>
        </div>


      </div>
  
      {/* prepare for ai */}
      <div className="prepare_for_ai_container h-[1000px] mt-10">
          <div className="flex justify-center items-center flex-col font-light">
            <div className="flex justify-center items-center flex-col py-20 w-[420px] text-center">
              <div className="mb-6 row-start-1 row-end-1 flex justify-left align-center">
                <div className="mt-2 mr-2">
                  <div className=" bg-[#FF500B] w-[8px] h-[8px]"></div>
                </div>
                <h5 className="text-[#FF500B]">For Beloved Developer</h5>
              </div>
              <div className="text-4xl text-white">
                <h1>Prepare for <i>AI-Powered</i>  Plugins</h1>
              </div>
              <div>
                <p className="text-[#B4B4B4] text-base">
                  Supercharge your plugin development with Magna's Plugin AI SDK. Coming soon,  bringing the power of AI to your fingertips.
                </p>
              </div>
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
              <div className="flex justify-end ">
                <h1 className="text-white text-4xl font-light w-[500px]">
                  Tired of wrestling with code? Let Magna's AI be your 
                  <i>coding sensei!</i>
                </h1>
              </div>
              <div className="flex justify-start ">
                <p className="text-[#B4B4B4] text-basis font-light w-[500px]">
                  Our AI-powered platform illuminates your development process, providing intelligent code generation, real-time analytics, and autonomous agents to handle the heavy lifting.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="flex justify-between mt-[60px] gap-10">
          {
            cards.map((card,idx) => {
              return (
                <Card
                  title={card.title}
                  imgUrl={card.imgUrl}
                  imgAlt={card.imgAlt}
                  textInfo={card.textInfo}
                  key={idx}
                />
              )
            })
          }
        </div>

      </div>

      {/* thinks like you */}
      <div className="bg-[url(/images/magna-bg.png)] bg-cover bg-top pt-10">
        <div className="flex justify-between ">
          <div className="flex flex-col gap-3">
            <i className="text-lg text-[#A19A9A     ]">Index</i>
            <Link className="block flex text-white text-lg gap-2" href="/">
                <Image
                  src="/arrow-up.svg"
                  alt="arrow up"
                  width={16}
                  height={16}
                />
                About Us
            </Link>
            <Link className="block flex text-white text-lg gap-2" href="/">
                <Image
                  src="/arrow-up.svg"
                  alt="arrow up"
                  width={16}
                  height={16}
                />
                Features
            </Link>
            <Link className="block flex text-white text-lg gap-2" href="/">
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
              <h1 className="text-4xl text-white text-center">
                AI That Thinks Like You, Codes Like You
              </h1>
            </div>
            <GetEarlyAccessButton/>
          </div>
            <div className="">
            <div className="flex flex-col gap-3 items-end">
              <i className="text-lg text-[#A19A9A]">Connect</i>
              <Link className="block flex text-white text-lg gap-2" href="/">
                  <Image
                    src="/arrow-up.svg"
                    alt="arrow up"
                    width={16}
                    height={16}
                  />
                  Twitter
              </Link>
              <Link className="block flex text-white text-lg gap-2" href="/">
                  <Image
                    src="/arrow-up.svg"
                    alt="arrow up"
                    width={16}
                    height={16}
                  />
                  Telegram
              </Link>
              <Link className="block flex text-white text-lg gap-2" href="/">
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

        <div className="mt-[50px]">
          <Image
            src="/images/magna-footer.png"
            alt="magna logo footer"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto',mixBlendMode: "screen" }}
          />
        </div>
      </div>
    </div>
  );
}