import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Globe, Users, Calendar, Heart, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedNavigation from "@/components/AnimatedNavigation";
import { useAnimation } from "@/contexts/AnimationContext";

const ShelterProfile = () => {
  const { reducedMotion } = useAnimation();
  
  // Mock data for shelter
  const shelter = {
    id: 1,
    name: "Abrigo Amor aos Animais",
    description: "O Abrigo Amor aos Animais é uma organização sem fins lucrativos dedicada ao resgate e reabilitação de animais abandonados. Fundado em 2010, já ajudamos mais de 2000 animais a encontrar lares amorosos.",
    mission: "Nossa missão é resgatar animais em situação de abandono, proporcionar cuidados veterinários adequados e encontrar famílias responsáveis e amorosas para cada um deles.",
    location: "São Paulo, SP",
    address: "Rua dos Animais, 123 - Vila Mascote",
    phone: "(11) 99999-9999",
    email: "contato@abrigodoamor.com.br",
    website: "www.abrigodoamor.com.br",
    socialMedia: {
      facebook: "abrigodoamor",
      instagram: "abrigodoamor",
      whatsapp: "(11) 99999-9999"
    },
    founded: "2010",
    animalsAdopted: 2156,
    animalsAvailable: 42,
    images: [
      "/placeholder.svg?height=300&width=600",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300"
    ]
  };

  // Mock data for animals
  const animals = [
    {
      id: 1,
      name: "Thor",
      species: "Cachorro",
      breed: "Vira-lata",
      age: "2 anos",
      size: "Médio",
      gender: "Macho",
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      id: 2,
      name: "Luna",
      species: "Gato",
      breed: "Siamês",
      age: "1 ano",
      size: "Pequeno",
      gender: "Fêmea",
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      id: 3,
      name: "Bidu",
      species: "Cachorro",
      breed: "Beagle",
      age: "4 anos",
      size: "Médio",
      gender: "Macho",
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
        className="absolute top-32 right-20 opacity-10"
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
        {/* Shelter Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-8 bg-background overflow-hidden">
            <CardContent className="p-0">
              <motion.div
                className="overflow-hidden rounded-t-lg"
                variants={!reducedMotion ? imageVariants : {}}
                whileHover={!reducedMotion ? "hover" : {}}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={shelter.images[0]} 
                  alt={shelter.name} 
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shelter Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="mb-8 bg-background">
                <CardHeader>
                  <h1 className="text-3xl font-bold text-foreground">{shelter.name}</h1>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4 text-foreground">Sobre Nós</h2>
                      <motion.p 
                        className="text-foreground mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {shelter.description}
                      </motion.p>
                      <h3 className="font-semibold mb-2 text-foreground">Missão</h3>
                      <motion.p 
                        className="text-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {shelter.mission}
                      </motion.p>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <h2 className="text-xl font-semibold mb-4 text-foreground">Informações de Contato</h2>
                      <div className="space-y-3">
                        <div className="flex items-center text-foreground">
                          <MapPin className="h-5 w-5 mr-3 text-gray-500" />
                          <div>
                            <p>{shelter.address}</p>
                            <p>{shelter.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center text-foreground">
                          <Phone className="h-5 w-5 mr-3 text-gray-500" />
                          <span>{shelter.phone}</span>
                        </div>
                        <div className="flex items-center text-foreground">
                          <Mail className="h-5 w-5 mr-3 text-gray-500" />
                          <span>{shelter.email}</span>
                        </div>
                        <div className="flex items-center text-foreground">
                          <Globe className="h-5 w-5 mr-3 text-gray-500" />
                          <span>{shelter.website}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Shelter Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  whileHover={!reducedMotion ? { y: -10 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-background">
                    <CardContent className="p-6 text-center">
                      <Users className="h-10 w-10 mx-auto text-primary mb-2" />
                      <p className="text-2xl font-bold text-foreground">{shelter.animalsAdopted}</p>
                      <p className="text-gray-600 dark:text-gray-300">Animais Adotados</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  whileHover={!reducedMotion ? { y: -10 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-background">
                    <CardContent className="p-6 text-center">
                      <Calendar className="h-10 w-10 mx-auto text-primary mb-2" />
                      <p className="text-2xl font-bold text-foreground">{shelter.founded}</p>
                      <p className="text-gray-600 dark:text-gray-300">Ano de Fundação</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  whileHover={!reducedMotion ? { y: -10 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-background">
                    <CardContent className="p-6 text-center">
                      <Heart className="h-10 w-10 mx-auto text-primary mb-2" />
                      <p className="text-2xl font-bold text-foreground">{shelter.animalsAvailable}</p>
                      <p className="text-gray-600 dark:text-gray-300">Animais Disponíveis</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Animals Available */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Animais Disponíveis</h2>
                  <motion.div
                    variants={!reducedMotion ? buttonVariants : {}}
                    whileHover={!reducedMotion ? "hover" : {}}
                    whileTap={!reducedMotion ? "tap" : {}}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Button variant="outline">Ver Todos</Button>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {animals.map((animal, index) => (
                    <motion.div
                      key={animal.id}
                      variants={itemVariants}
                      whileHover={!reducedMotion ? { y: -5 } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="bg-background">
                        <CardHeader className="p-0">
                          <motion.div
                            className="overflow-hidden rounded-t-lg"
                            variants={!reducedMotion ? imageVariants : {}}
                            whileHover={!reducedMotion ? "hover" : {}}
                            transition={{ duration: 0.3 }}
                          >
                            <img 
                              src={animal.image} 
                              alt={animal.name} 
                              className="w-full h-48 object-cover"
                            />
                          </motion.div>
                        </CardHeader>
                        <CardContent className="p-4">
                          <h3 className="text-xl font-bold text-foreground">{animal.name}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{animal.breed}</p>
                          <div className="flex justify-between mt-2">
                            <Badge variant="secondary">{animal.age}</Badge>
                            <Badge variant="secondary">{animal.size}</Badge>
                            <Badge variant="secondary">{animal.gender}</Badge>
                          </div>
                          <motion.div
                            variants={!reducedMotion ? buttonVariants : {}}
                            whileHover={!reducedMotion ? "hover" : {}}
                            whileTap={!reducedMotion ? "tap" : {}}
                            transition={{ type: "spring", stiffness: 400 }}
                            className="mt-4"
                          >
                            <Button asChild className="w-full bg-primary hover:bg-primary/90">
                              <Link to={`/animal/${animal.id}`}>Conhecer</Link>
                            </Button>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="mb-6 bg-background">
              <CardHeader>
                <CardTitle className="text-foreground">Galeria</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {shelter.images.slice(1).map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={!reducedMotion ? { y: -5 } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="bg-background overflow-hidden p-0">
                        <CardContent className="p-0">
                          <motion.div
                            variants={!reducedMotion ? imageVariants : {}}
                            whileHover={!reducedMotion ? "hover" : {}}
                            transition={{ duration: 0.3 }}
                          >
                            <img 
                              src={image} 
                              alt={`Galeria ${index + 1}`} 
                              className="w-full h-24 object-cover rounded"
                            />
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-foreground">Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <motion.div
                    variants={!reducedMotion ? buttonVariants : {}}
                    whileHover={!reducedMotion ? "hover" : {}}
                    whileTap={!reducedMotion ? "tap" : {}}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Button variant="outline" className="w-full justify-start">
                      <span className="font-medium">Facebook:</span> {shelter.socialMedia.facebook}
                    </Button>
                  </motion.div>
                  <motion.div
                    variants={!reducedMotion ? buttonVariants : {}}
                    whileHover={!reducedMotion ? "hover" : {}}
                    whileTap={!reducedMotion ? "tap" : {}}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Button variant="outline" className="w-full justify-start">
                      <span className="font-medium">Instagram:</span> @{shelter.socialMedia.instagram}
                    </Button>
                  </motion.div>
                  <motion.div
                    variants={!reducedMotion ? buttonVariants : {}}
                    whileHover={!reducedMotion ? "hover" : {}}
                    whileTap={!reducedMotion ? "tap" : {}}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Button variant="outline" className="w-full justify-start">
                      <span className="font-medium">WhatsApp:</span> {shelter.socialMedia.whatsapp}
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ShelterProfile;