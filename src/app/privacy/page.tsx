import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Brand Monitor AI",
  description: "How we collect, use, and protect your data. TL;DR: We respect your privacy.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 flex-grow relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy <span className="text-gradient-purple">Policy</span></h1>
          <p className="text-xl text-gray-400">Last updated: November 19, 2025</p>
        </div>

        {/* Summary Section */}
        <div className="glass-panel p-8 rounded-3xl border-neon-blue/30 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 rounded-full blur-[50px] pointer-events-none" />
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Shield className="text-neon-blue" /> TL;DR (The Summary)
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            We respect your privacy and your data. We only collect what's necessary to show you what LLMs think about your brand. 
            We <strong>never</strong> sell your personal data to third parties. Your search history and brand insights are yours. 
            We use industry-standard security to keep your account safe.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12 text-gray-300">
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Eye className="text-neon-purple" size={24} /> 1. Information We Collect
            </h3>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact customer support. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li><strong>Account Information:</strong> Name, email address, and password.</li>
              <li><strong>Brand Data:</strong> The brand names and keywords you monitor.</li>
              <li><strong>Usage Data:</strong> How you interact with our dashboard and features.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FileText className="text-neon-pink" size={24} /> 2. How We Use Your Data
            </h3>
            <p className="mb-4">
              We use the collected data for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>To provide and maintain the Brand Monitor AI service.</li>
              <li>To generate AI insights and sentiment analysis for your monitored brands.</li>
              <li>To notify you about changes to our service or critical brand alerts.</li>
              <li>To detect and prevent fraud or abuse of our platform.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Lock className="text-neon-green" size={24} /> 3. Data Security
            </h3>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h3>
            <p className="mb-4">
              We may use third-party service providers (like OpenAI, Anthropic, Google) to generate insights. We do not share your personal account details with these providers, only the brand queries necessary to generate the reports.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4">5. Your Rights</h3>
            <p className="mb-4">
              You have the right to access, correct, or delete your personal data. You can manage your account settings directly in the dashboard or contact us at privacy@brandmonitor.ai for assistance.
            </p>
          </section>
        </div>

      </section>

      <Footer />
    </main>
  );
}
