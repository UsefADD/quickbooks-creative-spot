
import { motion } from "framer-motion";
import { BarChart3, Rocket, Shield, Users, Zap, Layers } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: "Verwalten Sie Ihr Unternehmen mit Leichtigkeit",
      description: "Automatisieren Sie Rechnungen, verfolgen Sie Ausgaben und optimieren Sie Ihren Workflow effizient."
    },
    {
      icon: BarChart3,
      title: "Erweiterte Berichte & Einblicke",
      description: "Erhalten Sie Finanzeinblicke in Echtzeit mit anpassbaren Berichten und Analysen."
    },
    {
      icon: Zap,
      title: "5-mal schnellere Leistung",
      description: "Beschleunigen Sie Buchhaltungsaufgaben mit einer optimierten und intuitiven Benutzeroberfläche."
    },
    {
      icon: Shield,
      title: "Vorrangiger Kundensupport",
      description: "Erhalten Sie Premium-Kundendienst, wann immer Sie Unterstützung benötigen."
    },
    {
      icon: Layers,
      title: "Nahtlose Integrationen",
      description: "Synchronisieren Sie mit Ihren bevorzugten Geschäftstools, einschließlich CRM & Gehaltsabrechnungssoftware."
    },
    {
      icon: Users,
      title: "Mehrbenutzerzugriff",
      description: "Arbeiten Sie effizient mit Ihrem Team durch rollenbasierte Berechtigungen zusammen."
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
            Warum QuickBooks Advanced wählen?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie die leistungsstarken Funktionen, die QuickBooks Advanced zur perfekten Lösung für Ihr Unternehmen machen
          </p>
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
      </div>
    </div>
  );
};

export default Features;
