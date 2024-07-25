import { FiArrowRight } from "react-icons/fi";

export function TagFeature() {
  return (
    <div className="inline-flex items-center gap-3 p-1 pr-[10px] bg-brand-50 rounded-2xl">
      <span className="bg-white h-6 inline-block px-[10px] rounded-2xl text-sm/6 font-medium text-brand-700">
        New feature
      </span>
      <a href="#" className="flex items-center gap-1 text-sm/6 font-medium text-brand-700 hover:opacity-50 transition-opacity">
        Check out the team dashboard <FiArrowRight />
      </a>
    </div>
  );
}
