import React from 'react';
import { ArrowRight, Users, Globe, Instagram, Youtube, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CTA = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_50%_60%,rgba(90,49,240,0.08),transparent)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-indigo-400 rounded-3xl overflow-hidden shadow-xl">
          <div className="px-6 py-10 sm:px-12 sm:py-16 md:p-16 text-white">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-white/10 rounded-full">
                  <img 
                    src="/Aha ads-logo-2000x2000.png" 
                    alt="Aha Platform" 
                    className="h-10 w-10"
                  />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                Launch your influencer marketing campaign today
              </h2>
              
              <p className="text-lg md:text-xl text-center text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of brands that are scaling their marketing reach through Aha Platform's intelligent influencer matching technology.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl max-w-2xl mx-auto">
                <form className="flex flex-col sm:flex-row gap-4">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-white"
                  />
                  <Button className="bg-white text-primary hover:bg-white/90 shrink-0 whitespace-nowrap group">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
                <p className="text-xs text-white/80 text-center mt-4">
                  14-day free trial. No credit card required. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-secondary w-16 h-16 rounded-full mb-4">
              <Globe className="text-primary h-8 w-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-muted-foreground">
              Connect with influencers across multiple platforms and countries to expand your brand's global presence.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-secondary w-16 h-16 rounded-full mb-4">
              <div className="flex items-center justify-center space-x-1">
                <Instagram className="text-primary h-5 w-5" strokeWidth={1.5} />
                <Youtube className="text-primary h-5 w-5" strokeWidth={1.5} />
                <Twitter className="text-primary h-5 w-5" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Multi-Platform Support</h3>
            <p className="text-muted-foreground">
              Launch coordinated campaigns across YouTube, Instagram, TikTok, LinkedIn, and Twitter from a single dashboard.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-secondary w-16 h-16 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-8 w-8">
                <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"></path>
                <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Strategic Guidance</h3>
            <p className="text-muted-foreground">
              Get AI-powered campaign strategy recommendations based on your goals, audience, and current market trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
