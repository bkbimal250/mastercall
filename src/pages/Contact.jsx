import React, { useEffect } from "react";
import Container from "../components/layout/Container";
import { Mail, Globe, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | MasterCall";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Contact the MasterCall support team for internal IT support regarding our lead management system.");
    }
  }, []);

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-500/10 blur-[120px] -z-10" />

      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Contact Support</h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
              Need assistance with your MasterCall installation, token generation, or experiencing sync issues? Our IT team is here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-primary-500/20 rounded-full flex items-center justify-center mb-6">
                <Mail className="text-primary-500" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
              <p className="text-neutral-400 mb-4">Average response time: 2 hours</p>
              <a href="mailto:support@mastercall.in" className="text-primary-400 font-bold text-lg hover:text-primary-300">
                support@mastercall.in
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-indigo-500/20 rounded-full flex items-center justify-center mb-6">
                <Globe className="text-indigo-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Internal Portal</h3>
              <p className="text-neutral-400 mb-4">Access CRM tools and docs</p>
              <a href="https://mastercall.in" target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-bold text-lg hover:text-indigo-300">
                mastercall.in
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="text-green-500" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">IT Helpdesk</h3>
              <p className="text-neutral-400 mb-4">For immediate branch issues</p>
              <span className="text-neutral-300 font-medium px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                Use Internal Slack Channel
              </span>
            </div>
          </div>

          <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Report an Issue</h3>
              <p className="text-neutral-400 mb-8">
                If your device is failing to sync calls to the CRM, please email support with your Branch ID and Device Serial Number to expedite troubleshooting.
              </p>
              <a 
                href="mailto:support@mastercall.in?subject=MasterCall Issue - [Branch Name]"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-xl font-bold hover:bg-primary-600 transition-colors"
              >
                <Mail size={20} />
                Send Error Report
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
