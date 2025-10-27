import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, FileText, HeartHandshake, Home, Phone, UserCheck, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedNavigation from "@/components/AnimatedNavigation";
import { useAnimation } from "@/contexts/AnimationContext";

const HowToAdopt = () => {
  const { reducedMotion } = useAnimation();
  
  const steps = [
    {
      id: 1,
      icon: <UserCheck className="h-8 w-8" />,
      title: "Cadastro no Site",
      description: "Crie uma conta como adotante preenchendo seus dados pessoais e informações sobre seu estilo de vida."
    },
    {
      id: 2,
      icon: <HeartHandshake className="h-8 w-8" />,
      title: "Procure por um Animal",
      description: "Navegue pelo nosso catálogo e encontre o animal que combina com seu perfil e estilo de vida."
    },
    {
      id: 3,
      icon: <FileText className="h-8 w-8" />,
      title: "Manifeste Interesse",
      description: "Clique em 'Quero Adotar' no perfil do animal e preencha o formulário de interesse."
    },
    {
      id: 4,
      icon: <Phone className="h-8 w-8" />,
      title: "Contato com o Canil",
      description: "O canil responsável será notificado e entrará em contato para conversar sobre o processo."
    },
    {
      id: 5,
      icon: <Home className="h-8 w-8" />,
      title: "Visita ao Canil",
      description: "Agende uma visita para conhecer o animal pessoalmente e conhecer as instalações do canil."
    },
    {
      id: 6,
      icon: <HeartHandshake className="h-8 w-8" />,
      title: "Finalização da Adoção",
      description: "Após aprovação, finalize o processo de adoção e leve seu novo amigo para casa!"
    }
  ];

  const requirements = [
    "Maior de 18 anos",
    "Documento de identidade válido",
    "Comprovante de residência",
    "Comprovante de renda",
    "Termo de responsabilidade",
    "Compromisso com os cuidados necessários"
  ];

  const documents = [
    "RG ou CNH",
    "Comprovante de residência (água, luz ou telefone)",
    "Comprovante de renda (contracheque, extrato bancário)",
    "Documento do(a) cônjuge ou companheiro(a), se aplicável"
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
        className="absolute top-20 left-10 opacity-10"
        initial="hidden"
        animate="visible"
        variants={!reducedMotion ? pawPrintVariants : {}}
        transition={{ delay: 0.2 }}
      >
        <PawPrint className="w-12 h-12 text-primary" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-20 opacity-10"
        initial="hidden"
        animate="visible"
        variants={!reducedMotion ? pawPrintVariants : {}}
        transition={{ delay: 0.4 }}
      >
        <PawPrint className="w-16 h-16 text-primary" />
      </motion.div>
      
      <AnimatedNavigation />
      <div className="container mx-auto px-4 py-12 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-foreground">Como Adotar</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Adotar um animal é um ato de amor que transforma vidas. Conheça o passo a passo para adotar seu novo amigo.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Passo a Passo</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
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
                      {step.icon}
                    </div>
                    <CardTitle className="text-xl text-foreground">0{step.id}. {step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <Separator className="my-12" />

        {/* Requirements */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Requisitos para Adoção</h2>
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
                    Requisitos Gerais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {requirements.map((req, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-foreground">{req}</span>
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
                    <FileText className="h-6 w-6 mr-2 text-blue-500" />
                    Documentos Necessários
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {documents.map((doc, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <FileText className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-foreground">{doc}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>

        <Separator className="my-12" />

        {/* Additional Info */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Informações Importantes</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="text-foreground">Compromissos Pós-Adoção</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-foreground">
                    Após a adoção, você assume o compromisso de cuidar do animal por toda a sua vida, 
                    proporcionando amor, cuidados veterinários, alimentação adequada e um lar seguro.
                  </p>
                  <p className="text-foreground">
                    O canil pode fazer visitas de acompanhamento para garantir o bem-estar do animal.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="text-foreground">Direitos e Responsabilidades</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-foreground">
                    Você tem o direito de receber informações verdadeiras sobre o histórico do animal, 
                    incluindo saúde, comportamento e necessidades especiais.
                  </p>
                  <p className="text-foreground">
                    Você deve comprometer-se a não abandonar o animal e a procurar ajuda profissional 
                    sempre que necessário.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-foreground">Pronto para Adotar?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto dark:text-gray-300">
            Junte-se a milhares de pessoas que já transformaram suas vidas ao adotar um animal.
          </p>
          <motion.div
            whileHover={!reducedMotion ? { scale: 1.05 } : {}}
            whileTap={!reducedMotion ? { scale: 0.95 } : {}}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 relative">
              <Link to="/catalog">
                Ver Animais Disponíveis
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

export default HowToAdopt;