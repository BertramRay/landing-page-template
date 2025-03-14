import React, { useState } from 'react';
import { Check, Users, Zap, Globe, BarChart3, Shield, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const plans = [
  {
    name: "Starter",
    description: "Perfect for small brands looking to start with influencer marketing.",
    price: {
      monthly: 99,
      annual: 84
    },
    features: [
      "Up to 5 simultaneous campaigns",
      "Access to 5,000+ micro-influencers",
      "Basic AI matching",
      "Secure payment processing",
      "Campaign analytics dashboard",
      "Email support"
    ],
    cta: "Start Free Trial",
    icon: <Users className="h-6 w-6" strokeWidth={1.5} />,
    popular: false
  },
  {
    name: "Growth",
    description: "Ideal for growing brands focused on scaling their influencer strategy.",
    price: {
      monthly: 249,
      annual: 199
    },
    features: [
      "Up to 15 simultaneous campaigns",
      "Access to 15,000+ influencers",
      "Advanced AI matching algorithm",
      "Strategy planning assistance",
      "Detailed performance analytics",
      "Secure payment processing",
      "Priority email support",
      "Cross-platform campaign coordination"
    ],
    cta: "Start Free Trial",
    icon: <Zap className="h-6 w-6" strokeWidth={1.5} />,
    popular: true
  },
  {
    name: "Business",
    description: "For established brands with serious influencer marketing goals.",
    price: {
      monthly: 499,
      annual: 424
    },
    features: [
      "Unlimited campaigns",
      "Access to all influencers including premium",
      "Premium AI matching with audience overlap",
      "Custom marketing strategy generation",
      "Advanced analytics with ROI forecasting",
      "Multi-user access with roles",
      "Dedicated account manager",
      "Priority phone & email support",
      "API access for custom integrations"
    ],
    cta: "Start Free Trial",
    icon: <Briefcase className="h-6 w-6" strokeWidth={1.5} />,
    popular: false
  }
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  return (
    <section id="pricing" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_50%_60%,rgba(13,148,255,0.05),transparent)] dark:bg-[radial-gradient(40%_40%_at_50%_60%,rgba(13,148,255,0.03),transparent)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing for Every Brand</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the plan that matches your influencer marketing needs. All plans include a 14-day free trial.
          </p>
          
          <div className="flex items-center justify-center space-x-2">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={billingCycle === 'annual'}
              onCheckedChange={(checked) => setBillingCycle(checked ? 'annual' : 'monthly')}
            />
            <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
              <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Save 15%
              </span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                bg-white rounded-2xl shadow-lg border overflow-hidden transition-all duration-300 hover:shadow-xl relative
                ${plan.popular ? 'md:scale-105 border-primary/50 ring-1 ring-primary/20' : 'border-gray-200'}
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground py-1.5 text-xs font-medium text-center">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 mr-3">
                    {React.cloneElement(plan.icon, { className: "h-6 w-6 text-primary" })}
                  </div>
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                </div>
                
                <p className="text-muted-foreground mb-5">{plan.description}</p>
                
                <div className="mb-6">
                  <p className="text-4xl font-bold">
                    ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual}
                    <span className="text-base font-normal text-muted-foreground">/mo</span>
                  </p>
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Billed annually (${plan.price.annual * 12}/year)
                    </p>
                  )}
                </div>
                
                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  className="w-full mb-6"
                >
                  {plan.cta}
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">For Influencers</h3>
            <p className="text-muted-foreground">
              Joining ahalab as an influencer is completely free. Get matched with brands that align with your content.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span>Free profile creation</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span>Secure payment system</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span>Performance analytics</span>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button variant="outline">Register as Influencer</Button>
          </div>
        </div>
        
        <div className="mt-8 bg-gradient-to-r from-primary/10 to-indigo-500/10 rounded-2xl p-8 max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Shield className="h-10 w-10 text-primary" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold mb-2">No commission on campaign budgets</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Unlike other platforms, ahalab doesn't take a percentage of your influencer campaign budget. 
            You only pay the platform fee based on your plan - the rest goes directly to creators.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
