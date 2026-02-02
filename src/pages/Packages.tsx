import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";

const packages = [
  {
    name: "Bronze",
    tagline: "Essential Planning",
    description: "Perfect for couples who need guidance while managing some aspects themselves.",
    features: [
      "Initial consultation (2 hours)",
      "Vendor recommendations",
      "Timeline creation",
      "Budget planning template",
      "Email support",
      "Day-of coordination checklist",
    ],
    highlighted: false,
  },
  {
    name: "Silver",
    tagline: "Comprehensive Management",
    description: "Our most popular package for those who want peace of mind throughout the process.",
    features: [
      "Everything in Bronze, plus:",
      "Full vendor management",
      "Venue selection assistance",
      "Design concept development",
      "Monthly planning meetings",
      "Rehearsal coordination",
      "Day-of coordination (10 hours)",
      "Dedicated planning assistant",
    ],
    highlighted: true,
  },
  {
    name: "Gold",
    tagline: "Full Luxury Experience",
    description: "The ultimate in event planning for those who desire absolute perfection.",
    features: [
      "Everything in Silver, plus:",
      "Unlimited consultations",
      "Complete design & styling",
      "Guest experience management",
      "Custom stationery coordination",
      "VIP vendor access",
      "Multi-day event coordination",
      "Post-event services",
      "24/7 concierge support",
      "Exclusive venue partnerships",
    ],
    highlighted: false,
  },
];

const Packages = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
            alt="Packages"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-6">
              Our Packages
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Tailored <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Choose the perfect level of service to match your needs and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-lg p-8 ${
                  pkg.highlighted
                    ? "bg-card border-2 border-primary"
                    : "bg-card border border-border"
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-medium tracking-wider uppercase px-4 py-1 rounded-full">
                      <Star size={12} className="fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="font-serif text-3xl font-bold text-primary mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-foreground font-medium mb-2">{pkg.tagline}</p>
                  <p className="text-muted-foreground text-sm">{pkg.description}</p>
                </div>

                <div className="mb-8">
                  <p className="text-center">
                    <span className="font-serif text-2xl font-bold text-foreground">Custom Pricing</span>
                  </p>
                  <p className="text-center text-muted-foreground text-sm">Tailored to your event</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full font-medium tracking-wider uppercase group ${
                    pkg.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  <Link to="/contact">
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package Section */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              subtitle="Bespoke Solutions"
              title="Need Something Custom?"
              description="Every event is unique. If our packages don't quite fit your vision, we'd love to create a bespoke solution tailored specifically to your needs."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wider uppercase group"
              >
                <Link to="/contact">
                  Discuss Your Vision
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            subtitle="Always Included"
            title="The Vaow Promise"
            description="Regardless of which package you choose, these are always part of your experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Personal Attention", desc: "A dedicated planner focused solely on your event" },
              { title: "Quality Vendors", desc: "Access to our curated network of premium partners" },
              { title: "Stress-Free Planning", desc: "We handle the details so you can enjoy the journey" },
              { title: "Flawless Execution", desc: "Meticulous attention to every detail on the day" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </Layout>
  );
};

export default Packages;
