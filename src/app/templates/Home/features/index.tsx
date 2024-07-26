import { GridContainer } from "@/app/components/grid-container";

import { C } from "./constants";
import { ItemFeature } from "@/app/components/item-feature";

export function Features() {
  return (
    <section className="py-24">
      <GridContainer>
        <div className="text-center mb-16">
          <small className="block text-base text-brand-700 font-semibold mb-4">{C.textSmall}</small>
          <h2 className="text-4xl text-gray-900 font-semibold mb-5">{C.title}</h2>
          <p className="text-xl/6 text-gray-600 max-w-3xl mx-auto">{C.paragraph}</p>
        </div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-16">
          {C.features.map(({ icon, topic, describe }, index) => (
            <ItemFeature key={index} icon={icon} topic={topic} describe={describe} />
          ))}
        </div>
      </GridContainer>
    </section>
  );
}
