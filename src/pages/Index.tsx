import { motion } from "framer-motion";
import {
  BarChart3,
  Clock,
  CreditCard,
  DollarSign,
  FileText,
  Shield,
} from "lucide-react";
import PricingCard from "../components/PricingCard";
import FeatureCard from "../components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
            Limited Time Offer
          </span>
          <h1 className="mt-6 text-5xl font-bold text-gray-900 mb-6">
            QuickBooks Desktop Premier Plus 2024
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline your business finances with powerful accounting tools designed
            for growing businesses.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Start Free Trial
            </button>
            <button className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your business finances in one place
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={BarChart3}
              title="Advanced Reporting"
              description="Generate detailed financial reports with just a few clicks"
            />
            <FeatureCard
              icon={FileText}
              title="Invoice Management"
              description="Create and track professional invoices effortlessly"
            />
            <FeatureCard
              icon={DollarSign}
              title="Expense Tracking"
              description="Monitor all your business expenses in real-time"
            />
            <FeatureCard
              icon={Shield}
              title="Secure Platform"
              description="Bank-level security to protect your financial data"
            />
            <FeatureCard
              icon={Clock}
              title="Time Saving"
              description="Automate recurring tasks and save precious time"
            />
            <FeatureCard
              icon={CreditCard}
              title="Payment Processing"
              description="Accept payments online with integrated processing"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              isPromotional={true}
              price="89.99"
              period="First Year"
              features={[
                "Full Feature Access",
                "Premium Support",
                "Automatic Updates",
                "Cloud Backup",
                "Multiple User Access",
              ]}
            />
            <PricingCard
              price="119.99"
              period="Subsequent Years"
              features={[
                "Full Feature Access",
                "Premium Support",
                "Automatic Updates",
                "Cloud Backup",
                "Multiple User Access",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust QuickBooks Desktop Premier Plus
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;