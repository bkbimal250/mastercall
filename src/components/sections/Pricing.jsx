import { motion } from "framer-motion";
import { Check, ArrowRight, Shield, Globe, Lock } from "lucide-react";
import Container from "../layout/Container";

const tiers = [
    {
        name: "Standard Branch",
        icon: <Globe className="text-primary-500" size={24} />,
        description: "Core tracking for standard spa/salon outlets.",
        features: [
            "Real-time Call Logging",
            "Lead Sync to CRM",
            "Branch Dashboard Access",
            "IT Helpdesk Support",
            "Encrypted Data Sync",
        ],
        cta: "Request Branch Setup",
        popular: false,
    },
    {
        name: "Premium Branch",
        icon: <Shield className="text-indigo-400" size={24} />,
        description: "Enhanced monitoring for high-volume centers.",
        features: [
            "Unlimited Call History",
            "Priority IT Support",
            "Custom Analytics Reports",
            "Team Performance Tracking",
            "Advanced API Integration",
            "Local Backup Storage",
        ],
        cta: "Request Upgrade",
        popular: true,
    },
    {
        name: "Corporate Admin",
        icon: <Lock className="text-emerald-400" size={24} />,
        description: "Full oversight for regional management.",
        features: [
            "Multi-Branch View",
            "Organization-wide Stats",
            "User Access Management",
            "Compliance Monitoring",
            "Custom Security Policy",
        ],
        cta: "Admin Console Access",
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section className="py-24 bg-background-secondary relative">
            <Container>
                {/* Heading */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        Infrastructure Deployment
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-neutral-400 mt-4 max-w-xl mx-auto"
                    >
                        MasterCall is deployed based on branch requirements and regional scale. 
                        Access is managed through internal corporate protocols.
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {tiers.map((tier, i) => {
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-8 rounded-2xl border ${tier.popular
                                    ? "border-primary-500 bg-primary-500/5 relative"
                                    : "border-white/5 bg-background-tertiary shadow-card"
                                    } hover:scale-105 transition`}
                            >
                                {/* Badge */}
                                {tier.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary-500 text-white rounded-full text-xs font-bold">
                                        Priority Setup
                                    </div>
                                )}

                                {/* Icon & Title */}
                                <div className="mb-4">{tier.icon}</div>
                                <h3 className="text-xl font-bold">{tier.name}</h3>
                                <p className="text-neutral-400 text-sm mt-2">
                                    {tier.description}
                                </p>

                                {/* Features */}
                                <ul className="mt-8 space-y-4">
                                    {tier.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center gap-3 text-sm text-neutral-300"
                                        >
                                            <Check size={18} className="text-primary-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <button
                                    className={`w-full mt-10 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 group ${tier.popular
                                        ? "bg-primary-500 text-white shadow-glow"
                                        : "bg-white/5 hover:bg-white/10"
                                        }`}
                                >
                                    {tier.cta}
                                    <ArrowRight
                                        size={18}
                                        className="group-hover:translate-x-1 transition"
                                    />
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}