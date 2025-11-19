import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ticket, Heart, Play } from "lucide-react";

interface MovieCardProps {
  title: string;
  releaseDate: string;
  language: string;
  posterUrl: string;
  featured?: boolean;
}

export const MovieCard = ({ title, releaseDate, language, posterUrl, featured }: MovieCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card transition-all duration-500 hover:scale-[1.02] hover:shadow-glow-red">
      {featured && (
        <Badge className="absolute left-3 top-3 z-20 bg-accent text-accent-foreground font-bold tracking-wide shadow-glow-gold">
          FEATURED
        </Badge>
      )}
      
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={posterUrl} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
        
        {/* Play button on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button size="icon" className="h-16 w-16 rounded-full bg-primary/90 shadow-glow-red backdrop-blur-sm hover:bg-primary">
            <Play className="h-8 w-8 fill-primary-foreground" />
          </Button>
        </div>
        
        {/* Cinematic edge glow */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
      </div>
      
      <div className="space-y-3 p-4">
        <div>
          <h3 className="font-bold text-lg leading-tight line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
            <span>{releaseDate}</span>
            <span>•</span>
            <span>{language}</span>
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button className="flex-1 bg-primary hover:bg-primary/90 shadow-glow-red font-semibold tracking-wide">
            <Ticket className="mr-2 h-4 w-4" />
            BUY TICKETS
          </Button>
          <Button variant="outline" size="icon" className="border-border hover:bg-secondary hover:border-primary transition-colors">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
