import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, PawPrint } from "lucide-react";
import { useAnimation } from "@/contexts/AnimationContext";

const AnimatedStats = () => {
  const { reducedMotion } = useAnimation();
  
  const stats = [
    {
      icon: Heart,
      value: 1248,
      label: "Animais Adotados",
      color: "text-red-500"
    },
    {
      icon: Users,
      value: 86,
      label: "Canis Parceiros",
      color: "text-blue-500"
    },
    {
      icon: PawPrint,
      value: 324,
      label: "Animais Disponíveis",
      color: "text-green-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
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

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={!reducedMotion ? { y: -10 } : {}}
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center bg-background">
                  <CardHeader>
                    <CardTitle className="flex flex-col items-center">
                      <motion.div
                        variants={!reducedMotion ? iconVariants : {}}
                        transition={{ delay: index * 0.2 }}
                      >
                        <Icon className={`h-12 w-12 ${stat.color} mb-4`} />
                      </motion.div>
                      <motion.span 
                        className="text-3xl font-bold text-gray-800 dark:text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.2 }}
                      >
                        {stat.value}
                      </motion.span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedStats;