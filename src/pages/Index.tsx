import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Building2, PartyPopper, Plane } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/shared/ServiceCard";
import TestimonialCarousel from "@/components/shared/TestimonialCarousel";
import StatsSection from "@/components/shared/StatsSection";
import SectionHeading from "@/components/shared/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";
import ImageGallery from "@/components/shared/ImageGallery";

const services = [
  {
    icon: Heart,
    title: "Wedding Planning",
    description: "Transform your love story into an unforgettable celebration with our bespoke wedding planning services.",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Elevate your brand with meticulously planned corporate gatherings, galas, and conferences.",
  },
  {
    icon: PartyPopper,
    title: "Private Parties",
    description: "From milestone birthdays to intimate soirées, we create personalized celebrations that reflect your style.",
  },
  {
    icon: Plane,
    title: "Destination Events",
    description: "Dream destinations brought to life with seamless planning and extraordinary experiences worldwide.",
  },
];

const featuredImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", alt: "Elegant wedding setup", category: "Wedding" },
  { id: 2, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", alt: "Corporate gala event", category: "Corporate" },
  { id: 3, src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80", alt: "Birthday celebration", category: "Party" },
  { id: 4, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80", alt: "Destination wedding", category: "Destination" },
  { id: 5, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", alt: "Luxury wedding venue", category: "Wedding" },
  { id: 6, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", alt: "Conference event", category: "Corporate" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
            alt="Elegant event setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-6">
              Luxury Event Management
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Where Every Moment
            <br />
            <span className="text-primary">Becomes a Promise</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            We craft extraordinary experiences that celebrate life's most precious milestones. 
            From intimate gatherings to grand celebrations, every detail tells your story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wider uppercase group"
            >
              <Link to="/book">
                Book Your Event
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/10 font-medium tracking-wider uppercase"
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            subtitle="Our Services"
            title="Crafting Unforgettable Experiences"
            description="From concept to execution, we handle every aspect of your event with meticulous attention to detail and creative excellence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            subtitle="Our Portfolio"
            title="Featured Events"
            description="A glimpse into the extraordinary celebrations we've had the honor of creating."
          />

          <ImageGallery images={featuredImages} columns={3} />

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium tracking-wider uppercase"
            >
              <Link to="/portfolio">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            subtitle="Testimonials"
            title="Words from Our Clients"
            description="The greatest reward is seeing the joy on our clients' faces and hearing their stories."
          />

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </Layout>
  );
};

export default Index;
