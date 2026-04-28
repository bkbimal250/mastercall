import React, { useEffect } from "react";
import Container from "../components/layout/Container";
import { ShieldCheck, Server, EyeOff, LockKeyhole } from "lucide-react";

export default function DataSafety() {
  useEffect(() => {
    document.title = "Data Safety | MasterCall - Call Tracking Software India";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Learn how MasterCall protects your data. An overview of our data safety practices for our private business call monitoring system.");
    }
  }, []);

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-bold border border-green-500/20 mb-6 uppercase tracking-wider">
              <ShieldCheck size={14} />
              Compliance & Security
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Data Safety Overview</h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
              Transparency regarding how we handle data on <strong>company-owned branch devices</strong>. MasterCall is exclusively installed on receptionist and lead generation phones at our 500+ spa locations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6">
                <Server className="text-primary-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">What Data We Collect</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Call Logs:</strong> History of incoming, outgoing, and missed calls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Phone Numbers:</strong> Used solely to identify leads and business contacts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span><strong>Device Metrics:</strong> Battery life, network status, and sync timestamps.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
                <LockKeyhole className="text-indigo-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Why We Collect It</h3>
              <p className="text-neutral-300 leading-relaxed mb-4">
                The MasterCall app is a specialized lead management system. We collect this data to:
              </p>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span>Automatically log business calls into our central CRM.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span>Ensure zero missed opportunities by tracking unattended inquiries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span>Monitor employee performance and device health remotely.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-500/10 to-transparent border border-primary-500/20 p-8 rounded-2xl">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center shrink-0">
                <EyeOff className="text-primary-400" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">No Third-Party Sharing</h3>
                <p className="text-neutral-300 leading-relaxed">
                  We are unequivocally committed to data privacy. <strong>Absolutely no data collected through MasterCall is sold, rented, or shared with third parties.</strong> All information remains siloed within our organization's private servers and is protected using industry-standard HTTPS encryption.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-neutral-400">
                    Questions about our data handling? Contact our compliance team at <a href="mailto:email-us@dishaonlinesolution.in" className="text-white font-medium hover:underline">email-us@dishaonlinesolution.in</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
