import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code, Book, Boxes, TestTube } from "lucide-react";
import { SiNodedotjs, SiPython, SiPhp, SiRuby } from "react-icons/si";

const sdks = [
  { icon: SiNodedotjs, name: "Node.js SDK", description: "Full-featured SDK for Node.js applications" },
  { icon: SiPython, name: "Python SDK", description: "Pythonic interface for payment processing" },
  { icon: Code, name: "Java SDK", description: "Enterprise-grade Java integration library" },
  { icon: SiPhp, name: "PHP SDK", description: "Complete PHP toolkit for web applications" },
];

export default function DeveloperResources() {
  return (
    <section id="developers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Developer Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to integrate payments quickly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Integration</h3>
            <Card className="bg-accent/50 border-accent-border">
              <CardContent className="p-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="font-mono text-foreground">
{`npm install starex-pay

const starex = require('starex-pay');

starex.init('your-api-key');

const payment = await starex.createPayment({
  amount: 10000,
  currency: 'INR',
  customer: {
    email: 'customer@example.com',
    phone: '+919876543210'
  }
});`}
                  </code>
                </pre>
              </CardContent>
            </Card>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">5 min</div>
                <div className="text-xs text-muted-foreground">Integration time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">RESTful</div>
                <div className="text-xs text-muted-foreground">API design</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Webhooks</div>
                <div className="text-xs text-muted-foreground">Event support</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">SDKs & Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sdks.map((sdk, index) => (
                <Card key={index} className="hover-elevate" data-testid={`sdk-card-${index}`}>
                  <CardHeader>
                    <sdk.icon className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-base">{sdk.name}</CardTitle>
                    <CardDescription className="text-xs">{sdk.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Book, title: "API Documentation", description: "Comprehensive guides and references" },
            { icon: TestTube, title: "Sandbox Environment", description: "Test your integration safely" },
            { icon: Code, title: "Code Examples", description: "Ready-to-use implementation samples" },
            { icon: Boxes, title: "Plugins & Extensions", description: "Pre-built integrations for popular platforms" },
          ].map((resource, index) => (
            <Card key={index} className="hover-elevate" data-testid={`resource-card-${index}`}>
              <CardContent className="p-6 text-center">
                <resource.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-2">{resource.title}</h4>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Developer Community</h3>
          <p className="text-muted-foreground mb-6">
            Get help, share ideas, and connect with other developers
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="outline" data-testid="button-slack-community">
              Join Slack Community
            </Button>
            <Button variant="outline" data-testid="button-discord-server">
              Discord Server
            </Button>
            <Button data-testid="button-api-docs">
              View API Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
