import { motion } from "framer-motion";
import Container from "../layout/Container";

const roadmap = [
  {
    title: "AI Call Insights",
    desc: "Analyze customer conversations with AI-powered insights and sentiment tracking.",
  },
  {
    title: "WhatsApp Integration",
    desc: "Connect WhatsApp for seamless communication and lead capture.",
  },
  {
    title: "Advanced Analytics",
    desc: "Deep reporting dashboards with performance and conversion tracking.",
  },
  {
    title: "Automation Engine",
    desc: "Automate follow-ups, lead assignment, and notifications.",
  },
];

export default function Roadmap() {
  return (
    <section className="py-24 bg-background-secondary relative">
      <Container>
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold"
          >
            Product Roadmap
          </motion.h2>

          <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
            We are continuously evolving MasterCall to bring powerful features
            for modern businesses.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4">
          {roadmap.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="mb-10 ml-6"
            >
              {/* Dot */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-primary-500 rounded-full ring-4 ring-background-secondary" />

              {/* Card */}
              <div className="p-6 bg-background-tertiary rounded-xl shadow-card hover:scale-[1.02] transition">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-neutral-400 text-sm mt-2">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}