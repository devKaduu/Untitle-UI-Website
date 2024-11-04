import { Analitycs } from "./analitycs";
import { Companies } from "./companies";
import { Features } from "./features";
import { Header } from "./header";
import { Hero } from "./hero";
import { Questions } from "./questions";
import { Testimonials } from "./testimonials";

export function HomeTemplate() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Features />
      <Testimonials />
      <Analitycs />
      <Questions />
    </>
  );
}
