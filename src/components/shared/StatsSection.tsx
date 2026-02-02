import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const StatItem = ({ value, suffix = "", label, delay = 0 }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(Math.round(stepValue * currentStep), value));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-muted-foreground text-sm md:text-base uppercase tracking-wider">
        {label}
      </p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-charcoal border-y border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatItem value={15} suffix="+" label="Years Experience" delay={0} />
          <StatItem value={500} suffix="+" label="Events Managed" delay={0.1} />
          <StatItem value={98} suffix="%" label="Happy Clients" delay={0.2} />
          <StatItem value={50} suffix="+" label="Expert Team" delay={0.3} />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
