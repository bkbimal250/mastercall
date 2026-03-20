import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Download } from "lucide-react";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="pt-40 pb-24 text-center relative overflow-hidden bg-background">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <Container>
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           className="px-4 py-1.5 bg-primary-500/10 text-primary-500 rounded-full text-xs font-bold border border-primary-500/20 inline-flex items-center gap-2 mb-8"
        >
          <Sparkles size={14} />
          <span>New: AI Call Analytics Beta</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-black leading-tight tracking-tight"
        >
          Scale Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-indigo-400">
            Call Operations
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Empower your team with a high-performance tracking platform. 
          Monitor leads, analyze branches, and streamline entire call operations 
          from a single, unified interface.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6"
        >
          <button className="px-8 py-4 bg-primary-500 text-white rounded-2xl shadow-glow font-bold text-lg flex items-center gap-3 group transition-all hover:scale-105 active:scale-95 leading-none">
            Get MasterCall Free
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <a 
            href="/downloads/mastercall.apk" 
            download="mastercall.apk"
            className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-2xl font-bold text-lg flex items-center gap-3 transition-all hover:scale-105 active:scale-95 leading-none"
          >
            <Download size={22} className="text-primary-500" />
            Download App
          </a>

          <button className="px-8 py-4 text-neutral-400 hover:text-white font-bold text-lg flex items-center gap-3 transition-all active:scale-95 leading-none">
            <Play size={16} fill="currentColor" className="ml-1" />
            Watch Tour
          </button>
        </motion.div>

        {/* Floating Badges */}
        <div className="hidden lg:block">
           <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-1/4 left-10 p-4 bg-background-tertiary border border-white/10 rounded-2xl shadow-card"
           >
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center font-bold">98%</div>
                 <div className="text-left"><div className="text-xs text-neutral-400 font-medium">Capture</div><div className="text-sm font-bold text-white">Lead Efficiency</div></div>
              </div>
           </motion.div>

           <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/3 right-10 p-4 bg-background-tertiary border border-white/10 rounded-2xl shadow-card"
           >
              <div className="flex items-center gap-4 text-left">
                 <div className="w-10 h-10 bg-primary-500/20 text-primary-500 rounded-full flex items-center justify-center font-bold">+24%</div>
                 <div><div className="text-xs text-neutral-400 font-medium font-bold">YoY Growth</div><div className="text-sm font-bold text-white leading-tight">Revenue Impact</div></div>
              </div>
           </motion.div>
        </div>
      </Container>
    </section>
  );
}