import { motion } from "framer-motion";
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            QuickBooks Desktop Premier Plus 2024
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Streamline your business finances with our most powerful desktop accounting software
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <PricingCard
            price="215"
            period="12 months"
            features={features}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;