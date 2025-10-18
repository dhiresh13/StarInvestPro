import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Award, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Shrijay Kedare",
    role: "Chief Executive Officer",
    bio: "An experienced fintech professional driving innovation and client success with over a decade of industry expertise. Previously led payment solutions at leading financial institutions.",
    initials: "SK",
  },
];

const certifications = [
  {
    icon: Award,
    label: "PCI DSS Certified",
    description: "Highest level of payment security",
  },
  {
    icon: Award,
    label: "ISO 27001",
    description: "Information security management",
  },
  {
    icon: Award,
    label: "RBI Authorized",
    description: "Regulatory compliance assured",
  },
];

export default function Team() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Starex Pay
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Simplifying payments for the digital economy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To simplify payments for the digital economy by providing
              innovative, secure, and scalable payment infrastructure that
              empowers businesses to grow without limits.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Deliver fast, secure, and intelligent payment infrastructure for
              modern businesses, enabling seamless transactions and exceptional
              customer experiences.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Leadership Team
          </h3>
          <div className="grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="hover-elevate"
                data-testid={`team-card-${index}`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <Avatar className="w-16 h-16">
                      <AvatarFallback className="bg-primary/10 text-primary text-xl font-bold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                      <p className="text-sm text-primary font-semibold mb-2">
                        {member.role}
                      </p>
                      <Button variant="ghost" size="sm" className="p-0 h-auto">
                        <Linkedin className="w-4 h-4 mr-1" />
                        <span className="text-xs">LinkedIn</span>
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="hover-elevate"
              data-testid={`cert-card-${index}`}
            >
              <CardContent className="p-6 text-center">
                <cert.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold mb-2">{cert.label}</h4>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card border border-card-border rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Journey</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-32 font-bold text-primary">
                November 1999
              </div>
              <div className="flex-1">
                <h4 className="font-bold mb-1">Founded</h4>
                <p className="text-sm text-muted-foreground">
                  Starex Pay was established with a vision to revolutionize
                  digital payments
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-32 font-bold text-primary">
                2024 - Present
              </div>
              <div className="flex-1">
                <h4 className="font-bold mb-1">Rapid Growth</h4>
                <p className="text-sm text-muted-foreground">
                  Serving 5,000+ merchants with 99.99% uptime and growing
                  rapidly across 12 countries
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-32 font-bold text-primary">
                2026 - Future
              </div>
              <div className="flex-1">
                <h4 className="font-bold mb-1">Global Expansion</h4>
                <p className="text-sm text-muted-foreground">
                  Planned expansion across Pan-India, Southeast Asia, and Middle
                  East with enhanced product offerings
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
            <Briefcase className="w-5 h-5 text-primary" />
            <span className="font-semibold">We're Hiring!</span>
            <span className="text-sm text-muted-foreground">
              15+ open positions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
