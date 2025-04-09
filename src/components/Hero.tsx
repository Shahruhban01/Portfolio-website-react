
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20">
      <div className="container">
        <p className="font-mono text-teal mb-4 animate-fadeIn opacity-0" style={{animationDelay: '100ms'}}>
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-light mb-4 animate-fadeIn opacity-0" style={{animationDelay: '200ms'}}>
          John Developer.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate mb-8 animate-fadeIn opacity-0" style={{animationDelay: '300ms'}}>
          I build things for the web.
        </h2>
        <div className="max-w-xl animate-fadeIn opacity-0" style={{animationDelay: '400ms'}}>
          <p className="text-slate text-lg mb-10">
            I'm a software engineer specializing in building (and occasionally designing)
            exceptional digital experiences. Currently, I'm focused on building accessible,
            human-centered products at <a href="#" className="text-teal hover:underline">Company Name</a>.
          </p>
          <Button asChild className="bg-transparent hover:bg-teal/10 border border-teal text-teal group">
            <a href="#projects">
              Check out my projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
