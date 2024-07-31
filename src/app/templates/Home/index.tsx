import { Companies } from "./companies";
import { Features } from "./features";
import { Header } from "./header";
import { Hero } from "./hero";
import { Testimonials } from "./testimonials";

export function HomeTemplate() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Features />
      <Testimonials />
    </>
  );
}
