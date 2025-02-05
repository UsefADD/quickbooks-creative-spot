import { motion } from "framer-motion";
import { Check, DollarSign, Calendar, Tag, Timer } from "lucide-react";

interface PricingCardProps {
  isPromotional?: boolean;
  firstYearPrice: string;
  subsequentPrice: string;
  features: string[];
}

const PricingCard = ({ isPromotional, firstYearPrice, subsequentPrice, features }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-xl p-8 relative"
    >
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          SAVE $130 TODAY
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">QuickBooks Advanced</h2>
        <div className="space-y-6">
          {/* First Year Price */}
          <div>
            <div className="text-gray-500 line-through">US${subsequentPrice}</div>
            <div className="text-4xl font-bold text-gray-900">US${firstYearPrice}</div>
            <div className="text-gray-600">First year</div>
          </div>
          
          {/* After First Year Price */}
          <div className="pt-4 border-t border-gray-100">
            <div className="text-2xl font-semibold text-gray-700">US${subsequentPrice}</div>
            <div className="text-gray-600">After first year</div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4 mb-8">
        <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2">
          🔥 Claim Your Discount Now
        </button>
      </div>

      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
            <span className="text-slate-700">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
        <div className="flex items-center gap-2 justify-center text-emerald-600">
          <Timer className="w-5 h-5" />
          <span className="font-medium">Limited time offer - Save $130 today!</span>
        </div>
        <div className="text-center text-sm text-gray-600">
          100% Risk-Free | 30-Day Money Back Guarantee
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard;