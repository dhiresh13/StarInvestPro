import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Startup",
    price: "2.5%",
    description: "Perfect for early-stage businesses",
    features: [
      "All payment methods",
      "Standard API access",
      "Email support",
      "Basic analytics",
      "48-hour settlements",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "2%",
    description: "For growing businesses",
    popular: true,
    features: [
      "Everything in Startup",
      "24-hour settlements",
      "Priority support",
      "Advanced analytics",
      "Custom webhooks",
      "Sandbox environment",
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For high-volume merchants",
    features: [
      "Everything in Growth",
      "Real-time settlements",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantees",
      "Volume discounts",
    ],
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pay only for what you use, scale as you grow. No setup fees, no hidden charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover-elevate ${plan.popular ? "border-primary shadow-lg" : ""}`}
              data-testid={`pricing-card-${index}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground"> per transaction</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Check className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={scrollToContact}
                  data-testid={`button-pricing-${index}`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Need custom pricing for high volume?
          </p>
          <Button variant="outline" onClick={scrollToContact} data-testid="button-contact-sales">
            Contact Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
}
