import { Card, CardContent } from "@/components/ui/card";
import { Newspaper, TrendingUp, Award, Users } from "lucide-react";

const news = [
  {
    icon: TrendingUp,
    date: "March 2024",
    title: "Starex Pay Processes $500M in Annual Transaction Volume",
    description: "Marking a 145% year-over-year growth, demonstrating strong market adoption and merchant trust.",
  },
  {
    icon: Users,
    date: "January 2024",
    title: "Crosses 5,000 Active Merchant Milestone",
    description: "Platform expansion continues with 230% merchant growth, serving businesses across 12 countries.",
  },
  {
    icon: Award,
    date: "November 2023",
    title: "Receives PCI DSS Level 1 Certification",
    description: "Achieves highest level of payment security certification, reinforcing commitment to data protection.",
  },
  {
    icon: Newspaper,
    date: "August 2023",
    title: "Launches AI-Powered Fraud Detection",
    description: "Introduces advanced machine learning system that improves transaction success rates by 15%.",
  },
];

export default function Press() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Press & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Latest news, milestones, and recognition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {news.map((item, index) => (
            <Card key={index} className="hover-elevate" data-testid={`press-card-${index}`}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-2">
                      {item.date}
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            As featured in leading publications
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["TechCrunch", "Forbes", "Business Today", "Economic Times", "YourStory"].map((pub, idx) => (
              <div key={idx} className="text-lg font-bold text-muted-foreground/40">
                {pub}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
