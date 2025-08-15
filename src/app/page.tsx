import Image from "next/image";

import Header from "@/components/Header/Header";
import Video from "@/components/Video/Video";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5 text-main-black">
      <Header />
      <main className="flex flex-col gap-6">
        <div className="grid gap-1 grid-rows-[25rem_12.5rem_12.5rem] md:h-[calc(100vh-100px)] md:grid-cols-[50%_1fr] md:grid-rows-[50%_50%]">
          <Video />
          <Image
            src={"/pexels-paiva-33281897.jpg"}
            alt="model looking to the left"
            width={500}
            height={500}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 35%",
            }}
          />
          <Image
            src={"/model-white-glasses.jpg"}
            alt="model with white glasses looking to her front"
            width={500}
            height={500}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 40%",
            }}
          />
        </div>
        <Link href={"/parfum"} className="md:w-[15rem] md:place-self-end">
          <Button name="Meet Parfum" className="w-full" />
        </Link>
      </main>
      <footer></footer>
    </div>
  );
}
