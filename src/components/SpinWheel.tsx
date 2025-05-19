
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SpinWheelProps {
  onClose: () => void;
}

const SpinWheel = ({ onClose }: SpinWheelProps) => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [discountCode, setDiscountCode] = useState("");

  const generateDiscountCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "QUICK";
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const handleSpin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    
    // Always win - between 1600 and 2150 degrees (to land on the big discount)
    const winRotation = 1600 + Math.random() * 550;
    
    setRotation(winRotation);
    
    setTimeout(() => {
      setHasWon(true);
      setDiscountCode(generateDiscountCode());
      setIsSpinning(false);
    }, 5000);
  };

  const copyDiscountCode = () => {
    navigator.clipboard.writeText(discountCode);
  };

  useEffect(() => {
    // Store in localStorage to prevent showing the wheel again
    const handleUnmount = () => {
      localStorage.setItem("wheel_shown", "true");
    };
    
    return () => handleUnmount();
  }, []);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {!hasWon ? "Drehen und Gewinnen!" : "Glückwunsch!"}
          </h2>
          <p className="text-gray-600">
            {!hasWon 
              ? "Drehen Sie das Rad und gewinnen Sie einen exklusiven Rabatt auf Ihren Kauf!" 
              : "Sie haben einen 25% Rabatt auf den QuickBooks Advanced Lifetime-Plan gewonnen!"}
          </p>
        </div>
        
        {!hasWon ? (
          <div className="relative mb-8 mx-auto w-64 h-64">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-red-500 transform -translate-y-32 rotate-180 z-20"></div>
            </div>
            
            <motion.div 
              className="w-full h-full rounded-full border-4 border-gray-200 relative overflow-hidden"
              style={{ 
                transform: `rotate(${rotation}deg)`,
                backgroundImage: "conic-gradient(from 0deg, #f87171 0deg, #f87171 45deg, #60a5fa 45deg, #60a5fa 90deg, #fbbf24 90deg, #fbbf24 135deg, #34d399 135deg, #34d399 180deg, #a78bfa 180deg, #a78bfa 225deg, #fb7185 225deg, #fb7185 270deg, #fbbf24 270deg, #fbbf24 315deg, #60a5fa 315deg, #60a5fa 360deg)"
              }}
              animate={{ rotate: rotation }}
              transition={{ 
                type: "spring", 
                duration: 5, 
                damping: 20
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
                  <span className="text-lg font-bold">25%</span>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 text-center">
              <p className="text-lg font-bold text-green-700 mb-2">Ihr Rabattcode</p>
              <div className="bg-white border border-gray-200 rounded-lg p-3 flex justify-between items-center">
                <span className="font-mono font-bold text-lg">{discountCode}</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={copyDiscountCode}
                >
                  Kopieren
                </Button>
              </div>
              <p className="text-sm text-green-600 mt-2">Dieser Code gewährt Ihnen 25% Rabatt auf den Lifetime-Plan!</p>
            </div>
            <p className="text-sm text-gray-500 text-center">
              Verwenden Sie diesen Code beim Checkout, um Ihren exklusiven Rabatt zu erhalten.
            </p>
          </div>
        )}
        
        {!hasWon ? (
          <Button 
            onClick={handleSpin} 
            disabled={isSpinning}
            className="w-full bg-primary hover:bg-primary/90 text-white"
          >
            {isSpinning ? "Dreht sich..." : "Drehen Sie das Rad!"}
          </Button>
        ) : (
          <div className="flex flex-col gap-2">
            <Button 
              onClick={onClose}
              className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2"
            >
              Weiter zum Angebot <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              onClick={onClose}
              className="text-gray-500"
            >
              Später nutzen
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SpinWheel;
