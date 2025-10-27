import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, MapPin, Calendar, Ruler, VenetianMask, Phone, Mail, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedNavigation from "@/components/AnimatedNavigation";
import { useAnimation } from "@/contexts/AnimationContext";

const AnimalProfile = () => {
  const { reducedMotion } = useAnimation();
  
  // Mock data for animal
  const animal = {
    id: 1,
    name: "Thor",
    species: "Cachorro",
    breed: "Vira-lata",
    age: "2 anos",
    size: "Médio",
    gender: "Macho",
    weight: "18 kg",
    location: "São Paulo, SP",
    description: "Thor é um cachorrinho brincalhão e muito carinhoso. Adora brincar de bolinha e fazer companhia. É muito inteligente e aprende rápido. Procura uma família ativa que possa dar muito amor e carinho.",
    personality: ["Brincalhão", "Carinhoso", "Inteligente", "Leal", "Ativo"],
    health: ["Vacinado", "Vermifugado", "Castrado"],
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400"
    ],
    shelter: {
      id: 1,
      name: "Abrigo Amor aos Animais",
      location: "São Paulo, SP",
      phone: "(11) 99999-9999",
      email: "contato@abrigodoamor.com.br"
    }
  };

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

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const pawPrintVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 0.1,
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
        className="absolute top-20 right-20 opacity-10"
        initial="hidden"
        animate="visible"
        variants={!reducedMotion ? pawPrintVariants : {}}
        transition={{ delay: 0.2 }}
      >
        <PawPrint className="w-16 h-16 text-primary" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 left-10 opacity-10"
        initial="hidden"
        animate="visible"
        variants={!reducedMotion ? pawPrintVariants : {}}
        transition={{ delay: 0.4 }}
      >
        <PawPrint className="w-12 h-12 text-primary" />
      </motion.div>
      
      <AnimatedNavigation />
      <div className="container mx-auto px-4 py-8 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">Perfil do Animal</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Conheça mais sobre {animal.name}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Animal Images */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-background overflow-hidden">
              <CardContent className="p-0">
                <motion.div
                  className="overflow-hidden rounded-t-lg"
                  variants={!reducedMotion ? imageVariants : {}}
                  whileHover={!reducedMotion ? "hover" : {}}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={animal.images[0]} 
                    alt={animal.name} 
                    className="w-full h-96 object-cover"
                  />
                </motion.div>
              </CardContent>
            </Card>
            
            <motion.div 
              className="grid grid-cols-3 gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {animal.images.slice(1).map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={!reducedMotion ? { y: -5 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-background overflow-hidden">
                    <CardContent className="p-0">
                      <motion.div
                        variants={!reducedMotion ? imageVariants : {}}
                        whileHover={!reducedMotion ? "hover" : {}}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={image} 
                          alt={`${animal.name} ${index + 2}`} 
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Animal Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="mb-6 bg-background">
              <CardHeader>
                <motion.div 
                  className="flex justify-between items-start"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div>
                    <h1 className="text-3xl font-bold text-foreground">{animal.name}</h1>
                    <p className="text-gray-600 dark:text-gray-300">{animal.breed}</p>
                  </div>
                  <motion.div
                    whileHover={!reducedMotion ? { scale: 1.2 } : {}}
                    whileTap={!reducedMotion ? { scale: 0.9 } : {}}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Button variant="ghost" size="icon">
                      <Heart className="h-6 w-6" />
                    </Button>
                  </motion.div>
                </motion.div>
              </CardHeader>
              <CardContent>
                <motion.div 
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={itemVariants} className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{animal.age}</span>
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex items-center text-gray-600 dark:text-gray-300">
                    <Ruler className="h-5 w-5 mr-2" />
                    <span>{animal.size} • {animal.weight}</span>
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex items-center text-gray-600 dark:text-gray-300">
                    <VenetianMask className="h-5 w-5 mr-2" />
                    <span>{animal.gender}</span>
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{animal.location}</span>
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <Separator className="my-4" />
                  
                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <h3 className="font-semibold mb-2 text-foreground">Personalidade</h3>
                    <div className="flex flex-wrap gap-2">
                      {animal.personality.map((trait, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                          whileHover={!reducedMotion ? { y: -3 } : {}}
                        >
                          <Badge variant="secondary">{trait}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <h3 className="font-semibold mb-2 text-foreground">Saúde</h3>
                    <div className="flex flex-wrap gap-2">
                      {animal.health.map((status, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
                          whileHover={!reducedMotion ? { y: -3 } : {}}
                        >
                          <Badge variant="outline">{status}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="flex flex-col gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <motion.div
                      variants={!reducedMotion ? buttonVariants : {}}
                      whileHover={!reducedMotion ? "hover" : {}}
                      whileTap={!reducedMotion ? "tap" : {}}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Button className="w-full mb-2 bg-primary hover:bg-primary/90 relative">
                        Quero Adotar
                        <motion.div 
                          className="absolute -top-2 -right-2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1.7, type: "spring" }}
                        >
                          <PawPrint className="w-5 h-5 text-white" />
                        </motion.div>
                      </Button>
                    </motion.div>
                    <motion.div
                      variants={!reducedMotion ? buttonVariants : {}}
                      whileHover={!reducedMotion ? "hover" : {}}
                      whileTap={!reducedMotion ? "tap" : {}}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Button variant="outline" className="w-full">
                        Salvar Animal
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
            
            {/* Shelter Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center">
                    <PawPrint className="h-5 w-5 mr-2" />
                    Canil Responsável
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{animal.shelter.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{animal.shelter.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>{animal.shelter.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>{animal.shelter.email}</span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                    whileTap={!reducedMotion ? { scale: 0.95 } : {}}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="mt-4"
                  >
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/shelter/${animal.shelter.id}`}>Ver Perfil do Canil</Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animal Description */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.9 }}
        >
          <Card className="bg-background">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <PawPrint className="h-5 w-5 mr-2" />
                Sobre {animal.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.p 
                className="text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.1 }}
              >
                {animal.description}
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimalProfile;