
import { motion } from "framer-motion";
import { Star, Shield, Award, Clock, Infinity } from "lucide-react";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-4 mb-4">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
            Zeitlich begrenztes Angebot
          </span>
          <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-medium">
            Neu: Lifetime-Plan - Sparen Sie 800 EUR
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#014d40] mb-6 leading-tight">
          QuickBooks Advanced zu unschlagbaren Preisen
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          🚀 Transformieren Sie Ihr Unternehmen mit unseren exklusiven QuickBooks Advanced Angeboten! Wählen Sie unseren Jahresplan für nur 89 EUR/Jahr (Regulär: 229 EUR/Jahr) mit unserer beispiellosen Preisgarantie - die sicherstellt, dass Sie niemals mit Preiserhöhungen konfrontiert werden. Oder maximieren Sie Ihre Einsparungen mit unserem bahnbrechenden lebenslangen Zugang für eine einmalige Zahlung von 199 EUR (Regulär: 999 EUR). Schließen Sie sich Tausenden erfolgreicher Unternehmen an, die bereits von diesen außergewöhnlichen Einsparungen profitieren. Dieses Angebot wird nicht lange bestehen - sichern Sie sich noch heute Ihren zukünftigen Erfolg, bevor es für immer verschwunden ist!
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-400 w-5 h-5 fill-current" />
          ))}
          <span className="text-gray-700 ml-2">Vertraut von 5.687+ Unternehmen</span>
        </div>
      </div>

      <div className="flex justify-center gap-8 flex-wrap mb-8">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-emerald-600" />
          <span className="text-gray-700">Autorisierter Wiederverkäufer</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-emerald-600" />
          <span className="text-gray-700">100% sicherer Kauf</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-emerald-600" />
          <span className="text-gray-700">Sofortige Aktivierung</span>
        </div>
        <div className="flex items-center gap-2">
          <Infinity className="w-5 h-5 text-primary" />
          <span className="text-gray-700">Lebenslanger Zugang verfügbar</span>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
