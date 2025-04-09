
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
      company: "Google",
      title: "Senior Software Engineer",
      period: "January 2022 - Present",
      responsibilities: [
        "Lead a team of 5 engineers developing and maintaining core services with Node.js and TypeScript",
        "Architected and implemented a new microservices infrastructure reducing deployment time by 40%",
        "Implemented CI/CD pipeline using GitHub Actions resulting in more reliable and frequent releases",
        "Mentored junior developers through code reviews and pair programming sessions"
      ]
    },
    {
      company: "Amazon",
      title: "Full Stack Developer",
      period: "June 2019 - December 2021",
      responsibilities: [
        "Built and maintained customer-facing web applications using React, Redux, and GraphQL",
        "Optimized database queries and API endpoints improving page load times by 30%",
        "Collaborated with UX designers to implement responsive designs and accessibility improvements",
        "Participated in on-call rotations, ensuring 99.9% service uptime"
      ]
    },
    {
      company: "Microsoft",
      title: "Frontend Developer",
      period: "August 2017 - May 2019",
      responsibilities: [
        "Developed and maintained user interfaces for internal tools using React and TypeScript",
        "Created reusable component library, streamlining development across multiple teams",
        "Integrated analytics and monitoring tools to track performance and user experience",
        "Implemented automated testing strategies, achieving 85% code coverage"
      ]
    },
    {
      company: "Startup Inc.",
      title: "Junior Web Developer",
      period: "January 2016 - July 2017",
      responsibilities: [
        "Built responsive websites and web applications for clients across various industries",
        "Implemented frontend interfaces with HTML, CSS, and JavaScript (ES6)",
        "Worked with backend teams to integrate APIs and database functionalities",
        "Maintained and updated legacy codebase to modern standards"
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
