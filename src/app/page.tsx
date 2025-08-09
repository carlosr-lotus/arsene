import Image from "next/image";

import Header from "@/components/Header/Header";
import Video from "@/components/Video/Video";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="font-lexend p-5 text-main-black">
      <Header />
      <main className="grid gap-1 grid-rows-[25rem_12.5rem_12.5rem]">
        <Video />
        <Image
          src={"/pexels-paiva-33281897.jpg"}
          alt="model looking to the left"
          width={1000}
          height={1000}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 35%",
          }}
        />
        <Image
          src={"/pexels-mohammad-gharib-2150556332-33280212.jpg"}
          alt="model with white glasses looking to her front"
          width={1000}
          height={1000}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
          }}
        />
        <Button className="mt-6" />
      </main>
      <footer className=""></footer>
    </div>
  );
}
