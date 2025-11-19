import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden cinema-vignette">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2000"
          alt="Cinema hero"
          className="h-full w-full object-cover"
        />
        {/* Dramatic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex h-full items-center">
        <div className="max-w-2xl space-y-6">
          <div className="inline-block">
            <span className="text-accent text-sm font-bold tracking-widest uppercase">
              Now Playing
            </span>
          </div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Experience Cinema
            <span className="text-gradient-red block">Like Never Before</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Book your tickets for the latest blockbusters and indie films. 
            Immersive entertainment awaits in premium theaters near you.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow-red font-semibold tracking-wide">
              <Play className="mr-2 h-5 w-5 fill-primary-foreground" />
              Watch Trailer
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary hover:border-primary transition-colors">
              <Info className="mr-2 h-5 w-5" />
              More Info
            </Button>
          </div>
        </div>
      </div>

      {/* Spotlight effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
};
