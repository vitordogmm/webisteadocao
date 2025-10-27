import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAnimation } from "@/contexts/AnimationContext";

const AnimatedHowItWorks = () => {
  const { reducedMotion } = useAnimation();
  
  const steps = [
    {
      id: 1,
      title: "Procure",
      description: "Navegue pelo nosso catálogo de animais disponíveis para adoção"
    },
    {
      id: 2,
      title: "Conecte-se",
      description: "Entre em contato diretamente com o canil responsável"
    },
    {
      id: 3,
      title: "Conheça",
      description: "Agende uma visita para conhecer o animal pessoalmente"
    },
    {
      id: 4,
      title: "Adote",
      description: "Complete o processo de adoção e leve seu novo amigo para casa"
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

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Como Funciona</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Adotar um animal é simples e gratificante. Veja como é fácil encontrar seu novo amigo:
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              whileHover={!reducedMotion ? { y: -10 } : {}}
              transition={{ duration: 0.3 }}
            >
              <Card className="text-center bg-background">
                <CardHeader>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-blue-900">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">{step.id}</span>
                  </div>
                  <CardTitle className="text-xl text-gray-800 dark:text-white">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedHowItWorks;