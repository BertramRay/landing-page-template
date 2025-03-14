import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Users, Search, TrendingUp, LayoutTemplate, DollarSign, LineChart, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  const textVariants = [
    'YouTube',
    'TikTok',
    'Instagram',
    'LinkedIn',
    'Twitter'
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // 立即显示第一个文本，而不是等待打字效果
    setTypedText(textVariants[0]);
    
    // 短暂延迟后开始删除效果，以便用户可以先看到完整文本
    const initialTimer = setTimeout(() => {
      setIsDeleting(true);
    }, 2500);
    
    return () => {
      clearTimeout(initialTimer);
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const currentText = textVariants[textIndex];
    
    // 清除之前的计时器
    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current);
    }
    
    typingTimerRef.current = setTimeout(() => {
      if (!isDeleting) {
        // 正在输入
        setTypedText(currentText.substring(0, typedText.length + 1));
        
        // 如果完成了当前单词的输入
        if (typedText.length === currentText.length) {
          // 暂停一会后开始删除
          setIsDeleting(true);
          setTypingSpeed(2000); // 等待2秒后开始删除
        } else {
          // 随机打字速度，使效果更自然
          setTypingSpeed(150 + Math.random() * 50);
        }
      } else {
        // 正在删除
        setTypedText(currentText.substring(0, typedText.length - 1));
        setTypingSpeed(50); // 删除速度更快
        
        // 如果删除完毕
        if (typedText.length === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % textVariants.length); // 切换到下一个文本
        }
      }
    }, typingSpeed);
    
    return () => {
      if (typingTimerRef.current) {
        clearTimeout(typingTimerRef.current);
      }
    };
  }, [typedText, isDeleting, textIndex, typingSpeed, textVariants]);

  return (
    <section className="relative pt-24 md:pt-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(90,49,240,0.1),transparent)]" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left bg-white dark:bg-black skew-x-[-30deg] shadow-xl shadow-primary/10 ring-1 ring-primary/5 dark:ring-primary/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center transform-gpu opacity-30 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          <div className={`max-w-xl lg:max-w-2xl space-y-8 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
              <span className="animate-pulse-slow">NEW</span>
              <span className="ml-2">AI-Powered Influencer Marketing Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight hero-text-gradient">
              Connect Your Brand With Top
            </h1>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
              <span className="inline-block relative">
                {typedText}
                <span className="absolute top-0 right-0 h-full w-[3px] bg-primary animate-border-pulse"></span>
              </span>
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight hero-text-gradient">
              Influencers
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              Aha Platform connects advertisers with influential creators across social platforms using advanced AI matching, secure payments, and detailed analytics to maximize your campaign ROI.
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
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">AI Matching</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Secure Payments</span>
              </div>
              <div className="flex items-center space-x-2">
                <LineChart className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Data Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <LayoutTemplate className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Strategy Planning</span>
              </div>
            </div>
          </div>
          
          <div className={`relative w-full max-w-md lg:max-w-lg xl:max-w-xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 mix-blend-overlay"></div>
              
              {/* Dashboard mockup */}
              <div className="bg-white rounded-2xl overflow-hidden">
                {/* Dashboard header */}
                <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img 
                      src="/Aha ads-logo-2000x2000.png" 
                      alt="Aha Platform" 
                      className="h-5 w-5"
                    />
                    <span className="text-white font-semibold">Aha Dashboard</span>
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
                      <span className="text-sm font-medium">Campaign Active</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Last update: 5m ago</span>
                  </div>
                  
                  {/* Content generation card */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold mb-2">Suggested Influencers</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                          <div>
                            <div className="h-4 w-24 bg-gray-200 rounded-full shimmer"></div>
                            <div className="h-3 w-16 bg-gray-200 rounded-full mt-1 shimmer"></div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Instagram className="h-4 w-4 text-pink-500" />
                          <div className="h-4 w-12 bg-gray-200 rounded-full shimmer"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                          <div>
                            <div className="h-4 w-20 bg-gray-200 rounded-full shimmer"></div>
                            <div className="h-3 w-16 bg-gray-200 rounded-full mt-1 shimmer"></div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Youtube className="h-4 w-4 text-red-500" />
                          <div className="h-4 w-12 bg-gray-200 rounded-full shimmer"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-xs font-medium text-muted-foreground mb-1">Campaigns</h3>
                      <p className="text-2xl font-bold">24</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="text-xs font-medium text-muted-foreground mb-1">Total Reach</h3>
                      <p className="text-2xl font-bold">4.2M</p>
                    </div>
                  </div>
                  
                  {/* Trending Topics */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1 text-primary" />
                      Trending Categories
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-secondary text-primary rounded-full text-xs">Beauty</span>
                      <span className="px-2 py-1 bg-secondary text-primary rounded-full text-xs">Tech</span>
                      <span className="px-2 py-1 bg-secondary text-primary rounded-full text-xs">Fitness</span>
                      <span className="px-2 py-1 bg-secondary text-primary rounded-full text-xs">Fashion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 -z-20">
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
