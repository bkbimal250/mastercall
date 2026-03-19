import Container from "../components/layout/Container";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Award } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-background overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.span
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="px-4 py-1.5 bg-primary-500/10 text-primary-500 rounded-full text-xs font-bold border border-primary-500/20 inline-flex items-center gap-2 mb-8 uppercase tracking-widest"
          >
             Our Mission
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
             Revolutionizing <span className="text-primary-500">Call Tracking</span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
             We built MasterCall out of a frustration with existing call tracking systems. 
             They were either too complex for simple teams or too simple for complex enterprises. 
             Our mission is to create a tool that is both powerful and incredibly easy to use.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-10 bg-background-secondary rounded-3xl border border-white/5 shadow-card group hover:border-primary-500/50 transition-colors"
           >
              <div className="w-16 h-16 bg-red-500/10 flex items-center justify-center mb-8 rounded-2xl group-hover:bg-red-500 group-hover:text-white transition-all text-red-500">
                 <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Customer Obsessed</h3>
              <p className="text-neutral-400 leading-relaxed font-medium">
                 We listen to our users first. Your feedback drives every single release, update, and patch. 
                 MasterCall is built for you, by us.
              </p>
           </motion.div>

           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-10 bg-background-secondary rounded-3xl border border-white/5 shadow-card group hover:border-primary-500/50 transition-colors"
           >
              <div className="w-16 h-16 bg-green-500/10 flex items-center justify-center mb-8 rounded-2xl group-hover:bg-green-500 group-hover:text-white transition-all text-green-500">
                 <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Data Security</h3>
              <p className="text-neutral-400 leading-relaxed font-medium">
                 Your data is your most valuable asset. We use bank-level encryption and 
                 follow best practices in data privacy to keep your teams safe.
              </p>
           </motion.div>

           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-10 bg-background-secondary rounded-3xl border border-white/5 shadow-card group hover:border-primary-500/50 transition-colors"
           >
              <div className="w-16 h-16 bg-yellow-500/10 flex items-center justify-center mb-8 rounded-2xl group-hover:bg-yellow-500 group-hover:text-white transition-all text-yellow-500">
                 <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Commitment to Quality</h3>
              <p className="text-neutral-400 leading-relaxed font-medium">
                 We don't do "good enough". Every feature is tested, refined, and polished until 
                 it meets our uncompromising quality standards.
              </p>
           </motion.div>
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="p-16 bg-gradient-to-br from-background-secondary to-background-tertiary rounded-[3rem] border border-white/5 shadow-2xl text-center"
        >
           <h2 className="text-4xl font-black mb-6">Our Journey So Far</h2>
           <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              From a small prototype to a multi-branch enterprise platform, MasterCall has 
              grown into a trusted partner for hundreds of businesses worldwide.
           </p>
           <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: "Founded", value: "2024" },
                { label: "Active Users", value: "50,000+" },
                { label: "Countries", value: "12+" },
                { label: "Satisfaction", value: "99%" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                   <div className="text-4xl font-black text-primary-500">{stat.value}</div>
                   <div className="text-sm font-bold text-neutral-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
           </div>
        </motion.div>
      </Container>
    </div>
  );
}