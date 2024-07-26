import { ReactNode } from "react";
import { IconType } from "react-icons";

interface ItemFeatureProps {
  icon: ReactNode;
  topic: string;
  describe: string;
}

export function ItemFeature({ icon, topic, describe }: ItemFeatureProps) {
  return (
    <div className="text-center w-full max-w-96">
      <div className="w-12 h-12 bg-brand-100 rounded-full mx-auto border-8 border-brand-50 mb-5 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-gray-900 text-xl/6 font-medium mb-2">{topic}</h3>
      <p className="text-gray-600 leading-6">{describe}</p>
    </div>
  );
}
