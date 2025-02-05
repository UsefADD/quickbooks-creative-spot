import { Shield, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";

const TrustBadges = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
    >
      <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="mb-4 flex justify-center">
          <Shield className="w-12 h-12 text-primary" />
        </div>
        <h3 className="text-3xl font-bold text-primary mb-2">5,687+</h3>
        <p className="text-gray-600">Active businesses</p>
      </div>
      <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="mb-4 flex justify-center">
          <Award className="w-12 h-12 text-primary" />
        </div>
        <h3 className="text-3xl font-bold text-primary mb-2">24/7</h3>
        <p className="text-gray-600">Premium support</p>
      </div>
      <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="mb-4 flex justify-center">
          <Clock className="w-12 h-12 text-primary" />
        </div>
        <h3 className="text-3xl font-bold text-primary mb-2">5X</h3>
        <p className="text-gray-600">Faster performance</p>
      </div>
    </motion.div>
  );
};

export default TrustBadges;