import { GridContainer } from "@/components/grid-container";

import { C } from "./constants";
import Image from "next/image";
import { ItemFeature } from "@/components/item-feature";

export function Analitycs() {
  return (
    <section className="py-24">
      <GridContainer>
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 bg-brand-50 rounded-2xl text-sm/snug font-medium text-brand-700">
            {C.tag}
          </span>
          <h2 className="text-4xl font-semibold text-gray-900 mt-4 mb-6">{C.title}</h2>
          <p className="text-xl/normal text-gray-600 max-w-3xl mx-auto">{C.paragraph}</p>
        </div>
        <div className="relative w-full max-w-[888px] h-[561px] mx-auto mb-24">
          <Image
            src={C.screeMockup}
            alt="Macbook Mockup"
            width={768}
            height={512}
            className="absolute -top-[20px] right-[35px]"
          />
          <Image
            src={C.phoneMockup}
            alt="Iphone Mockup"
            width={244}
            height={497}
            className="absolute bottom-0 left-0 "
          />
        </div>
        <div className="flex items-start justify-between">
          {C.features.map(({ icon, topic, describe }, index) => (
            <ItemFeature key={index} icon={icon} topic={topic} describe={describe} />
          ))}
        </div>
      </GridContainer>
    </section>
  );
}
