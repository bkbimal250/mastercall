import Pricing from "../components/sections/Pricing";
import Container from "../components/layout/Container";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a 14-day free trial on our Starter and Professional plans. No credit card is required to start your trial."
  },
  {
    question: "How does the per-user pricing work?",
    answer: "Each team member you add to your workspace counts as one user. You can add or remove users at any time and your bill will be prorated automatically."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Absolutely. You can change your plan at any time from your account settings. Changes will be reflected in your next billing cycle."
  },
  {
    question: "What kind of support is included?",
    answer: "All plans include 24/7 email support. Professional and Enterprise plans also include priority support via phone and dedicated account management."
  }
];

export default function PricingPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <Container>
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight"
          >
            Pricing <span className="text-primary-500">Built for Growth</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Simple, transparent pricing for teams of all sizes. No hidden fees, ever.
          </motion.p>
        </div>
      </Container>

      <Pricing />

      <Container>
        <div className="mt-32 max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-background-secondary border border-white/5 rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="p-6 flex items-center justify-between gap-4">
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                  <div className="text-neutral-400">
                    {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </div>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="px-6 pb-6 text-neutral-400 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
