import { motion } from "framer-motion";
import { ArrowRight, BarChart2, Clock, Cloud, CreditCard, Database, Lock, Users } from "lucide-react";
import PricingCard from "../components/PricingCard";
import FeatureCard from "../components/FeatureCard";

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
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              QuickBooks Desktop Premier Plus 2024
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Streamline your business finances with our most powerful desktop accounting software
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Everything you need to manage your business
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={BarChart2}
              title="Advanced Reporting"
              description="Get detailed insights with customizable reports and dashboards"
            />
            <FeatureCard
              icon={Users}
              title="Multi-User Access"
              description="Collaborate with your team and accountant seamlessly"
            />
            <FeatureCard
              icon={Cloud}
              title="Cloud Backup"
              description="Your data is automatically backed up and secured"
            />
            <FeatureCard
              icon={Database}
              title="Inventory Management"
              description="Track stock levels and manage purchase orders"
            />
            <FeatureCard
              icon={CreditCard}
              title="Payment Processing"
              description="Accept payments and manage transactions easily"
            />
            <FeatureCard
              icon={Lock}
              title="Enhanced Security"
              description="Industry-leading security to protect your data"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600">Get started with our powerful accounting software today</p>
          </motion.div>
          <PricingCard
            price="89.99"
            period="12 months"
            features={features}
          />
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Trusted by Businesses Worldwide</h2>
            <p className="text-gray-600 mb-12">
              Join millions of businesses that trust QuickBooks for their accounting needs
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary mb-2">7M+</span>
                <span className="text-gray-600">Active Users</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary mb-2">180+</span>
                <span className="text-gray-600">Countries</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary mb-2">4.8/5</span>
                <span className="text-gray-600">User Rating</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary mb-2">24/7</span>
                <span className="text-gray-600">Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-white rounded-2xl p-12 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8">
              Try QuickBooks Desktop Premier Plus 2024 risk-free with our 60-day money-back guarantee
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold">
                Start Your Free Trial
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;