import { GridContainer } from "@/app/components/grid-container";

import { C } from "./constants";

export function Features() {
  return (
    <section className="py-24">
      <GridContainer>
        <div className="text-center mb-16">
          <small className="block text-base text-brand-700 font-semibold mb-4">{C.textSmall}</small>
          <h2 className="text-4xl text-gray-900 font-semibold mb-5">{C.title}</h2>
          <p className="text-xl/6 text-gray-600 max-w-3xl mx-auto">{C.paragraph}</p>
        </div>
      </GridContainer>
    </section>
  );
}
