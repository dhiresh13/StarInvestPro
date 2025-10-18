import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CEO, TechVenture India",
    company: "E-commerce",
    content: "Starex Pay reduced our payment failures by 40% and improved our checkout conversion by 25%. The real-time analytics and fraud detection are game-changers.",
    initials: "PS",
    metric: "40% fewer failures",
  },
  {
    name: "Rajesh Kumar",
    role: "CTO, EduLearn Platform",
    company: "EdTech",
    content: "The subscription billing API saved us months of development time. We integrated in just 3 hours and now manage 50,000+ recurring payments seamlessly.",
    initials: "RK",
    metric: "3-hour integration",
  },
  {
    name: "Anita Desai",
    role: "Finance Director, GlobalRetail Co",
    company: "Retail",
    content: "The instant settlement feature improved our cash flow significantly. We now receive payments within 24 hours instead of waiting 3-5 days.",
    initials: "AD",
    metric: "24-hour settlements",
  },
  {
    name: "Vikram Patel",
    role: "Founder, GameZone Studios",
    company: "Gaming",
    content: "Supporting multiple payment methods globally was a nightmare before Starex Pay. Now we process in-app purchases across 12 countries with one integration.",
    initials: "VP",
    metric: "12 countries live",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from businesses powered by Starex Pay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate" data-testid={`testimonial-card-${index}`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                <p className="text-base mb-6 leading-relaxed">{testimonial.content}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-primary">{testimonial.metric}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
