import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Shield, Users, Heart, FileText, Calendar, MessageCircle, BarChart, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedNavigation from "@/components/AnimatedNavigation";
import { useAnimation } from "@/contexts/AnimationContext";

const ForShelters = () => {
  const { reducedMotion } = useAnimation();
  
  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Aumento de Visibilidade",
      description: "Amplie o alcance do seu canil e mostre seus animais para um público maior."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Mais Adoções",
      description: "Conecte seus animais com famílias amorosas de forma mais eficiente."
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Relatórios e Estatísticas",
      description: "Acompanhe métricas importantes sobre adoções e engajamento."
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Sistema de Mensagens",
      description: "Comunique-se diretamente com potenciais adotantes."
    }
  ];

  const features = [
    "Cadastro e gerenciamento de animais",
    "Sistema de solicitações de adoção",
    "Dashboard administrativo com estatísticas",
    "Página pública do canil personalizável",
    "Sistema de mensagens integrado",
    "Atualização de status dos animais",
    "Histórico de adoções realizadas"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
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

  const pawPrintVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 0.15,
      transition: { 
        type: "spring", 
        stiffness: 300
      }
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative paw prints */}
      <motion.div 
        className="absolute top-32 right-10 opacity-10"
        initial="hidden"
        animate="visible"
        variants={!reducedMotion ? pawPrintVariants : {}}
        transition={{ delay: 0.2 }}
      >
        <PawPrint className="w-16 h-16 text-primary" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 left-20 opacity-10"
        initial="hidden"
        animate="visible"
        variants={!reducedMotion ? pawPrintVariants : {}}
        transition={{ delay: 0.4 }}
      >
        <PawPrint className="w-12 h-12 text-primary" />
      </motion.div>
      
      <AnimatedNavigation />
      <div className="container mx-auto px-4 py-12 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-foreground">Para Canis e Abrigos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Conecte seus animais a famílias amorosas e simplifique o processo de adoção com nossa plataforma.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Benefícios da Plataforma</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={!reducedMotion ? { y: -10 } : {}}
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center bg-background relative overflow-hidden">
                  <div className="absolute top-2 right-2 opacity-10">
                    <PawPrint className="w-6 h-6 text-primary" />
                  </div>
                  <CardHeader>
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-blue-900">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-foreground">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <Separator className="my-12" />

        {/* Features */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Funcionalidades Disponíveis</h2>
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <CheckCircle className="h-6 w-6 mr-2 text-green-500" />
                    Para Gestão de Animais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {features.slice(0, 4).map((feature, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Shield className="h-6 w-6 mr-2 text-blue-500" />
                    Para Gestão de Adoções
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {features.slice(4).map((feature, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <Shield className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>

        <Separator className="my-12" />

        {/* Validation Process */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Processo de Validação</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                icon: <FileText className="h-8 w-8" />,
                title: "1. Inscrição",
                description: "Preencha o formulário de inscrição com dados da organização e documentos necessários."
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "2. Análise",
                description: "Nossa equipe analisa a documentação e pode agendar uma visita às instalações."
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "3. Aprovação",
                description: "Após aprovação, sua conta é ativada e você pode começar a cadastrar animais."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={!reducedMotion ? { y: -10 } : {}}
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center bg-background">
                  <CardHeader>
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-blue-900">
                      {step.icon}
                    </div>
                    <CardTitle className="text-foreground">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center bg-background rounded-xl p-8 shadow-md relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="absolute top-4 right-4 opacity-10">
            <PawPrint className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-foreground">Pronto para Começar?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto dark:text-gray-300">
            Junte-se à nossa comunidade de canis e abrigos comprometidos com o bem-estar animal.
          </p>
          <motion.div
            whileHover={!reducedMotion ? { scale: 1.05 } : {}}
            whileTap={!reducedMotion ? { scale: 0.95 } : {}}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 relative">
              <Link to="/canil-registration">
                Cadastre seu Canil
                <motion.div 
                  className="absolute -top-2 -right-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  <PawPrint className="w-5 h-5 text-white" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ForShelters;