
import { useState, useEffect } from 'react';
import { ArrowRight, Bot, Search, TrendingUp, LayoutTemplate } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-24 md:pt-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(13,148,255,0.05),transparent)] dark:bg-[radial-gradient(45%_40%_at_50%_60%,rgba(13,148,255,0.05),transparent)]" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left bg-white dark:bg-black skew-x-[-30deg] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 dark:ring-indigo-300/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center transform-gpu opacity-30 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          <div className={`max-w-xl lg:max-w-2xl space-y-8 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="animate-pulse-slow">NEW</span>
              <span className="ml-2">AI-Powered SEO Content Generation</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight hero-text-gradient">
              Automate Your SEO Content With AI Precision
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              SEOBot automatically generates high-performing blog content optimized for search engines by analyzing trending topics and crafting engaging articles that drive traffic.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="group">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                See How It Works
              </Button>
            </div>
            
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">SEO Optimized</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Trend Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <LayoutTemplate className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Content Ready</span>
              </div>
            </div>
          </div>
          
          <div className={`relative w-full max-w-md lg:max-w-lg xl:max-w-xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-blue-600/20 mix-blend-overlay"></div>
              
              {/* Dashboard mockup */}
              <div className="bg-white rounded-2xl overflow-hidden">
                {/* Dashboard header */}
                <div className="bg-gradient-to-r from-primary/90 to-blue-600/90 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-5 w-5 text-white" />
                    <span className="text-white font-semibold">SEOBot Dashboard</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  </div>
                </div>
                
                {/* Dashboard content */}
                <div className="p-6 space-y-4">
                  {/* Status bar */}
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-sm font-medium">AI Agent Active</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Last activity: 2m ago</span>
                  </div>
                  
                  {/* Content generation card */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold mb-2">Generated Content</h3>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded-full w-full shimmer"></div>
                      <div className="h-4 bg-gray-200 rounded-full w-3/4 shimmer"></div>
                      <div className="h-4 bg-gray-200 rounded-full w-5/6 shimmer"></div>
                      <div className="h-4 bg-gray-200 rounded-full w-2/3 shimmer"></div>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-xs font-medium text-muted-foreground mb-1">Blogs Generated</h3>
                      <p className="text-2xl font-bold">247</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-xs font-medium text-muted-foreground mb-1">Avg. Word Count</h3>
                      <p className="text-2xl font-bold">1,243</p>
                    </div>
                  </div>
                  
                  {/* Trending Topics */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1 text-primary" />
                      Trending Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">AI Content</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">SEO Strategy</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">Voice Search</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">E-commerce</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,229.3C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
