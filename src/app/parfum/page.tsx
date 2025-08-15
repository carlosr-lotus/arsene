import Image from "next/image";

import Button from "@/components/Button";
import Header from "@/components/Header/Header";

export default function ParfumPage() {
  return (
    <div className="p-5">
      <Header />
      <main className="flex flex-col gap-6 md:grid md:grid-cols-[1fr_1fr]">
        <div className="grid gap-1 grid-cols-[1fr_1fr] grid-rows-[20rem_10rem_10rem] md:grid-rows-[calc(100vh-100px)_auto_auto]">
          <div className="col-start-1 col-end-3">
            <Image
              src={"/parfum-product-1.jpg"}
              alt="parfum standing on sand"
              width={400}
              height={400}
              className="w-full h-full object-cover object-[center_55%] md:object-[center_60%]"
              priority
            />
          </div>

          <div>
            <Image
              src={"/parfum-product-2.jpg"}
              alt="parfum front view"
              width={300}
              height={300}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="col-start-2 row-start-2 row-end-4">
            <Image
              src={"/parfum-product-3.jpg"}
              alt="parfum upper view"
              width={400}
              height={400}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div>
            <Image
              src={"/parfum-product-4.jpg"}
              alt="woman outside looking at the parfum"
              width={300}
              height={300}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="sticky top-4 grid gap-4 md:h-fit">
          <div>
            <h2 className="text-2xl">Parfum Coeur D'Or</h2>
            <span className="text-sec-inactive">
              Je t'offre des fleurs d'or.
            </span>
          </div>
          <div className="w-fit p-0.5 border-2 border-border-product-color rounded-full">
            <div className="p-5 bg-product-color rounded-full"></div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-28 h-16 flex justify-center items-center border-2 border-active-product-size rounded">
              50ml
            </div>
            <div className="w-28 h-16 flex justify-center items-center border-2 border-inactive-product-size rounded">
              100ml
            </div>
          </div>
          <div>
            <h3 className="text-2xl">R$ 899,99</h3>
            <h4 className="text-sec-inactive">12x R$ 74,91</h4>
          </div>
          <Button name="Buy" className="w-full md:w-60" />
        </div>
      </main>
    </div>
  );
}
