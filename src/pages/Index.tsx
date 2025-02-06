import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PricingCard from "../components/PricingCard";
import HeroSection from "../components/HeroSection";
import TrustBadges from "../components/TrustBadges";
import Features from "../components/Features";
import Reviews from "../components/Reviews";

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

  const lifetimeFeatures = [
    ...features,
    "Lifetime Updates",
    "No Annual Fees",
    "Premium Support Forever",
    "All Future Features Included"
  ];

  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing-section');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <HeroSection />
        
        {/* Pricing Section */}
        <div id="pricing-section" className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-gray-600">
              Select the plan that best fits your business needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <PricingCard 
              firstYearPrice="89"
              subsequentPrice="89"
              features={features}
              isPromotional={true}
            />
            <PricingCard 
              isLifetime={true}
              firstYearPrice="299"
              originalPrice="999"
              features={lifetimeFeatures}
            />
          </div>
        </div>
        
        <Features />
        <Reviews />
        
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
                  Our policy offers a full refund within 30 days of your date of purchase. For immediate refund processing, please contact us at{" "}
                  <a href="mailto:lethithuytien1905@gmail.com" className="text-primary hover:underline font-medium">
                    lethithuytien1905@gmail.com
                  </a>
                  . We'd love to know what went wrong and how we can improve.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Refund Processing</h3>
                <p className="text-gray-600">
                  Once we receive your refund request at{" "}
                  <a href="mailto:lethithuytien1905@gmail.com" className="text-primary hover:underline font-medium">
                    lethithuytien1905@gmail.com
                  </a>
                  , our team will process it immediately. While we handle refunds as quickly as possible, your financial institution may take up to 20 days for the refund to reflect in your account.
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
            Join 5,687+ businesses that trust QuickBooks Advanced
          </p>
          <button 
            onClick={scrollToPricing}
            className="bg-primary hover:opacity-90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
          >
            🔥 Choose Your Plan Now <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
