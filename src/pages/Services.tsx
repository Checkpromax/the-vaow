import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Building2, PartyPopper, Plane, Palette, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";

const services = [
  {
    icon: Heart,
    title: "Wedding Planning",
    description: "Your love story deserves a celebration as unique as your bond. From intimate ceremonies to grand receptions, we craft every detail to reflect your personal style and create memories that last a lifetime.",
    features: ["Full-service planning", "Day-of coordination", "Vendor management", "Custom design & décor", "Timeline creation", "Budget management"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Elevate your brand through meticulously executed corporate gatherings. From product launches to annual galas, we create impactful experiences that resonate with your audience and stakeholders.",
    features: ["Conference planning", "Product launches", "Award ceremonies", "Team building events", "Networking functions", "Brand activations"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    icon: PartyPopper,
    title: "Birthday & Private Parties",
    description: "Celebrate life's milestones in extraordinary style. Whether it's a sweet sixteen or a golden anniversary, we transform your vision into an unforgettable celebration.",
    features: ["Theme development", "Entertainment booking", "Catering coordination", "Décor & styling", "Photography arrangement", "Guest management"],
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
  },
  {
    icon: Plane,
    title: "Destination Events",
    description: "Dream destinations brought to life with seamless planning. From exotic beach weddings to European castle celebrations, we handle every detail across the globe.",
    features: ["Location scouting", "Travel coordination", "Local vendor sourcing", "Guest accommodations", "Cultural considerations", "On-site management"],
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80",
  },
  {
    icon: Palette,
    title: "Decor & Styling",
    description: "Transform any space into a breathtaking environment. Our design team creates stunning visual experiences that captivate guests and bring your theme to life.",
    features: ["Custom floral design", "Lighting design", "Furniture & rentals", "Table settings", "Signage & graphics", "Themed installations"],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
  },
  {
    icon: Users,
    title: "Vendor Management",
    description: "Access our exclusive network of premium vendors and let us handle all the coordination. We ensure every partner delivers excellence that meets our exacting standards.",
    features: ["Vendor sourcing", "Contract negotiation", "Quality assurance", "Payment coordination", "Performance management", "Backup planning"],
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80"
            alt="Event services"
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
              Our Services
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Comprehensive <span className="text-primary">Event Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              From concept to execution, we offer a full spectrum of services to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 last:mb-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wider uppercase group"
                >
                  <Link to="/contact">
                    Inquire Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            subtitle="Our Process"
            title="How We Work"
            description="A seamless journey from initial consultation to flawless execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We begin with understanding your vision, preferences, and requirements in detail." },
              { step: "02", title: "Planning", desc: "Our team develops a comprehensive plan, timeline, and budget tailored to your needs." },
              { step: "03", title: "Design", desc: "We create stunning concepts and coordinate with vendors to bring your vision to life." },
              { step: "04", title: "Execution", desc: "On the day, we manage every detail ensuring a flawless, stress-free experience." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <span className="font-serif text-6xl font-bold text-primary/20 absolute -top-4 left-0">
                  {item.step}
                </span>
                <div className="pt-12">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Get Started?"
        subtitle="Let's discuss your upcoming event and explore how we can make it extraordinary."
        buttonText="View Our Packages"
        buttonLink="/packages"
      />
    </Layout>
  );
};

export default Services;
