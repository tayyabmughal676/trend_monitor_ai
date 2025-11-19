import { Bell, AlertCircle, TrendingUp, MessageSquare, CheckCircle2 } from "lucide-react";

export default function AlertsPage() {
  const alerts = [
    {
      id: 1,
      type: "critical",
      title: "Sentiment Drop Detected",
      message: "Nike's sentiment score dropped by 15% on Grok in the last hour due to a viral tweet.",
      time: "10 mins ago",
      icon: AlertCircle,
      color: "text-red-500",
      bg: "bg-red-500/10"
    },
    {
      id: 2,
      type: "success",
      title: "Viral Trend Alert",
      message: "Positive mentions of 'Air Max' are trending up on TikTok and ChatGPT.",
      time: "2 hours ago",
      icon: TrendingUp,
      color: "text-neon-green",
      bg: "bg-neon-green/10"
    },
    {
      id: 3,
      type: "info",
      title: "New Competitor Insight",
      message: "Adidas has launched a new campaign that is gaining traction on Gemini.",
      time: "5 hours ago",
      icon: MessageSquare,
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      id: 4,
      type: "success",
      title: "Report Ready",
      message: "Your weekly brand analysis report is ready for download.",
      time: "1 day ago",
      icon: CheckCircle2,
      color: "text-gray-400",
      bg: "bg-gray-500/10"
    }
  ];

  return (
    <div className="animate-fade-in-up max-w-4xl mx-auto">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Alerts & Notifications</h1>
          <p className="text-gray-400">Stay updated on critical changes.</p>
        </div>
        <button className="text-sm text-neon-purple hover:underline">Mark all as read</button>
      </header>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="glass-panel p-4 rounded-2xl flex items-start gap-4 hover:bg-white/5 transition-colors cursor-pointer group">
            <div className={`p-3 rounded-xl ${alert.bg} ${alert.color} group-hover:scale-110 transition-transform`}>
              <alert.icon size={24} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-lg">{alert.title}</h3>
                <span className="text-xs text-gray-500">{alert.time}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{alert.message}</p>
            </div>
            {alert.type === 'critical' && (
              <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
