
import React from 'react';
import { Bot, TrendingUp, Search, FileText, Zap, Globe, CheckCircle, PenTool, BarChart } from 'lucide-react';

const featuresList = [
  {
    icon: <Bot className="h-10 w-10 text-primary" strokeWidth={1.5} />,
    title: "AI-Powered Content",
    description: "Our advanced AI automatically generates high-quality blog posts that are engaging, informative, and optimized for SEO."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" strokeWidth={1.5} />,
    title: "Trend Analysis",
    description: "SEOBot constantly analyzes trending topics across the web to ensure your content is always relevant and timely."
  },
  {
    icon: <Search className="h-10 w-10 text-primary" strokeWidth={1.5} />,
    title: "SEO Optimization",
    description: "Every piece of content is meticulously optimized with the right keywords, headings, and structure to rank higher in search results."
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" strokeWidth={1.5} />,
    title: "Content Variety",
    description: "Generate various types of content including how-to guides, listicles, product reviews, and more with a single click."
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" strokeWidth={1.5} />,
    title: "Lightning Fast",
    description: "Create professionally written, SEO-optimized blog posts in minutes, not hours, saving you valuable time and resources."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" strokeWidth={1.5} />,
    title: "Web Scraping",
    description: "Automatically gather data from top-performing content across the web to inspire your posts and stay ahead of competitors."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_50%_60%,rgba(13,148,255,0.05),transparent)] dark:bg-[radial-gradient(40%_40%_at_50%_60%,rgba(13,148,255,0.03),transparent)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features to Boost Your SEO</h2>
          <p className="text-lg text-muted-foreground">
            SEOBot combines cutting-edge AI technology with deep SEO expertise to automatically generate content that both search engines and readers love.
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Content That Converts</h3>
              <p className="text-muted-foreground mb-6">
                SEOBot doesn't just create content—it creates strategic content designed to attract, engage, and convert your target audience.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Perfectly tailored for your industry and audience",
                  "Strategically structured for maximum reader engagement",
                  "Naturally incorporates keywords without keyword stuffing",
                  "Includes attention-grabbing headlines and meta descriptions",
                  "Optimized for featured snippets and voice search"
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
                <div className="text-xs text-muted-foreground">SEOBot Content</div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded mb-2 w-fit">BLOG POST</div>
                  <h4 className="text-lg font-bold">10 Essential SEO Strategies for 2023</h4>
                </div>
                
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
                  <div className="h-3 bg-gray-200 rounded-full w-4/5"></div>
                  <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
                  <div className="flex items-center">
                    <BarChart className="h-4 w-4 mr-1" />
                    <span>94% SEO Score</span>
                  </div>
                  <div className="flex items-center">
                    <PenTool className="h-4 w-4 mr-1" />
                    <span>1,542 words</span>
                  </div>
                  <div>3 min ago</div>
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
