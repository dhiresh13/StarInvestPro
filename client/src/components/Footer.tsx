import { Link } from "wouter";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Team", href: "#about" },
    { label: "Careers", href: "#about" },
    { label: "Press", href: "#about" },
  ],
  products: [
    { label: "Payment Gateway", href: "#products" },
    { label: "Payouts API", href: "#products" },
    { label: "Subscriptions", href: "#products" },
    { label: "Invoicing", href: "#products" },
  ],
  resources: [
    { label: "Documentation", href: "#developers" },
    { label: "API Reference", href: "#developers" },
    { label: "Case Studies", href: "#about" },
    { label: "Blog", href: "#about" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Security", href: "#about" },
    { label: "Compliance", href: "#about" },
  ],
};

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">Starex Pay</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Powering the future of digital payments with secure, scalable infrastructure for modern businesses.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" data-testid="social-twitter">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="social-linkedin">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="social-github">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="social-youtube">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Starex Pay. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Trusted by 5,000+ businesses | $500M+ processed annually
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
