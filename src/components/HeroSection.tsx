import { motion } from "framer-motion";
import { Star, Shield, Award, Clock, Infinity } from "lucide-react";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-4 mb-4">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
            Limited Time Offer
          </span>
          <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-medium">
            New: Lifetime Plan - Save $700
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#014d40] mb-6 leading-tight">
          QuickBooks Advanced at Unbeatable Prices
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          🚀 Don't miss out on our exclusive deals! Choose between our incredible first-year offer at just $69 (that's a massive 65% savings!) or unlock lifetime access for a one-time payment of $299 (Regular price: $999). Imagine never paying for QuickBooks again - that's thousands in savings over the years! Act fast, these unprecedented offers won't last long!
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-400 w-5 h-5 fill-current" />
          ))}
          <span className="text-gray-700 ml-2">Trusted by 5,687+ businesses</span>
        </div>
      </div>

      <div className="flex justify-center gap-8 flex-wrap mb-8">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-emerald-600" />
          <span className="text-gray-700">Authorized Reseller</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-emerald-600" />
          <span className="text-gray-700">100% Secure Purchase</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-emerald-600" />
          <span className="text-gray-700">Instant Activation</span>
        </div>
        <div className="flex items-center gap-2">
          <Infinity className="w-5 h-5 text-primary" />
          <span className="text-gray-700">Lifetime Access Available</span>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;