import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PricingCard from "../components/PricingCard";
import HeroSection from "../components/HeroSection";
import TrustBadges from "../components/TrustBadges";
import Features from "../components/Features";

const Index = () => {
  const features = [
    "Manage Your Business with Ease",
    "Advanced Reporting & Insights",
    "5X Faster Performance",
    "Priority Customer Support",
    "Seamless Integrations",
    "Automated Invoicing",
    "Expense Tracking",
    "Real-time Financial Insights",
    "Customizable Reports",
    "Premium Customer Service",
    "CRM Integration",
    "Payroll Software Integration",
    "Cloud Backup",
    "Multi-user Access"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <HeroSection />
        <TrustBadges />

        {/* Pricing Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Special Offer - Save $130
            </h2>
            <p className="text-xl text-gray-600">
              Get our most powerful accounting solution at an unbeatable price
            </p>
          </motion.div>
          <PricingCard 
            firstYearPrice="69"
            subsequentPrice="199"
            features={features}
            isPromotional={true}
          />
        </div>

        <Features />

        {/* Delivery Policy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Policy</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                We deliver orders automatically and instantly after purchase, but it can take up to 8 hours if something happens. All product-related services are delivered via email.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6">What if you can't find your delivery?</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Please check your spam or junk folder</li>
                <li>Ensure your payment has been completed successfully</li>
                <li>We will contact you by email if we need more information</li>
                <li>If you haven't received any email, verify your email address and contact our support team</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Refund Policy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Refund Policy</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">30-Day Money Back Guarantee</h3>
                <p className="text-gray-600">
                  Our policy offers a full refund within 30 days of your date of purchase. We'd love to know what went wrong and how we can improve.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Refund Processing</h3>
                <p className="text-gray-600">
                  Our payment process submits the refund immediately. While we process refunds as quickly as possible, your financial institution may take up to 20 days for the refund to reflect in your account.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 500+ businesses that trust QuickBooks Advanced
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2">
            🔥 Claim Your Discount Now <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;