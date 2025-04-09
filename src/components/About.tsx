
import { useState, useEffect, useRef } from "react";

const About = () => {
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

  const skills = [
    "JavaScript (ES6+)", 
    "TypeScript", 
    "React", 
    "Node.js", 
    "Express", 
    "Next.js",
    "TailwindCSS", 
    "GraphQL", 
    "MongoDB", 
    "PostgreSQL", 
    "Git", 
    "Docker"
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-24 transition-section ${isVisible ? 'in-view' : ''}`}
    >
      <div className="container">
        <h2 className="section-heading">
          <span className="text-teal font-mono">01.</span> About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4">
            <p>
              Hello! My name is John and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try 
              editing custom Tumblr themes — turns out hacking together a custom reblog 
              button taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at 
              an advertising agency, a start-up, a huge corporation, and a student-led 
              design studio. My main focus these days is building accessible, inclusive 
              products and digital experiences at <a href="#" className="text-teal hover:underline">Company Name</a> for 
              a variety of clients.
            </p>
            <p>
              I also recently launched a course that covers everything you need to build a web 
              app with the React ecosystem, from development to deployment.
            </p>
            <p className="mb-4">
              Here are a few technologies I've been working with recently:
            </p>
            
            <ul className="grid grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal mr-2">▹</span>
                  <span className="font-mono text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-2 rounded-md bg-teal/20 opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
            <div className="relative aspect-square rounded-md overflow-hidden bg-navy-light">
              <div className="absolute inset-0 bg-teal/20 mix-blend-multiply"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Developer" 
                className="object-cover h-full w-full mix-blend-multiply grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
