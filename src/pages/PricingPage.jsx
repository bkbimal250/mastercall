import Pricing from "../components/sections/Pricing";
import Container from "../components/layout/Container";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is MasterCall available for the public?",
    answer: "No. MasterCall is a private enterprise solution designed exclusively for authorized spa and salon branches within our organization."
  },
  {
    question: "How do I get an access token?",
    answer: "Registration tokens are issued directly by the central CRM administrator to verified branch devices. Please contact your regional IT manager for token generation."
  },
  {
    question: "What is the per-branch pricing?",
    answer: "Our solution is licensed on a per-organization basis. Individual branches do not need to pay separately as the infrastructure is managed centrally."
  },
  {
    question: "What kind of support is provided?",
    answer: "We provide dedicated 24/7 IT helpdesk support for all authorized branches to ensure continuous call tracking and synchronization."
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
            Enterprise <span className="text-primary-500">Infrastructure</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Private licensing and unified management for our organization's distributed branch networks.
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
