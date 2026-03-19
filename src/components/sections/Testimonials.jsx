import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Container from "../layout/Container";

const testimonials = [
  {
    name: "John Doe",
    role: "Marketing Manager",
    company: "Acme Corp",
    content: "MasterCall has transformed our call tracking process. We now have real-time visibility into every interaction with our customers.",
    avatar: "https://i.pravatar.cc/150?u=john",
    stars: 5,
  },
  {
    name: "Jane Smith",
    role: "Sales Director",
    company: "Innovate Solutions",
    content: "The dashboard is incredibly intuitive. Our sales conversion rates have increased by 30% since we started using MasterCall.",
    avatar: "https://i.pravatar.cc/150?u=jane",
    stars: 5,
  },
  {
    name: "Robert Johnson",
    role: "CEO",
    company: "Strategic Group",
    content: "Excellent support and features. The multi-branch support was a game changer for our distributed operations across the country.",
    avatar: "https://i.pravatar.cc/150?u=robert",
    stars: 5,
  },
  {
    name: "Alice Brown",
    role: "Operations Lead",
    company: "Logistics Hub",
    content: "Clean UI, robust tracking, and the API integration was effortless. It's exactly what our team needed to scale efficiently.",
    avatar: "https://i.pravatar.cc/150?u=alice",
    stars: 5,
  },
  {
    name: "Michael Lee",
    role: "Founder",
    company: "Startup Lab",
    content: "The lead management features are the best we've used. It's helped us keep track of every single potential customer without loss.",
    avatar: "https://i.pravatar.cc/150?u=michael",
    stars: 4,
  },
  {
    name: "Sarah Parker",
    role: "Customer Success",
    company: "Global Connect",
    content: "Fantastic tool! I love the analytics it provides. Our team is much more productive and our responses are much more data-driven.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 mt-4 max-w-xl mx-auto"
          >
            Join thousands of businesses that trust MasterCall for their call
            tracking and lead management needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-background-tertiary/40 backdrop-blur-sm rounded-2xl border border-white/5 relative group hover:border-primary-500/50 transition-all duration-300 shadow-card"
            >
              <div className="absolute top-8 right-8 text-primary-500/20 group-hover:text-primary-500/40 transition-colors">
                <Quote size={40} fill="currentColor" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    fill={idx < t.stars ? "#6366f1" : "transparent"}
                    color={idx < t.stars ? "#6366f1" : "#52525b"}
                  />
                ))}
              </div>

              <p className="text-neutral-300 leading-relaxed mb-8 relative z-10">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-primary-500/20"
                />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-neutral-400">
                    {t.role} @ {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
