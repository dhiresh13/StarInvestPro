import { ShoppingCart, Monitor, GraduationCap, Store, Plane, Gamepad2, Building2, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const industries = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Seamless checkout experiences for online stores",
  },
  {
    icon: Monitor,
    title: "SaaS",
    description: "Subscription billing and recurring payment management",
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    description: "Course payments and educational platform integration",
  },
  {
    icon: Store,
    title: "Retail",
    description: "In-store and online payment processing",
  },
  {
    icon: Plane,
    title: "Travel",
    description: "Booking payments and travel industry solutions",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "In-app purchases and gaming payment solutions",
  },
  {
    icon: Building2,
    title: "Financial Services",
    description: "Compliant payment processing for fintech",
  },
  {
    icon: TrendingUp,
    title: "Marketplaces",
    description: "Multi-vendor payment splitting and escrow",
  },
];

export default function Industries() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored payment solutions for every business vertical
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="hover-elevate" data-testid={`industry-card-${index}`}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{industry.title}</CardTitle>
                <CardDescription className="text-sm">{industry.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
