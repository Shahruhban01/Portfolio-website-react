
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
    "Next.js",
    "Vue.js",
    "Express.js",
    "MongoDB", 
    "WordPress",
    "TailwindCSS", 
    "Bootstrap", 
    "Git"
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
              Hello! I'm Muhammad Ruhban, a passionate Full Stack JavaScript Developer with over 4 years 
              of professional experience. I specialize in building exceptional digital experiences using 
              modern web technologies.
            </p>
            <p>
              I started my journey in web development during my university years, and what began as curiosity 
              evolved into a fulfilling career. I enjoy solving complex problems and transforming ideas into 
              elegant, functional web applications.
            </p>
            <p>
              My approach combines technical expertise with a deep understanding of user needs. I believe in 
              writing clean, maintainable code that delivers tangible business value while providing intuitive 
              user experiences.
            </p>
            <p className="mb-4">
              Here are the main technologies I work with:
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
