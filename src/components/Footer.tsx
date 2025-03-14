import React from 'react';
import { Instagram, Linkedin, Facebook, Twitter, Youtube, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/Aha ads-logo-2000x2000.png" 
                alt="Aha Platform" 
                className="h-10 w-10"
              />
              <span className="font-bold text-xl">Aha Platform</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Connect your brand with the perfect influencers using AI-powered matching, secure payment processing, and detailed analytics to maximize your marketing ROI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-base text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-base text-muted-foreground hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-base text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-colors">For Brands</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-colors">For Influencers</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-base text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-muted-foreground">
            &copy; {new Date().getFullYear()} Aha Platform. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Connecting brands and influencers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
