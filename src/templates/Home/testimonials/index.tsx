import { GridContainer } from "@/components/grid-container";
import Image from "next/image";

import { C } from "./constants";

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <GridContainer className="text-center">
        <Image src={C.logo.image} width={140} height={40} alt={C.logo.alt} className="mx-auto" />
        <h2 className="my-8 text-5xl/tight font-medium text-gray-900 -tracking-[0.96px]">{C.title}</h2>
        <div>
          <Image src={C.avatar.image} width={64} height={64} alt={C.avatar.alt} className="mx-auto mb-4" />
          <span className="block text-lg font-medium text-gray-900 mb-1">{C.name}</span>
          <small className="block text-base text-gray-600">{C.jobPosition}</small>
        </div>
      </GridContainer>
    </section>
  );
}
