import { motion } from "framer-motion";
import { Star, Shield, Award, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#014d40] mb-6 leading-tight">
          🚀 Limited-Time Offer: Get QuickBooks Advanced for Only $69
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Powerful accounting, seamless automation, and advanced reporting—at an unbeatable price!
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-400 w-5 h-5 fill-current" />
          ))}
          <span className="text-gray-700 ml-2">Trusted by 500+ businesses</span>
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
      </div>
    </motion.div>
  );
};

export default HeroSection;