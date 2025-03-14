import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "ahalab's AI matching system found us influencers we wouldn't have discovered otherwise. They perfectly aligned with our brand values and delivered incredible engagement rates that resulted in a 215% ROI for our campaign.",
    author: "Jessica Lee",
    position: "Marketing Director",
    company: "ModernStyle",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The analytics dashboard gives us real-time performance data that helps us optimize campaigns on the fly. We've increased our influencer marketing effectiveness by 45% since switching to ahalab.",
    author: "Michael Rodriguez",
    position: "Digital Marketing Lead",
    company: "TechFusion",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "As an influencer, ahalab has connected me with brands that truly align with my content. The escrow payment system gives me confidence, and the platform handles all the administrative work so I can focus on creating.",
    author: "Emma Zhang",
    position: "Content Creator",
    company: "1.2M Followers",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_50%_60%,rgba(13,148,255,0.05),transparent)] dark:bg-[radial-gradient(40%_40%_at_50%_60%,rgba(13,148,255,0.03),transparent)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground">
            Brands and influencers alike are experiencing transformative results with ahalab's intelligent marketing platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <Quote className="h-8 w-8 text-primary/20" strokeWidth={1.5} />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" strokeWidth={0} />
                  ))}
                </div>
              </div>
              
              <p className="text-foreground mb-6">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="h-12 w-12 rounded-full mr-4 object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Join our growing network</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">5,000+</p>
                  <p className="text-sm text-muted-foreground">Active Brands</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">25,000+</p>
                  <p className="text-sm text-muted-foreground">Verified Influencers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">$50M+</p>
                  <p className="text-sm text-muted-foreground">Campaign Value</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">93%</p>
                  <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
                </div>
              </div>
            </div>
            
            <div className="flex -space-x-4">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              ].map((avatar, index) => (
                <img 
                  key={index}
                  src={avatar}
                  alt="User" 
                  className="h-10 w-10 rounded-full border-2 border-white"
                  loading="lazy"
                />
              ))}
              <div className="flex items-center justify-center h-10 w-10 rounded-full border-2 border-white bg-primary text-white text-xs font-medium">
                30K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
