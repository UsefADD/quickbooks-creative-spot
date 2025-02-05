import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      rating: 5,
      text: "QuickBooks makes it easy to manage the finance operations of our business! We use QuickBooks daily to track expenses, revenue and to invoice our customers! It's easy-to-use and allows us to easily collaborate with our bookkeeper!",
      author: "Ali B.",
      role: "CEO",
      badge: "/lovable-uploads/4ff517bd-376f-463f-be4f-ae061d4aff65.png"
    },
    {
      rating: 4,
      text: "I use QuickBooks on a daily basis for invoicing clients, bank reconciliation as well as looking at the various reports. I have customised the reports to show the time period and categories that are useful for our business.",
      author: "Claire R.",
      role: "Director",
    },
    {
      rating: 5,
      text: "The automation features have saved us countless hours. The reporting capabilities give us deep insights into our financial health.",
      author: "Michael S.",
      role: "CFO",
    },
    {
      rating: 5,
      text: "QuickBooks has transformed how we handle our accounting. The cloud-based system means our team can access financial data from anywhere, making remote work seamless.",
      author: "Sarah K.",
      role: "Operations Manager",
    },
    {
      rating: 4,
      text: "The integration capabilities with other business tools we use daily has streamlined our entire operation. Customer support is always helpful when needed.",
      author: "David M.",
      role: "Small Business Owner",
    },
    {
      rating: 5,
      text: "As a growing business, QuickBooks scales perfectly with our needs. The automated features save us time and reduce errors in our bookkeeping.",
      author: "Jennifer P.",
      role: "Founder",
    },
    {
      rating: 5,
      text: "The reporting features are comprehensive and give us clear insights into our business performance. It's been crucial for our decision-making.",
      author: "Robert L.",
      role: "Financial Analyst",
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            28 years experience helping small businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes QuickBooks Online the #1 accounting software for small businesses.
          </p>
        </motion.div>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300 fill-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  {review.badge && (
                    <img
                      src={review.badge}
                      alt="Capterra Badge"
                      className="w-24 h-auto mb-4"
                    />
                  )}
                  <p className="text-gray-600 flex-grow mb-4">{review.text}</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-gray-900">{review.author}</p>
                    <p className="text-gray-500 text-sm">{review.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;