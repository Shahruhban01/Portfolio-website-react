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
      description: "A full-featured e-commerce solution built with the MERN stack (MongoDB, Express, React, Node.js). Includes product management, user authentication, shopping cart functionality, and payment processing with Stripe.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
      github: "https://github.com/ruhban",
      external: "https://developerruhban.com/projects/ecommerce",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Real Estate Listing Platform",
      description: "A comprehensive real estate platform allowing users to list, search, and filter properties. Features include an interactive map view, saved searches, and agent contact functionality.",
      tech: ["Vue.js", "Node.js", "Express", "MongoDB", "Google Maps API"],
      github: "https://github.com/ruhban",
      external: "https://developerruhban.com/projects/real-estate",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "CRM System",
      description: "A customer relationship management system designed for small businesses. Includes contact management, task tracking, email integration, and performance analytics dashboard.",
      tech: ["React", "Next.js", "TypeScript", "TailwindCSS", "Firebase"],
      github: "https://github.com/ruhban",
      external: "https://developerruhban.com/projects/crm",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    }
  ];

  const otherProjects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio website showcasing my projects and skills.",
      tech: ["React", "TailwindCSS", "Vite"],
      github: "https://github.com/ruhban/portfolio",
      external: "https://developerruhban.com",
    },
    {
      title: "Weather Dashboard",
      description: "A weather application with location detection and 7-day forecast.",
      tech: ["JavaScript", "OpenWeather API", "Bootstrap"],
      github: "https://github.com/ruhban",
      external: "https://developerruhban.com/projects/weather",
    },
    {
      title: "Task Manager",
      description: "A simple task management application with drag-and-drop functionality.",
      tech: ["Vue.js", "Vuex", "Firebase"],
      github: "https://github.com/ruhban",
      external: "https://developerruhban.com/projects/task-manager",
    },
    {
      title: "Recipe Finder",
      description: "An application to search for recipes based on ingredients and dietary preferences.",
      tech: ["React", "Spoonacular API", "TailwindCSS"],
      github: "https://github.com/ruhban",
      external: "https://developerruhban.com/projects/recipe-finder",
    },
    {
      title: "Markdown Blog",
      description: "A simple blogging platform that supports Markdown formatting.",
      tech: ["Node.js", "Express", "MongoDB", "Marked.js"],
      github: "https://github.com/ruhban",
      external: "https://developerruhban.com/projects/markdown-blog",
    },
    {
      title: "Budget Tracker",
      description: "A financial management tool to track income, expenses, and savings goals.",
      tech: ["React", "Chart.js", "LocalStorage"],
      github: "https://github.com/ruhban",
      external: "https://developerruhban.com/projects/budget-tracker",
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
                <a href="https://github.com/ruhban" target="_blank" rel="noopener noreferrer">View More Projects</a>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
