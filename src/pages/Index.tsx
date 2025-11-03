import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, TrendingUp, Target, Zap, Shield, CheckCircle, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import heroProfile from "@/assets/hero-profile.jpg";
import promiseProfile from "@/assets/promise-profile.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const testimonialVideos = [
  {
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop",
    alt: "Sarah Johnson Video Testimonial",
    name: "Sarah Johnson",
    role: "E-commerce Owner"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=600&h=800&fit=crop",
    alt: "Michael Chen Video Testimonial",
    name: "Michael Chen",
    role: "Marketing Director"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop",
    alt: "Emma Rodriguez Video Testimonial",
    name: "Emma Rodriguez",
    role: "Founder & CEO"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    alt: "David Martinez Video Testimonial",
    name: "David Martinez",
    role: "Growth Manager"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop",
    alt: "Lisa Anderson Video Testimonial",
    name: "Lisa Anderson",
    role: "Brand Director"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(Math.floor(testimonialVideos.length / 2));

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialVideos.length);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialVideos.length) % testimonialVideos.length);
  };
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <>
      <div className="relative w-full h-full flex items-center justify-center">
        {testimonialVideos.map((video, index) => {
          const offset = index - currentIndex;
          const total = testimonialVideos.length;
          let pos = (offset + total) % total;
          if (pos > Math.floor(total / 2)) {
            pos = pos - total;
          }

          const isCenter = pos === 0;
          const isAdjacent = Math.abs(pos) === 1;

          return (
            <div
              key={index}
              className={cn(
                'absolute w-72 h-[500px] md:w-96 md:h-[600px] transition-all duration-500 ease-in-out',
                'flex items-center justify-center'
              )}
              style={{
                transform: `
                  translateX(${(pos) * 45}%) 
                  scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})
                  rotateY(${(pos) * -10}deg)
                `,
                zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                filter: isCenter ? 'blur(0px)' : 'blur(4px)',
                visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
              }}
            >
              <div className="relative w-full h-full rounded-3xl border-2 border-border/50 shadow-2xl overflow-hidden bg-card">
                <img
                  src={video.thumbnail}
                  alt={video.alt}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-12 h-12 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                  <h3 className="font-bold text-xl md:text-2xl mb-2">{video.name}</h3>
                  <p className="text-base md:text-lg text-muted-foreground">{video.role}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-20 bg-background/80 backdrop-blur-sm border-border/50"
        onClick={handlePrev}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-20 bg-background/80 backdrop-blur-sm border-border/50"
        onClick={handleNext}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Jonathan
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I'm not saying that I'm better than all other Meta ads.
            </h1>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold">
                I'm just <span className="text-accent">different.</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                And maybe you will get exactly what you need.
              </p>
            </div>
            
            {/* Stats Card */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-center gap-4">
                <img 
                  src={heroProfile} 
                  alt="Jonathan Profile" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Jonathan R.</p>
                  <p className="text-xs text-muted-foreground">Google Partner</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-accent">$27k</div>
                  <p className="text-xs text-muted-foreground">Avg. Client ROI</p>
                </div>
              </div>
            </Card>

            <Button variant="hero" size="lg" className="text-base">
              Schedule a Call Now
            </Button>
          </div>
          
          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <img 
              src={heroProfile} 
              alt="Jonathan Profile" 
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      {/* What Makes Me Different */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            What Makes Me <span className="text-accent">Different</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />
          
          <div className="space-y-8">
            <div className="flex gap-4 items-start animate-fade-in">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">+12% TOF not just with 'crazy' ads</h3>
                <p className="text-muted-foreground">
                  Anyway – you can find on Upwork? a fancy or 'funny' or even 'stupid' ad, but I use my years of experience and data-driven insights to consistently improve your campaign performance with strategic, proven methods.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start animate-fade-in">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  No A/B test. No CRO. No "magic" headlines. No black & white Ads.
                </h3>
                <p className="text-muted-foreground">
                  I've learned so many times that what works, just works, because we did our tasks carefully in the beginning. Solid strategy beats flashy tactics every time.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start animate-fade-in">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  If few carousel images will fit, I will do a few carousel images. Not 50.
                </h3>
                <p className="text-muted-foreground">
                  I hate this kind of work. This is an editor's job, or a PM's. This isn't a job for someone trying to 3x your business.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start animate-fade-in">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  I do transparently managing your given budget.
                </h3>
                <p className="text-muted-foreground">
                  You know exactly where every dollar goes. No hidden fees, no surprise charges, just clear communication and honest reporting.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start animate-fade-in">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  I do not fall back on lazy black & white ads with just words in.
                </h3>
                <p className="text-muted-foreground">
                  This isn't different. This is an archive of 8 out of every 10 ads I see.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Let's Work Together
            </Button>
          </div>
        </div>
      </section>

      {/* What It's Like Working With Me */}
      <section className="container mx-auto px-4 py-20 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            What It's Like Working With Me
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          
          <div className="relative w-full h-[550px] md:h-[650px] flex items-center justify-center [perspective:1000px]">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Recent Projects
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mb-16 rounded-full" />
          
          <div className="space-y-16">
            {/* Project 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-3xl font-bold">E-Commerce Case Study #1</h3>
                <div className="flex items-center gap-4 text-sm">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-semibold">
                    GOOGLE
                  </span>
                  <span className="text-muted-foreground">January - April 2025</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary">+487%</div>
                    <div className="text-sm text-muted-foreground">ROAS Increase</div>
                  </Card>
                  <Card className="p-4 bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-accent">$142k</div>
                    <div className="text-sm text-muted-foreground">Revenue Generated</div>
                  </Card>
                </div>
              </div>
              <div className="relative group animate-fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
                <img 
                  src={project1} 
                  alt="Project 1" 
                  className="relative rounded-2xl shadow-2xl w-full border border-border/50"
                />
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative group order-2 md:order-1 animate-fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
                <img 
                  src={project2} 
                  alt="Project 2" 
                  className="relative rounded-2xl shadow-2xl w-full border border-border/50"
                />
              </div>
              <div className="space-y-4 order-1 md:order-2 animate-fade-in">
                <h3 className="text-3xl font-bold">E-Commerce Case Study #2</h3>
                <div className="flex items-center gap-4 text-sm">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-semibold">
                    GOOGLE
                  </span>
                  <span className="text-muted-foreground">August 2023</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary">+312%</div>
                    <div className="text-sm text-muted-foreground">Conversion Rate</div>
                  </Card>
                  <Card className="p-4 bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-accent">$89k</div>
                    <div className="text-sm text-muted-foreground">Revenue Generated</div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-3xl font-bold">E-Commerce Case Study #3</h3>
                <div className="flex items-center gap-4 text-sm">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-semibold">
                    GOOGLE
                  </span>
                  <span className="text-muted-foreground">January - August 2023</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary">+271%</div>
                    <div className="text-sm text-muted-foreground">Revenue Growth</div>
                  </Card>
                  <Card className="p-4 bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-accent">$274k</div>
                    <div className="text-sm text-muted-foreground">Total Revenue</div>
                  </Card>
                </div>
              </div>
              <div className="relative group animate-fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
                <img 
                  src={project3} 
                  alt="Project 3" 
                  className="relative rounded-2xl shadow-2xl w-full border border-border/50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            People Who Trusted Me
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mb-16 rounded-full" />
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "E-commerce Owner",
                content: "Working with Jonathan was a game-changer for our business. His strategic approach and transparent communication made all the difference. Our ROAS increased by 400% in just 3 months!",
                avatar: "SJ"
              },
              {
                name: "Michael Chen",
                role: "Marketing Director",
                content: "Finally, a Google Ads expert who actually understands our business goals. Jonathan's data-driven strategies and honest approach helped us scale profitably without wasting budget.",
                avatar: "MC"
              },
              {
                name: "Emma Rodriguez",
                role: "Founder & CEO",
                content: "Jonathan doesn't just run ads – he partners with you for growth. His unique approach and commitment to results has transformed how we think about paid advertising.",
                avatar: "ER"
              }
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Join Them Today
            </Button>
          </div>
        </div>
      </section>

      {/* What I Can Promise */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img 
                src={promiseProfile} 
                alt="Jonathan Promise" 
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
            
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  I won't sell you the moon and the stars.
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                What I <span className="text-accent">Can Promise</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Even if I'm <span className="text-foreground font-semibold">
                    the fanciest of every ads</span>, I can{" "}
                  <span className="text-foreground font-semibold">
                    only promise one thing</span>: I'll do <span className="text-foreground font-semibold">
                    a thorough diagnosis</span> up front, then execute{" "}
                  <span className="text-foreground font-semibold">only</span> and{" "}
                  <span className="text-foreground font-semibold">aggressively</span>. But always,{" "}
                  <span className="text-foreground font-semibold">
                    always thoughtfully</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Are Your Meta Ads In The Wrong Hands?
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
            <p className="text-xl text-muted-foreground">
              Schedule a call with me
            </p>
          </div>

          <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  When can you squeeze time to give me a call?
                </label>
                <Input 
                  type="text" 
                  placeholder="e.g., Tomorrow at 3 PM" 
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Tell me about your business
                </label>
                <Textarea 
                  placeholder="What are you selling? What are your goals?" 
                  className="bg-background/50 min-h-32"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full text-lg">
                Let's Talk
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-20 border-t border-border/50 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  Jonathan <span className="text-accent">👋</span>
                </h3>
                <p className="text-muted-foreground text-lg">
                  Google Ads Freelancer | Partner
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ready to transform your Google Ads performance? Let's discuss how strategic, data-driven campaigns can help you achieve exceptional ROI.
              </p>
            </div>

            {/* Contact Form */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Get In Touch</h4>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = (formData.get('name') as string)?.trim();
                const email = (formData.get('email') as string)?.trim();
                const message = (formData.get('message') as string)?.trim();
                
                if (!name || name.length > 100) {
                  alert('Please enter a valid name (max 100 characters)');
                  return;
                }
                if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
                  alert('Please enter a valid email address');
                  return;
                }
                if (!message || message.length > 1000) {
                  alert('Please enter a message (max 1000 characters)');
                  return;
                }
                
                // Encode data for WhatsApp or other services
                const encodedMessage = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
                console.log('Form submitted:', { name, email, message: message.substring(0, 50) });
                alert('Thank you for your message! I will get back to you soon.');
                e.currentTarget.reset();
              }}>
                <div>
                  <Input 
                    type="text"
                    name="name"
                    placeholder="Your Name" 
                    required
                    maxLength={100}
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <Input 
                    type="email"
                    name="email"
                    placeholder="Your Email" 
                    required
                    maxLength={255}
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <Textarea 
                    name="message"
                    placeholder="Your Message" 
                    required
                    maxLength={1000}
                    className="bg-background/50 min-h-32"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © 2025 Jonathan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
