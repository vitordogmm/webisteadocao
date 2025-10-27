import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Home, Phone, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedNavigation from "@/components/AnimatedNavigation";
import { useAnimation } from "@/contexts/AnimationContext";

const AdoptionSuccess = () => {
  const { reducedMotion } = useAnimation();
  
  // Mock data for adoption
  const adoptionData = {
    animalName: "Thor",
    shelterName: "Abrigo Amor aos Animais",
    shelterContact: {
      phone: "(11) 99999-9999",
      email: "contato@abrigodoamor.com.br"
    },
    nextSteps: [
      "Aguarde o contato do canil para agendar visita",
      "Prepare sua casa para a chegada do novo membro",
      "Reúna documentos necessários para finalizar adoção"
    ]
  };

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

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatedNavigation />
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.2
            }}
            className="flex justify-center mb-6"
          >
            <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center dark:bg-green-900">
              <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-300" />
            </div>
          </motion.div>
          
          <h1 className="text-4xl font-bold mb-4 text-foreground">Adoção Solicitada com Sucesso!</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Parabéns! Você deu o primeiro passo para transformar a vida de {adoptionData.animalName}.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Próximos Passos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {adoptionData.nextSteps.map((step, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                    >
                      <div className="bg-blue-100 p-2 rounded-full mr-3 mt-0.5 dark:bg-blue-900">
                        <span className="text-blue-600 font-bold text-sm dark:text-blue-300">{index + 1}</span>
                      </div>
                      <span className="text-foreground">{step}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-foreground">Contato com o Canil</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  O {adoptionData.shelterName} entrará em contato em breve para dar continuidade ao processo de adoção.
                </p>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-gray-500" />
                    <span>{adoptionData.shelterContact.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-gray-500" />
                    <span>{adoptionData.shelterContact.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <motion.div
                variants={!reducedMotion ? buttonVariants : {}}
                whileHover={!reducedMotion ? "hover" : {}}
                whileTap={!reducedMotion ? "tap" : {}}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/adopter-dashboard">
                    Ver Minhas Adoções
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <motion.div
                variants={!reducedMotion ? buttonVariants : {}}
                whileHover={!reducedMotion ? "hover" : {}}
                whileTap={!reducedMotion ? "tap" : {}}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Button asChild size="lg" variant="outline">
                  <Link to="/catalog">
                    Adotar Outro Animal
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdoptionSuccess;