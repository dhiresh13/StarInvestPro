import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";
import heroImage from "@assets/generated_images/Fintech_payment_network_hero_background_ba603376.png";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted by 5,000+ businesses worldwide</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Powering the Future of
            <br />
            <span className="text-primary">Digital Payments</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Accept payments anywhere, anytime with enterprise-grade security and real-time settlement processing. Built for scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="text-base px-8" onClick={scrollToContact} data-testid="button-hero-start">
              Start Accepting Payments
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 bg-background/50 backdrop-blur-sm"
              onClick={scrollToContact}
              data-testid="button-hero-demo"
            >
              Schedule a Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Zap, label: "Instant Settlements", value: "Real-time processing" },
              { icon: Shield, label: "PCI DSS Certified", value: "Bank-grade security" },
              { icon: Globe, label: "Global Coverage", value: "Multiple currencies" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-card-border rounded-lg p-6 hover-elevate"
              >
                <feature.icon className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold mb-1">{feature.label}</h3>
                <p className="text-sm text-muted-foreground">{feature.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
