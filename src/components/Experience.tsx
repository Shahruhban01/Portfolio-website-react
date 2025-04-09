
import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Experience = () => {
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

  const experiences = [
    {
      company: "Upwork",
      title: "Freelance Full Stack Developer",
      period: "January 2021 - Present",
      responsibilities: [
        "Building full-stack web applications using React, Vue.js, and Node.js",
        "Developing WordPress websites and custom plugins for clients across various industries",
        "Creating responsive, mobile-first interfaces using TailwindCSS and Bootstrap",
        "Optimizing application performance and implementing SEO best practices"
      ]
    },
    {
      company: "Fiverr",
      title: "Web Developer",
      period: "March 2020 - Present",
      responsibilities: [
        "Developing custom WordPress themes and plugins for small to medium-sized businesses",
        "Building e-commerce solutions using WooCommerce and custom integrations",
        "Creating responsive landing pages and marketing websites",
        "Providing ongoing maintenance and support for client websites"
      ]
    },
    {
      company: "Taptech Studios",
      title: "Frontend Developer",
      period: "June 2019 - December 2020",
      responsibilities: [
        "Developed responsive web applications using React.js and Vue.js",
        "Created user interfaces for web and mobile applications",
        "Collaborated with design teams to implement pixel-perfect UI components",
        "Implemented state management using Redux and Vuex for complex applications"
      ]
    },
    {
      company: "TechnoSol",
      title: "Junior Web Developer",
      period: "January 2019 - May 2019",
      responsibilities: [
        "Developed and maintained WordPress websites for clients",
        "Created responsive layouts using HTML, CSS, and JavaScript",
        "Assisted senior developers with frontend implementation tasks",
        "Performed quality assurance testing and bug fixes"
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className={`py-24 transition-section ${isVisible ? 'in-view' : ''}`}
    >
      <div className="container max-w-4xl">
        <h2 className="section-heading">
          <span className="text-teal font-mono">03.</span> Where I've Worked
        </h2>
        
        <Tabs defaultValue={experiences[0].company.toLowerCase()} className="w-full">
          <TabsList className="flex flex-wrap h-auto mb-8 bg-transparent border-b border-navy-light">
            {experiences.map((exp) => (
              <TabsTrigger 
                key={exp.company} 
                value={exp.company.toLowerCase()} 
                className="px-5 py-2 data-[state=active]:bg-transparent data-[state=active]:text-teal data-[state=active]:border-b-2 data-[state=active]:border-teal rounded-none font-mono text-sm"
              >
                {exp.company}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {experiences.map((exp) => (
            <TabsContent key={exp.company} value={exp.company.toLowerCase()} className="mt-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-slate-light">
                  {exp.title} <span className="text-teal">@ {exp.company}</span>
                </h3>
                <p className="font-mono text-sm text-slate">{exp.period}</p>
                <ul className="space-y-4">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="text-teal mr-2 shrink-0">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
