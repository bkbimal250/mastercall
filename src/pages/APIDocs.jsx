import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import { Copy, Terminal, Zap, Code2, Layers } from "lucide-react";

export default function APIDocs() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-3 hidden lg:block sticky top-32 h-fit">
            <h4 className="text-sm font-black text-neutral-500 uppercase tracking-widest mb-8">Documentation</h4>
            <ul className="space-y-6">
               {["Introduction", "Authentication", "Endpoints", "Lead Management", "Rate Limits", "Errors"].map((item, i) => (
                 <li key={i}>
                    <button className={`text-sm font-bold transition-all hover:text-primary-500 ${i === 0 ? "text-primary-500" : "text-neutral-400"}`}>
                       {item}
                    </button>
                 </li>
               ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight italic">
                 API <span className="text-primary-500 underline underline-offset-8">Documentation</span>
              </h1>
              <p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-2xl font-medium">
                 Welcome to the MasterCall API. Our API is organized around REST, uses standard HTTP response codes, and returns JSON-encoded responses.
              </p>

              <div className="space-y-16">
                 <section className="space-y-6">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                       <Zap size={24} className="text-primary-500" />
                       Authentication
                    </h2>
                    <p className="text-neutral-400 leading-relaxed font-medium">
                       To authenticate your requests, you must include your API key in the <code>Authorization</code> header of every request.
                    </p>
                    <div className="bg-background-secondary p-8 rounded-[1.5rem] border border-white/5 relative group cursor-pointer overflow-hidden font-mono text-sm">
                       <div className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-all">
                          <Copy size={18} />
                       </div>
                       <div className="text-primary-500 mb-2">curl -X GET https://api.mastercall.com/v1/user \</div>
                       <div className="text-neutral-400">-H "Authorization: Bearer <span className="text-indigo-400">YOUR_API_KEY</span>"</div>
                    </div>
                 </section>

                 <section className="space-y-6">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                       <Layers size={24} className="text-primary-500" />
                       Lead Management
                    </h2>
                    <p className="text-neutral-400 leading-relaxed font-medium">
                       Manage your leads efficiently with our batch-processing endpoints.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="p-8 bg-background-tertiary rounded-2xl border border-white/5 hover:border-primary-500/50 transition-all cursor-default">
                          <div className="flex items-center gap-3 mb-6">
                             <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-lg text-xs font-black tracking-widest uppercase">POST</span>
                             <h4 className="font-bold">Create Lead</h4>
                          </div>
                          <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-medium">Add a new lead to your dashboard with custom metadata tracking.</p>
                          <code className="text-xs text-indigo-400 font-bold">/v1/leads</code>
                       </div>
                       <div className="p-8 bg-background-tertiary rounded-2xl border border-white/5 hover:border-primary-500/50 transition-all cursor-default">
                          <div className="flex items-center gap-3 mb-4">
                             <span className="px-3 py-1 bg-blue-500/20 text-blue-500 rounded-lg text-xs font-black tracking-widest uppercase">GET</span>
                             <h4 className="font-bold">Fetch Analytics</h4>
                          </div>
                          <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-medium">Retrieve aggregated statistics for specific branches and time periods.</p>
                          <code className="text-xs text-indigo-400 font-bold">/v1/analytics</code>
                       </div>
                    </div>
                 </section>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}
