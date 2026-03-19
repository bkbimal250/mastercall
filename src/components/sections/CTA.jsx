import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "../layout/Container";

export default function CTA() {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      
      <Container>
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-gradient-to-br from-indigo-500 to-indigo-700 p-12 md:p-20 rounded-[3rem] text-center shadow-glow relative overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-3xl rounded-full" />

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
             Ready to Scale Your <br /> 
             Call Operations?
          </h2>
          
          <p className="mt-8 text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Join 500+ businesses using MasterCall to track their teams and optimize sales. 
            Get started today and see the results in real-time.
          </p>

          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
             <button className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-black text-lg shadow-2xl hover:bg-neutral-50 transition-all hover:scale-105 active:scale-95 leading-none shadow-glow-white">
                Start Free Trial
             </button>
             <div className="flex flex-col items-start gap-4">
                {["No credit card required", "Free 14-day trial", "Cancel anytime"].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-indigo-100 font-medium">
                     <CheckCircle2 size={18} className="text-white" />
                     {t}
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
