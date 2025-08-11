import Image from "next/image";

import Button from "@/components/Button";
import Header from "@/components/Header/Header";

export default function ParfumPage() {
  return (
    <div className="p-5">
      <Header />
      <main className="flex flex-col gap-6">
        <div className="grid grid-cols-[1fr_1fr] grid-rows-[20rem_10rem_10rem] gap-1">
          <Image
            src={"/parfum-product-1.jpg"}
            alt="parfum standing on sand"
            width={200}
            height={200}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              gridColumn: "1/3",
            }}
          />
          <Image
            src={"/parfum-product-2.jpg"}
            alt="parfum front view"
            width={200}
            height={200}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <Image
            src={"/parfum-product-3.jpg"}
            alt="parfum upper view"
            width={200}
            height={200}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 35%",
            }}
          />
          <Image
            src={"/parfum-product-4.jpg"}
            alt="woman outside looking at the parfum"
            width={200}
            height={200}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="grid gap-4">
          <div>
            <h2 className="text-2xl">Parfum Coeur D'Or</h2>
            <span className="text-sec-inactive">
              Je t'offre des fleurs d'or.
            </span>
          </div>
          <div>COLOR SELECTED</div>
          <div>50 ML OR 100ML</div>
          <div>
            <h3 className="text-2xl">R$ 999,99</h3>
            <h4 className="text-xl text-sec-inactive">12x R$ 83,25</h4>
          </div>
          <Button name="Buy" className="w-full" />
        </div>
      </main>
    </div>
  );
}
