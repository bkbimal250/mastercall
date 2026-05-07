import React, { useEffect } from "react";
import Container from "../components/layout/Container";
import {
  Shield,
  Lock,
  FileText,
  Database,
  Smartphone,
  Phone,
  CheckCircle,
} from "lucide-react";

export default function Privacy() {

  useEffect(() => {
    document.title =
      "Privacy Policy | MasterCall - Business Communication Platform";

    const metaDesc = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "MasterCall is a business communication and CRM synchronization platform with optional default business dialer functionality."
      );
    }
  }, []);

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <Container>

        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">

          {/* Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 text-primary-400 rounded-full text-xs font-bold border border-primary-500/20 mb-6 uppercase tracking-wider">
            <Shield size={14} />
            MasterCall Privacy & Security
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Privacy Policy
          </h1>

          <p className="text-neutral-400 text-lg mb-10 border-b border-white/10 pb-10">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-14 text-neutral-300">

            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <FileText className="text-primary-500" />
                1. Introduction
              </h2>

              <p className="leading-relaxed mb-4">
                Welcome to <strong>MasterCall</strong>.
                MasterCall is a business communication and CRM
                synchronization platform designed for authorized
                organizations and business communication workflows.
              </p>

              <p className="leading-relaxed mb-4">
                The platform may optionally operate as a business
                dialer application for handling incoming and outgoing
                business calls on approved devices.
              </p>

              <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-100 mb-4">
                <strong>Important:</strong> Users must explicitly
                approve any default dialer functionality through
                Android system settings.
              </div>

              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-100">
                MasterCall does not perform hidden monitoring,
                covert surveillance, spyware behavior,
                or unauthorized tracking activities.
              </div>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Database className="text-primary-500" />
                2. Information We Collect
              </h2>

              <p className="leading-relaxed mb-4">
                MasterCall may collect limited business communication
                information required for CRM synchronization and
                communication workflows.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Incoming business call logs</li>
                <li>Outgoing business call logs</li>
                <li>Missed business calls</li>
                <li>Business contact information</li>
                <li>CRM synchronization metadata</li>
                <li>Basic device diagnostics</li>
              </ul>
            </section>

            {/* Permissions */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Phone className="text-primary-500" />
                3. Permissions & Phone Features
              </h2>

              <p className="leading-relaxed mb-4">
                MasterCall may request limited phone-related permissions
                strictly for business communication functionality.
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Incoming call handling</li>
                <li>Outgoing call handling</li>
                <li>Business call synchronization</li>
                <li>Optional default dialer functionality</li>
                <li>CRM communication tracking</li>
              </ul>

              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-100">
                MasterCall does NOT request, access,
                or process SMS messages.
              </div>
            </section>

            {/* Default Dialer */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Smartphone className="text-primary-500" />
                4. Optional Default Dialer Functionality
              </h2>

              <p className="leading-relaxed mb-4">
                Users may optionally configure MasterCall
                as the device's default business dialer application.
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Handle incoming business calls</li>
                <li>Handle outgoing business calls</li>
                <li>Display business call UI</li>
                <li>Synchronize communication with CRM systems</li>
              </ul>

              <p className="leading-relaxed">
                Users may accept, deny, revoke,
                or change the default dialer selection
                at any time through Android settings.
              </p>
            </section>

            {/* Consent */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <CheckCircle className="text-primary-500" />
                5. User Consent & Control
              </h2>

              <p className="leading-relaxed mb-4">
                All permissions requested by MasterCall are presented
                transparently through Android's official permission system.
              </p>

              <p className="leading-relaxed mb-4">
                Users retain full control over:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Permission approvals</li>
                <li>Default dialer configuration</li>
                <li>Permission revocation</li>
                <li>Application uninstall</li>
              </ul>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Lock className="text-primary-500" />
                6. Data Security
              </h2>

              <p className="leading-relaxed mb-4">
                All communication between devices and servers
                is secured using HTTPS/TLS encryption.
              </p>

              <p className="leading-relaxed mb-4">
                Data is used only for authorized business
                communication and CRM functionality.
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p>• No advertising ID usage</p>
                <p>• No SMS access</p>
                <p>• No third-party data selling</p>
                <p>• No unauthorized data sharing</p>
              </div>
            </section>

            {/* Retention */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                7. Data Retention
              </h2>

              <p className="leading-relaxed">
                Business communication records are retained only
                for operational and CRM requirements and may
                be deleted upon authorized request.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                8. Contact Information
              </h2>

              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl inline-block">
                <p className="font-bold text-white mb-2">
                  MasterCall Support
                </p>

                <a
                  href="mailto:email-us@dishaonlinesolution.in"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
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