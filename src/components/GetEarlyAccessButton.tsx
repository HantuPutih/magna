import Image from "next/image";
import Link from "next/link";

export default function GetEarlyAccessButton() {
  return (
    <Link href="/" className="transition-all hover:scale-110">
      <Image
        src="/images/get-early-access-btn.png"
        alt="banner"
        width={190}
        height={0}
        sizes="100vw"
        style={{ height: 'auto' }}
      />
    </Link>
  )
}