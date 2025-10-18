import { TrendingUp, Users, Globe2, Zap } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "$500M+",
    label: "Transaction Volume",
    growth: "+145% YoY",
  },
  {
    icon: Users,
    value: "5,000+",
    label: "Active Merchants",
    growth: "+230% YoY",
  },
  {
    icon: Globe2,
    value: "12",
    label: "Countries",
    growth: "Expanding globally",
  },
  {
    icon: Zap,
    value: "99.99%",
    label: "Uptime SLA",
    growth: "Industry leading",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-muted-foreground">
            Performance metrics that speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-card-border rounded-lg p-8 text-center hover-elevate"
              data-testid={`stat-card-${index}`}
            >
              <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2" data-testid={`stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-xs text-primary font-semibold">
                {stat.growth}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
