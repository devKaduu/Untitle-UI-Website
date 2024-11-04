import { HomeTemplate } from "@/templates/Home";
import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Home",
  description: "Description Home",
};

const Home = (): ReactNode => {
  return <HomeTemplate />;
};

export default Home;
