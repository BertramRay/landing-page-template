import React from 'react';
import { Users, DollarSign, LineChart, Lightbulb, Shield, BarChart3, Zap, Globe, CheckCircle, Target, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const featuresList = [
  {
    icon: <Users className="h-10 w-10 text-primary" strokeWidth={1.5} />,
    title: "AI-Powered Matching",
    description: "Our advanced recommendation system intelligently matches brands with the perfect influencers based on audience demographics, engagement rates, and content style."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" strokeWidth={1.5} />,
    title: "Secure Payment System",
    description: "Seamless and secure transaction processing ensures both brands and influencers are protected throughout the collaboration process."
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" strokeWidth={1.5} />,
    title: "Detailed Analytics",
    description: "Track campaign performance with comprehensive analytics dashboards showing engagement, reach, conversion metrics, and ROI across all social platforms."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" strokeWidth={1.5} />,
    title: "Strategy Planning",
    description: "Generate executable marketing strategies tailored to your brand using insights from our vast marketing database and trending topics analysis."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" strokeWidth={1.5} />,
    title: "Multi-Platform Support",
    description: "Connect with influencers across YouTube, TikTok, Instagram, LinkedIn, and Twitter through a single unified platform."
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" strokeWidth={1.5} />,
    title: "Quick Campaigns",
    description: "Launch influencer marketing campaigns in days, not weeks, with streamlined processes and our extensive network of pre-vetted creators."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_50%_60%,rgba(13,148,255,0.05),transparent)] dark:bg-[radial-gradient(40%_40%_at_50%_60%,rgba(13,148,255,0.03),transparent)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Tools for Influencer Marketing</h2>
          <p className="text-lg text-muted-foreground">
            ahalab combines cutting-edge AI technology with data-driven insights to connect brands with the perfect influencers and maximize campaign performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group hover:translate-y-[-5px]" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-5 p-2 rounded-lg bg-primary/5 w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground flex-grow">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Campaigns That Convert</h3>
              <p className="text-muted-foreground mb-6">
                ahalab doesn't just connect brands with influencers—it creates strategic partnerships designed to engage audiences and drive measurable results.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Tailored matches based on brand values and audience alignment",
                  "Data-driven campaign optimization for maximum engagement",
                  "Cross-platform strategy coordination for consistent messaging",
                  "Real-time performance tracking and campaign adjustments",
                  "Detailed ROI analysis and performance benchmarking"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/2 bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-muted-foreground">Campaign Performance</div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded mb-2 w-fit">CAMPAIGN REPORT</div>
                  <h4 className="text-lg font-bold">Summer Fashion Collection Launch</h4>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                    <Instagram className="h-5 w-5 text-pink-500" />
                    <div>
                      <div className="text-xs text-muted-foreground">Instagram</div>
                      <div className="text-sm font-semibold">2.4M Reach</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                    <Youtube className="h-5 w-5 text-red-500" />
                    <div>
                      <div className="text-xs text-muted-foreground">YouTube</div>
                      <div className="text-sm font-semibold">820K Views</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                    <Twitter className="h-5 w-5 text-blue-400" />
                    <div>
                      <div className="text-xs text-muted-foreground">Twitter</div>
                      <div className="text-sm font-semibold">12K Mentions</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="text-xs text-muted-foreground">LinkedIn</div>
                      <div className="text-sm font-semibold">156K Impressions</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
                  <div className="flex items-center">
                    <BarChart3 className="h-4 w-4 mr-1" />
                    <span>94% Engagement Rate</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-4 w-4 mr-1" />
                    <span>3.2x ROI</span>
                  </div>
                  <div>Last week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
