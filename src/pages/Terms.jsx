import React, { useEffect } from "react";
import Container from "../components/layout/Container";

import {
  AlertTriangle,
  Briefcase,
  FileSignature,
  CheckSquare,
  Shield,
  Phone,
} from "lucide-react";

export default function Terms() {

  useEffect(() => {
    document.title = "Terms & Conditions | MasterCall";

    const metaDesc = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Terms and conditions for using the MasterCall business communication and CRM synchronization platform."
      );
    }
  }, []);

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <Container>

        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">

          {/* Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 text-primary-400 rounded-full text-xs font-bold border border-primary-500/20 mb-6 uppercase tracking-wider">
            <FileSignature size={14} />
            MasterCall Legal Terms
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Terms & Conditions
          </h1>

          <p className="text-neutral-400 text-lg mb-10 border-b border-white/10 pb-10">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-14 text-neutral-300">

            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Briefcase className="text-primary-500" />
                1. Platform Usage
              </h2>

              <p className="leading-relaxed mb-4">
                MasterCall is a business communication and CRM
                synchronization platform designed for authorized
                organizations and approved business communication workflows.
              </p>

              <p className="leading-relaxed mb-4">
                The platform may optionally provide default business
                dialer functionality for handling incoming and outgoing
                business calls on supported Android devices.
              </p>

              <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-100">
                Users must explicitly approve any default dialer
                functionality through Android system settings.
              </div>
            </section>

            {/* Authorized Usage */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <CheckSquare className="text-primary-500" />
                2. Authorized Usage
              </h2>

              <p className="leading-relaxed mb-4">
                By using MasterCall, users agree to use the platform
                only for legitimate business communication purposes.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Use only on approved or authorized devices</li>
                <li>Use only for legitimate business communication</li>
                <li>Maintain account and device security</li>
                <li>Comply with applicable local laws and regulations</li>
                <li>Protect access credentials and CRM accounts</li>
              </ul>
            </section>

            {/* Phone Features */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Phone className="text-primary-500" />
                3. Phone & Dialer Functionality
              </h2>

              <p className="leading-relaxed mb-4">
                MasterCall may request limited phone-related permissions
                necessary for business communication functionality.
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Incoming business call handling</li>
                <li>Outgoing business call handling</li>
                <li>Business call synchronization</li>
                <li>CRM communication workflows</li>
                <li>Optional default business dialer functionality</li>
              </ul>

              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-100">
                MasterCall does NOT access SMS messages and does NOT
                perform hidden monitoring or spyware activities.
              </div>
            </section>

            {/* User Control */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Shield className="text-primary-500" />
                4. User Consent & Control
              </h2>

              <p className="leading-relaxed mb-4">
                Users maintain full control over:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Permission approvals</li>
                <li>Default dialer configuration</li>
                <li>Permission revocation</li>
                <li>Application removal</li>
              </ul>

              <p className="leading-relaxed">
                Users may disable or remove default dialer functionality
                at any time through Android system settings.
              </p>
            </section>

            {/* Prohibited Use */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <AlertTriangle className="text-yellow-500" />
                5. Prohibited Activities
              </h2>

              <p className="leading-relaxed mb-4">
                Users may not use MasterCall for:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Unauthorized surveillance</li>
                <li>Illegal monitoring activities</li>
                <li>Interception of private communications</li>
                <li>Reverse engineering or platform abuse</li>
                <li>Violations of applicable laws or regulations</li>
              </ul>
            </section>

            {/* Liability */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Service Disclaimer
              </h2>

              <p className="leading-relaxed mb-4">
                MasterCall is provided for business communication
                and CRM synchronization purposes.
              </p>

              <p className="leading-relaxed">
                While reasonable efforts are made to maintain service
                reliability and synchronization accuracy, uninterrupted
                service availability cannot be guaranteed.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                7. Contact & Support
              </h2>

              <p className="leading-relaxed mb-4">
                For support or legal inquiries, contact:
              </p>

              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl inline-block">
                <a
                  href="mailto:email-us@dishaonlinesolution.in"
                  className="text-primary-400 hover:text-primary-300 font-medium"
                >
                  email-us@dishaonlinesolution.in
                </a>

                <p className="mt-3 text-neutral-400">
                  https://mastercall.in
                </p>
              </div>
            </section>

          </div>
        </div>

      </Container>
    </div>
  );
}