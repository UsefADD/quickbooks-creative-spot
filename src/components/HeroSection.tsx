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
          🚀 Transform your business with our exclusive QuickBooks Advanced offers! Choose our annual plan at just $89/year (Regular: $229/year) with our unprecedented price-lock guarantee - ensuring you'll never face price increases. Or maximize your savings with our groundbreaking lifetime access for a one-time payment of $299 (Regular: $999). Join thousands of successful businesses already benefiting from these exceptional savings. This offer won't last long - secure your future success today before it's gone forever!
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