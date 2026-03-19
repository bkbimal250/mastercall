import { motion } from "framer-motion";
import Container from "../components/layout/Container";

const terms = [
  {
    title: "Acceptance of Terms",
    content: "By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services."
  },
  {
    title: "Description of Service",
    content: "MasterCall provides users with a comprehensive set of resources, including various communication tools, forums, shopping services, personalized content, and branded programming through its network of properties which may be accessed through any various medium or device now known or hereafter developed."
  },
  {
    title: "User Obligations",
    content: "You agree that you will not use our services for any illegal activities or to post, transmit, or otherwise make available any content that is harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, or libellous."
  },
  {
    title: "Modification of Terms",
    content: "We reserve the right to change these terms from time to time as we see fit and your continued use of the site will signify your acceptance of any adjustment to these terms."
  }
];

export default function Terms() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-8">Terms of Service</h1>
          <p className="text-neutral-400 text-lg mb-12">
            By using MasterCall, you agree to these legal terms. Please read them carefully.
          </p>

          <div className="space-y-12">
            {terms.map((term, i) => (
              <motion.section
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-background-tertiary rounded-2xl border border-white/5 shadow-card"
              >
                <h2 className="text-2xl font-bold mb-4 text-white uppercase tracking-tighter">
                  {i + 1}. {term.title}
                </h2>
                <p className="text-neutral-400 leading-relaxed font-medium">
                  {term.content}
                </p>
              </motion.section>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
