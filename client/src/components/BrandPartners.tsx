import { SiShopify, SiWoocommerce, SiWordpress, SiMagento, SiStripe, SiSquare } from "react-icons/si";
import { Building2, ShoppingBag, GraduationCap, Gamepad2, Plane, Smartphone } from "lucide-react";

const brands = [
  { icon: SiShopify, name: "E-commerce Platform" },
  { icon: SiWoocommerce, name: "Online Store" },
  { icon: Building2, name: "Enterprise Corp" },
  { icon: ShoppingBag, name: "Retail Chain" },
  { icon: GraduationCap, name: "EdTech Platform" },
  { icon: Gamepad2, name: "Gaming Studio" },
  { icon: Plane, name: "Travel Agency" },
  { icon: Smartphone, name: "Mobile App" },
  { icon: SiWordpress, name: "CMS Platform" },
  { icon: SiMagento, name: "Commerce Suite" },
  { icon: SiStripe, name: "Payment Partner" },
  { icon: SiSquare, name: "POS System" },
];

export default function BrandPartners() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Processing payments for Fortune 500 companies and fast-growing startups
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="aspect-square bg-card border border-card-border rounded-lg p-6 flex items-center justify-center hover-elevate group"
              data-testid={`brand-logo-${index}`}
            >
              <brand.icon className="w-12 h-12 text-muted-foreground/40 group-hover:text-primary transition-colors" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Join thousands of businesses processing over <span className="font-semibold text-foreground">$500M+</span> annually
          </p>
        </div>
      </div>
    </section>
  );
}
