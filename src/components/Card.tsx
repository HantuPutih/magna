import Image from "next/image";
import "@/styles/card.modules.css";

interface Card {
  title: string,
  imgUrl: string,
  textInfo: string,
  imgAlt: string
}
export default function Card(props: Card) {
  return (
    <div className="card_border_grad flex justify-center items-center rounded-xl">
      <div className="p-5 bg-[url(/images/cardsBg.png)] h-[426px] w-[440px] bg-cover bg-center rounded-xl">
        <div className="flex justify-center items-center my-10">
          <Image
            src={props.imgUrl}
            alt={props.imgAlt}
            width={188}
            height={196}
          />  
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-light text-white">
            {props.title}
          </h5>
          <div className="w-[272px] h-[2px] bg-[#926346]"></div>
          <p className="text-[#B4B4B4]">
            {props.textInfo}
          </p>
        </div>
      </div>
    </div>

  )
}