
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import PricingCard from "../components/PricingCard";
import HeroSection from "../components/HeroSection";
import TrustBadges from "../components/TrustBadges";
import Features from "../components/Features";
import Reviews from "../components/Reviews";
import SpinWheel from "../components/SpinWheel";

const Index = () => {
  const [showSpinWheel, setShowSpinWheel] = useState(false);
  
  useEffect(() => {
    // Check if the wheel has been shown before
    const wheelShown = localStorage.getItem("wheel_shown");
    if (!wheelShown) {
      // Show the wheel after 3 seconds
      const timer = setTimeout(() => {
        setShowSpinWheel(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const features = [
    "Verwalten Sie Ihr Unternehmen mit Leichtigkeit",
    "Erweiterte Berichterstattung & Einblicke",
    "5-mal schnellere Leistung",
    "Vorrangiger Kundensupport",
    "Nahtlose Integrationen",
    "Automatisierte Rechnungsstellung",
    "Spesenerfassung",
    "Finanzielle Einblicke in Echtzeit",
    "Anpassbare Berichte",
    "Premium Kundenservice",
    "CRM-Integration",
    "Integration von Gehaltsabrechnungssoftware",
    "Cloud-Backup",
    "Mehrbenutzerzugriff"
  ];

  const lifetimeFeatures = [
    ...features,
    "Lebenslange Updates",
    "Keine jährlichen Gebühren",
    "Premium-Support für immer",
    "Alle zukünftigen Funktionen inklusive"
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
              Wählen Sie Ihren perfekten Plan
            </h2>
            <p className="text-xl text-gray-600">
              Wählen Sie den Plan, der am besten zu Ihren Geschäftsanforderungen passt
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <PricingCard 
              firstYearPrice="89"
              subsequentPrice="89"
              features={features}
              isPromotional={true}
              currency="EUR"
            />
            <PricingCard 
              isLifetime={true}
              firstYearPrice="199"
              originalPrice="999"
              features={lifetimeFeatures}
              currency="EUR"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Rückerstattungsrichtlinie</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">30-Tage-Geld-zurück-Garantie</h3>
                <p className="text-gray-600">
                  Unsere Richtlinie bietet eine vollständige Rückerstattung innerhalb von 30 Tagen ab Kaufdatum. Für eine sofortige Bearbeitung der Rückerstattung kontaktieren Sie uns bitte unter{" "}
                  <a href="mailto:lethithuytien1905@gmail.com" className="text-primary hover:underline font-medium">
                    lethithuytien1905@gmail.com
                  </a>
                  . Wir würden gerne erfahren, was schief gelaufen ist und wie wir uns verbessern können.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Rückerstattungsbearbeitung</h3>
                <p className="text-gray-600">
                  Sobald wir Ihre Rückerstattungsanfrage unter{" "}
                  <a href="mailto:lethithuytien1905@gmail.com" className="text-primary hover:underline font-medium">
                    lethithuytien1905@gmail.com
                  </a>
                  {" "}erhalten, wird unser Team diese unverzüglich bearbeiten. Während wir Rückerstattungen so schnell wie möglich bearbeiten, kann es bis zu 20 Tage dauern, bis die Rückerstattung auf Ihrem Konto erscheint.
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
            Bereit loszulegen?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schließen Sie sich 5.687+ Unternehmen an, die QuickBooks Advanced vertrauen
          </p>
          <button 
            onClick={scrollToPricing}
            className="bg-primary hover:opacity-90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
          >
            🔥 Wählen Sie jetzt Ihren Plan <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
      
      {showSpinWheel && <SpinWheel onClose={() => setShowSpinWheel(false)} />}
    </div>
  );
};

export default Index;
