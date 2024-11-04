import Image from "next/image";

import { GridContainer } from "@/components/grid-container";
import { ItemMenu } from "@/components/item-menu";

import { C } from "./constants";

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full h-[80px] bg-white border-b
    border-b-gray-100 flex items-center"
    >
      <GridContainer className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Image src={C.logo.image} width={142} height={32} alt={C.logo.alt} />
          <nav className="flex items-center gap-8">
            {C.menuItens.map(({ url, title, dropDown }, index) => (
              <ItemMenu key={index} url={url} title={title} hasDropdown={dropDown} />
            ))}
          </nav>
        </div>
        <div>
          <Image src={C.avatar.image} width={40} height={40} alt={C.avatar.alt} />
        </div>
      </GridContainer>
    </header>
  );
}
