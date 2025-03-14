
import React from 'react';
import { Bot, Search, FileText, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: <Search className="h-10 w-10 text-white" strokeWidth={1.5} />,
    title: "Trend Analysis",
    description: "SEOBot scans the web to identify trending topics and high-performing content in your industry.",
    color: "bg-blue-600"
  },
  {
    icon: <Bot className="h-10 w-10 text-white" strokeWidth={1.5} />,
    title: "Content Generation",
    description: "Our AI processes the data and generates original, SEO-optimized blog posts tailored to your audience.",
    color: "bg-indigo-600"
  },
  {
    icon: <FileText className="h-10 w-10 text-white" strokeWidth={1.5} />,
    title: "SEO Optimization",
    description: "Each piece of content is structured with optimal headings, keywords, and meta tags for maximum visibility.",
    color: "bg-purple-600"
  },
  {
    icon: <Zap className="h-10 w-10 text-white" strokeWidth={1.5} />,
    title: "Publish & Rank",
    description: "Publish directly to your website and watch your content climb the search rankings and drive traffic.",
    color: "bg-pink-600"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_50%_60%,rgba(13,148,255,0.05),transparent)] dark:bg-[radial-gradient(40%_40%_at_50%_60%,rgba(13,148,255,0.03),transparent)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How SEOBot Works</h2>
          <p className="text-lg text-muted-foreground">
            Our streamlined process automates your content creation from trend analysis to publishing, saving you time while delivering results.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg mb-6 relative`}>
                  {step.icon}
                  <div className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-white text-primary font-bold flex items-center justify-center text-sm border border-gray-200">
                    {index + 1}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to automate your SEO content?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Join thousands of businesses saving time and resources with SEOBot's AI-powered content generation.
            </p>
            
            <Button size="lg" className="group">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <p className="mt-4 text-sm text-muted-foreground">No credit card required. 14-day free trial.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
