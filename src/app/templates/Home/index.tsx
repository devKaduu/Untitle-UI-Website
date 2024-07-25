import { Companies } from "./companies";
import { Header } from "./header";
import { Hero } from "./hero";

export function HomeTemplate() {
  return (
    <>
      <Header />
      <Hero />
      <Companies/>
    </>
  );
}
