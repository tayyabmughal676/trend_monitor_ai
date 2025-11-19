import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black/40 backdrop-blur-xl mt-20 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <h3 className="font-bold text-xl">BrandMonitor<span className="text-neon-purple">AI</span></h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Decode the AI zeitgeist. Understand how Large Language Models perceive and discuss your brand in real-time.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-500 hover:text-neon-blue transition-colors"><Twitter size={20} /></Link>
            <Link href="#" className="text-gray-500 hover:text-neon-pink transition-colors"><Instagram size={20} /></Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></Link>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="/features" className="hover:text-neon-green transition-colors">Features</Link></li>
            <li><Link href="/features" className="hover:text-neon-green transition-colors">Integrations</Link></li>
            <li><Link href="/pricing" className="hover:text-neon-green transition-colors">Pricing</Link></li>
            <li><Link href="#" className="hover:text-neon-green transition-colors">Changelog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="#" className="hover:text-neon-purple transition-colors">Documentation</Link></li>
            <li><Link href="#" className="hover:text-neon-purple transition-colors">API Reference</Link></li>
            <li><Link href="#" className="hover:text-neon-purple transition-colors">Community</Link></li>
            <li><Link href="#" className="hover:text-neon-purple transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Brand Monitor AI. All rights reserved.
      </div>
    </footer>
  );
}
