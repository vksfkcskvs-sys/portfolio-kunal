import { Button } from "@/components/Button";
import {
  ArrowRight
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

export const Hero = () => {
  return (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src="hero-bg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-40"/>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
    </div>

  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(30)].map((_, i) => (
      <div className="absolute w-1.5 h-1.5 rounded-full opacity-60" style={{
        backgroundColor: "#20b2a6",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 5}s`
      }}/>
    ))}
  </div>

  <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* left  */}
      <div className="space-y-8">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />Software Engineer / MERN Specialist
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
            Crafting <span className="text-primary glow-text">digital</span>
            <br />
            experiences with
            <br />
            <span className="font-serif italic font-normal text-white">
              precision.
            </span>
          </h1>
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
              Hi, I'm Kunal Pandey — a software engineer specializing in
              React, Next.js, and TypeScript. I build scalable, performant web
              applications that users love.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
            <Button size="lg">
              Contact Me <ArrowRight className="w-5 h-5"/>
            </Button>
            <AnimatedBorderButton />
            </div>
          </div>
      {/* right  */}
      <div className="relative animate-fade-in animation-delay-300">
        {/* profile-image */}
        <div className="relative max-w-md mx-auto">
          <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
          <div className="relative glass rounded-3xl p-2 glow-border">
            <img src="/profile-photo.jpg" alt="Profile image" className="w-full aspect-[4/5] object-cover border-radius-2xl"/>
            
            {/* badge*/}
            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                <span>Available for work</span>
              </div>
            </div>
            {/* status*/}
          
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  );
}