import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAnimation } from "@/contexts/AnimationContext";

const AnimatedHero = () => {
  const { reducedMotion } = useAnimation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 dark:text-white"
            variants={itemVariants}
          >
            Encontre seu novo melhor amigo
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto dark:text-gray-300"
            variants={itemVariants}
          >
            Conectamos animais em situação de abandono com famílias amorosas. Adote, não compre.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.div
              variants={!reducedMotion ? buttonVariants : {}}
              whileHover={!reducedMotion ? "hover" : {}}
              whileTap={!reducedMotion ? "tap" : {}}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/catalog">Ver Animais Disponíveis</Link>
              </Button>
            </motion.div>
            
            <motion.div
              variants={!reducedMotion ? buttonVariants : {}}
              whileHover={!reducedMotion ? "hover" : {}}
              whileTap={!reducedMotion ? "tap" : {}}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button asChild size="lg" variant="outline">
                <Link to="/how-to-adopt">Como Adotar</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedHero;