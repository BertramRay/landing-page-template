import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/Aha-ads-logo-long-5245x1200.png" 
              alt="Aha Platform" 
              className="h-8 md:h-10 w-auto"
            />
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            How it Works
          </a>
          <a href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#testimonials" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Testimonials
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" className="h-9">
            Sign In
          </Button>
          <Button size="sm" className="h-9">
            Get Started
          </Button>
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg transition-all duration-300 animate-fade-down">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#features" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a 
              href="#pricing" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="outline" className="w-full justify-center">
                Sign In
              </Button>
              <Button className="w-full justify-center">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
