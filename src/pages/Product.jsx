import Container from "../components/layout/Container";
import { motion } from "framer-motion";
import { Zap, Target, Smartphone, BarChart } from "lucide-react";

const solutions = [
  {
    title: "Real-time Hubs",
    desc: "Single interface for all branch logs and agent activities.",
    icon: Zap,
    color: "blue",
  },
  {
    title: "Lead Conversion",
    desc: "Intelligent scoring and automated tagging for call logs.",
    icon: Target,
    color: "purple",
  },
  {
    title: "Mobile Force",
    desc: "Native Android application for field agents and sync.",
    icon: Smartphone,
    color: "pink",
  },
  {
    title: "Custom Reports",
    desc: "Export data to CSV/Excel or integrate with PowerBI.",
    icon: BarChart,
    color: "indigo",
  },
];

export default function Product() {
  return (
    <div className="pt-32 pb-24 bg-background overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
             Premium <span className="text-primary-500">Call Intelligence</span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
            MasterCall is not just a logger. It's an entire communication stack designed 
            to maximize your team performance and lead capture rates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
           <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-12 bg-background-secondary rounded-3xl border border-white/5 shadow-2xl flex flex-col justify-center"
           >
              <h2 className="text-3xl font-bold mb-6 italic text-primary-500 underline underline-offset-8">The Core Engine</h2>
              <p className="text-neutral-400 leading-relaxed mb-8">
                 Experience the power of a modern backend built with Django and a lightning-fast React frontend. 
                 Sync call logs from thousands of field agents in real-time, with sub-millisecond latency.
              </p>
              <div className="flex gap-4">
                 <div className="bg-primary-500/20 text-primary-500 px-4 py-2 rounded-lg font-bold text-sm">Django REST</div>
                 <div className="bg-indigo-500/20 text-indigo-500 px-4 py-2 rounded-lg font-bold text-sm">PostgreSQL</div>
                 <div className="bg-cyan-500/20 text-cyan-500 px-4 py-2 rounded-lg font-bold text-sm">Redis</div>
              </div>
           </motion.div>
           <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-primary-500 rounded-3xl p-12 text-white shadow-glow relative overflow-hidden flex flex-col justify-center"
           >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full" />
              <h2 className="text-3xl font-black mb-6">Designed for Growth</h2>
              <p className="text-indigo-100 leading-relaxed text-lg font-medium">
                 Whether you have 5 or 5,000 agents, MasterCall scales automatically to meet your needs. 
                 Focus on your sales, let us handle the infrastructure.
              </p>
           </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
           {solutions.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-background-tertiary border border-white/5 rounded-2xl hover:border-primary-500/50 transition-all cursor-default"
              >
                 <s.icon className={`text-${s.color}-500 mb-6`} size={32} />
                 <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                 <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
           ))}
        </div>
      </Container>
    </div>
  );
}