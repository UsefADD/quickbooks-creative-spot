import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingCardProps {
  price: string;
  period: string;
  features: string[];
}

const PricingCard = ({ price, period, features }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-sm p-8"
    >
      <div className="text-center mb-8">
        <div className="bg-blue-50 text-blue-900 py-2 px-4 rounded-full inline-block mb-6">
          50% off today
        </div>
        <h3 className="text-2xl font-semibold mb-2">
          Save US${price}/yr for {period}
        </h3>
      </div>
      
      <div className="space-y-4">
        <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-lg text-lg font-semibold transition-colors">
          Buy now
        </button>
        <button className="w-full bg-slate-800 hover:bg-slate-900 text-white py-4 rounded-lg text-lg font-semibold transition-colors">
          Start free trial
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Check className="h-5 w-5 text-slate-600 mt-0.5" />
            <span className="text-slate-700 text-lg">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingCard;