import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ProjectImage } from "@/components/ui/project-image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star, TrendingUp, Target, Zap, Shield, CheckCircle, XCircle, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

const CountUpNumber = ({ value, duration = 2000 }: { value: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = React.useState("0");
  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Extract numeric value
          const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
          const isPercentage = value.includes("%");
          const isCurrency = value.includes("$");

          const startTime = Date.now();

          const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const currentValue = Math.floor(progress * numericValue);

            let display = currentValue.toString();
            if (isCurrency) display = `$${display}k`;
            if (isPercentage) display = `+${display}%`;

            setDisplayValue(display);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          animate();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration]);

  return <div ref={elementRef}>{displayValue}</div>;
};
import heroProfile from "@/assets/hero-profile.jpg";
import promiseProfile from "@/assets/promise-profile.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import upworkProof from "@/assets/upwork-proof.jpg";
import courseImage from "@/assets/course-image.png";
import adamK from "@/assets/Adam K.jpeg";
import davidG from "@/assets/David G.webp";
import jankaM from "@/assets/Janka-Mifsud.png";
import brandonR from "@/assets/Brandon Rall.jpeg";
import alexC from "@/assets/Alex Chen.png";
import andyG from "@/assets/Andy G.jpeg";

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
                'absolute w-60 h-[420px] md:w-80 md:h-[500px] transition-all duration-500 ease-in-out',
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
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 via-background/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-foreground/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-12 h-12 text-background ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                  <h3 className="font-bold text-xl md:text-2xl mb-2">{video.name}</h3>
                  <p className="text-base md:text-lg text-white">{video.role}</p>
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
  const [selectedTestimonial, setSelectedTestimonial] = React.useState<{ name: string; content: string; image: any } | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section */}
      <section className="px-4 md:px-8 lg:px-16 py-20 md:py-32 relative overflow-hidden">
        <div 
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none opacity-30"
          style={{
            background: 'radial-gradient(circle at center, hsl(145, 51%, 30%) 0%, hsl(145, 51%, 25%) 15%, hsl(145, 51%, 20%) 30%, hsl(145, 51%, 16%) 45%, transparent 70%)',
            filter: 'blur(80px)',
            mixBlendMode: 'screen'
          }}
        />
        <div className="absolute top-8 right-4 md:right-8 z-10">
          <Button variant="cta" size="xl">
            Book a Call
          </Button>
        </div>
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I specialize in Google Ads for local businesses. <span className="inline-block px-3 text-white rounded-full" style={{ backgroundColor: '#385f3e', verticalAlign: 'middle', paddingTop: '0.5rem', paddingBottom: '0.75rem' }}>Only.</span>
            </h1>
            <div className="space-y-4">
              <p className="text-xl text-white">
                If you run a local business, I will help you generate more revenue by increasing your number of leads, calls, and store visits
              </p>
            </div>

            <Button variant="cta" size="xl" className="text-base">
              Book a Call
            </Button>
          </div>
          
          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-primary/10 via-accent/10 to-accent/15 rounded-3xl blur-2xl opacity-70" />
            <img
              src={heroProfile} 
              alt="Caleb Profile" 
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      {/* Intro Section - Overlapping */}
      <div className="px-4 md:px-8 lg:px-16 relative -mt-16 mb-48 z-10">
        <div className="max-w-[1000px] mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-secondary/10 via-accent/10 to-accent/15 rounded-3xl blur-xl opacity-60" />
          <div className="relative backdrop-blur-sm rounded-2xl p-5 md:p-7 shadow-lg" style={{ backgroundColor: '#131316' }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 animate-fade-in max-w-2xl">
                <h2 className="text-2xl md:text-5xl font-bold leading-tight">
                  Hi, I'm Caleb.
                </h2>
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  I've built my career on UpWork as a freelancer and I specialize in Google Ads and Google Local Ads<br />
                  <span className="inline-block px-2 text-white rounded-full mt-2" style={{ backgroundColor: '#385f3e', paddingTop: '0.25rem', paddingBottom: '0.5rem' }}>primarily for local businesses.</span>
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
      {/* Cut-off spotlight at bottom of badge - full width */}
      <div className="relative w-full -mt-96 mb-80 h-0 pointer-events-none z-0">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle at center, hsl(145, 51%, 35%) 0%, hsl(145, 51%, 30%) 15%, hsl(145, 51%, 25%) 30%, hsl(145, 51%, 18%) 45%, transparent 70%)',
            filter: 'blur(80px)',
            mixBlendMode: 'screen',
            clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)'
          }}
        />
      </div>

      {/* What Makes Me Different */}
      <section className="px-4 md:px-8 lg:px-16 py-32 bg-gradient-to-b from-background to-card/20 relative min-h-screen flex items-center">
        <div className="max-w-[900px] mx-auto relative z-10 w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">
            What Makes Me <span className="inline-block px-4 py-3 text-white rounded-full" style={{ backgroundColor: '#385f3e', verticalAlign: 'text-bottom' }}>Different</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />

          <div className="space-y-5 text-center">
            <p className="text-xl md:text-2xl text-white leading-relaxed animate-fade-in font-semibold">
              I am a freelancer, and will always be.
            </p>

            <div className="border-b border-white/20 w-64 mx-auto" />

            <p className="text-xl md:text-2xl text-white leading-relaxed animate-fade-in font-semibold">
              Therefore, I am 100% the person running your ads.
            </p>

            <div className="border-b border-white/20 w-64 mx-auto" />

            <p className="text-xl md:text-2xl text-white leading-relaxed animate-fade-in font-semibold">
              So, no agencies or outsourcing the work to someone else.
            </p>

            <div className="border-b border-white/20 w-64 mx-auto" />

            <p className="text-xl md:text-2xl text-white leading-relaxed animate-fade-in font-semibold">
              Also, 95% of media buyers have never risked their own money on ads.
            </p>

            <div className="border-b border-white/20 w-64 mx-auto" />

            <p className="text-xl md:text-2xl text-white leading-relaxed animate-fade-in font-semibold">
              I have. Running ads for my own page and Google Reviews course.
            </p>

            <div className="border-b border-white/20 w-64 mx-auto" />

            <p className="text-xl md:text-2xl text-white leading-relaxed animate-fade-in font-semibold">
              So, I know the frustration of spending hard-earned money without seeing results.
            </p>

            <div className="border-b border-white/20 w-64 mx-auto" />

            <p className="text-xl md:text-2xl text-white leading-relaxed animate-fade-in font-semibold">
              That's why I handle your ad spend with the same care I give my own.
            </p>

            <div className="border-b border-white/20 w-64 mx-auto" />

            <p className="text-xl md:text-2xl text-white leading-relaxed animate-fade-in font-semibold">
              When it comes to helping out local business owners, like you, on anything related to Google, I've seen it all.
            </p>
          </div>

          <div className="text-center mt-8">
            <Button variant="cta" size="xl">
              Book a Call
            </Button>
          </div>
        </div>
      </section>

      {/* What It's Like Working With Me */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-card/30 relative overflow-hidden">
        {/* Smooth spotlight on the left */}
        <div 
          className="absolute top-1/2 -left-64 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-25"
          style={{
            background: 'radial-gradient(circle at center, hsl(145, 51%, 35%) 0%, hsl(145, 51%, 32%) 10%, hsl(145, 51%, 29%) 20%, hsl(145, 51%, 26%) 30%, hsl(145, 51%, 22%) 40%, hsl(145, 51%, 18%) 50%, hsl(145, 51%, 16%) 60%, transparent 80%)',
            filter: 'blur(120px)',
            mixBlendMode: 'screen'
          }}
        />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            What It's Like Working With Me
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          
          <div className="relative w-full h-[470px] md:h-[550px] flex items-center justify-center [perspective:1000px]">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="px-4 md:px-8 lg:px-16 py-20 relative bg-gradient-to-b from-background to-card/10">
        <div className="max-w-[1100px] mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Recent Projects
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mb-16 rounded-full" />

          <div className="space-y-24">
            {/* Project 1 */}
            <div className="grid md:grid-cols-[1fr_1.1fr] gap-8 items-center">
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-4xl md:text-5xl font-bold">Local Business Case Study #1</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="pb-6 border-b-2 rounded-lg text-center" style={{ borderColor: '#6bc741' }}>
                    <div className="text-sm text-white/60 mb-2 uppercase tracking-wide">Amount Spent</div>
                    <div className="text-4xl font-bold" style={{ color: '#c5fc68' }}>
                      <CountUpNumber value="$142k" />
                    </div>
                  </div>
                  <div className="pb-6 border-b-2 rounded-lg text-center" style={{ borderColor: '#6bc741' }}>
                    <div className="text-sm text-white/60 mb-2 uppercase tracking-wide">CTA</div>
                    <div className="text-4xl font-bold" style={{ color: '#6bc741' }}>
                      <CountUpNumber value="+487%" />
                    </div>
                  </div>
                </div>
                <div className="pb-6 border-b-2 rounded-lg text-center" style={{ borderColor: '#6bc741' }}>
                  <div className="text-sm text-white/60 mb-2 uppercase tracking-wide">Period</div>
                  <div className="text-3xl font-bold text-white">January - April 2025</div>
                </div>
              </div>
              <div className="relative group animate-fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-accent/15 via-primary/12 to-primary/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-70" />
                <ProjectImage
                  src={project1}
                  alt="Project 1"
                  className="relative shadow-2xl border border-accent/20"
                  interactive
                />
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 items-center">
              <div className="relative group order-2 md:order-1 animate-fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-tl from-accent/20 via-accent/15 via-primary/12 to-primary/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-70" />
                <ProjectImage
                  src={project2}
                  alt="Project 2"
                  className="relative shadow-2xl border border-accent/20"
                  interactive
                />
              </div>
              <div className="space-y-6 order-1 md:order-2 animate-fade-in">
                <h3 className="text-4xl md:text-5xl font-bold">Local Business Case Study #2</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="pb-6 border-b-2 rounded-lg text-center" style={{ borderColor: '#6bc741' }}>
                    <div className="text-sm text-white/60 mb-2 uppercase tracking-wide">Amount Spent</div>
                    <div className="text-4xl font-bold" style={{ color: '#c5fc68' }}>
                      <CountUpNumber value="$89k" />
                    </div>
                  </div>
                  <div className="pb-6 border-b-2 rounded-lg text-center" style={{ borderColor: '#6bc741' }}>
                    <div className="text-sm text-white/60 mb-2 uppercase tracking-wide">CTA</div>
                    <div className="text-4xl font-bold" style={{ color: '#6bc741' }}>
                      <CountUpNumber value="+312%" />
                    </div>
                  </div>
                </div>
                <div className="pb-6 border-b-2 rounded-lg text-center" style={{ borderColor: '#6bc741' }}>
                  <div className="text-sm text-white/60 mb-2 uppercase tracking-wide">Period</div>
                  <div className="text-3xl font-bold text-white">August 2023</div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="grid md:grid-cols-[1fr_1.1fr] gap-8 items-center">
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-4xl md:text-5xl font-bold">Local Business Case Study #3</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="pb-6 border-b-2 rounded-lg text-center" style={{ borderColor: '#6bc741' }}>
                    <div className="text-sm text-white/60 mb-2 uppercase tracking-wide">Amount Spent</div>
                    <div className="text-4xl font-bold" style={{ color: '#c5fc68' }}>
                      <CountUpNumber value="$274k" />
                    </div>
                  </div>
                  <div className="pb-6 border-b-2 rounded-lg text-center" style={{ borderColor: '#6bc741' }}>
                    <div className="text-sm text-white/60 mb-2 uppercase tracking-wide">CTA</div>
                    <div className="text-4xl font-bold" style={{ color: '#6bc741' }}>
                      <CountUpNumber value="+271%" />
                    </div>
                  </div>
                </div>
                <div className="pb-6 border-b-2 rounded-lg text-center" style={{ borderColor: '#6bc741' }}>
                  <div className="text-sm text-white/60 mb-2 uppercase tracking-wide">Period</div>
                  <div className="text-3xl font-bold text-white">January - August 2023</div>
                </div>
              </div>
              <div className="relative group animate-fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/15 via-primary/12 to-primary/15 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-70" />
                <ProjectImage
                  src={project3}
                  alt="Project 3"
                  className="relative shadow-2xl border border-accent/20"
                  interactive
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button variant="cta" size="xl">
              Book a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Google Reviews Course Section */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-card/30 relative">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Creator of the Best-Selling Google Reviews Course
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-white leading-relaxed">
                <p>
                  Most 'review advice' online is outdated, unrealistic, or even dangerous.
                </p>

                <p>
                  Local business owners, like you, needed something that actually works.
                </p>

                <p>
                  Something ethical.
                </p>

                <p>
                  Something proven.
                </p>

                <p>
                  So, I built it — the most advanced, proven, and effective system for gathering and managing Google reviews for local businesses.
                </p>

                <p>
                  And each time clients use it, together with Google Ads, it has helped them outrank their competition, stand out in their area & niche, and increase their revenue consistently.
                </p>

                <p className="font-semibold">
                  Every client I work with gets free lifetime access to it.
                </p>
              </div>
            </div>

            <div className="relative animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/10 via-accent/10 to-accent/15 rounded-3xl blur-2xl opacity-60" />
              <img
                src={courseImage}
                alt="Google Reviews Course"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card/30 overflow-hidden relative">
        <div className="px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              People Who Trusted Me
            </h2>
            <p className="text-center text-white mb-6 text-lg md:text-xl">
              The reviews below are real and can be verified on my{" "}
              <a 
                href="https://www.upwork.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:opacity-80 font-bold"
                style={{ color: '#63c341' }}
              >
                UpWork profile
              </a>
              <span className="text-white">.</span>
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mb-16 rounded-full" />
          </div>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll-right gap-8 w-max">
            {[
              {
                name: "Adam K.",
                role: "",
                content: "Caleb is one of the best contractors I've ever worked with. Incredible at Google Ads.",
                image: adamK
              },
              {
                name: "David G.",
                role: "",
                content: "Caleb was excellent to work with. I vetted a handful of freelancers, but ended up working with Caleb due to a mix of his obvious expertise and his shared passion for the work I do for my specific clients. I plan to continue using Caleb going forward as I've already seen great results from his help with my Google ads just a month into the campaign. You will be in good hands if you decide to work with Caleb.",
                image: davidG
              },
              {
                name: "Janka M.",
                role: "",
                content: "Caleb was great to work with, very honest and available. He set up campaigns and took the time to explain how things work. I will work with him again.",
                image: jankaM
              },
              {
                name: "Brandon R.",
                role: "",
                content: "Caleb was great! Not only does he have an incredible amount of knowledge about Google Ads, but actively makes recommendations and suggestions to keep improving the account. He was very prompt in all communication and had incredible dedication to make the project a success!",
                image: brandonR
              },
              {
                name: "Alex C.",
                role: "",
                content: "I highly recommend Caleb for his outstanding work as our Google Media Buyer. His expertise significantly improved our online presence, optimizing campaigns for impressive results. Caleb is not only highly skilled but also a pleasure to work with, ensuring clear communication and a positive collaboration experience. We look forward to future projects together.",
                image: alexC
              },
              {
                name: "Daniel B.",
                role: "",
                content: "Working with Caleb was a great experience. He's a genuinely nice guy and has the skill we need to get the job done efficiently and at a high-quality level. He's a great communicator.",
                image: null
              },
              {
                name: "Andy G.",
                role: "",
                content: "From the outset, it was evident that Caleb is truly an expert in the realm of Google Ads. His communication skills are exemplary, ensuring we were always on the same page and updated every step of the way. He possesses a deep understanding and a wealth of experience which became apparent as he diligently crafted our campaigns and steered our account to generate excellent leads with a remarkable ROI. Furthermore, Caleb consistently went above and beyond in his efforts, showcasing a level of dedication that is hard to come by. Even after ending this contract, he is still fully available to me which shows how much he cares for the teams he works with.",
                image: andyG
              },
              {
                name: "Nathaniel C.",
                role: "",
                content: "Caleb delivered well on our Google Ads optimization. He went through and explained his experiences, and walked us through by way of video. He is very informative and insightful, and he knows what he is talking about. He was also genuinely invested in helping out our business and gave constructive criticism in a way that was not demeaning. His work was very well received, and I cannot recommend him enough.",
                image: null
              },
              {
                name: "Adam K.",
                role: "",
                content: "Caleb is one of the best contractors I've ever worked with. Incredible at Google Ads.",
                image: adamK
              },
              {
                name: "David G.",
                role: "",
                content: "Caleb was excellent to work with. I vetted a handful of freelancers, but ended up working with Caleb due to a mix of his obvious expertise and his shared passion for the work I do for my specific clients. I plan to continue using Caleb going forward as I've already seen great results from his help with my Google ads just a month into the campaign. You will be in good hands if you decide to work with Caleb.",
                image: davidG
              },
              {
                name: "Janka M.",
                role: "",
                content: "Caleb was great to work with, very honest and available. He set up campaigns and took the time to explain how things work. I will work with him again.",
                image: jankaM
              },
              {
                name: "Brandon R.",
                role: "",
                content: "Caleb was great! Not only does he have an incredible amount of knowledge about Google Ads, but actively makes recommendations and suggestions to keep improving the account. He was very prompt in all communication and had incredible dedication to make the project a success!",
                image: brandonR
              },
              {
                name: "Alex C.",
                role: "",
                content: "I highly recommend Caleb for his outstanding work as our Google Media Buyer. His expertise significantly improved our online presence, optimizing campaigns for impressive results. Caleb is not only highly skilled but also a pleasure to work with, ensuring clear communication and a positive collaboration experience. We look forward to future projects together.",
                image: alexC
              },
              {
                name: "Daniel B.",
                role: "",
                content: "Working with Caleb was a great experience. He's a genuinely nice guy and has the skill we need to get the job done efficiently and at a high-quality level. He's a great communicator.",
                image: null
              },
              {
                name: "Andy G.",
                role: "",
                content: "From the outset, it was evident that Caleb is truly an expert in the realm of Google Ads. His communication skills are exemplary, ensuring we were always on the same page and updated every step of the way. He possesses a deep understanding and a wealth of experience which became apparent as he diligently crafted our campaigns and steered our account to generate excellent leads with a remarkable ROI. Furthermore, Caleb consistently went above and beyond in his efforts, showcasing a level of dedication that is hard to come by. Even after ending this contract, he is still fully available to me which shows how much he cares for the teams he works with.",
                image: andyG
              },
              {
                name: "Nathaniel C.",
                role: "",
                content: "Caleb delivered well on our Google Ads optimization. He went through and explained his experiences, and walked us through by way of video. He is very informative and insightful, and he knows what he is talking about. He was also genuinely invested in helping out our business and gave constructive criticism in a way that was not demeaning. His work was very well received, and I cannot recommend him enough.",
                image: null
              }
            ].map((testimonial, index) => (
              <Card
                key={index}
                onClick={() => setSelectedTestimonial(testimonial)}
                className="p-6 bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all w-[440px] flex-shrink-0 shadow-xl cursor-pointer"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" fill="#DF7606" color="#DF7606" />
                  ))}
                </div>
                <p className="text-lg text-foreground mb-5 leading-relaxed line-clamp-6">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-3">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cta via-cta/80 to-accent flex items-center justify-center font-bold text-background text-sm flex-shrink-0">
                      {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[1][0]}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-base">{testimonial.name}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mt-12">
            <Button variant="cta" size="xl">
              Book a Call
            </Button>
          </div>
        </div>
      </section>

      {/* What I Can Promise */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-gradient-to-b from-card/20 to-background relative">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/10 via-accent/10 to-accent/15 rounded-3xl blur-2xl opacity-60" />
              <img
                src={promiseProfile}
                alt="Caleb Promise"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>

            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    What I <span className="inline-block px-3 text-white rounded-full" style={{ backgroundColor: '#de3323', verticalAlign: 'middle', paddingTop: '0.25rem', paddingBottom: '0.5rem' }}>Can't</span> Promise
                  </h2>
                  <div className="space-y-4 text-2xl text-white">
                    <p className="font-semibold flex items-center gap-3"><XCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#de3323' }} />Overnight Success.</p>
                    <p className="font-semibold flex items-center gap-3"><XCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#de3323' }} />You'll become a millionaire.</p>
                    <p className="font-semibold flex items-center gap-3"><XCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#de3323' }} />Every month will be profitable.</p>
                  </div>
                </div>

                <div className="border-t border-border/30 pt-6">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    What I <span className="inline-block px-3 text-white rounded-full" style={{ backgroundColor: '#385f3e', verticalAlign: 'middle', paddingTop: '0.25rem', paddingBottom: '0.5rem' }}>Can</span> Promise
                  </h2>
                  <div className="space-y-4 text-2xl text-white">
                    <p className="font-semibold flex items-center gap-3"><CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#385f3e' }} />Always being 100% honest with you.</p>
                    <p className="font-semibold flex items-center gap-3"><CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#385f3e' }} />Always me managing your ads.</p>
                    <p className="font-semibold flex items-center gap-3"><CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#385f3e' }} />Always being the best at what I do.</p>
                    <p className="font-semibold flex items-center gap-3"><CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#385f3e' }} />Always investing and treating your money, like my own.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 lg:px-16 py-20 bg-card/30 relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Are Your Google Ads In The Wrong Hands?
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
            <p className="text-2xl text-white">
              Schedule a call with me.
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
                    className="group relative p-8 rounded-xl border-2 border-border/50 bg-background/50 hover:border-white hover:bg-muted/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2 group-hover:text-foreground transition-colors">
                        0-20k$
                      </div>
                      <div className="text-sm text-white">
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
                    className="group relative p-8 rounded-xl border-2 border-border/50 bg-background/50 hover:border-white hover:bg-muted/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2 group-hover:text-foreground transition-colors">
                        20k$+
                      </div>
                      <div className="text-sm text-white">
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
          <p className="text-white">
            Google Ads Freelancer | Partner
          </p>
          <p className="text-sm text-white mt-4">
            © 2025 All rights reserved
          </p>
        </div>
      </footer>

      {/* Testimonial Dialog */}
      <Dialog open={!!selectedTestimonial} onOpenChange={() => setSelectedTestimonial(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {selectedTestimonial?.image ? (
                <img
                  src={selectedTestimonial.image}
                  alt={selectedTestimonial.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
              ) : selectedTestimonial && (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cta via-cta/80 to-accent flex items-center justify-center font-bold text-background text-sm flex-shrink-0">
                  {selectedTestimonial.name.split(' ')[0][0]}{selectedTestimonial.name.split(' ')[1][0]}
                </div>
              )}
              <span>{selectedTestimonial?.name}</span>
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5" fill="#DF7606" color="#DF7606" />
              ))}
            </div>
            <p className="text-lg leading-relaxed text-foreground">
              {selectedTestimonial?.content}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
