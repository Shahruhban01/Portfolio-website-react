
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, url: "https://github.com", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { icon: Mail, url: "mailto:hello@example.com", label: "Email" },
  ];

  return (
    <footer className="py-8 text-center">
      <div className="container">
        <div className="md:hidden flex justify-center mb-6 space-x-6">
          {socialLinks.map((social, i) => (
            <a 
              key={i} 
              href={social.url} 
              target="_blank" 
              rel="noreferrer"
              className="text-slate hover:text-teal transform hover:-translate-y-1 transition-all"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
        
        <p className="font-mono text-sm text-slate">
          Designed & Built by John Developer
        </p>
        <p className="font-mono text-xs text-slate mt-2">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
      
      <div className="fixed bottom-0 left-6 hidden md:block">
        <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate">
          {socialLinks.map((social, i) => (
            <a 
              key={i} 
              href={social.url} 
              target="_blank" 
              rel="noreferrer"
              className="text-slate hover:text-teal transform hover:-translate-y-1 transition-all"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
      
      <div className="fixed bottom-0 right-6 hidden md:block">
        <div className="flex flex-col items-center after:content-[''] after:block after:w-px after:h-24 after:bg-slate">
          <a 
            href="mailto:hello@example.com" 
            className="font-mono text-sm text-slate hover:text-teal transform hover:-translate-y-1 transition-all pb-6 [writing-mode:vertical-rl]"
          >
            hello@example.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
