
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
      title: "Copied!",
      description: `${field} has been copied to your clipboard.`,
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
            Thank You for Your Purchase!
          </h1>
          <p className="text-xl text-gray-600">
            Your QuickBooks Enterprise order has been confirmed. Below you'll find your download link and license information.
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
              Download Your Software
            </h2>
            <p className="text-gray-600 mb-4">
              Click the button below to start downloading QuickBooks Enterprise 2024:
            </p>
            <Button
              className="w-full sm:w-auto flex items-center justify-center gap-2"
              onClick={() => window.open(downloadLink, '_blank')}
            >
              <Download className="w-4 h-4" />
              Download QuickBooks Enterprise
            </Button>
          </Card>

          <Card className="p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Your License Information
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-600">License Number</label>
                <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                  <code className="text-sm font-mono">{licenseInfo.licenseNumber}</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(licenseInfo.licenseNumber, "License number")}
                  >
                    {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-600">Product Number</label>
                <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                  <code className="text-sm font-mono">{licenseInfo.productNumber}</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(licenseInfo.productNumber, "Product number")}
                  >
                    {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-600">Validation Code</label>
                <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                  <code className="text-sm font-mono">{licenseInfo.validationCode}</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(licenseInfo.validationCode, "Validation code")}
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
                  Important Installation Information
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    During installation, you will initially be asked for only the <strong>License Number</strong> and <strong>Product Number</strong>.
                  </p>
                  <p>
                    If you encounter an activation screen showing "Contact support to complete activation," don't worry - this is a normal part of the process for some installations.
                  </p>
                  <p>
                    Simply click on "Issues with activation" when prompted. This will reveal an additional input field where you can enter the <strong>Validation Code</strong> provided above. After entering the code, your software will activate properly.
                  </p>
                  <div className="mt-4">
                    <img 
                      src="public/lovable-uploads/41572ddc-b384-4b25-9a86-fecb280ab40d.png" 
                      alt="QuickBooks activation screen example" 
                      className="rounded-lg border border-gray-200 shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-8 text-center text-gray-600">
            <p className="mb-4">
              Need help with installation? Our support team is here to help you get started.
            </p>
            <Button variant="outline" onClick={() => window.location.href = "/"}>
              Return to Homepage
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYouPage;
