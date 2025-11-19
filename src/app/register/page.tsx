import Link from "next/link";
import { ArrowLeft, UserPlus } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Brand Monitor AI",
  description: "Join the hype. Create an account to start monitoring what LLMs say about your brand.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-neon-pink/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neon-blue/10 blur-[100px] pointer-events-none" />

      <div className="glass-panel w-full max-w-md p-8 rounded-3xl relative z-10 animate-fade-in-up">
        <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-neon-pink text-white p-3 rounded-xl mb-4">
            <UserPlus size={24} />
          </div>
          <h1 className="text-3xl font-bold mb-2">Join the Hype</h1>
          <p className="text-gray-400">Start monitoring your brand's AI presence today.</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-pink transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-pink transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-pink transition-colors"
            />
          </div>

            <div className="flex items-center gap-3 mb-6">
              <input type="checkbox" id="terms" className="checkbox checkbox-xs checkbox-primary border-gray-600 rounded-sm" required />
              <label htmlFor="terms" className="text-xs text-gray-400 cursor-pointer select-none">
                I agree to the <Link href="/terms" className="text-white hover:underline">Terms</Link> and <Link href="/privacy" className="text-white hover:underline">Privacy Policy</Link>
              </label>
            </div>

            <button className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-6">
              Sign Up
            </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Already have an account? <Link href="/login" className="text-neon-pink hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
