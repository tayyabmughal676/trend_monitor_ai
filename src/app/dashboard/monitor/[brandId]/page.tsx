"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Share2, Download, MessageSquare, ThumbsUp, ThumbsDown, AlertTriangle, Zap, ArrowUpRight } from "lucide-react";

export default function BrandDetailPage() {
  const params = useParams();
  const brandName = typeof params.brandId === 'string' ? params.brandId.charAt(0).toUpperCase() + params.brandId.slice(1) : "Brand";

  const llmInsights = [
    { 
      name: "ChatGPT", 
      logo: "C", 
      color: "bg-green-500", 
      summary: "Generally positive. Users praise the innovation but criticize the price point.",
      quote: "Most users associate this brand with high performance and status.",
      sentiment: 85
    },
    { 
      name: "Gemini", 
      logo: "G", 
      color: "bg-blue-500", 
      summary: "Mixed sentiment regarding recent customer service updates.",
      quote: "There is a rising trend of complaints about delivery times in the last 48 hours.",
      sentiment: 60
    },
    { 
      name: "Grok", 
      logo: "X", 
      color: "bg-white text-black", 
      summary: "Viral memes detected. The brand is being roasted for its new ad campaign.",
      quote: "The internet is having a field day with the latest commercial. It's a meme goldmine.",
      sentiment: 40
    },
  ];

  return (
    <div className="animate-fade-in-up space-y-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-blue rounded-2xl flex items-center justify-center text-3xl font-bold text-white">
            {brandName[0]}
          </div>
          <div>
            <h1 className="text-4xl font-bold">{brandName}</h1>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-bold">Healthy</span>
              <span>• Last updated 5 mins ago</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-outline border-white/20 text-white hover:bg-white/10 gap-2">
            <Download size={18} /> Export PDF
          </button>
          <Link href={`/report/${brandName.toLowerCase()}`} className="btn bg-neon-purple text-white border-none hover:bg-neon-purple/80 gap-2 shadow-[0_0_15px_rgba(189,0,255,0.4)] flex items-center">
            <Share2 size={18} /> Share Report
          </Link>
        </div>
      </header>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-panel p-6 rounded-2xl">
          <div className="text-gray-400 text-sm mb-2">Overall Sentiment</div>
          <div className="text-4xl font-bold text-neon-green">82<span className="text-lg text-gray-500">/100</span></div>
        </div>
        <div className="glass-panel p-6 rounded-2xl">
          <div className="text-gray-400 text-sm mb-2">Total Mentions (24h)</div>
          <div className="text-4xl font-bold text-white">12.5k</div>
        </div>
        <div className="glass-panel p-6 rounded-2xl">
          <div className="text-gray-400 text-sm mb-2">Viral Potential</div>
          <div className="text-4xl font-bold text-neon-pink">High</div>
        </div>
        <div className="glass-panel p-6 rounded-2xl">
          <div className="text-gray-400 text-sm mb-2">Primary Emotion</div>
          <div className="text-4xl font-bold text-neon-blue">Excitement</div>
        </div>
      </div>

      {/* LLM Insights Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <MessageSquare className="text-neon-purple" /> What the AI Says
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {llmInsights.map((llm) => (
            <div key={llm.name} className="glass-panel p-6 rounded-3xl hover:bg-white/5 transition-colors relative overflow-hidden group">
              <div className={`absolute top-0 right-0 w-24 h-24 ${llm.color} opacity-10 rounded-bl-full group-hover:scale-110 transition-transform`} />
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${llm.color} text-white`}>
                    {llm.logo}
                  </div>
                  <h3 className="font-bold text-lg">{llm.name}</h3>
                </div>
                <div className="font-bold text-xl">{llm.sentiment}%</div>
              </div>

              <p className="text-gray-300 mb-4 min-h-[3rem]">{llm.summary}</p>
              
              <div className="bg-black/30 p-4 rounded-xl border border-white/5 italic text-gray-400 text-sm">
                "{llm.quote}"
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations & Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 glass-panel p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap className="text-yellow-400" /> AI Recommendations
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <ThumbsUp className="text-green-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-green-400">Capitalize on the Hype</h4>
                <p className="text-sm text-gray-400">ChatGPT users are loving the new design. Launch a targeted ad campaign highlighting the aesthetics.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <AlertTriangle className="text-red-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-red-400">Damage Control Needed</h4>
                <p className="text-sm text-gray-400">Grok is spreading memes about the pricing. Consider a flash sale or a witty social media response to defuse the situation.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl">
           <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
           <div className="space-y-3">
             <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between px-4 transition-colors">
               <span>Generate Report</span>
               <ArrowUpRight size={16} />
             </button>
             <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between px-4 transition-colors">
               <span>Compare Competitors</span>
               <ArrowUpRight size={16} />
             </button>
             <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between px-4 transition-colors">
               <span>Setup Alerts</span>
               <ArrowUpRight size={16} />
             </button>
           </div>
        </div>
      </div>
    </div>
  );
}
