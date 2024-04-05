import { Snippet } from "@nextui-org/snippet";
import { title, subtitle } from "@/components/primitives";
import Information from "@/components/Information";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex justify-center items-center">
        <h1 className={title({ color: "yellow" })}>스파로스&nbsp;</h1>
        <h1 className={title({ color: "blue" })}>VS&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>KDT&nbsp;</h1>
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
    </section>
  );
}
