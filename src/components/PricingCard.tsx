import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingCardProps {
  isPromotional?: boolean;
  price: string;
  period: string;
  features: string[];
}

const PricingCard = ({ isPromotional, price, period, features }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative p-6 rounded-2xl shadow-lg backdrop-blur-sm ${
        isPromotional
          ? "bg-white/90 border-2 border-primary"
          : "bg-white/80 border border-gray-200"
      }`}
    >
      {isPromotional && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
            Best Value
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <div className="text-3xl font-bold mb-2">${price}</div>
        <div className="text-gray-600">{period}</div>
      </div>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 py-3 rounded-lg transition-all duration-200 ${
        isPromotional
          ? "bg-primary text-white hover:bg-primary/90"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}>
        Get Started
      </button>
    </motion.div>
  );
};

export default PricingCard;