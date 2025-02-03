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
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-[#014d40] mb-6">
              QuickBooks Desktop Premier Plus 2024
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The most powerful QuickBooks Desktop solution for your growing business
            </p>
          </div>

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

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
        >
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-primary mb-2">7M+</h3>
            <p className="text-gray-600">Active users worldwide</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-primary mb-2">98%</h3>
            <p className="text-gray-600">Customer satisfaction</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-primary mb-2">24/7</h3>
            <p className="text-gray-600">Expert support</p>
          </div>
        </motion.div>

        {/* Pricing Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Special Offer - 50% Off
            </h2>
            <p className="text-xl text-gray-600">
              Get our most powerful accounting solution at an unbeatable price
            </p>
          </motion.div>
          <PricingCard 
            firstYearPrice="89.99"
            subsequentPrice="119.99"
            features={features}
            isPromotional={true}
          />
        </div>

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

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Eligible Refund Reasons</h3>
                <ul className="space-y-4 text-gray-600">
                  <li>
                    <span className="font-semibold">Non-delivery:</span> Claims must be submitted within 7 days from the order date. We'll assist with redelivery or alternate email options.
                  </li>
                  <li>
                    <span className="font-semibold">Major defects:</span> If we cannot correct issues within 48 hours of the initial complaint, a full refund or replacement will be offered.
                  </li>
                  <li>
                    <span className="font-semibold">Product not as described:</span> Must be reported within 30 days of purchase with clear evidence provided in writing.
                  </li>
                </ul>
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
            Join thousands of businesses that trust QuickBooks Desktop Premier Plus
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2">
              Buy now <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2">
              Contact sales
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
