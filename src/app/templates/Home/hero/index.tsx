import { GridContainer } from "@/app/components/grid-container";
import { TagFeature } from "@/app/components/tag-feature";

import { C } from "./constants";
import { AreaCtas } from "@/app/components/area-ctas";
import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-24">
      <GridContainer>
        <div className="text-center">
          <TagFeature />
          <h1 className="text-6xl font-semibold text-gray-900 mt-4 mb-6">{C.title}</h1>
          <p className="text-xl/6 text-gray-600 max-w-3xl mx-auto mb-12">{C.subTitle}</p>
          <AreaCtas />
        </div>
        <Image src="/images/hero-macbook.jpg" width={1216} height={480} alt="Mockup macbook" />
        <hr className="border-gray-200" />
      </GridContainer>
    </section>
  );
}
