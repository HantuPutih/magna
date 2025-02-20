import Image from "next/image";
import Link from "next/link";

export default function ReadDocsButton() {
  return (
    <Link href="/">
      <Image
        src="/images/read-docs-btn.png"
        alt="banner"
        width={160}
        height={0}
        sizes="100vw"
        style={{  height: 'auto' }}
      />
    </Link>
  )
}
