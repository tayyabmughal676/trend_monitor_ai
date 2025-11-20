"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Search, Bell, User, LogOut, Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const navItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Monitor", href: "/dashboard/monitor", icon: Search },
    { name: "Alerts", href: "/dashboard/alerts", icon: Bell },
    { name: "Profile", href: "/dashboard/profile", icon: User },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full p-6">
      <Link href="/" className="flex items-center gap-2 mb-10 px-2">
        <div className="bg-neon-green text-black p-1.5 rounded-lg">
          <Sparkles size={20} strokeWidth={2.5} />
        </div>
        <span className="font-bold text-xl tracking-tight">
          BrandMonitor<span className="text-neon-purple">AI</span>
        </span>
      </Link>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                isActive
                  ? "bg-neon-purple/10 text-neon-purple border border-neon-purple/20 shadow-[0_0_15px_rgba(189,0,255,0.1)]"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon
                size={20}
                className={`transition-colors ${isActive ? "text-neon-purple" : "group-hover:text-white"}`}
              />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <button 
        onClick={() => setIsLogoutModalOpen(true)}
        className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all mt-auto"
      >
        <LogOut size={20} />
        <span className="font-medium">Sign Out</span>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 px-4 py-3 flex items-center justify-between bg-black/80 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-neon-green text-black p-1 rounded">
            <Sparkles size={16} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-lg">BrandMonitorAI</span>
        </Link>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="btn btn-circle btn-ghost btn-sm text-white">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-20 animate-fade-in">
          <SidebarContent />
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 border-r border-white/5 bg-black/50 backdrop-blur-xl fixed h-full z-30">
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 min-h-screen pt-16 md:pt-0 p-4 md:p-8 lg:p-12">
        {children}
      </main>

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in p-4">
          <div className="glass-panel p-8 rounded-3xl max-w-sm w-full border-red-500/20 shadow-[0_0_30px_rgba(255,0,0,0.1)]">
            <h3 className="text-2xl font-bold mb-4 text-white">Leaving so soon? 😢</h3>
            <p className="text-gray-400 mb-8">Are you sure you want to sign out? You might miss the next viral trend.</p>
            <div className="flex gap-4">
              <button 
                onClick={() => setIsLogoutModalOpen(false)}
                className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold transition-colors"
              >
                Stay
              </button>
              <Link 
                href="/login" 
                className="flex-1 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold transition-colors text-center shadow-[0_0_15px_rgba(239,68,68,0.4)]"
              >
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
