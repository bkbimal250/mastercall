import { motion } from "framer-motion";
import Container from "../components/layout/Container";

const sections = [
  {
    title: "Information We Collect",
    content: "We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, and business details."
  },
  {
    title: "How We Use Your Information",
    content: "We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect MasterCall and our users. We also use this information to offer you tailored content – like giving you more relevant search results and ads."
  },
  {
    title: "Information Sharing",
    content: "We do not share your personal information with companies, organizations, or individuals outside of MasterCall except in the following cases: with your consent, for external processing by trusted partners, or for legal reasons."
  },
  {
    title: "Data Security",
    content: "We work hard to protect MasterCall and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. We restrict access to personal information to employees and contractors who need that information in order to process it."
  }
];

export default function Privacy() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-8">Privacy Policy</h1>
          <p className="text-neutral-400 text-lg mb-12">
            Last updated: March 19, 2026. Your privacy is important to us. 
            This policy outlines how we handle your data across our platform.
          </p>

          <div className="space-y-12">
            {sections.map((section, i) => (
              <motion.section
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-background-secondary rounded-2xl border border-white/5"
              >
                <h2 className="text-2xl font-bold mb-4 text-white">{section.title}</h2>
                <p className="text-neutral-400 leading-relaxed italic border-l-2 border-primary-500 pl-6">
                  {section.content}
                </p>
              </motion.section>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
