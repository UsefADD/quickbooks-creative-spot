import { motion } from "framer-motion";
import { BarChart3, Rocket, Shield, Users, Zap, Layers } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: "Manage Your Business with Ease",
      description: "Automate invoices, track expenses, and streamline your workflow efficiently."
    },
    {
      icon: BarChart3,
      title: "Advanced Reporting & Insights",
      description: "Gain real-time financial insights with customizable reports and analytics."
    },
    {
      icon: Zap,
      title: "5X Faster Performance",
      description: "Speed up accounting tasks with an optimized and intuitive interface."
    },
    {
      icon: Shield,
      title: "Priority Customer Support",
      description: "Get premium customer service whenever you need assistance."
    },
    {
      icon: Layers,
      title: "Seamless Integrations",
      description: "Sync with your favorite business tools, including CRM & payroll software."
    },
    {
      icon: Users,
      title: "Multi-User Access",
      description: "Collaborate with your team efficiently with role-based permissions."
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose QuickBooks Advanced?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the powerful features that make QuickBooks Advanced the perfect solution for your business
          </p>
        </motion.div>

        {/* Interface Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 relative"
        >
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="QuickBooks Dashboard"
            className="rounded-xl shadow-xl border border-gray-200"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent rounded-xl" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Additional Interface Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16 relative"
        >
          <img
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
            alt="QuickBooks Reports"
            className="rounded-xl shadow-xl border border-gray-200"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white/50 to-transparent rounded-xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Features;