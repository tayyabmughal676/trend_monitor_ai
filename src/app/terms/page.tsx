import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale, AlertTriangle, CheckCircle, Ban } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Brand Monitor AI",
  description: "The rules of the game. Read our Terms of Service to understand your rights and responsibilities.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 flex-grow relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of <span className="text-gradient">Service</span></h1>
          <p className="text-xl text-gray-400">Last updated: November 19, 2025</p>
        </div>

        {/* Summary Section */}
        <div className="glass-panel p-8 rounded-3xl border-neon-purple/30 mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-neon-purple/10 rounded-full blur-[50px] pointer-events-none" />
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Scale className="text-neon-purple" /> TL;DR (The Summary)
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            By using Brand Monitor AI, you agree to play nice. Don't use our platform for illegal activities or to harass others. 
            We own the platform code, but you own your brand data. 
            AI insights can sometimes be wrong (hallucinations), so verify critical info before making big business decisions.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12 text-gray-300">
          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle className="text-neon-green" size={24} /> 1. Acceptance of Terms
            </h3>
            <p className="mb-4">
              By accessing or using Brand Monitor AI ("the Service"), you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Ban className="text-red-400" size={24} /> 2. Acceptable Use
            </h3>
            <p className="mb-4">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Violate any laws or regulations.</li>
              <li>Infringe upon the rights of others.</li>
              <li>Distribute malware or viruses.</li>
              <li>Interfere with or disrupt the integrity or performance of the Service.</li>
              <li>Scrape or copy data from the Service without our consent.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="text-yellow-400" size={24} /> 3. AI Disclaimer
            </h3>
            <p className="mb-4">
              Our Service uses Large Language Models (LLMs) to generate insights. You acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>AI models can produce inaccurate or misleading information ("hallucinations").</li>
              <li>We are not responsible for decisions made based on AI-generated insights.</li>
              <li>You should independently verify any critical information.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h3>
            <p className="mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Brand Monitor AI and its licensors. You retain all rights to the data you input into the Service.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-white mb-4">5. Termination</h3>
            <p className="mb-4">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>
          
          <section>
            <h3 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h3>
            <p className="mb-4">
              In no event shall Brand Monitor AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>
        </div>

      </section>

      <Footer />
    </main>
  );
}
