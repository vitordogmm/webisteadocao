import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Users, Target, Eye, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedNavigation from "@/components/AnimatedNavigation";
import { useAnimation } from "@/contexts/AnimationContext";

const About = () => {
  const { reducedMotion } = useAnimation();
  
  const teamMembers = [
    {
      name: "Ana Silva",
      role: "Fundadora",
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      name: "Carlos Oliveira",
      role: "Diretor de Tecnologia",
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      name: "Mariana Costa",
      role: "Diretora de Parcerias",
      image: "/placeholder.svg?height=200&width=200"
    }
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
        className="absolute top-40 left-10 opacity-10"
        initial="hidden"
        animate="visible"
        variants={!reducedMotion ? pawPrintVariants : {}}
        transition={{ delay: 0.2 }}
      >
        <PawPrint className="w-12 h-12 text-primary" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-60 right-20 opacity-10"
        initial="hidden"
        animate="visible"
        variants={!reducedMotion ? pawPrintVariants : {}}
        transition={{ delay: 0.4 }}
      >
        <PawPrint className="w-16 h-16 text-primary" />
      </motion.div>
      
      <AnimatedNavigation />
      <div className="container mx-auto px-4 py-12 relative">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-foreground">Sobre Nós</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Conectando animais em situação de abandono com famílias amorosas desde 2023.
          </p>
        </motion.div>

        {/* Mission and Vision */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            whileHover={!reducedMotion ? { y: -10 } : {}}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-background relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <PawPrint className="w-8 h-8 text-primary" />
              </div>
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 dark:bg-blue-900">
                  <Heart className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                </div>
                <CardTitle className="text-2xl text-foreground">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Facilitar o processo de adoção de animais em situação de abandono, conectando-os 
                  com famílias responsáveis e amorosas.
                </p>
                <p className="text-foreground">
                  Promovemos a conscientização sobre a importância da adoção responsável e o combate 
                  ao abandono animal.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={!reducedMotion ? { y: -10 } : {}}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-background relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <PawPrint className="w-8 h-8 text-primary" />
              </div>
              <CardHeader>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 dark:bg-green-900">
                  <Eye className="h-8 w-8 text-green-600 dark:text-green-300" />
                </div>
                <CardTitle className="text-2xl text-foreground">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Ser a maior plataforma de adoção de animais da América Latina, reconhecida pela 
                  eficácia em conectar animais e famílias.
                </p>
                <p className="text-foreground">
                  Trabalhamos para um mundo onde todos os animais tenham um lar amoroso e responsável.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <Separator className="my-12" />

        {/* Story */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Nossa História</h2>
          <motion.div
            whileHover={!reducedMotion ? { y: -5 } : {}}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-background">
              <CardContent className="p-8">
                <p className="text-foreground mb-4">
                  A plataforma nasceu em 2023 da necessidade de conectar animais em situação de abandono 
                  com famílias que desejam adotar. Nossa fundadora, Ana Silva, percebeu que muitos 
                  animais ficavam por anos esperando por um lar devido à falta de visibilidade dos 
                  canis e abrigos.
                </p>
                <p className="text-foreground mb-4">
                  Com o objetivo de resolver esse problema, reunimos um time de desenvolvedores, 
                  designers e especialistas em bem-estar animal para criar uma plataforma que 
                  simplificasse o processo de adoção, tornando-o mais acessível e eficiente para 
                  todos os envolvidos.
                </p>
                <p className="text-foreground">
                  Hoje, já conectamos milhares de animais a famílias amorosas e continuamos 
                  crescendo para alcançar ainda mais vidas.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <Separator className="my-12" />

        {/* Values */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Nossos Valores</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Compaixão",
                description: "Agimos com empatia e cuidado em todas as nossas ações, priorizando o bem-estar dos animais.",
                color: "bg-purple-100 dark:bg-purple-900"
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Responsabilidade",
                description: "Comprometemo-nos com a transparência e a ética em todas as nossas relações.",
                color: "bg-yellow-100 dark:bg-yellow-900"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Comunidade",
                description: "Acreditamos no poder da colaboração e na construção de uma comunidade solidária.",
                color: "bg-red-100 dark:bg-red-900"
              }
            ].map((value, index) => (
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
                    <div className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      {value.icon}
                    </div>
                    <CardTitle className="text-foreground">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <Separator className="my-12" />

        {/* Team */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Nossa Equipe</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={!reducedMotion ? { y: -10 } : {}}
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center bg-background">
                  <CardHeader>
                    <motion.div
                      whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                      />
                    </motion.div>
                    <CardTitle className="text-foreground">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-foreground">Junte-se a Nós</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto dark:text-gray-300">
            Seja um adotante responsável ou cadastre seu canil para ajudar mais animais a encontrarem lares.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={!reducedMotion ? { scale: 1.05 } : {}}
              whileTap={!reducedMotion ? { scale: 0.95 } : {}}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 relative">
                <Link to="/catalog">
                  Adotar um Animal
                  <motion.div 
                    className="absolute -top-2 -right-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, type: "spring" }}
                  >
                    <PawPrint className="w-5 h-5 text-white" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={!reducedMotion ? { scale: 1.05 } : {}}
              whileTap={!reducedMotion ? { scale: 0.95 } : {}}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button asChild size="lg" variant="outline">
                <Link to="/for-shelters">Cadastrar Canil</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;