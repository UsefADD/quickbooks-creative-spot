
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, DollarSign, Infinity, Shield } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLifetime = location.pathname.includes("lifetime");
  
  const [timeLeft, setTimeLeft] = useState({
    hours: 7,
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

  const handleWhopCheckout = () => {
    const checkoutUrl = isLifetime 
      ? "https://whop.com/checkout/plan_2MhzxfTcW3yGV?d2c=true"
      : "https://whop.com/checkout/plan_qsdkzacMGuji2?d2c=true";
    window.location.href = checkoutUrl;
  };

  const benefits = isLifetime ? [
    "Einmalige Zahlung, lebenslanger Zugang zu allen Funktionen",
    "Sparen Sie 800+ EUR an jährlichen Abonnementgebühren",
    "Alle zukünftigen Updates und Funktionen inbegriffen",
    "Premium lebenslanger Support",
    "Keine wiederkehrenden Kosten jemals",
    "Zugang zur exklusiven Lifetime-Mitglieder-Community",
    "Priorisierte Feature-Anfragen",
    "Erweiterte Geschäftsanalysen",
    "Unbegrenzte Datenspeicherung",
    "Anpassbare Reporting-Tools",
  ] : [
    "Fixieren Sie den Preis von 89 EUR/Jahr für immer (Normalpreis: 229 EUR/Jahr)",
    "Sparen Sie jedes Jahr 140 EUR, wenn Sie jetzt beitreten",
    "Voller Zugang zu allen Premium-Funktionen",
    "Vorrangiger Kundensupport",
    "Regelmäßige Updates und neue Funktionen",
    "Erweiterte Berichte & Einblicke",
    "Cloud-Backup inklusive",
    "Mehrbenutzerzugriff",
    "CRM-Integration",
    "Automatisierte Arbeitsabläufe",
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
            ← Zurück zu den Plänen
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {isLifetime ? "Lebenslanger Zugang" : "Jahresplan"}
            </h1>
            
            <div className="mb-8">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {isLifetime ? "199 €" : "89 €"}
                <span className="text-lg text-gray-500 ml-2">
                  {isLifetime ? "einmalige Zahlung" : "/Jahr"}
                </span>
              </div>
              {!isLifetime && (
                <div className="text-gray-500 line-through mb-2">Normalpreis: 229 €/Jahr</div>
              )}
            </div>

            {!isLifetime && (
              <div className="bg-red-50 rounded-lg p-4 mb-8">
                <div className="text-center text-red-600 font-semibold">
                  ⚡ Sonderangebot endet in:
                </div>
                <div className="text-center text-2xl font-bold text-red-700">
                  {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  {isLifetime ? <Infinity className="w-5 h-5 text-primary" /> : <Clock className="w-5 h-5 text-emerald-600" />}
                  Hauptvorteile
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
                  Warum diesen Plan wählen?
                </h2>
                <div className="prose text-gray-700">
                  {isLifetime ? (
                    <div className="space-y-4">
                      <p>
                        Mit unserem Lifetime-Zugang leisten Sie eine einmalige Zahlung und müssen sich nie wieder um Abonnementgebühren sorgen. Dies ist perfekt für Unternehmen, die eine langfristige Lösung ohne wiederkehrende Kosten suchen.
                      </p>
                      <p>
                        Sie sparen in den ersten Jahren allein über 800 EUR im Vergleich zum Jahresplan, und Ihre Einsparungen wachsen Jahr für Jahr weiter.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p>
                        Sichern Sie sich unseren Sondertarif von nur 89 EUR/Jahr anstatt des regulären Preises von 229 EUR/Jahr - das sind 61% Rabatt! Dieser Sonderpreis bleibt bestehen, solange Sie Ihr Abonnement aufrechterhalten.
                      </p>
                      <p>
                        Handeln Sie schnell - dieses Angebot ist nur für begrenzte Zeit verfügbar. Treten Sie jetzt bei, um Ihren dauerhaften Rabatt zu sichern und jedes Jahr 140 EUR zu sparen!
                      </p>
                      <p className="text-emerald-600 font-medium">
                        Nicht zufrieden? Sie können Ihr Abonnement jederzeit kündigen - keine Fragen gestellt. Ihre Zufriedenheit hat für uns Priorität.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <button
                onClick={handleWhopCheckout}
                className={`w-full ${
                  isLifetime ? "bg-primary" : "bg-emerald-600"
                } hover:opacity-90 text-white py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2`}
              >
                🔥 {isLifetime ? "Jetzt lebenslangen Zugang sichern" : "Sichern Sie sich jetzt Ihren Preis von 89 €/Jahr"}
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>30 Tage Geld-zurück-Garantie • Sichere Zahlung • Sofortiger Zugang</span>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Was passiert nach dem Kauf?
                </h3>
                <p className="text-gray-700 mb-4">
                  {isLifetime ? (
                    "Nach Abschluss Ihres Lifetime-Kaufs wird unser Team Ihre Transaktion überprüfen und detaillierte Zugangsinformationen innerhalb von 24 Stunden an Ihre registrierte E-Mail-Adresse senden."
                  ) : (
                    "Nach Bestätigung Ihres Jahresabonnements wird unser Team Ihre Zahlung überprüfen und umfassende Einrichtungsanweisungen innerhalb von 24 Stunden an Ihre registrierte E-Mail-Adresse senden."
                  )}
                </p>
                <div className="text-sm text-gray-600">
                  <strong>Wichtig:</strong> Bitte überprüfen Sie Ihren Spam-/Junk-Ordner, falls Sie unsere E-Mail nicht in Ihrem Posteingang erhalten haben. Für jede Hilfestellung steht unser Support-Team bereit, um einen reibungslosen Onboarding-Prozess sicherzustellen.
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
