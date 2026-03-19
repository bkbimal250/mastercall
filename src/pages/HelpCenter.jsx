import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import { Search, Book, Shield, MessageCircle, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Book,
    title: "Getting Started",
    desc: "Learn the basics and how to set up your first workspace.",
    color: "blue"
  },
  {
    icon: Shield,
    title: "Account & Security",
    desc: "Manage your account settings, status, and security preferences.",
    color: "green"
  },
  {
    icon: MessageCircle,
    title: "Conversations",
    desc: "Master call tracking, logging, and history management features.",
    color: "purple"
  }
];

export default function HelpCenter() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <Container>
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-12"
          >
            How can we <br /><span className="text-primary-500 underline underline-offset-8">help you?</span>
          </motion.h1>
          
          <div className="relative group max-w-2xl mx-auto">
             <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-primary-500 transition-colors">
               <Search size={22} />
             </div>
             <input 
              type="text" 
              placeholder="Search help articles, tutorials, and more..." 
              className="w-full pl-16 pr-8 py-5 bg-background-secondary border border-white/5 rounded-2xl text-lg focus:outline-none focus:border-primary-500/50 transition-all font-medium placeholder:text-neutral-500 shadow-glow focus:shadow-primary-500/20"
             />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {categories.map((cat, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-10 bg-background-secondary rounded-3xl border border-white/5 shadow-card hover:border-primary-500/50 transition-all group cursor-pointer"
             >
               <div className={`w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-8 text-primary-500 group-hover:scale-110 transition-transform`}>
                 <cat.icon size={28} />
               </div>
               <h3 className="text-2xl font-bold mb-4">{cat.title}</h3>
               <p className="text-neutral-400 leading-relaxed mb-8">
                 {cat.desc}
               </p>
               <button className="flex items-center gap-2 text-sm font-bold text-primary-500 group-hover:gap-4 transition-all uppercase tracking-widest leading-none">
                 Browse Articles
                 <ArrowRight size={16} />
               </button>
             </motion.div>
           ))}
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mt-24 p-12 bg-primary-500 rounded-[3rem] text-center text-white shadow-glow relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full" />
          <h2 className="text-4xl font-black mb-4">Still need assistance?</h2>
          <p className="text-indigo-100 mb-10 text-lg font-medium">
            Our support team is available 24/7 to help you with any technical or billing questions.
          </p>
          <button className="px-10 py-5 bg-white text-primary-500 rounded-2xl font-black text-lg shadow-xl hover:bg-neutral-50 transition-all hover:scale-105 active:scale-95 leading-none">
            Contact Support Team
          </button>
        </motion.div>
      </Container>
    </div>
  );
}
