import React, { useEffect } from "react";
import Container from "../components/layout/Container";
import { Shield, Lock, FileText, Database, Smartphone } from "lucide-react";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | MasterCall - Business Call Tracking";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Privacy Policy for MasterCall, a secure enterprise call tracking and CRM synchronization system for authorized business devices."
      );
    }
  }, []);

  return (<div className="pt-32 pb-24 bg-background min-h-screen"> <Container> <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl shadow-xl"> <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs font-bold border border-primary-500/20 mb-6 uppercase tracking-wider"> <Shield size={14} />
    MasterCall Security </div>

    <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
      Privacy Policy
    </h1>

    <p className="text-neutral-400 text-lg mb-10 border-b border-white/10 pb-10">
      Last updated: {new Date().toLocaleDateString()}
    </p>

    <div className="space-y-12 text-neutral-300">

      {/* 1. Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <FileText className="text-primary-500" />
          1. Introduction
        </h2>

        <p className="mb-4 leading-relaxed">
          Welcome to <strong>MasterCall</strong>. MasterCall is a{" "}
          <strong>private enterprise call tracking system</strong> designed
          exclusively for company-owned devices used by authorized staff.
        </p>

        <p className="leading-relaxed p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg text-primary-100 mb-4">
          <strong>Important Notice:</strong> This application is NOT for
          public use and must only be installed on company-approved
          devices. It is strictly used for business call monitoring and
          CRM integration.
        </p>

        <p className="leading-relaxed p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-100">
          This application operates under organizational control. Users
          are informed about data collection during device registration and
          usage is limited strictly to business operations.
        </p>
      </section>

      {/* 2. Data Collection */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Database className="text-primary-500" />
          2. Data Collection
        </h2>

        <p className="mb-4 leading-relaxed">
          We collect data only from authorized and registered business
          devices. The following information may be collected:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Call Logs:</strong> Incoming, outgoing, and missed
            calls.
          </li>
          <li>
            <strong>Phone Numbers:</strong> Associated with business calls.
          </li>
          <li>
            <strong>Device Information:</strong> Device ID, battery, and
            network status.
          </li>
        </ul>

        <p className="leading-relaxed p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-100">
          <strong>Important:</strong> Call log data (incoming, outgoing,
          and missed calls) is collected as a core feature to synchronize
          with the company CRM for lead tracking and business analytics.
          This permission is essential for the app to function.
        </p>
      </section>

      {/* 3. Purpose */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Lock className="text-primary-500" />
          3. Purpose of Data & Permissions
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Business call tracking and monitoring</li>
          <li>CRM synchronization and lead management</li>
          <li>Performance analytics</li>
          <li>Device and operational monitoring</li>
        </ul>
      </section>

      {/* 4. Data Security */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Shield className="text-primary-500" />
          4. Data Security
        </h2>

        <p className="mb-4 leading-relaxed">
          All data is transmitted securely using HTTPS encryption and
          stored on secure company-controlled servers.
        </p>

        <p className="leading-relaxed">
          Data is used strictly for internal business purposes. We do NOT
          sell, rent, or share data with third parties.
        </p>

        <p className="leading-relaxed mt-4">
          This application does not use advertising services and does not
          access or utilize any Advertising ID.
        </p>
      </section>

      {/* 5. User Rights */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          5. User Rights
        </h2>

        <p className="mb-4 leading-relaxed">
          Users or organizations may request access, correction, or
          deletion of collected data at any time.
        </p>

        <p className="leading-relaxed">
          Requests can be made through the official support contact and
          will be processed securely.
        </p>
      </section>

      {/* 6. Device Ownership */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Smartphone className="text-primary-500" />
          6. Device Ownership & Usage
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>App is installed only on company-owned devices</li>
          <li>Not allowed on personal devices</li>
          <li>Used only for business communication</li>
        </ul>
      </section>

      {/* 7. Contact */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          7. Contact Information
        </h2>

        <p className="mb-4 leading-relaxed">
          For any privacy-related queries, contact:
        </p>

        <div className="p-6 bg-white/5 border border-white/10 rounded-xl inline-block">
          <p className="font-bold text-white mb-1">Support Team</p>
          <a
            href="mailto:email-us@dishaonlinesolution.in"
            className="text-primary-400 hover:text-primary-300 transition-colors"
          >
            email-us@dishaonlinesolution.in
          </a>
        </div>
      </section>

    </div>
  </div>
  </Container>
  </div>


  );
}
