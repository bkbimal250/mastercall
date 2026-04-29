import React, { useEffect } from "react";
import Container from "../components/layout/Container";
import { ShieldCheck, Server, EyeOff, LockKeyhole } from "lucide-react";

export default function DataSafety() {
  useEffect(() => {
    document.title = "Data Safety | MasterCall - Call Tracking Software";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "MasterCall data safety overview. Learn how call logs and device data are securely handled for enterprise CRM and business tracking."
      );
    }
  }, []);

  return (<div className="pt-32 pb-24 bg-background min-h-screen"> <Container> <div className="max-w-4xl mx-auto">
    {/* HEADER */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-bold border border-green-500/20 mb-6 uppercase tracking-wider">
        <ShieldCheck size={14} />
        Compliance & Security
      </div>

      <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
        Data Safety Overview
      </h1>

      <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
        MasterCall is a <strong>private enterprise system</strong> used only on
        company-owned devices for business call tracking and CRM integration.
      </p>
    </div>

    {/* ENTERPRISE NOTICE */}
    <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-xl mb-12 text-yellow-100">
      <strong>Important:</strong> This application is not intended for public or personal use.
      It operates only on authorized company devices and requires secure registration
      via a token issued by the organization.
    </div>

    {/* DATA COLLECTION */}
    <div className="grid md:grid-cols-2 gap-8 mb-16">

      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
        <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6">
          <Server className="text-primary-500" size={24} />
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">
          What Data We Collect
        </h3>

        <ul className="space-y-3 text-neutral-300">
          <li>
            <strong>Call Logs:</strong> Incoming, outgoing, and missed calls.
          </li>
          <li>
            <strong>Phone Numbers:</strong> Used for business lead tracking.
          </li>
          <li>
            <strong>Device Information:</strong> Device ID, battery, and network status.
          </li>
        </ul>

        {/* CRITICAL GOOGLE PLAY LINE */}
        <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-100">
          <strong>Core Permission Notice:</strong> Call log access is required
          for the primary functionality of the app, including CRM synchronization,
          lead tracking, and business analytics.
        </div>
      </div>

      {/* PURPOSE */}
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
        <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
          <LockKeyhole className="text-indigo-400" size={24} />
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">
          Why We Collect It
        </h3>

        <ul className="space-y-3 text-neutral-300">
          <li>CRM synchronization and lead management</li>
          <li>Business call tracking and performance analysis</li>
          <li>Ensuring no missed customer inquiries</li>
          <li>Monitoring device and operational health</li>
        </ul>
      </div>
    </div>

    {/* DATA SECURITY */}
    <div className="bg-gradient-to-r from-primary-500/10 to-transparent border border-primary-500/20 p-8 rounded-2xl mb-12">
      <h3 className="text-2xl font-bold text-white mb-4">Data Security</h3>

      <p className="text-neutral-300 leading-relaxed mb-4">
        All data is transmitted securely using HTTPS encryption and stored
        on company-controlled servers with restricted access.
      </p>

      <p className="text-neutral-300 leading-relaxed font-bold">
        We do NOT sell, rent, or share any user or call data with third parties.
      </p>

      <p className="text-neutral-300 leading-relaxed mt-4">
        This application does not use advertising services and does not access
        any Advertising ID.
      </p>
    </div>

    {/* DATA HANDLING */}
    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl mb-12">
      <h3 className="text-2xl font-bold text-white mb-4">
        Data Handling & User Rights
      </h3>

      <p className="text-neutral-300 leading-relaxed mb-4">
        Data collected is used strictly for business operations within the
        organization.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-neutral-300">
        <li>Data is encrypted during transmission (HTTPS)</li>
        <li>Stored securely on private servers</li>
        <li>Accessible only by authorized personnel</li>
        <li>Users can request access or deletion of their data</li>
      </ul>
    </div>

    {/* CONTACT */}
    <div className="text-center">
      <p className="text-neutral-400">
        For any privacy or data-related concerns:
      </p>
      <a
        href="mailto:email-us@dishaonlinesolution.in"
        className="text-white font-semibold hover:underline"
      >
        email-us@dishaonlinesolution.in
      </a>
    </div>

  </div>
  </Container>
  </div>


  );
}
