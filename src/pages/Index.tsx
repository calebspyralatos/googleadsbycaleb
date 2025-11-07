import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ProjectImage } from "@/components/ui/project-image";
import { Star, TrendingUp, Target, Zap, Shield, CheckCircle, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import heroProfile from "@/assets/hero-profile.jpg";
import promiseProfile from "@/assets/promise-profile.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import upworkProof from "@/assets/upwork-proof.jpg";

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
                  <div className="w-24 h-24 rounded-full bg-foreground/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-12 h-12 text-background ml-1" fill="currentColor" />
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
      <section className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-secondary/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-8 right-4 md:right-8 z-10">
          <Button variant="cta" size="lg">
            Book a Call
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Caleb
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

            <Button variant="cta" size="lg" className="text-base">
              Book a Call
            </Button>
          </div>
          
          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <img 
              src={heroProfile} 
              alt="Caleb Profile" 
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      {/* Intro Section - Overlapping */}
      <div className="container mx-auto px-4 relative -mt-16 mb-16 z-10">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-secondary/30 to-accent/40 rounded-3xl blur-3xl" />
          <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Hi, I'm Caleb.
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  I've been freelancing on Upwork for the past 9 years, managing Meta ads.
                </p>
              </div>
              
              <div className="animate-fade-in-up">
                <ProjectImage 
                  src={upworkProof} 
                  alt="Upwork Profile - Top Rated Plus with 100% Job Success"
                  className="shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes Me Different */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-background to-card/20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            What Makes Me <span className="inline-block px-4 py-1 bg-secondary text-white rounded-full">Different</span>
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
            <Button variant="cta" size="lg">
              Book a Call
            </Button>
          </div>
        </div>
      </section>

      {/* What It's Like Working With Me */}
      <section className="container mx-auto px-4 py-20 bg-card/30 relative">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
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
      <section className="container mx-auto px-4 py-20 relative bg-gradient-to-b from-background to-card/10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
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
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-primary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
                <ProjectImage 
                  src={project1} 
                  alt="Project 1" 
                  className="relative shadow-2xl border border-accent/20"
                />
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative group order-2 md:order-1 animate-fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-tl from-accent/30 to-primary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
                <ProjectImage 
                  src={project2} 
                  alt="Project 2" 
                  className="relative shadow-2xl border border-accent/20"
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
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
                <ProjectImage 
                  src={project3} 
                  alt="Project 3" 
                  className="relative shadow-2xl border border-accent/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card/30 overflow-hidden relative">
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              People Who Trusted Me
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mb-16 rounded-full" />
          </div>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll-right gap-8 w-max">
            {[
              {
                name: "Sarah Johnson",
                role: "E-commerce Owner",
                content: "Working with Caleb was a game-changer for our business. His strategic approach and transparent communication made all the difference. Our ROAS increased by 400% in just 3 months!",
                avatar: "SJ"
              },
              {
                name: "Michael Chen",
                role: "Marketing Director",
                content: "Finally, a Google Ads expert who actually understands our business goals. Caleb's data-driven strategies and honest approach helped us scale profitably without wasting budget.",
                avatar: "MC"
              },
              {
                name: "Emma Rodriguez",
                role: "Founder & CEO",
                content: "Caleb doesn't just run ads – he partners with you for growth. His unique approach and commitment to results has transformed how we think about paid advertising.",
                avatar: "ER"
              },
              {
                name: "Sarah Johnson",
                role: "E-commerce Owner",
                content: "Working with Caleb was a game-changer for our business. His strategic approach and transparent communication made all the difference. Our ROAS increased by 400% in just 3 months!",
                avatar: "SJ"
              },
              {
                name: "Michael Chen",
                role: "Marketing Director",
                content: "Finally, a Google Ads expert who actually understands our business goals. Caleb's data-driven strategies and honest approach helped us scale profitably without wasting budget.",
                avatar: "MC"
              },
              {
                name: "Emma Rodriguez",
                role: "Founder & CEO",
                content: "Caleb doesn't just run ads – he partners with you for growth. His unique approach and commitment to results has transformed how we think about paid advertising.",
                avatar: "ER"
              }
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all w-[400px] flex-shrink-0 shadow-xl"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-cta text-cta" />
                  ))}
                </div>
                <p className="text-lg text-foreground mb-8 leading-relaxed font-medium">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cta to-accent flex items-center justify-center font-bold text-background text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mt-12">
            <Button variant="cta" size="lg">
              Join Them Today
            </Button>
          </div>
        </div>
      </section>

      {/* What I Can Promise */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-card/20 to-background relative">
        <div className="absolute top-1/3 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img 
                src={promiseProfile} 
                alt="Caleb Promise" 
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
      <section className="container mx-auto px-4 py-20 bg-card/30 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Are Your Meta Ads In The Wrong Hands?
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
            <p className="text-xl text-muted-foreground">
              Schedule a call with me
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-border/50">
            <div className="space-y-8">
              <div>
                <label className="block text-xl font-semibold mb-6 text-center">
                  How much did you spend on Meta ads last month? (roughly) *
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      console.log('Selected: 0-20k$');
                      // Handle navigation or form submission
                    }}
                    className="group relative p-8 rounded-xl border-2 border-border/50 bg-background/50 hover:border-muted-foreground hover:bg-muted/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2 group-hover:text-foreground transition-colors">
                        0-20k$
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Getting started
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      console.log('Selected: 20k$+');
                      // Handle navigation or form submission
                    }}
                    className="group relative p-8 rounded-xl border-2 border-border/50 bg-background/50 hover:border-muted-foreground hover:bg-muted/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2 group-hover:text-foreground transition-colors">
                        20k$+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Scaling phase
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-border/50">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">
            Caleb <span className="text-accent">👋</span>
          </h3>
          <p className="text-muted-foreground">
            Google Ads Freelancer | Partner
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            © 2025 All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
