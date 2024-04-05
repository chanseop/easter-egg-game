import { Snippet } from "@nextui-org/snippet";
import { title, subtitle } from "@/components/primitives";
import Information from "@/components/Information";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex justify-center gap-2 relative pl-10">
        <div className="absolute -left-6 -top-3">
          <Image
            src="/egg.png"
            alt={"egg이미지"}
            width={60}
            height={60}
          ></Image>
        </div>
        <h1 className={title({ color: "yellow", className: "pb-2" })}>
          EasterEggGame
        </h1>

        <br />
      </div>
      <div>
        <h2 className={subtitle({ class: "mt-4" })}>
          과연 누가 먼저 이스터에그를 먼저 찾을까요?
        </h2>
      </div>
      <div className="mt-8 flex flex-col justify-center items-center gap-4">
        <span>
          <Information />
        </span>
        <Snippet hideSymbol hideCopyButton variant="flat">
          <Link href={"/nextpage"}>시작하기</Link>{" "}
        </Snippet>
      </div>
      <div className="absolute z-50 left-1/2 -translate-x-1/2 text-[10rem] top-[40rem] whitespace-nowrap 3xl:block hidden">
        <div className="flex gap-2 text-indigo-700 items-center">
          <Logo size={200} />
          이스터에그#10
        </div>
      </div>
    </section>
  );
}
