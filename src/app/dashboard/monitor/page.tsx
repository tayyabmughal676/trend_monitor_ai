import Link from "next/link";
import { Search, Plus, TrendingUp, TrendingDown, Activity } from "lucide-react";

export default function MonitorPage() {
  const watchlist = [
    { id: "nike", name: "Nike", sentiment: "Positive", score: 85, trend: "up", mentions: "12k" },
    { id: "tesla", name: "Tesla", sentiment: "Mixed", score: 45, trend: "down", mentions: "45k" },
    { id: "olipop", name: "Olipop", sentiment: "Positive", score: 92, trend: "up", mentions: "5k" },
    { id: "skims", name: "SKIMS", sentiment: "Neutral", score: 60, trend: "flat", mentions: "8k" },
  ];

  return (
    <div className="animate-fade-in-up space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Monitor Brands</h1>
          <p className="text-gray-400">Track real-time AI sentiment for your favorite brands.</p>
        </div>
      </header>

      {/* Search Section */}
      <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-[80px] pointer-events-none" />
        
        <h2 className="text-xl font-bold mb-4">Add a new brand to watch</h2>
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search brands (e.g. Apple, Adidas)..." 
              className="w-full bg-black/30 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-blue transition-all"
            />
          </div>
          <button className="btn bg-neon-blue text-black hover:bg-neon-blue/80 border-none rounded-xl px-8 font-bold flex items-center gap-2">
            <Plus size={20} /> Track
          </button>
        </div>
      </div>

      {/* Watchlist Grid */}
      <div>
        <h2 className="text-xl font-bold mb-6">Your Watchlist</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {watchlist.map((brand) => (
            <Link href={`/dashboard/monitor/${brand.id}`} key={brand.id} className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-all hover:-translate-y-1 group cursor-pointer border-white/5 hover:border-white/20">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  {brand.name[0]}
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  brand.sentiment === 'Positive' ? 'bg-green-500/20 text-green-400' :
                  brand.sentiment === 'Mixed' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {brand.sentiment}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-1">{brand.name}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                <span className="flex items-center gap-1">
                  <Activity size={14} /> {brand.mentions} mentions
                </span>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Sentiment Score</div>
                  <div className="text-3xl font-bold text-white">{brand.score}<span className="text-sm text-gray-500">/100</span></div>
                </div>
                <div className={`mb-1 ${brand.trend === 'up' ? 'text-neon-green' : brand.trend === 'down' ? 'text-red-400' : 'text-gray-400'}`}>
                  {brand.trend === 'up' ? <TrendingUp size={24} /> : brand.trend === 'down' ? <TrendingDown size={24} /> : <Activity size={24} />}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
