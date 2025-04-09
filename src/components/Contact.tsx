
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This would normally be a fetch to your backend
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`py-24 transition-section ${isVisible ? 'in-view' : ''}`}
    >
      <div className="container max-w-2xl text-center">
        <h2 className="font-mono text-teal mb-2">04. What's Next?</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-light mb-6">Get In Touch</h3>
        <p className="text-slate mb-12 max-w-lg mx-auto">
          I'm currently available for freelance work and full-time opportunities. 
          If you have a project that needs some creative development power or if you're 
          looking to hire a dedicated developer, feel free to reach out!
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-light">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="bg-navy-light border-navy-light focus:border-teal"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-light">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="bg-navy-light border-navy-light focus:border-teal"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-slate-light">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              required
              rows={6}
              className="bg-navy-light border-navy-light focus:border-teal resize-none"
            />
          </div>
          <div className="flex justify-center pt-4">
            <Button 
              type="submit"
              className="bg-transparent hover:bg-teal/10 border border-teal text-teal px-10"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
