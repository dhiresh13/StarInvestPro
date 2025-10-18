import { CreditCard, Send, RefreshCw, FileText, Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const products = [
  {
    icon: CreditCard,
    title: "Payment Gateway",
    description: "Accept cards, UPI, and digital wallets with our unified gateway",
    features: [
      "Credit & Debit Cards",
      "UPI Payments",
      "Digital Wallets",
      "Net Banking",
    ],
  },
  {
    icon: Send,
    title: "Payouts API",
    description: "Automate bulk payments and vendor settlements",
    features: [
      "Bulk Transfers",
      "Vendor Payments",
      "Salary Disbursements",
      "Refund Processing",
    ],
  },
  {
    icon: RefreshCw,
    title: "Subscription Billing",
    description: "Manage recurring payments and subscription lifecycles",
    features: [
      "Recurring Billing",
      "Plan Management",
      "Dunning Management",
      "Usage-based Billing",
    ],
  },
  {
    icon: FileText,
    title: "Smart Invoicing",
    description: "Create and send professional invoices with payment links",
    features: [
      "Custom Templates",
      "Payment Links",
      "Auto Reminders",
      "Tax Compliance",
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete payment infrastructure for modern businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover-elevate" data-testid={`product-card-${index}`}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
