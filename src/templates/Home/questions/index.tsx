import { GridContainer } from "@/components/grid-container";

export function Questions() {
  return (
    <section className="py-24">
      <GridContainer>
        <div className="text-center mb-16 space-y-5">
          <h2 className="text-4xl font-semibold text-gray-900 -tracking-[0.72px]">Frequently asked questions</h2>
          <p className="text-xl/6 text-gray-600">Everything you need to know about the product and billing.</p>
        </div>
        <div></div>
      </GridContainer>
    </section>
  );
}
