import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Search, Zap, Globe, MessageSquare } from "lucide-react";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Brand Monitor AI",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "A Gen-Z focused platform to monitor brand reputation across Large Language Models like ChatGPT, Gemini, and Grok.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1240"
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 flex-grow flex flex-col items-center justify-center text-center z-10">
        <div className="absolute top-20 right-[10%] w-24 h-24 bg-neon-green/20 rounded-full blur-xl animate-float delay-1000" />
        <div className="absolute bottom-20 left-[10%] w-32 h-32 bg-neon-purple/20 rounded-full blur-xl animate-float delay-700" />

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 animate-fade-in-up">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-green"></span>
          </span>
          <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">AI Monitoring Live</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 max-w-4xl mx-auto leading-[1.1]">
          What does <span className="text-gradient">ChatGPT</span> think about <br className="hidden md:block" />
          <span className="text-gradient-purple italic">Your Brand?</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Track your brand's reputation across Grok, Gemini, Claude, and more. 
          Get real-time insights and viral trends before they happen.
        </p>

        {/* Search Bar Mockup */}
        <div className="w-full max-w-2xl relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple rounded-full opacity-70 blur group-hover:opacity-100 transition duration-500"></div>
          <div className="relative flex items-center bg-black rounded-full p-2 pl-6 border border-white/10">
            <Search className="text-gray-400 mr-3" />
            <input 
              type="text" 
              placeholder="Search any brand (e.g. Nike, Tesla)..." 
              className="bg-transparent border-none outline-none text-white w-full placeholder:text-gray-600 h-12 text-lg"
            />
            <Link href="/dashboard/monitor" className="btn btn-circle bg-white text-black hover:bg-gray-200 border-none ml-2 flex items-center justify-center">
              <Zap size={20} fill="black" />
            </Link>
          </div>
        </div>

        {/* Floating LLM Logos (Mock) */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Just text placeholders for now, or simple circles */}
           {['Gemini', 'ChatGPT', 'Grok', 'Claude', 'DeepSeek'].map((name) => (
             <div key={name} className="glass-panel px-6 py-2 rounded-xl text-sm font-bold text-gray-300 hover:text-white hover:border-white/30 cursor-default transition-all">
               {name}
             </div>
           ))}
        </div>
      </section>

      {/* Public Reports Slider */}
      <section className="py-10 px-6 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-2 h-8 bg-neon-purple rounded-full"></span>
            Recent Public Reports
          </h2>
          
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar">
            {[
              { brand: 'Nike', score: 85, trend: 'Trending', color: 'text-neon-green' },
              { brand: 'Tesla', score: 72, trend: 'Mixed', color: 'text-yellow-400' },
              { brand: 'Olipop', score: 94, trend: 'Viral', color: 'text-neon-pink' },
              { brand: 'Skims', score: 88, trend: 'Positive', color: 'text-neon-blue' },
              { brand: 'OpenAI', score: 65, trend: 'Controversial', color: 'text-red-400' },
            ].map((report, i) => (
              <Link 
                key={i} 
                href={`/report/${report.brand.toLowerCase()}`}
                className="min-w-[280px] glass-panel p-6 rounded-3xl hover:bg-white/5 transition-all hover:-translate-y-1 snap-center border border-white/5 hover:border-white/20"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{report.brand}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full bg-white/10 ${report.color}`}>
                    {report.trend}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-400">Sentiment Score</div>
                  <div className="text-3xl font-bold flex items-baseline gap-1">
                    {report.score}<span className="text-sm text-gray-500 font-normal">/100</span>
                  </div>
                </div>
                <div className="mt-4 text-xs text-gray-500 flex items-center gap-1">
                  View Analysis <Zap size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe className="text-neon-blue" size={32} />,
                title: "Global AI Scan",
                desc: "We scan every major LLM to find mentions of your brand in real-time."
              },
              {
                icon: <MessageSquare className="text-neon-pink" size={32} />,
                title: "Sentiment Analysis",
                desc: "Understand the vibe. Is the AI praising you or roasting you?"
              },
              {
                icon: <Zap className="text-neon-green" size={32} />,
                title: "Viral Predictions",
                desc: "Spot upcoming trends and viral moments before they explode."
              }
            ].map((feature, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors group">
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
