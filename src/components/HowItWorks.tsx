import React from 'react';
import { Search, Users, LineChart, Zap, ArrowRight, Target, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: <Search className="h-10 w-10 text-white" strokeWidth={1.5} />,
    title: "Define Your Campaign",
    description: "Set your campaign goals, target audience, and budget parameters to start the influencer matching process.",
    color: "bg-blue-600"
  },
  {
    icon: <Users className="h-10 w-10 text-white" strokeWidth={1.5} />,
    title: "AI Matching",
    description: "Our AI analyzes thousands of influencers to find the perfect match based on your brand values and audience demographics.",
    color: "bg-indigo-600"
  },
  {
    icon: <Target className="h-10 w-10 text-white" strokeWidth={1.5} />,
    title: "Execute Campaign",
    description: "Manage content approvals, coordinate posting schedules, and track deliverables through our streamlined workflow.",
    color: "bg-purple-600"
  },
  {
    icon: <LineChart className="h-10 w-10 text-white" strokeWidth={1.5} />,
    title: "Analyze Results",
    description: "Track real-time performance metrics across all platforms and optimize future campaigns with detailed insights.",
    color: "bg-pink-600"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_50%_60%,rgba(13,148,255,0.05),transparent)] dark:bg-[radial-gradient(40%_40%_at_50%_60%,rgba(13,148,255,0.03),transparent)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How ahalab Works</h2>
          <p className="text-lg text-muted-foreground">
            Our streamlined platform connects brands with the perfect influencers and manages your campaigns from planning to performance analysis.
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
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Secure, Transparent Payments</h3>
              <p className="text-lg text-muted-foreground mb-8">
                ahalab's escrow payment system ensures security for both brands and influencers, releasing funds only when campaign milestones are met and verified.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Start Your First Campaign
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="mt-4 sm:mt-0 text-sm text-muted-foreground flex items-center">
                  <DollarSign className="h-4 w-4 text-green-500 mr-1" />
                  No upfront fees. Pay only for successful campaigns.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-purple-500/10 p-6 rounded-xl">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-semibold">Campaign Payment</div>
                  <div className="text-green-500 text-sm font-medium">Secure</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Campaign Budget</span>
                    <span className="font-medium">$10,000</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Platform Fee</span>
                    <span className="font-medium">$500</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium">$100</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between items-center font-semibold">
                    <span>Total</span>
                    <span>$10,600</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-primary text-white py-2 rounded text-center text-sm font-medium">Protected by ahalab Escrow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
