import { FiBarChart2, FiCommand, FiMail, FiMessageCircle, FiSmile, FiZap } from "react-icons/fi";

export const C = {
  textSmall: "Features",
  title: "Analytics that feels like it’s from the future",
  paragraph:
    "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.",
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
    {
      icon: <FiSmile size={24} className="text-brand-600" />,
      topic: "Connect with customers",
      describe:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    },
    {
      icon: <FiCommand size={24} className="text-brand-600" />,
      topic: "Connect the tools you already use",
      describe:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      icon: <FiMessageCircle size={24} className="text-brand-600" />,
      topic: "Our people make the difference",
      describe:
        "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    },
  ],
};
