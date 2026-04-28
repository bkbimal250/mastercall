import { motion } from "framer-motion";
import { Download as DownloadIcon, Smartphone, Shield, Zap, CheckCircle2, ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/layout/Container";

const features = [
  {
    icon: <Smartphone className="text-primary-500" size={24} />,
    title: "Mobile Optimization",
    description: "Full-featured mobile experience with intuitive gesture controls.",
  },
  {
    icon: <Zap className="text-yellow-500" size={24} />,
    title: "Real-time Sync",
    description: "Instant data synchronization across all your mobile devices.",
  },
  {
    icon: <Shield className="text-blue-500" size={24} />,
    title: "Enterprise Security",
    description: "End-to-end encryption for all your call logs and leads.",
  },
];

const checklist = [
  "Track calls on the go",
  "Manage leads from anywhere",
  "Offline data capture",
  "Push notification alerts",
  "Branch team management",
  "Detailed analytics reports",
];

export default function DownloadPage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/downloads/mastercall.apk";
    link.download = "mastercall.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/10 blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] -z-10" />

      <Container>
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs font-bold border border-primary-500/20 mb-6 uppercase tracking-wider">
                <Smartphone size={14} />
                MasterCall Mobile
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-8">
                Take MasterCall <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-indigo-400">
                  With You Everywhere
                </span>
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-6 max-w-xl">
                Download our professional Android application to manage your call 
                operations, track leads, and monitor branch performance directly 
                from your smartphone.
              </p>
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl mb-10 max-w-xl">
                <p className="text-amber-500 text-sm font-bold flex items-center gap-2">
                  <Shield size={16} />
                  Authorized Personnel Only
                </p>
                <p className="text-neutral-400 text-xs mt-1">
                  This app requires a secure registration token issued from our internal CRM. 
                  Without verified credentials, the application remains locked.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={handleDownload}
                  className="px-10 py-5 bg-primary-500 text-white rounded-2xl shadow-glow font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 group"
                >
                  <DownloadIcon size={22} className="group-hover:translate-y-0.5 transition-transform" />
                  Download for Android
                </button>
                <div className="px-10 py-5 bg-white/5 border border-white/10 text-neutral-400 rounded-2xl font-bold text-lg flex items-center justify-center gap-3">
                  <Smartphone size={22} />
                  v1.2.4 (Latest)
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {checklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle2 size={18} className="text-primary-500" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Visuals/Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 grid gap-6">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all cursor-default"
                  >
                    <div className="flex gap-6">
                      <div className="w-14 h-14 bg-background border border-white/10 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-neutral-400 leading-relaxed text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary-500/10 rounded-full -z-10 animate-pulse" />
            </motion.div>
          </div>

          {/* Statistics/Trust Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 pt-16 border-t border-white/5"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div>
                <div className="text-4xl font-black text-white mb-2 leading-none">100+</div>
                <div className="text-sm font-bold text-neutral-500 uppercase tracking-widest leading-none">Branches</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2 leading-none">Enterprise</div>
                <div className="text-sm font-bold text-neutral-500 uppercase tracking-widest leading-none">Security</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2 leading-none">99.9%</div>
                <div className="text-sm font-bold text-neutral-500 uppercase tracking-widest leading-none">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2 leading-none">IT</div>
                <div className="text-sm font-bold text-neutral-500 uppercase tracking-widest leading-none">Desk Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
