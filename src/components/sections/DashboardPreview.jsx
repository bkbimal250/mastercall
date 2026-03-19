import { motion } from "framer-motion";
import { LayoutDashboard, TrendingUp, Users, Activity } from "lucide-react";
import Container from "../layout/Container";

export default function DashboardPreview() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium border border-primary-500/20"
          >
            Insights at a Glance
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-6"
          >
            Visualize Your <br />
            Business Flow
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Dashboard UI Mock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="bg-background-secondary p-4 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="h-6 w-1/3 bg-white/5 rounded-full" />
            </div>

            <div className="grid grid-cols-12 gap-6">
              {/* Sidebar */}
              <div className="col-span-3 space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`h-10 rounded-lg ${i === 1 ? 'bg-primary-500/20 w-full' : 'bg-white/5 w-4/5'}`} />
                ))}
              </div>

              {/* Stats & Charts */}
              <div className="col-span-9 space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-24 bg-white/5 rounded-xl border border-white/5" />
                  ))}
                </div>
                <div className="h-64 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/5 flex items-end p-6 gap-2">
                   {[40, 70, 45, 90, 65, 80, 50, 85, 60, 95].map((h, i) => (
                     <motion.div 
                        key={i} 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="flex-1 bg-primary-500/40 rounded-t-sm" 
                     />
                   ))}
                </div>
              </div>
            </div>
            
            {/* Overlay Glass Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-20 -right-8 p-4 bg-background-tertiary/80 backdrop-blur-md rounded-xl border border-white/10 shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 text-green-500 rounded-lg">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Total Revenue</div>
                  <div className="text-sm font-bold">$12,450.00</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -left-8 p-4 bg-background-tertiary/80 backdrop-blur-md rounded-xl border border-white/10 shadow-xl hidden md:block"
            >
               <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-500/20 text-primary-500 rounded-lg">
                  <Users size={20} />
                </div>
                <div>
                  <div className="text-xs text-neutral-400">Active Agents</div>
                  <div className="text-sm font-bold">24 Online</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Background Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-500/10 blur-[120px] rounded-full pointer-events-none" />
        </div>
      </Container>
    </section>
  );
}
