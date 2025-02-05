import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, DollarSign, Infinity, Shield } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLifetime = location.pathname.includes("lifetime");
  
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const benefits = isLifetime ? [
    "One-time payment, lifetime access to all features",
    "Save $700+ in annual subscription fees",
    "All future updates and features included",
    "Premium lifetime support",
    "No recurring charges ever",
    "Access to exclusive lifetime member community",
    "Priority feature requests",
    "Advanced business analytics",
    "Unlimited data storage",
    "Custom reporting tools",
  ] : [
    "Lock in $89/year pricing forever (Regular price: $229/year)",
    "Save $140 every year when you join now",
    "Full access to all premium features",
    "Priority customer support",
    "Regular updates and new features",
    "Advanced reporting & insights",
    "Cloud backup included",
    "Multi-user access",
    "CRM integration",
    "Automated workflows",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <button
            onClick={() => navigate("/")}
            className="mb-8 text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            ← Back to plans
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {isLifetime ? "Lifetime Access" : "Annual Plan"}
            </h1>
            
            <div className="mb-8">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {isLifetime ? "$299" : "$89"}
                <span className="text-lg text-gray-500 ml-2">
                  {isLifetime ? "one-time payment" : "/year"}
                </span>
              </div>
              {!isLifetime && (
                <div className="text-gray-500 line-through mb-2">Regular price: $229/year</div>
              )}
            </div>

            {!isLifetime && (
              <div className="bg-red-50 rounded-lg p-4 mb-8">
                <div className="text-center text-red-600 font-semibold">
                  ⚡ Special Offer Ends In:
                </div>
                <div className="text-center text-2xl font-bold text-red-700">
                  {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-center text-red-600 mt-2">
                  Lock in this special price forever when you join before the timer ends!
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  {isLifetime ? <Infinity className="w-5 h-5 text-primary" /> : <Clock className="w-5 h-5 text-emerald-600" />}
                  Key Benefits
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 ${isLifetime ? "text-primary" : "text-emerald-600"} mt-1`} />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <DollarSign className={`w-5 h-5 ${isLifetime ? "text-primary" : "text-emerald-600"}`} />
                  Why Choose This Plan?
                </h2>
                <div className="prose text-gray-700">
                  {isLifetime ? (
                    <div className="space-y-4">
                      <p>
                        With our Lifetime Access plan, you'll make a one-time payment and never worry about subscription fees again. This is perfect for businesses looking for a long-term solution without recurring charges.
                      </p>
                      <p>
                        You'll save over $700 in the first few years alone compared to the annual plan, and your savings will continue to grow year after year.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p>
                        Lock in our special rate of just $89/year instead of the regular $229/year - that's a 61% discount! This special pricing will remain locked in for as long as you maintain your subscription.
                      </p>
                      <p>
                        Act fast - this offer is only available for a limited time. Join now to secure your permanent discount and start saving $140 every year!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <a
                href={isLifetime 
                  ? "https://whop.com/checkout/plan_2MhzxfTcW3yGV?d2c=true"
                  : "https://whop.com/checkout/plan_qsdkzacMGuji2?d2c=true"}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full ${
                  isLifetime ? "bg-primary" : "bg-emerald-600"
                } hover:opacity-90 text-white py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2`}
              >
                🔥 {isLifetime ? "Get Lifetime Access Now" : "Lock In Your $89/Year Price Now"}
                <ArrowRight className="w-5 h-5" />
              </a>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>30-Day Money Back Guarantee • Secure Payment • Instant Access</span>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What Happens After Purchase?
                </h3>
                <p className="text-gray-700 mb-4">
                  {isLifetime ? (
                    "Upon completing your lifetime purchase, our team will verify your transaction and send detailed access instructions to your registered email address within 24 hours."
                  ) : (
                    "After confirming your annual subscription, our team will verify your payment and send comprehensive setup instructions to your registered email address within 24 hours."
                  )}
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Important:</strong> Please check your spam/junk folder if you haven't received our email in your inbox. For any assistance, our support team is ready to help ensure a smooth onboarding process.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderPage;