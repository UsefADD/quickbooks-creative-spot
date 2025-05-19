
import { motion } from "framer-motion";
import { Download, Gift, Copy, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const ThankYouPage = () => {
  const [copied, setCopied] = useState(false);

  const downloadLink = "https://dlm2.download.intuit.com/akdlm/SBD/QuickBooks/2024/Latest/QuickBooksEnterprise24.exe";
  const licenseInfo = {
    licenseNumber: "7799-9087-5054-456",
    productNumber: "564-784",
    validationCode: "243592"
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Kopiert!",
      description: `${field} wurde in die Zwischenablage kopiert.`,
      duration: 2000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <Gift className="w-16 h-16 text-primary animate-float" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vielen Dank für Ihren Kauf!
          </h1>
          <p className="text-xl text-gray-600">
            Ihre QuickBooks Enterprise Bestellung wurde bestätigt. Nachfolgend finden Sie Ihren Download-Link und Ihre Lizenzinformationen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <Card className="p-6 mb-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Laden Sie Ihre Software herunter
            </h2>
            <p className="text-gray-600 mb-4">
              Klicken Sie auf die Schaltfläche unten, um mit dem Herunterladen von QuickBooks Enterprise 2024 zu beginnen:
            </p>
            <Button
              className="w-full sm:w-auto flex items-center justify-center gap-2"
              onClick={() => window.open(downloadLink, '_blank')}
            >
              <Download className="w-4 h-4" />
              QuickBooks Enterprise herunterladen
            </Button>
          </Card>

          <Card className="p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Ihre Lizenzinformationen
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-600">Lizenznummer</label>
                <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                  <code className="text-sm font-mono">{licenseInfo.licenseNumber}</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(licenseInfo.licenseNumber, "Lizenznummer")}
                  >
                    {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-600">Produktnummer</label>
                <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                  <code className="text-sm font-mono">{licenseInfo.productNumber}</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(licenseInfo.productNumber, "Produktnummer")}
                  >
                    {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-600">Validierungscode</label>
                <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                  <code className="text-sm font-mono">{licenseInfo.validationCode}</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(licenseInfo.validationCode, "Validierungscode")}
                  >
                    {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-lg border-l-4 border-blue-500">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Wichtige Installationsinformationen
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    Während der Installation werden Sie zunächst nur nach der <strong>Lizenznummer</strong> und <strong>Produktnummer</strong> gefragt.
                  </p>
                  <p>
                    Wenn Sie einen Aktivierungsbildschirm mit der Meldung "Kontaktieren Sie den Support, um die Aktivierung abzuschließen" sehen, keine Sorge - dies ist ein normaler Teil des Prozesses bei einigen Installationen.
                  </p>
                  <p>
                    Klicken Sie einfach auf "Probleme bei der Aktivierung", wenn Sie dazu aufgefordert werden. Dadurch wird ein zusätzliches Eingabefeld angezeigt, in das Sie den oben angegebenen <strong>Validierungscode</strong> eingeben können. Nach Eingabe des Codes wird Ihre Software ordnungsgemäß aktiviert.
                  </p>
                  <div className="mt-4">
                    <img 
                      src="public/lovable-uploads/41572ddc-b384-4b25-9a86-fecb280ab40d.png" 
                      alt="QuickBooks Aktivierungsbildschirm Beispiel" 
                      className="rounded-lg border border-gray-200 shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-8 text-center text-gray-600">
            <p className="mb-4">
              Benötigen Sie Hilfe bei der Installation? Unser Support-Team ist hier, um Ihnen den Einstieg zu erleichtern.
            </p>
            <Button variant="outline" onClick={() => window.location.href = "/"}>
              Zurück zur Startseite
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYouPage;
