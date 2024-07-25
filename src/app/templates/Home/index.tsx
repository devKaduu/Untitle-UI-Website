import { Companies } from "./companies";
import { Features } from "./features";
import { Header } from "./header";
import { Hero } from "./hero";

export function HomeTemplate() {
  return (
    <>
      <Header />
      <Hero />
      <Companies/>
      <Features/>
    </>
  );
}
