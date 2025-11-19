import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MapPin, Globe, Film } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Header = () => {
  const [activeTab, setActiveTab] = useState<"coming-soon" | "in-theatres">("in-theatres");

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-lg">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 py-4">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Film className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold tracking-tight">
                <span className="text-primary">MOVIE</span>
                <span className="text-accent">BUFF</span>
              </h1>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveTab("coming-soon")}
                className={activeTab === "coming-soon" 
                  ? "bg-primary text-primary-foreground shadow-glow-red font-semibold tracking-wide" 
                  : "hover:bg-secondary/80 transition-all duration-300"}
              >
                Coming Soon
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveTab("in-theatres")}
                className={activeTab === "in-theatres" 
                  ? "bg-primary text-primary-foreground shadow-glow-red font-semibold tracking-wide" 
                  : "hover:bg-secondary/80 transition-all duration-300"}
              >
                In Theatres
              </Button>
            </div>
          </div>

          {/* Filters bar */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[300px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search for movies..." 
                className="pl-10 bg-secondary border-border focus:border-primary transition-colors"
              />
            </div>
            
            <Select defaultValue="worldwide">
              <SelectTrigger className="w-[180px] bg-secondary border-border">
                <MapPin className="mr-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="worldwide">Worldwide</SelectItem>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="in">India</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-[180px] bg-secondary border-border">
                <Globe className="mr-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Languages</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">Hindi</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="ta">Tamil</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      {/* Cinematic bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </header>
  );
};
