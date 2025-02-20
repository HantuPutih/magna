import Image from "next/image";
import { Ubuntu_Sans } from "next/font/google";
import ReadDocsButton from "@/components/ReadDocsButton";
import GetEarlyAccessButton from "@/components/GetEarlyAccessButton";


const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
});
export default function Home() {
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
        <div className="grid grid-cols-5 grid-rows-2">
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
          <div className="">
            <div className="feature-bg-info-linear h-[419px] p-5 border border-[#492215] relative flex justify-between items-end">
              <div className="">
                <h1 className="text-white text-[36px]">AI-Assisted Code Editor</h1> 
                <p className="text-[#B4B4B4] text-base">Magna doesn’t just generate  code—it learns how you code. By understanding your patterns, structure, and preferences, our AI adapts to your style.</p>
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
              <div className="">
                <Image
                className=""
                  src="/images/codeprev.png"
                  alt="banner"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '90%', height: 'auto' }}
                />
              </div>
            </div>

            <div className=""></div>
            <div className=""></div>

          </div>
        </div>
      </div>
    </div>
  );
}

/*
<div
      className={`${geistSans.variable} ${geistMono.variable}  ${ubuntuSans.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <h1 className=" font-[family-name:var(--font-ubuntu-sans)]">ehehehehhehehehe</h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/pages/index.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
    */
