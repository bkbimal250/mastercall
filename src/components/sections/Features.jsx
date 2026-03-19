import { motion } from "framer-motion";
import { 
  PhoneCall, 
  Users, 
  Monitor, 
  BarChart3, 
  Bell, 
  GitBranch,
  ShieldCheck,
  Zap
} from "lucide-react";
import Container from "../layout/Container";

const features = [
  {
    title: "Call Log Tracking",
    desc: "Every interaction recorded and categorized automatically.",
    icon: PhoneCall,
    color: "blue",
  },
  {
    title: "Lead Management",
    desc: "Seamlessly convert call logs into actionable leads.",
    icon: Users,
    color: "purple",
  },
  {
    title: "Device Monitoring",
    desc: "Real-time heartbeat monitoring for all registered devices.",
    icon: Monitor,
    color: "pink",
  },
  {
    title: "Analytics Dashboard",
    desc: "Deep insights into branch performance and agent velocity.",
    icon: BarChart3,
    color: "indigo",
  },
  {
    title: "Real-time Alerts",
    desc: "Get notified instantly on critical lead status updates.",
    icon: Bell,
    color: "orange",
  },
  {
    title: "Multi-Branch Support",
    desc: "Manage multiple business locations from a single admin panel.",
    icon: GitBranch,
    color: "green",
  },
  {
    title: "Secure Operations",
    desc: "Enterprise-grade encryption for all communication data.",
    icon: ShieldCheck,
    color: "cyan",
  },
  {
    title: "Instant Integration",
    desc: "Connect your existing systems with our powerful API.",
    icon: Zap,
    color: "yellow",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-background-secondary relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Engineered for <br />
            Business Excellence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-neutral-400 max-w-2xl mx-auto"
          >
            Our core infrastructure is built for reliability, scale, and high-velocity business operations.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-background-tertiary/50 border border-white/5 rounded-[2rem] shadow-card hover:bg-background-tertiary transition group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-6 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                <f.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}