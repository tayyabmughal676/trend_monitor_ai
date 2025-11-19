import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Brand Monitor AI",
  description: "Choose your vibe. Affordable plans for personal brands, creators, and enterprises. Start monitoring your AI reputation today.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 flex-grow relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Choose Your <span className="text-gradient-purple">Vibe</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Unlock the full potential of AI brand monitoring with plans designed for every stage of growth.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="glass-panel p-8 rounded-3xl border-white/10 hover:border-white/30 transition-all">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <p className="text-gray-400 mb-8">Perfect for personal brands and curious minds.</p>
            <ul className="space-y-4 mb-8">
              {['Monitor 1 Brand', 'Weekly Reports', 'Basic Sentiment Analysis', 'Community Support'].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-300">
                  <div className="bg-white/10 p-1 rounded-full"><Check size={14} /></div>
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="/register" className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors font-bold block text-center">
              Get Started
            </Link>
          </div>

          {/* Pro Plan (Highlighted) */}
          <div className="glass-panel p-8 rounded-3xl border-neon-purple/50 relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neon-purple text-white px-4 py-1 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(189,0,255,0.5)]">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2 text-neon-purple">Viral</h3>
            <div className="text-4xl font-bold mb-6">$29<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <p className="text-gray-400 mb-8">For creators and brands ready to dominate.</p>
            <ul className="space-y-4 mb-8">
              {['Monitor 5 Brands', 'Real-time Alerts', 'Advanced AI Insights', 'Competitor Analysis', 'Priority Support'].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-white">
                  <div className="bg-neon-purple p-1 rounded-full text-black"><Check size={14} /></div>
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="/register" className="w-full py-3 rounded-xl bg-neon-purple text-white hover:bg-neon-purple/80 transition-colors font-bold shadow-[0_0_20px_rgba(189,0,255,0.3)] block text-center">
              Go Viral
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="glass-panel p-8 rounded-3xl border-white/10 hover:border-white/30 transition-all">
            <h3 className="text-2xl font-bold mb-2">G.O.A.T</h3>
            <div className="text-4xl font-bold mb-6">$99<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <p className="text-gray-400 mb-8">Full power for agencies and large teams.</p>
            <ul className="space-y-4 mb-8">
              {['Unlimited Brands', 'API Access', 'Custom Reports', 'Dedicated Account Manager', 'SSO & Security'].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-300">
                  <div className="bg-white/10 p-1 rounded-full"><Check size={14} /></div>
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="/register" className="w-full py-3 rounded-xl bg-white text-black hover:bg-gray-200 transition-colors font-bold block text-center">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
