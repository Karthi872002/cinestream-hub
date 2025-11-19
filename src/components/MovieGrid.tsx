import { MovieCard } from "./MovieCard";

const movies = [
  {
    title: "Dune: Part Two",
    releaseDate: "Mar 1, 2024",
    language: "English",
    posterUrl: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?q=80&w=600",
    featured: true,
  },
  {
    title: "Oppenheimer",
    releaseDate: "Jul 21, 2023",
    language: "English",
    posterUrl: "https://images.unsplash.com/photo-1574267432644-f237d8ec378d?q=80&w=600",
  },
  {
    title: "The Killer",
    releaseDate: "Nov 10, 2023",
    language: "English",
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600",
  },
  {
    title: "Napoleon",
    releaseDate: "Nov 22, 2023",
    language: "English",
    posterUrl: "https://images.unsplash.com/photo-1579566346927-c68383817a25?q=80&w=600",
  },
  {
    title: "Poor Things",
    releaseDate: "Dec 8, 2023",
    language: "English",
    posterUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600",
    featured: true,
  },
  {
    title: "Society of the Snow",
    releaseDate: "Jan 4, 2024",
    language: "Spanish",
    posterUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=600",
  },
];

export const MovieGrid = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Cinematic spotlight effects */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        {/* Section header with cinematic styling */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold tracking-tight">
              Now Playing
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the latest movies showing in theaters near you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies.map((movie, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <MovieCard {...movie} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Vignette effect */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
