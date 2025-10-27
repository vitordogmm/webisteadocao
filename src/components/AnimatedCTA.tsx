import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAnimation } from "@/contexts/AnimationContext";

const AnimatedCTA = () => {
  const { reducedMotion } = useAnimation();
  
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600">
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-10 animate-pulse"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 6 + 3}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Pronto para fazer a diferença?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Junte-se a milhares de pessoas que já transformaram suas vidas ao adotar um animal.
          </p>
          
          <motion.div
            variants={!reducedMotion ? buttonVariants : {}}
            whileHover={!reducedMotion ? "hover" : {}}
            whileTap={!reducedMotion ? "tap" : {}}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100 border-2 border-white hover:border-gray-100 shadow-lg hover:shadow-white/25">
              <Link to="/catalog">Ver Animais Disponíveis</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedCTA;