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
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Pronto para fazer a diferença?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram suas vidas ao adotar um animal.
          </p>
          
          <motion.div
            variants={!reducedMotion ? buttonVariants : {}}
            whileHover={!reducedMotion ? "hover" : {}}
            whileTap={!reducedMotion ? "tap" : {}}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/catalog">Ver Animais Disponíveis</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedCTA;