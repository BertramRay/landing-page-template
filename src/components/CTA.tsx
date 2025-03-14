
import React from 'react';
import { ArrowRight, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CTA = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_50%_60%,rgba(13,148,255,0.08),transparent)] dark:bg-[radial-gradient(40%_40%_at_50%_60%,rgba(13,148,255,0.03),transparent)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl overflow-hidden shadow-xl">
          <div className="px-6 py-10 sm:px-12 sm:py-16 md:p-16 text-white">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-white/10 rounded-full">
                  <Bot className="h-10 w-10 text-white" strokeWidth={1.5} />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                Start creating SEO-optimized content today
              </h2>
              
              <p className="text-lg md:text-xl text-center text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that are automating their content creation and boosting their search rankings with SEOBot.
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
            <div className="inline-flex items-center justify-center bg-primary/10 w-16 h-16 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-8 w-8">
                <path d="M12 2v8"></path>
                <path d="m4.93 10.93 1.41 1.41"></path>
                <path d="M2 18h2"></path>
                <path d="M20 18h2"></path>
                <path d="m19.07 10.93-1.41 1.41"></path>
                <path d="M22 22H2"></path>
                <path d="M16 6 8 14"></path>
                <path d="M16 14H8V6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Setup</h3>
            <p className="text-muted-foreground">
              Get up and running in minutes with our simple onboarding process.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-primary/10 w-16 h-16 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-8 w-8">
                <path d="M20 22h-2"></path>
                <path d="M20 15v2"></path>
                <path d="M4 22H2"></path>
                <path d="M4 15v7"></path>
                <path d="M18 22h-8"></path>
                <path d="M9 2v4"></path>
                <path d="M6 2h6"></path>
                <path d="M8 8V6"></path>
                <path d="M10 8V6"></path>
                <path d="M7 11a5 5 0 0 0 10 0c0-2-2-3-2-3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-muted-foreground">
              Our dedicated support team is available around the clock to help you succeed.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-primary/10 w-16 h-16 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-8 w-8">
                <path d="M5.8 11.3 2 22l10.7-3.79"></path>
                <path d="M4 3h.01"></path>
                <path d="M22 8h.01"></path>
                <path d="M15 2h.01"></path>
                <path d="M22 20h.01"></path>
                <path d="m22 2-8 11 8-3"></path>
                <path d="M9 13 2 2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Constant Improvements</h3>
            <p className="text-muted-foreground">
              We regularly update our AI algorithms to ensure you get the best results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
