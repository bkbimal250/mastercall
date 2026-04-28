import React, { useEffect } from "react";
import Container from "../components/layout/Container";
import { Shield, Lock, FileText, Database, Smartphone } from "lucide-react";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | MasterCall - Business Call Tracking";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Privacy Policy for MasterCall, the secure enterprise lead management and business call monitoring system for authorized spa and salon branches.");
    }
  }, []);

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs font-bold border border-primary-500/20 mb-6 uppercase tracking-wider">
            <Shield size={14} />
            MasterCall Security
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Privacy Policy</h1>
          <p className="text-neutral-400 text-lg mb-10 border-b border-white/10 pb-10">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-12 text-neutral-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <FileText className="text-primary-500" />
                1. Introduction
              </h2>
              <p className="mb-4 leading-relaxed">
                Welcome to <strong>MasterCall</strong>. Please note that MasterCall is a <strong>private enterprise call tracking system</strong> designed exclusively for company-owned "Branch Devices" at authorized spa and salon locations.
              </p>
              <p className="leading-relaxed p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg text-primary-100 mb-4">
                <strong>Important Notice:</strong> This application is <strong>NOT</strong> for public use and is <strong>NOT</strong> to be installed on personal employee phones. It is strictly limited to receptionist-managed phones (typically 4 per branch) across our 500+ spas for business call monitoring.
              </p>
              <p className="leading-relaxed p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-indigo-100">
                Access is strictly restricted and requires a secure registration token issued directly from our internal CRM. Without this token, the application cannot be accessed or used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Database className="text-primary-500" />
                2. Data Collection
              </h2>
              <p className="mb-4 leading-relaxed">
                We only collect data from verified and company-approved devices. Once a device is authenticated, we collect the following information:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Call Logs:</strong> Incoming, outgoing, and missed calls made to or from the device.</li>
                <li><strong>Phone Numbers:</strong> Contact details strictly related to business calls and leads.</li>
                <li><strong>Device Status:</strong> Device health metrics such as battery level and network connectivity to ensure reliable synchronization.</li>
                <li><strong>App Usage:</strong> Analytics on how the app is being used to improve performance and operations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Lock className="text-primary-500" />
                3. Purpose of Data & Permissions Used
              </h2>
              <p className="mb-4 leading-relaxed">
                The core functionality of MasterCall relies on accessing your device's call history. We request <strong>Call Log permissions</strong> specifically for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Business Call Tracking:</strong> Logging interactions with clients to maintain high service standards.</li>
                <li><strong>Lead Management:</strong> Ensuring that no customer inquiry is missed and follow-ups are prompt.</li>
                <li><strong>Performance Analytics:</strong> Evaluating branch and employee performance based on call metrics.</li>
                <li><strong>Device Monitoring:</strong> Ensuring company devices are functioning optimally.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Shield className="text-primary-500" />
                4. Data Security
              </h2>
              <p className="mb-4 leading-relaxed">
                We take data security seriously. All information transmitted between the MasterCall app and our servers is encrypted using industry-standard <strong>HTTPS</strong> protocols. Your data is stored securely in our private databases with strict access controls.
              </p>
              <p className="leading-relaxed font-bold text-white">
                We do NOT sell, rent, or share your personal data, call logs, or business leads with any third parties. All data remains strictly internal for organizational use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                5. User Rights
              </h2>
              <p className="mb-4 leading-relaxed">
                Authorized users have the right to request access to the data collected from their assigned devices. If an employee leaves the organization or a device is decommissioned, access tokens are immediately revoked, and tracking ceases instantly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Smartphone className="text-primary-500" />
                7. Device Ownership & Installation Scope
              </h2>
              <p className="mb-4 leading-relaxed">
                To ensure employee privacy and strict operational focus, MasterCall is subject to the following installation rules:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>No Personal Installation:</strong> MasterCall is <strong>NOT</strong> installed on personal smartphones of employees or any company-related personal devices.</li>
                <li><strong>Dedicated Branch Devices:</strong> The application is exclusively installed on company-owned "Branch Devices" located at our 500+ spa locations.</li>
                <li><strong>Operational Focus:</strong> Installation is strictly limited to devices used by receptionists and lead generators specifically for attending client calls and managing customer inquiries.</li>
                <li><strong>Fixed Quantity:</strong> Typically, each spa branch operates up to 4 dedicated phones for business interactions.</li>
                <li><strong>Secure Call Phones:</strong> These devices are treated as secure business communication tools, and call history tracking is limited to these specific branch-owned units.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                8. Contact Information
              </h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please contact our administrative team:
              </p>
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl inline-block">
                <p className="font-bold text-white mb-1">Support Team</p>
                <a href="mailto:email-us@dishaonlinesolution.in" className="text-primary-400 hover:text-primary-300 transition-colors">
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
