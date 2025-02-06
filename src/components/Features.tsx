
import { motion } from "framer-motion";
import { BarChart3, Rocket, Shield, Users, Zap, Layers, Clock, DollarSign, FileText, Building2, Receipt, Calculator, Mail, Palette, Cpu, UserCheck, ScrollText, RefreshCw } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const coreFeatures = [
    {
      icon: FileText,
      title: "Create Invoices and Track Sales",
      description: "Easily create invoices and sales receipts to track payments, purchases, and transaction history."
    },
    {
      icon: BarChart3,
      title: "Business Insights Dashboard",
      description: "Access financial, tax, and sales data with one click for comprehensive business health analysis."
    },
    {
      icon: Building2,
      title: "Online Banking Integration",
      description: "Download online bank transactions directly into QuickBooks to eliminate manual data entry."
    },
    {
      icon: Calculator,
      title: "Expense Management",
      description: "Track bills and purchase orders in one place, managing payments and settlements efficiently."
    },
    {
      icon: ScrollText,
      title: "GST/HST EFILE",
      description: "Submit GST/HST forms electronically to the CRA with just a few clicks, saving time and resources."
    },
    {
      icon: Receipt,
      title: "Batch Transaction Management",
      description: "Save time by managing multiple transactions simultaneously, including batch deletions and corrections."
    }
  ];

  const advancedFeatures = [
    {
      icon: Mail,
      title: "Faster Payment Collection",
      description: "Automated payment reminders notify customers immediately when their payment is due."
    },
    {
      icon: Palette,
      title: "Professional Templates",
      description: "Create a unified, polished appearance with design templates for customer communications."
    },
    {
      icon: Cpu,
      title: "64-bit Processing Power",
      description: "Run reports, create invoices, and reconcile accounts faster with enhanced processing capabilities."
    },
    {
      icon: UserCheck,
      title: "Streamlined Payroll",
      description: "Simplified payroll processing with automatic tax calculations and form filling."
    },
    {
      icon: RefreshCw,
      title: "Automatic Updates",
      description: "Stay current with automatic tax table updates and the latest payroll information."
    }
  ];

  const newFeatures = [
    {
      icon: Layers,
      title: "Intercompany Transactions",
      description: "Seamlessly issue bills or checks between separate company files."
    },
    {
      icon: Shield,
      title: "Advanced Inventory Management",
      description: "Organize inventory with categories and track expiration dates for serial/lot numbers."
    },
    {
      icon: Zap,
      title: "Mobile Mileage Tracking",
      description: "Track business mileage effortlessly using the QuickBooks mobile app."
    },
    {
      icon: DollarSign,
      title: "Cash Flow Hub",
      description: "Get comprehensive insights into your company's cash flow patterns."
    },
    {
      icon: Clock,
      title: "Quick Payment Links",
      description: "Generate payment links for quick collection without creating invoices."
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            All the Tools You Need to Run Your Business with Confidence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Save time and streamline your business operations with our comprehensive suite of tools designed for modern businesses.
          </p>
        </motion.div>

        {/* Core Features Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        {/* Advanced Features Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Advanced Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advancedFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        {/* New Features Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Latest Additions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {newFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose QuickBooks?</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              QuickBooks offers a user-friendly interface with powerful functionality and simple instructions, supporting all product lines from Pro to Enterprise. With just Google Chrome and an internet connection, you can manage your finances quickly and easily.
            </p>
            <p>
              Running seamlessly on Windows 10, QuickBooks makes financial management straightforward with easy backup creation and Windows component updates. The latest version includes enhanced features like automated calculations, cash flow tracking dashboards, and robust data security with password protection and encryption.
            </p>
            <p>
              For online users, QuickBooks offers advanced features including email receipts, inventory monitoring with barcode scanning, and comprehensive reporting tools. Whether you're a small business or growing enterprise, QuickBooks provides the perfect solution for efficient bookkeeping and financial management.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
