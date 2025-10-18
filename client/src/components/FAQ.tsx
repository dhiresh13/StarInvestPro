import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Payments & Processing",
    questions: [
      {
        q: "What payment methods do you support?",
        a: "We support all major payment methods including credit/debit cards (Visa, Mastercard, Amex), UPI, digital wallets (Google Pay, PayPal, Apple Pay), and net banking. We also support international payment methods for cross-border transactions.",
      },
      {
        q: "How long does settlement take?",
        a: "We offer instant settlements with funds typically reaching your account within 24 hours. Enterprise customers can access same-day or even real-time settlement options based on their plan.",
      },
      {
        q: "What are your transaction success rates?",
        a: "Our smart routing technology ensures industry-leading success rates of 95%+. We use AI-powered fraud detection and automatic retry logic to maximize successful transactions.",
      },
    ],
  },
  {
    category: "Security & Compliance",
    questions: [
      {
        q: "Is Starex Pay PCI DSS compliant?",
        a: "Yes, we are PCI DSS Level 1 certified, the highest level of payment security compliance. We also hold ISO 27001 certification and are authorized by the Reserve Bank of India (RBI).",
      },
      {
        q: "How do you prevent fraud?",
        a: "We use advanced AI-powered fraud detection, machine learning algorithms, and real-time risk scoring to identify and prevent fraudulent transactions. Our system analyzes hundreds of data points for each transaction.",
      },
    ],
  },
  {
    category: "Pricing & Fees",
    questions: [
      {
        q: "What are your transaction fees?",
        a: "Our standard pricing starts at 2% per transaction with no setup fees or hidden charges. Enterprise customers processing high volumes can access custom pricing with rates as low as 1.5%.",
      },
      {
        q: "Are there any hidden fees?",
        a: "No. We believe in transparent pricing. The only fees you pay are the transaction fees clearly outlined in your plan. No setup fees, no annual fees, no hidden charges.",
      },
    ],
  },
  {
    category: "Integration & Technical",
    questions: [
      {
        q: "How long does integration take?",
        a: "Most businesses complete integration in under 2 hours using our SDK and comprehensive documentation. We provide pre-built plugins for popular platforms like Shopify and WooCommerce for even faster setup.",
      },
      {
        q: "Do you provide sandbox environment for testing?",
        a: "Yes, we provide a full-featured sandbox environment that mirrors production. You can test all features, API endpoints, and workflows before going live.",
      },
      {
        q: "What programming languages do you support?",
        a: "We provide official SDKs for Node.js, Python, Java, PHP, and Ruby. We also offer RESTful APIs that work with any programming language. All SDKs are open source and actively maintained.",
      },
    ],
  },
  {
    category: "Business & Support",
    questions: [
      {
        q: "What kind of customer support do you offer?",
        a: "We provide 24/7 customer support via email, chat, and phone. Enterprise customers get dedicated account managers and priority support with guaranteed response times.",
      },
      {
        q: "Can I switch from another payment provider?",
        a: "Yes, we make migration easy with dedicated migration specialists, data import tools, and zero downtime transitions. We'll help you every step of the way.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Starex Pay
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold mb-4">{category.category}</h3>
              <Accordion type="single" collapsible className="space-y-3">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="bg-card border border-card-border rounded-lg px-6"
                    data-testid={`faq-item-${categoryIndex}-${faqIndex}`}
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
