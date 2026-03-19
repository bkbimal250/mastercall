import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-40 pb-24 bg-background min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-8 leading-tight"
            >
              Get in <br /><span className="text-primary-500 underline underline-offset-[16px]">Touch</span> with Us
            </motion.h1>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-12 max-w-lg">
              Have questions or need assistance? We're here to help you scale your operations 
              efficiency and team communication flow.
            </p>

            <div className="space-y-8">
               <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all">
                     <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Email us</h4>
                    <p className="text-neutral-400 text-sm font-medium">support@mastercall.com</p>
                  </div>
               </div>
               <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                     <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Live Chat</h4>
                    <p className="text-neutral-400 text-sm font-medium">Available 24/7 in dashboard</p>
                  </div>
               </div>
               <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                     <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Call sales</h4>
                    <p className="text-neutral-400 text-sm font-medium">+1 (555) 123-4567</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="p-10 bg-background-secondary rounded-[2.5rem] border border-white/5 shadow-2xl relative"
          >
            <div className="space-y-6">
               <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-neutral-400 uppercase tracking-widest leading-none">First Name</label>
                     <input type="text" className="w-full p-4 bg-background-tertiary border border-white/5 rounded-xl focus:border-primary-500/50 outline-none font-medium text-white transition-all" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-neutral-400 uppercase tracking-widest leading-none">Last Name</label>
                     <input type="text" className="w-full p-4 bg-background-tertiary border border-white/5 rounded-xl focus:border-primary-500/50 outline-none font-medium text-white transition-all" />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-400 uppercase tracking-widest leading-none">Work Email</label>
                  <input type="email" className="w-full p-4 bg-background-tertiary border border-white/5 rounded-xl focus:border-primary-500/50 outline-none font-medium text-white transition-all" />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-400 uppercase tracking-widest leading-none">Message</label>
                  <textarea className="w-full p-4 bg-background-tertiary border border-white/5 rounded-xl focus:border-primary-500/50 outline-none min-h-[150px] font-medium text-white transition-all"></textarea>
               </div>
               <button className="w-full py-5 bg-primary-500 text-white rounded-2xl font-black text-lg shadow-glow hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                  Send Message
                  <Send size={20} />
               </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
