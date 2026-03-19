import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Container from "../layout/Container";
import { useState } from "react";

const plans = [
    {
        name: "Starter",
        price: 999,
        description: "Perfect for small teams or solo entrepreneurs.",
        features: [
            "1,000 Call Logs",
            "Basic Analytics",
            "3 Team Members",
            "Email Support",
            "CSV Export",
        ],
        cta: "Start Free Trial",
        popular: false,
    },
    {
        name: "Professional",
        price: 2999,
        description: "Scale your operations with advanced tracking.",
        features: [
            "Unlimited Call Logs",
            "Advanced Dashboard",
            "10 Team Members",
            "Priority Support",
            "API Access",
            "Custom Integration",
        ],
        cta: "Get Started Now",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Tailored solutions for large-scale operations.",
        features: [
            "Multiple Branches",
            "Custom Branding",
            "Unlimited Members",
            "Dedicated Account Manager",
            "SSO/SAML support",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

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
                        Plans for Every Stage
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-neutral-400 mt-4 max-w-xl mx-auto"
                    >
                        Choose the plan that fits your business needs. Upgrade or downgrade anytime.
                    </motion.p>

                    {/* Toggle */}
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <span className={!isYearly ? "text-white" : "text-neutral-400"}>
                            Monthly
                        </span>

                        <div
                            className="w-12 h-6 bg-background-tertiary rounded-full p-1 cursor-pointer flex items-center border border-white/5"
                            onClick={() => setIsYearly(!isYearly)}
                        >
                            <motion.div
                                animate={{ x: isYearly ? 24 : 0 }}
                                className="w-4 h-4 bg-primary-500 rounded-full"
                            />
                        </div>

                        <span className={isYearly ? "text-white" : "text-neutral-400"}>
                            Yearly (Save 20%)
                        </span>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => {
                        const finalPrice =
                            plan.price === "Custom"
                                ? "Custom"
                                : isYearly
                                    ? Math.floor(plan.price * 0.8)
                                    : plan.price;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-8 rounded-2xl border ${plan.popular
                                    ? "border-primary-500 bg-primary-500/5 relative"
                                    : "border-white/5 bg-background-tertiary shadow-card"
                                    } hover:scale-105 transition`}
                            >
                                {/* Badge */}
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary-500 text-white rounded-full text-xs font-bold">
                                        Most Popular
                                    </div>
                                )}

                                {/* Title */}
                                <h3 className="text-xl font-bold">{plan.name}</h3>
                                <p className="text-neutral-400 text-sm mt-2">
                                    {plan.description}
                                </p>

                                {/* Price */}
                                <div className="mt-6 flex items-baseline gap-1">
                                    <span className="text-4xl font-bold">
                                        {plan.price === "Custom"
                                            ? finalPrice
                                            : `₹${finalPrice.toLocaleString("en-IN")}`}
                                    </span>

                                    {plan.price !== "Custom" && (
                                        <span className="text-neutral-400 text-sm">
                                            /{isYearly ? "year" : "month"}
                                        </span>
                                    )}
                                </div>

                                {/* Features */}
                                <ul className="mt-8 space-y-4">
                                    {plan.features.map((feature, idx) => (
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
                                    className={`w-full mt-10 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 group ${plan.popular
                                        ? "bg-primary-500 text-white shadow-glow"
                                        : "bg-white/5 hover:bg-white/10"
                                        }`}
                                >
                                    {plan.cta}
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