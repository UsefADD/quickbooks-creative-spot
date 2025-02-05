import { motion } from "framer-motion";
import { Check, DollarSign, Calendar, Tag, Timer, Infinity } from "lucide-react";
import { useEffect, useState } from "react";

interface PricingCardProps {
  isPromotional?: boolean;
  isLifetime?: boolean;
  firstYearPrice: string;
  subsequentPrice?: string;
  originalPrice?: string;
  features: string[];
}

const PricingCard = ({ 
  isPromotional, 
  isLifetime, 
  firstYearPrice, 
  subsequentPrice, 
  originalPrice,
  features 
}: PricingCardProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl shadow-xl p-8 relative ${isLifetime ? 'border-2 border-primary' : ''}`}
    >
      {isPromotional && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            SAVE $100 TODAY
          </div>
        </div>
      )}
      
      {isLifetime && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-2">
            <Infinity className="w-4 h-4" /> SAVE $700 TODAY
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          QuickBooks Advanced {isLifetime ? "Lifetime" : "Annual"} Plan
        </h2>
        <div className="space-y-6">
          {isLifetime ? (
            <>
              <div>
                <div className="text-gray-500 line-through text-xl">US${originalPrice}</div>
                <div className="text-4xl font-bold text-gray-900">US${firstYearPrice}</div>
                <div className="text-gray-600">One-time payment</div>
              </div>
              <div className="h-[72px]"></div>
            </>
          ) : (
            <>
              <div>
                <div className="text-gray-500 line-through">US$169</div>
                <div className="text-4xl font-bold text-gray-900">US${firstYearPrice}</div>
                <div className="text-gray-600">First year</div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <div className="text-2xl font-semibold text-gray-700">US${subsequentPrice}</div>
                <div className="text-gray-600">After first year (Save $50 on renewal)</div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="bg-red-50 rounded-lg p-4 mb-6">
        <div className="text-center text-red-600 font-semibold">
          Offer Ends In:
        </div>
        <div className="text-center text-2xl font-bold text-red-700">
          {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </div>
      </div>
      
      <div className="space-y-4 mb-8">
        {isLifetime ? (
          <button className="w-full bg-primary hover:opacity-90 text-white py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2">
            🔥 Get Lifetime Access Now
          </button>
        ) : (
          <button className="w-full bg-emerald-600 hover:opacity-90 text-white py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2">
            🔥 Claim Your Discount Now
          </button>
        )}
      </div>

      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Check className={`h-5 w-5 ${isLifetime ? 'text-primary' : 'text-emerald-600'} mt-0.5 flex-shrink-0`} />
            <span className="text-slate-700">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
        <div className={`flex items-center gap-2 justify-center ${isLifetime ? 'text-primary' : 'text-emerald-600'}`}>
          {isLifetime ? (
            <Infinity className="w-5 h-5" />
          ) : (
            <Timer className="w-5 h-5" />
          )}
          <span className="font-medium">
            {isLifetime ? "One-time payment, lifetime access!" : "Limited time offer - Save $100 today & $50 on renewal!"}
          </span>
        </div>
        <div className="text-center text-sm text-gray-600">
          100% Risk-Free | 30-Day Money Back Guarantee
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard;