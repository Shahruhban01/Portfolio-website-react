
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment integration with Stripe, and order management.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
      github: "#",
      external: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates. Users can create workspaces, assign tasks, set deadlines, and track progress. Includes notifications and reporting features.",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "Prisma", "PostgreSQL", "Socket.io"],
      github: "#",
      external: "#",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered content generation tool that helps users create blog posts, social media content, and marketing copy. Utilizes OpenAI's GPT models for text generation with customizable parameters.",
      tech: ["React", "Python", "FastAPI", "OpenAI", "Docker", "AWS"],
      github: "#",
      external: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    }
  ];

  const otherProjects = [
    {
      title: "Weather App",
      description: "A minimalist weather application with location detection and animated visualizations.",
      tech: ["React", "CSS", "Weather API"],
      github: "#",
      external: "#",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website built with React and TailwindCSS.",
      tech: ["React", "TailwindCSS", "Vite"],
      github: "#",
      external: "#",
    },
    {
      title: "Recipe Finder",
      description: "An application to search for recipes based on available ingredients and dietary restrictions.",
      tech: ["JavaScript", "Node.js", "MongoDB"],
      github: "#",
      external: "#",
    },
    {
      title: "Budget Tracker",
      description: "A financial management tool to track income, expenses, and savings goals.",
      tech: ["React", "Chart.js", "Firebase"],
      github: "#",
      external: "#",
    },
    {
      title: "Movie Recommendation System",
      description: "A machine learning-based movie recommendation system with user preference learning.",
      tech: ["Python", "Flask", "TensorFlow"],
      github: "#",
      external: "#",
    },
    {
      title: "Fitness Tracking App",
      description: "A mobile-first application for tracking workouts, nutrition, and progress photos.",
      tech: ["React Native", "Redux", "Firebase"],
      github: "#",
      external: "#",
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`py-24 transition-section ${isVisible ? 'in-view' : ''}`}
    >
      <div className="container">
        <h2 className="section-heading">
          <span className="text-teal font-mono">02.</span> Projects
        </h2>
        
        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="featured" className="data-[state=active]:bg-navy-light data-[state=active]:text-teal">Featured Projects</TabsTrigger>
            <TabsTrigger value="other" className="data-[state=active]:bg-navy-light data-[state=active]:text-teal">Other Projects</TabsTrigger>
          </TabsList>
          
          <TabsContent value="featured" className="space-y-20">
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-[3fr_2fr]' : 'md:grid-cols-[2fr_3fr] md:[&>div]:order-1'} gap-8`}
              >
                <div className="space-y-4">
                  <h3 className="font-mono text-teal text-sm">Featured Project</h3>
                  <h4 className="text-2xl font-bold text-slate-light">{project.title}</h4>
                  <div className="bg-navy-light p-6 rounded-md shadow-lg text-slate">
                    <p>{project.description}</p>
                  </div>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.tech.map((tech, i) => (
                      <li key={i} className="text-xs font-mono text-slate">{tech}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-slate-light hover:text-teal" aria-label="GitHub Repository">
                      <Github size={20} />
                    </a>
                    <a href={project.external} className="text-slate-light hover:text-teal" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-2 rounded-md bg-teal/10 opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
                  <a href={project.external} className="relative block aspect-video overflow-hidden rounded-md bg-navy-light">
                    <div className="absolute inset-0 bg-navy-light/80 backdrop-blur-[1px] transition-opacity group-hover:opacity-0"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="h-full w-full object-cover"
                    />
                  </a>
                </div>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="other">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project, index) => (
                <div key={index} className="bg-navy-light p-6 rounded-lg h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <Folder className="text-teal" size={40} />
                    <div className="flex gap-4">
                      <a href={project.github} className="text-slate hover:text-teal" aria-label="GitHub Repository">
                        <Github size={20} />
                      </a>
                      <a href={project.external} className="text-slate hover:text-teal" aria-label="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-light mb-2">{project.title}</h3>
                  <p className="text-slate mb-6 flex-grow">{project.description}</p>
                  <ul className="flex flex-wrap gap-x-3 gap-y-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <li key={i} className="text-xs font-mono text-slate">{tech}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-16">
              <Button asChild className="bg-transparent hover:bg-teal/10 border border-teal text-teal">
                <a href="#">View More Projects</a>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
