
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", url: "#about" },
    { name: "Projects", url: "#projects" },
    { name: "Experience", url: "#experience" },
    { name: "Contact", url: "#contact" },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy/90 backdrop-blur shadow-lg py-4' : 'py-6'}`}>
      <div className="container flex justify-between items-center">
        <a href="#" className="text-teal font-mono text-xl font-bold">dev.name</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link, i) => (
              <li key={link.name}>
                <a href={link.url} className="nav-link">
                  <span className="text-teal font-mono mr-1">0{i + 1}.</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild variant="outline" className="border-teal text-teal hover:bg-teal/10">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-slate-light hover:bg-navy-light"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden fixed inset-0 bg-navy-light flex flex-col justify-center items-center z-40">
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => (
              <li key={link.name}>
                <a 
                  href={link.url} 
                  className="text-xl font-mono"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-teal mr-2">0{i + 1}.</span> {link.name}
                </a>
              </li>
            ))}
            <li className="mt-6">
              <Button asChild variant="outline" className="border-teal text-teal hover:bg-teal/10">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resume
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
