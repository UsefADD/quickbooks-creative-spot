import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";
import PricingCard from "../components/PricingCard";

const Index = () => {
  const features = [
    "Track income & expenses",
    "Send unlimited custom invoices & quotes",
    "Connect your bank",
    "Track GST and VAT",
    "Insights & reports",
    "Progress invoicing",
    "Manage bills & payments",
    "Track employee time",
    "Multi-currency",
    "Recurring transactions and bills",
    "Track inventory",
    "Track project profitability",
    "Manage budgets",
    "For five users, plus your accountant"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#014d40] mb-8">
            QuickBooks Desktop Premier Plus 2024
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400 w-5 h-5 fill-current" />
              <Star className="text-yellow-400 w-5 h-5 fill-current" />
              <Star className="text-yellow-400 w-5 h-5 fill-current" />
              <Star className="text-yellow-400 w-5 h-5 fill-current" />
              <Star className="text-yellow-400 w-5 h-5 fill-current opacity-50" />
              <span className="text-gray-700 ml-2">6,240+ reviews on Capterra</span>
            </div>
          </div>

          <div className="flex justify-center gap-8 flex-wrap mb-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-gray-700">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-gray-700">Unlimited support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-gray-700">Free guided setup</span>
            </div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <PricingCard features={features} />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of businesses that trust QuickBooks Desktop Premier Plus
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2">
            Start your free trial <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;