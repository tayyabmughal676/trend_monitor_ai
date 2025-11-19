import Link from "next/link";
import { ArrowUpRight, TrendingUp, MessageCircle, AlertCircle, Bell } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-400">Here's what's happening with your brand today.</p>
        </div>
        <Link href="/dashboard/monitor" className="btn bg-neon-purple text-white border-none hover:bg-neon-purple/80 rounded-full px-6 shadow-[0_0_15px_rgba(189,0,255,0.4)] hover:shadow-[0_0_25px_rgba(189,0,255,0.6)] transition-all">
          + New Monitor
        </Link>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total Mentions", value: "1,284", change: "+12%", icon: MessageCircle, color: "text-neon-blue" },
          { label: "Sentiment Score", value: "8.4/10", change: "+0.8", icon: TrendingUp, color: "text-neon-green" },
          { label: "Critical Alerts", value: "3", change: "-2", icon: AlertCircle, color: "text-neon-pink" },
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className="flex items-center text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                {stat.change} <ArrowUpRight size={12} className="ml-1" />
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity / Mock Chart */}
        <div className="lg:col-span-2 glass-panel p-8 rounded-3xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">LLM Sentiment Trends</h3>
            <select className="bg-black/20 border border-white/10 rounded-lg px-3 py-1 text-sm text-gray-400 focus:outline-none">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>Last 24 Hours</option>
            </select>
          </div>
          
          <div className="h-64 flex items-end justify-between gap-2">
            {/* Mock Bars */}
            {[40, 60, 45, 70, 85, 65, 55, 80, 90, 75, 60, 95].map((h, i) => (
              <div key={i} className="w-full bg-white/5 rounded-t-lg hover:bg-neon-purple transition-all duration-300 relative group" style={{ height: `${h}%` }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black border border-white/10 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {h}%
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-gray-500 font-medium">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </div>

        {/* Recent Alerts Preview */}
        <div className="glass-panel p-8 rounded-3xl flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Bell size={20} className="text-neon-pink" /> Recent Alerts
            </h3>
            <Link href="/dashboard/alerts" className="text-xs text-gray-400 hover:text-white">View All</Link>
          </div>
          
          <div className="space-y-4 flex-1">
            {[
              { title: "Sentiment Drop", time: "10m ago", color: "bg-red-500" },
              { title: "Viral Trend", time: "2h ago", color: "bg-neon-green" },
              { title: "New Competitor", time: "5h ago", color: "bg-blue-500" },
            ].map((alert, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                <div className={`w-2 h-2 rounded-full ${alert.color}`} />
                <div className="flex-1">
                  <div className="font-bold text-sm">{alert.title}</div>
                  <div className="text-xs text-gray-500">{alert.time}</div>
                </div>
                <ArrowUpRight size={14} className="text-gray-600" />
              </div>
            ))}
          </div>
          
          <Link href="/dashboard/alerts" className="mt-6 btn btn-sm btn-outline border-white/10 text-gray-400 hover:text-white hover:bg-white/5 w-full">
            Go to Alerts
          </Link>
        </div>
      </div>
    </div>
  );
}
