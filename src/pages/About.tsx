import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Heart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";

const values = [
  {
    icon: Sparkles,
    title: "Elegance",
    description: "Every detail is thoughtfully curated to create an atmosphere of refined sophistication and timeless beauty.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Meticulous planning and flawless execution ensure your event unfolds seamlessly from start to finish.",
  },
  {
    icon: Heart,
    title: "Emotion",
    description: "We believe in creating moments that touch the heart and leave lasting impressions on every guest.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80"
            alt="Elegant event venue"
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
              About The Vaow
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Story of <span className="text-primary">Excellence</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              For over 15 years, we've been transforming dreams into reality, one extraordinary event at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">
                Our Philosophy
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Where Vision Meets Perfection
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The Vaow was born from a passion for creating extraordinary moments. We believe that every 
                celebration deserves to be exceptional—a reflection of your unique story, executed with 
                precision and artistry.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our team of dedicated professionals brings together decades of experience in event planning, 
                design, and hospitality. We don't just plan events; we craft experiences that resonate 
                with emotion and leave lasting impressions.
              </p>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wider uppercase group"
              >
                <Link to="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Founder of The Vaow"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-6 max-w-xs">
                <p className="font-serif text-lg italic text-foreground mb-2">
                  "Excellence is not a destination, it's a continuous journey."
                </p>
                <p className="text-primary text-sm font-medium">— The Vaow Founder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            subtitle="Our Values"
            title="What Guides Us"
            description="Three pillars that define our approach to creating unforgettable experiences."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-8 md:p-10"
            >
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To transform life's most meaningful moments into extraordinary celebrations. 
                We are committed to delivering unparalleled service, creative excellence, 
                and meticulous attention to detail that exceeds expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-8 md:p-10"
            >
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the world's most trusted name in luxury event management, setting 
                the standard for elegance, innovation, and client satisfaction. We envision 
                a world where every celebration is a masterpiece.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            subtitle="Our Team"
            title="Meet the Experts"
            description="Passionate professionals dedicated to making your vision a reality."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alexandra Chen", role: "Founder & Creative Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
              { name: "Marcus Williams", role: "Head of Operations", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
              { name: "Sophia Laurent", role: "Lead Event Designer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
              { name: "James Porter", role: "Client Relations Manager", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="font-serif text-xl font-semibold text-foreground">
                  {member.name}
                </h4>
                <p className="text-primary text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Let's Create Something Beautiful Together"
        subtitle="Ready to start planning your dream event? Our team is here to bring your vision to life."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </Layout>
  );
};

export default About;
