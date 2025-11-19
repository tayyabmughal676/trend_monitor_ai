import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Brand Monitor AI | Gen-Z Insights & Reputation Tracking",
    template: "%s | Brand Monitor AI"
  },
  description: "The first AI-native brand monitoring platform. Track what LLMs like ChatGPT, Gemini, and Grok really think about your brand. Get viral insights and sentiment analysis.",
  keywords: ["Brand Monitoring", "AI Reputation", "LLM Analytics", "ChatGPT Sentiment", "Gen-Z Marketing", "Viral Trends", "Grok Analysis"],
  authors: [{ name: "Brand Monitor AI Team" }],
  creator: "Brand Monitor AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brandmonitor.ai",
    title: "Brand Monitor AI | Gen-Z Insights",
    description: "Find out what LLMs really think about your brand. Grok, Gemini, ChatGPT, and more.",
    siteName: "Brand Monitor AI",
    images: [
      {
        url: "/og-image.png", // We'll need to create this later or use a placeholder
        width: 1200,
        height: 630,
        alt: "Brand Monitor AI Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Monitor AI | Gen-Z Insights",
    description: "Track your brand's reputation across Grok, Gemini, Claude, and more.",
    creator: "@brandmonitorai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="black">
      <body
        className={`${outfit.variable} antialiased min-h-screen relative`}
      >
        {/* Noise Texture Overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay"
             style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
        </div>
        
        {/* Background Gradient Blob */}
        <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-neon-purple/20 blur-[120px] pointer-events-none" />
        <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-neon-blue/20 blur-[120px] pointer-events-none" />

        {children}
      </body>
    </html>
  );
}
