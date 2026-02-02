import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import ImageGallery from "@/components/shared/ImageGallery";
import CTABanner from "@/components/shared/CTABanner";

const categories = ["All", "Weddings", "Corporate", "Private Parties", "Destination"];

const allImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", alt: "Elegant wedding reception", category: "Weddings" },
  { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", alt: "Romantic wedding venue", category: "Weddings" },
  { id: 3, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80", alt: "Beach wedding setup", category: "Weddings" },
  { id: 4, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", alt: "Corporate conference", category: "Corporate" },
  { id: 5, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", alt: "Corporate gala event", category: "Corporate" },
  { id: 6, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80", alt: "Business meeting setup", category: "Corporate" },
  { id: 7, src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80", alt: "Birthday celebration", category: "Private Parties" },
  { id: 8, src: "https://images.unsplash.com/photo-1496843916299-590492c751f4?w=800&q=80", alt: "Anniversary party", category: "Private Parties" },
  { id: 9, src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80", alt: "Private celebration", category: "Private Parties" },
  { id: 10, src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80", alt: "Destination wedding", category: "Destination" },
  { id: 11, src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800&q=80", alt: "Tropical event venue", category: "Destination" },
  { id: 12, src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80", alt: "Scenic destination event", category: "Destination" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredImages = activeCategory === "All"
    ? allImages
    : allImages.filter((img) => img.category === activeCategory);

  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80"
            alt="Portfolio showcase"
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
              Our Portfolio
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Captured <span className="text-primary">Moments</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Explore our collection of extraordinary events, each one a testament to our dedication to perfection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleCount(9);
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium tracking-wider uppercase transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <ImageGallery images={visibleImages} columns={3} />

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={loadMore}
                className="px-8 py-3 border border-primary text-primary rounded-md font-medium tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Want Your Event Featured Here?"
        subtitle="Let's create something extraordinary that will inspire others."
        buttonText="Book Your Event"
        buttonLink="/book"
      />
    </Layout>
  );
};

export default Portfolio;
