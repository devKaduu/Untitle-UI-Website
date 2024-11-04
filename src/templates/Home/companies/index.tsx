import { GridContainer } from "@/components/grid-container";

import { C } from "./constants";
import Image from "next/image";

export function Companies() {
  return (
    <section className="pt-24">
      <GridContainer>
        <p className="text-center text-gray-600 font-medium mb-8">{C.text}</p>
        <div className="flex items-center justify-between">
          {C.logos.map(({ image, width, height, alt }, index) => (
            <Image key={index} src={image} width={width} height={height} alt={alt} />
          ))}
        </div>
        <hr className="mt-24 border-gray-200" />
      </GridContainer>
    </section>
  );
}
