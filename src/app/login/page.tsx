import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Brand Monitor AI",
  description: "Sign in to your dashboard and track your brand's performance across the AI landscape.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neon-purple/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-neon-green/10 blur-[100px] pointer-events-none" />

      <div className="glass-panel w-full max-w-md p-8 rounded-3xl relative z-10 animate-fade-in-up">
        <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-neon-green text-black p-3 rounded-xl mb-4">
            <Sparkles size={24} />
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to track your brand's AI reputation.</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-purple transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-purple transition-colors"
            />
          </div>

          <button className="w-full bg-white text-black font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-transform active:scale-95 mt-2">
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account? <Link href="/register" className="text-neon-purple hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
