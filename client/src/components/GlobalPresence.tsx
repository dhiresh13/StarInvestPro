import { MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const regions = [
  {
    name: "India",
    status: "Live",
    markets: "Mumbai, Delhi, Bangalore, Hyderabad",
    color: "bg-primary",
  },
  {
    name: "Southeast Asia",
    status: "Expanding",
    markets: "Singapore, Malaysia, Indonesia",
    color: "bg-chart-2",
  },
  {
    name: "Middle East",
    status: "Expanding",
    markets: "UAE, Saudi Arabia, Qatar",
    color: "bg-chart-2",
  },
  {
    name: "Africa",
    status: "Planned 2026",
    markets: "Nigeria, Kenya, South Africa",
    color: "bg-muted",
  },
];

export default function GlobalPresence() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Global Expansion</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Global Presence</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Processing payments across continents with localized support and compliance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {regions.map((region, index) => (
            <Card key={index} className="hover-elevate" data-testid={`region-card-${index}`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-3 h-3 rounded-full ${region.color} mr-3`} />
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {region.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{region.name}</h3>
                <p className="text-sm text-muted-foreground">{region.markets}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card border border-card-border rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">12+</div>
              <div className="text-sm text-muted-foreground">Countries Operating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Payment Methods Supported</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Currencies Accepted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
