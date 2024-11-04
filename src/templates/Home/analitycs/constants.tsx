import { FiBarChart2, FiMail, FiZap } from "react-icons/fi";

export const C = {
  tag: "Features",
  title: "Cutting-edge features for advanced analytics",
  paragraph:
    "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.",
  phoneMockup: "/images/analitycs/phone-mockup.png",
  screeMockup: "/images/analitycs/screen-mockup.png",
  features: [
    {
      icon: <FiMail size={24} className="text-brand-600" />,
      topic: "Share team inboxes",
      describe:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: <FiZap size={24} className="text-brand-600" />,
      topic: "Deliver instant answers",
      describe:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: <FiBarChart2 size={24} className="text-brand-600" />,
      topic: "Manage your team with reports",
      describe:
        "Measure what matters with Untopicd’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
  ],
};
