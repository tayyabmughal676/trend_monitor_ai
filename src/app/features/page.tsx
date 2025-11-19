import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, MessageSquare, Zap, Shield, BarChart3, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | Brand Monitor AI",
  description: "Explore our AI-powered features: Multi-LLM Scanning, Sentiment Vibe Checks, Viral Trend Predictions, and Competitor Spying.",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 flex-grow relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">Features that <span className="text-gradient">Slap</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about your brand's reputation in the age of AI.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe className="text-neon-blue" size={40} />,
              title: "Multi-LLM Scanning",
              desc: "We don't just check ChatGPT. We monitor Grok, Gemini, Claude, Llama, and more to give you the full picture."
            },
            {
              icon: <MessageSquare className="text-neon-pink" size={40} />,
              title: "Vibe Check (Sentiment)",
              desc: "Our AI analyzes the tone of mentions. Are you being praised as the G.O.A.T or getting cancelled? Know instantly."
            },
            {
              icon: <Zap className="text-neon-green" size={40} />,
              title: "Trend Prediction",
              desc: "Spot viral narratives before they hit the mainstream. Ride the wave early."
            },
            {
              icon: <Shield className="text-purple-400" size={40} />,
              title: "Brand Safety",
              desc: "Get alerted immediately if an LLM hallucinates false or damaging information about your brand."
            },
            {
              icon: <BarChart3 className="text-yellow-400" size={40} />,
              title: "Deep Analytics",
              desc: "Visual charts that make sense. Track your share of voice across different AI models over time."
            },
            {
              icon: <Users className="text-red-400" size={40} />,
              title: "Competitor Spying",
              desc: "See what the AIs are saying about your rivals. Stay one step ahead of the competition."
            }
          ].map((feature, i) => (
            <div key={i} className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all hover:-translate-y-2 duration-300">
              <div className="mb-6 bg-white/5 w-fit p-4 rounded-2xl">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
