import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-xl bg-background/90 border-b" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold">Starex Pay</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("products")}
              className="text-sm font-medium hover:text-primary transition-colors"
              data-testid="nav-products"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium hover:text-primary transition-colors"
              data-testid="nav-pricing"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("developers")}
              className="text-sm font-medium hover:text-primary transition-colors"
              data-testid="nav-developers"
            >
              Developers
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("contact")}
                data-testid="button-schedule-demo"
              >
                Schedule Demo
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                data-testid="button-get-started"
              >
                Get Started
              </Button>
            </div>

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-6 mt-8">
                  <button
                    onClick={() => scrollToSection("products")}
                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                  >
                    Products
                  </button>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                  >
                    Pricing
                  </button>
                  <button
                    onClick={() => scrollToSection("developers")}
                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                  >
                    Developers
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                  >
                    Contact
                  </button>
                  <div className="flex flex-col space-y-3 pt-4">
                    <Button variant="outline" onClick={() => scrollToSection("contact")}>
                      Schedule Demo
                    </Button>
                    <Button onClick={() => scrollToSection("contact")}>
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
