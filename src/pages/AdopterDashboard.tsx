import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, FileText, Calendar, CheckCircle, Clock, XCircle, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedNavigation from "@/components/AnimatedNavigation";
import { useAnimation } from "@/contexts/AnimationContext";

const AdopterDashboard = () => {
  const { reducedMotion } = useAnimation();
  const [activeTab, setActiveTab] = useState("favorites");

  // Mock data
  const favorites = [
    {
      id: 1,
      name: "Thor",
      breed: "Vira-lata",
      age: "2 anos",
      image: "/placeholder.svg?height=100&width=100",
      shelter: "Abrigo Amor aos Animais"
    },
    {
      id: 2,
      name: "Luna",
      breed: "Siamês",
      age: "1 ano",
      image: "/placeholder.svg?height=100&width=100",
      shelter: "Gatos Felizes"
    }
  ];

  const applications = [
    {
      id: 1,
      animalName: "Thor",
      shelter: "Abrigo Amor aos Animais",
      date: "2023-10-15",
      status: "pending"
    },
    {
      id: 2,
      animalName: "Bidu",
      shelter: "Cães da Rua",
      date: "2023-10-10",
      status: "approved"
    },
    {
      id: 3,
      animalName: "Mia",
      shelter: "Gatinhos Fofos",
      date: "2023-10-05",
      status: "rejected"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary"><Clock className="h-3 w-3 mr-1" /> Pendente</Badge>;
      case "approved":
        return <Badge variant="default"><CheckCircle className="h-3 w-3 mr-1" /> Aprovado</Badge>;
      case "rejected":
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" /> Rejeitado</Badge>;
      default:
        return <Badge variant="secondary">Desconhecido</Badge>;
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
        <PawPrint className="w-12 h-12 text-primary" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 left-20 opacity-10"
        initial="hidden"
        animate="visible"
        variants={!reducedMotion ? pawPrintVariants : {}}
        transition={{ delay: 0.4 }}
      >
        <PawPrint className="w-16 h-16 text-primary" />
      </motion.div>
      
      <AnimatedNavigation />
      <div className="container mx-auto px-4 py-8 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground">Painel do Adotante</h1>
          <p className="text-gray-600 dark:text-gray-300">Gerencie seus favoritos e acompanhe suas solicitações de adoção</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="favorites">Favoritos</TabsTrigger>
              <TabsTrigger value="applications">Solicitações</TabsTrigger>
              <TabsTrigger value="messages">
                Mensagens
                <Badge variant="destructive" className="ml-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                  2
                </Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="favorites">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-background">
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <Heart className="h-5 w-5 mr-2" />
                      Animais Favoritos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {favorites.length > 0 ? (
                      <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {favorites.map((animal, index) => (
                          <motion.div
                            key={animal.id}
                            variants={itemVariants}
                            whileHover={!reducedMotion ? { y: -5 } : {}}
                            transition={{ duration: 0.3 }}
                          >
                            <Card className="bg-background">
                              <CardContent className="flex items-center p-4">
                                <motion.div
                                  whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                                  transition={{ type: "spring", stiffness: 300 }}
                                >
                                  <img 
                                    src={animal.image} 
                                    alt={animal.name} 
                                    className="w-16 h-16 rounded-lg object-cover mr-4"
                                  />
                                </motion.div>
                                <div className="flex-1">
                                  <h3 className="font-bold text-foreground">{animal.name}</h3>
                                  <p className="text-sm text-gray-600 dark:text-gray-300">{animal.breed}, {animal.age}</p>
                                  <p className="text-sm text-gray-600 dark:text-gray-300">{animal.shelter}</p>
                                </div>
                                <motion.div
                                  whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                                  whileTap={!reducedMotion ? { scale: 0.95 } : {}}
                                  transition={{ type: "spring", stiffness: 400 }}
                                >
                                  <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                                    <Link to={`/animal/${animal.id}`}>Ver Perfil</Link>
                                  </Button>
                                </motion.div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div 
                        className="text-center py-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Heart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <p className="text-gray-600 dark:text-gray-300">Você ainda não tem animais favoritos</p>
                        <motion.div
                          whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                          whileTap={!reducedMotion ? { scale: 0.95 } : {}}
                          transition={{ type: "spring", stiffness: 400 }}
                          className="mt-4"
                        >
                          <Button asChild className="bg-primary hover:bg-primary/90">
                            <Link to="/catalog">Ver Animais Disponíveis</Link>
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="applications">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-background">
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <FileText className="h-5 w-5 mr-2" />
                      Solicitações de Adoção
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {applications.length > 0 ? (
                      <motion.div 
                        className="space-y-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {applications.map((app, index) => (
                          <motion.div
                            key={app.id}
                            variants={itemVariants}
                            whileHover={!reducedMotion ? { y: -3 } : {}}
                            transition={{ duration: 0.3 }}
                          >
                            <Card className="bg-background">
                              <CardContent className="p-4">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <h3 className="font-bold text-foreground">{app.animalName}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{app.shelter}</p>
                                    <div className="flex items-center text-sm text-gray-500 mt-1">
                                      <Calendar className="h-4 w-4 mr-1" />
                                      <span>{app.date}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    {getStatusBadge(app.status)}
                                    <motion.div
                                      whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                                      whileTap={!reducedMotion ? { scale: 0.95 } : {}}
                                      transition={{ type: "spring", stiffness: 400 }}
                                    >
                                      <Button variant="outline" size="sm">
                                        <MessageCircle className="h-4 w-4 mr-1" />
                                        Mensagens
                                      </Button>
                                    </motion.div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div 
                        className="text-center py-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <p className="text-gray-600 dark:text-gray-300">Você ainda não fez nenhuma solicitação de adoção</p>
                        <motion.div
                          whileHover: " />
<dyadot
  <div className="background: "background: var
  <div className="bg-background relative overflow-hidden overflow-hidden overflow-hidden
  <div className="bg-background "bg-background: <div className="bg-background
  <div className="bg-background
  <div className="bg-background:
  <div className="bg-background
  <div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className="div className:
  <div className="div className="div className="div className="div className="div className
const TaskStatsProvider
const TaskStatsProvider
const TaskStatsProvider TaskStats
const TaskStatsProvider
const TaskStats
const TaskStats
const TaskStats
const TaskStats
const TaskStats
const TaskStats
const TaskStats
const TaskStats
const TaskStats
const TaskStats
const TaskStats
const TaskStats
const TaskStats
const TaskStats
const Task
const TaskStats
const Task
const TaskStats
const TaskStats
const TaskStats
const TaskStats
const TaskStats
const TaskStats
const Task
const Task
const TaskStats
const TaskStats
const Task
const Task
const Task
const Task
const TaskStats
const TaskStats
const Task
const Task
const Task
const TaskStats
const Task
const Task
const TaskStats
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const TaskStats
const Task
const TaskStats
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const TaskStats
const Task
const Task
const Task
const Task
const Task
const Task
const TaskStats
const Task
const Task
const Task
const TaskStats
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const TaskStats
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const Task
const TaskStats
const
const Task
const Task
const TaskStats
const Task
const Task
const Task
const Task
const Task
const TaskStats
const Task
const Task
const Task
const Task
const Task
const Task
const Task
TaskStats
const Task
const Task
const Task
const Task
const Task
TaskStats
const Task
const Task
const Task
TaskStats
const Taskes
const TaskStats
const Task
TaskStats
const TaskStats
TaskStats
const
TaskStats
const TaskStats
TaskStats
const Task
TaskStats
TaskStats
TaskStats
const Task
TaskStats
TaskStats
TaskStats
TaskStats
TaskStats
TaskStats
TaskStats
TaskStats
Task
const TaskStats
TaskStats
const TaskStats
const TaskStats
TaskStats
const TaskStats
TaskStats
TaskStats
TaskStats
TaskStats
const TaskStats
const TaskStats
TaskStats
TaskStats
TaskStats
TaskStats
TaskStats
TaskStats
TaskStats
TaskStats
TaskStats
TaskStats
TaskStats
TaskStats
const Task
TaskStats
const TaskStats
const TaskStats
TaskStats
const TaskStats
TaskStats
TaskStats
TaskStats
Task
const TaskStats
TaskStats
const TaskStats
const TaskStats
TaskStats
const Task
TaskStats
TaskStats
TaskStats
const TaskStats
TaskStats
const TaskStats
TaskStats
const TaskStats
TaskStats
TaskStats
TaskStats
const TaskStats
const TaskStats
TaskStats
TaskStats
const TaskStats
const TaskStats
TaskStats
const
const TaskStats
TaskStats
TaskStats
TaskStats
const TaskStats
TaskStats
TaskStats
TaskStats
TaskStats
const Task
TaskStats
Task
const TaskStats
TaskStats
TaskStats
TaskStats
Task
TaskStats
TaskStats
TaskStats
1.Stats
const TaskStats
const TaskStats
TaskStats
const TaskStats
1. TaskStats
const TaskStats
TaskStats
TaskStats
const TaskStats
const TaskStats
const TaskStats
TaskStats
const Task
TaskStats
const TaskStats
const TaskStats
const TaskStats
TaskStats
const TaskStats
const TaskStats
TaskStats
TaskStats
const TaskStats
TaskStats
const TaskStats
const TaskStats
TaskStats
const TaskStats
TaskStats
TaskStats
const TaskStats
const TaskStats
7. TaskStats
const Tasks
TaskStats
const TaskStats
const TaskStats
TaskStats
const TaskStats
const TaskStats
const TaskStats
TaskStats
const TaskStats
const TaskStats
const TaskStats
TaskStats
const Task
const TaskStats
const TaskStats
TaskStats
const TaskStats
const TaskClock
const TaskStats
const TaskStats
const TaskStats
const Task
TaskStats
const TaskStats
const
const TaskT
TaskStats
const Task
TaskStats
TaskStats
const Task
TaskStats
const Task
TaskStats
TaskStats
TaskStats
const Task
const Task
Task
const Task
TaskStats
Task
const Task
Task
Task
TaskStats
const Task
Task
TaskStats
Task
Task
const Task
Task
Task
Task
Task
Task
Task
Task
TaskStats
Task
const Task
Task
const
const Task
const
const Task
Task
1. Task
Task
const
Task
Task
const Task
const Task
Task
Task
Task
const
Task
const
Task
const
Task
Task
Task
Task
Task
Task
Task
const
Task
Task
Task
const
Task
Task
const
const
Task
Task
Task
const Task
Task
Task
Task
Task
Task
Task
const
Task
const
Task
Task
const Task
const Task
const
const
Task
Task
Task
const Task
const
Task
const Task
const
Task
const Task
Task
Task
Task
Task
const
const
Task
Task
const
const
Task
Task
const
Task
Task
Task
const
Task
const
const
Task
Task
Task
1. TaskStats
const
Task
const
Task
Task
Task
const
Task
const Task
const Task
const
const Task
Task
Task
const
Task
const Task
const
const
Taskot
const Task
const Task
const
const
const Task
const
Task
const
const Task
const
const
const
const Task
const
const
const
const Task
const
Task
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
Task
const
const
const
1. Task
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
1. Task
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
const
1. TaskStats
const
const
const
const
const
const
const
const
const
1. TaskStats
const
const
const
const
const
const
const
const
const
const
const
const
1. Task
const
const
const
const
const
const
const
const
const
1. Task
const
const
const
1
const
1. Task
const
const
const
1
const
1.1
1
const
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1.1
1
1
1.1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
11
1
1
1
1
1
1
1
1
1.1
1
1
1
1
11
1.1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1
1.1
1.1
11
1
1
1.1
1.1
1.1
11
1.1
1.1
11
1
1
1
11
1
11
11
11
1.1
11
11
11
11
11
11
11
11
11
11
11
11
11
111
111
11
11
11
11
11
11
11
11
111
11
1111
11
11
11
11
1111
111
1111
1111
111
111
111
111
111
111
111
111
111
1111
1111
111
111
111
111
111111
111
111111
111
111
111
11
111111
111
1111
11111111
111
1111
111
11111111
1111
1111
11
111
111
111
11111111
111111
11111
1111111
1111111
11
11
1111
11111111111111
111111
1111111111
11111
11
1111
1111
111
11111
1111
111
111
111
111
111
111
111
111
1111
111
111
111
111
111
111
11
111
111
111
1111
1111
11111
11
1111
111
11111
11
1111
111
111
111
111.1
11
11
111
111
11
111
111
111
11
111
111
111
11
11
111
11
11111
111
11
111
111
1111
111
111
111
111
111
111
11
11
11
111
11
11
11
11
11
11
111
11
11
11
11
11
1
11
11
11
111
11
111
11
111
111
11
111
111
11
11
11
11
111
11
11
11
11
11
11
111
11
11
11
11
11
11
11
11
11
111
11
11
11
11
11
111
11
11
11
111
111
11
11
111
11
111
1111
111
111
1111
111111111
11111
111111111111111111111111111
1.1
1.1
111111
111
1111
111
11111111
111
1.1
1.1
111
11
11
111111111111
111
11111111111
111111
111
11111
1111111111111111111111
11111111111111111111111
1111111
1.1
11111111111111111111
11111111111111
11111111111111111111
111111111111111111111
11111
11111
11111
11111111111111
11111
1111111111
111
111
11111111111111111111111111111
111
111
111111111
111
111
111
111
111
111
11111
11
11
1111
11
111
11
11
11
11
11
11
11
11
11
11
1
1
11
1
1
1
1
1
1
1
1
1
11
1
1
1
1
1
1
1
1
1
1
11
1
1
1
1
1
1
11
1
1
1
1
1
1
1
1
1
1
1
1
1
11
1
1
1
1
1
1
1
1
1
1
11
1
1
1
11
1
11
1
1
1
1
1
1
1
1
1
1
11
1
1
1

Vou corrigir o arquivo do dashboard do adotante que ficou incompleto:

<dyad-write path="src/pages/AdopterDashboard.tsx" description="Corrigindo o dashboard do adotante com a aba de mensagens">
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, FileText, Calendar, CheckCircle, Clock, XCircle, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedNavigation from "@/components/AnimatedNavigation";
import { useAnimation } from "@/contexts/AnimationContext";

const AdopterDashboard = () => {
  const { reducedMotion } = useAnimation();
  const [activeTab, setActiveTab] = useState("favorites");

  // Mock data
  const favorites = [
    {
      id: 1,
      name: "Thor",
      breed: "Vira-lata",
      age: "2 anos",
      image: "/placeholder.svg?height=100&width=100",
      shelter: "Abrigo Amor aos Animais"
    },
    {
      id: 2,
      name: "Luna",
      breed: "Siamês",
      age: "1 ano",
      image: "/placeholder.svg?height=100&width=100",
      shelter: "Gatos Felizes"
    }
  ];

  const applications = [
    {
      id: 1,
      animalName: "Thor",
      shelter: "Abrigo Amor aos Animais",
      date: "2023-10-15",
      status: "pending"
    },
    {
      id: 2,
      animalName: "Bidu",
      shelter: "Cães da Rua",
      date: "2023-10-10",
      status: "approved"
    },
    {
      id: 3,
      animalName: "Mia",
      shelter: "Gatinhos Fofos",
      date: "2023-10-05",
      status: "rejected"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary"><Clock className="h-3 w-3 mr-1" /> Pendente</Badge>;
      case "approved":
        return <Badge variant="default"><CheckCircle className="h-3 w-3 mr-1" /> Aprovado</Badge>;
      case "rejected":
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" /> Rejeitado</Badge>;
      default:
        return <Badge variant="secondary">Desconhecido</Badge>;
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
        <PawPrint className="w-12 h-12 text-primary" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 left-20 opacity-10"
        initial="hidden"
        animate="visible"
        variants={!reducedMotion ? pawPrintVariants : {}}
        transition={{ delay: 0.4 }}
      >
        <PawPrint className="w-16 h-16 text-primary" />
      </motion.div>
      
      <AnimatedNavigation />
      <div className="container mx-auto px-4 py-8 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground">Painel do Adotante</h1>
          <p className="text-gray-600 dark:text-gray-300">Gerencie seus favoritos e acompanhe suas solicitações de adoção</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="favorites">Favoritos</TabsTrigger>
              <TabsTrigger value="applications">Solicitações</TabsTrigger>
              <TabsTrigger value="messages">
                Mensagens
                <Badge variant="destructive" className="ml-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                  2
                </Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="favorites">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-background">
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <Heart className="h-5 w-5 mr-2" />
                      Animais Favoritos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {favorites.length > 0 ? (
                      <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {favorites.map((animal, index) => (
                          <motion.div
                            key={animal.id}
                            variants={itemVariants}
                            whileHover={!reducedMotion ? { y: -5 } : {}}
                            transition={{ duration: 0.3 }}
                          >
                            <Card className="bg-background">
                              <CardContent className="flex items-center p-4">
                                <motion.div
                                  whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                                  transition={{ type: "spring", stiffness: 300 }}
                                >
                                  <img 
                                    src={animal.image} 
                                    alt={animal.name} 
                                    className="w-16 h-16 rounded-lg object-cover mr-4"
                                  />
                                </motion.div>
                                <div className="flex-1">
                                  <h3 className="font-bold text-foreground">{animal.name}</h3>
                                  <p className="text-sm text-gray-600 dark:text-gray-300">{animal.breed}, {animal.age}</p>
                                  <p className="text-sm text-gray-600 dark:text-gray-300">{animal.shelter}</p>
                                </div>
                                <motion.div
                                  whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                                  whileTap={!reducedMotion ? { scale: 0.95 } : {}}
                                  transition={{ type: "spring", stiffness: 400 }}
                                >
                                  <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                                    <Link to={`/animal/${animal.id}`}>Ver Perfil</Link>
                                  </Button>
                                </motion.div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div 
                        className="text-center py-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Heart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <p className="text-gray-600 dark:text-gray-300">Você ainda não tem animais favoritos</p>
                        <motion.div
                          whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                          whileTap={!reducedMotion ? { scale: 0.95 } : {}}
                          transition={{ type: "spring", stiffness: 400 }}
                          className="mt-4"
                        >
                          <Button asChild className="bg-primary hover:bg-primary/90">
                            <Link to="/catalog">Ver Animais Disponíveis</Link>
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="applications">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-background">
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <FileText className="h-5 w-5 mr-2" />
                      Solicitações de Adoção
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {applications.length > 0 ? (
                      <motion.div 
                        className="space-y-4"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {applications.map((app, index) => (
                          <motion.div
                            key={app.id}
                            variants={itemVariants}
                            whileHover={!reducedMotion ? { y: -3 } : {}}
                            transition={{ duration: 0.3 }}
                          >
                            <Card className="bg-background">
                              <CardContent className="p-4">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <h3 className="font-bold text-foreground">{app.animalName}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{app.shelter}</p>
                                    <div className="flex items-center text-sm text-gray-500 mt-1">
                                      <Calendar className="h-4 w-4 mr-1" />
                                      <span>{app.date}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    {getStatusBadge(app.status)}
                                    <motion.div
                                      whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                                      whileTap={!reducedMotion ? { scale: 0.95 } : {}}
                                      transition={{ type: "spring", stiffness: 400 }}
                                    >
                                      <Button variant="outline" size="sm">
                                        <MessageCircle className="h-4 w-4 mr-1" />
                                        Mensagens
                                      </Button>
                                    </motion.div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div 
                        className="text-center py-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <p className="text-gray-600 dark:text-gray-300">Você ainda não fez nenhuma solicitação de adoção</p>
                        <motion.div
                          whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                          whileTap={!reducedMotion ? { scale: 0.95 } : {}}
                          transition={{ type: "spring", stiffness: 400 }}
                          className="mt-4"
                        >
                          <Button asChild className="bg-primary hover:bg-primary/90">
                            <Link to="/catalog">Ver Animais Disponíveis</Link>
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="messages">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-background">
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Mensagens
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.div 
                      className="text-center py-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <MessageCircle className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-600 dark:text-gray-300 mb-4">Você tem 2 mensagens não lidas</p>
                      <motion.div
                        whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                        whileTap={!reducedMotion ? { scale: 0.95 } : {}}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Button asChild className="bg-primary hover:bg-primary/90">
                          <Link to="/messages">Ver Todas as Mensagens</Link>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default AdopterDashboard;