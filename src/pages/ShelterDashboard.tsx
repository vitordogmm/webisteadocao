import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  FileText, 
  Calendar, 
  CheckCircle, 
  Clock, 
  XCircle, 
  Plus,
  BarChart3,
  Search,
  Filter
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedNavigation from "@/components/AnimatedNavigation";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ShelterDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data
  const stats = {
    totalAnimals: 42,
    availableAnimals: 32,
    pendingApplications: 8,
    adoptedAnimals: 156
  };

  const animals = [
    {
      id: 1,
      name: "Thor",
      species: "Cachorro",
      breed: "Vira-lata",
      age: "2 anos",
      size: "Médio",
      gender: "Macho",
      status: "available",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      id: 2,
      name: "Luna",
      species: "Gato",
      breed: "Siamês",
      age: "1 ano",
      size: "Pequeno",
      gender: "Fêmea",
      status: "in-process",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      id: 3,
      name: "Bidu",
      species: "Cachorro",
      breed: "Beagle",
      age: "4 anos",
      size: "Médio",
      gender: "Macho",
      status: "available",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      id: 4,
      name: "Mia",
      species: "Gato",
      breed: "Persa",
      age: "3 anos",
      size: "Pequeno",
      gender: "Fêmea",
      status: "adopted",
      image: "/placeholder.svg?height=100&width=100"
    }
  ];

  const applications = [
    {
      id: 1,
      animalName: "Thor",
      adopter: "João Silva",
      date: "2023-10-15",
      status: "pending"
    },
    {
      id: 2,
      animalName: "Luna",
      adopter: "Maria Oliveira",
      date: "2023-10-14",
      status: "approved"
    },
    {
      id: 3,
      animalName: "Bidu",
      adopter: "Carlos Santos",
      date: "2023-10-10",
      status: "pending"
    },
    {
      id: 4,
      animalName: "Mia",
      adopter: "Ana Costa",
      date: "2023-10-05",
      status: "rejected"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <Badge variant="default">Disponível</Badge>;
      case "in-process":
        return <Badge variant="secondary">Em Processo</Badge>;
      case "adopted":
        return <Badge variant="outline">Adotado</Badge>;
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

  const getAnimalStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <Badge variant="default">Disponível</Badge>;
      case "in-process":
        return <Badge variant="secondary">Em Processo</Badge>;
      case "adopted":
        return <Badge variant="outline">Adotado</Badge>;
      default:
        return <Badge variant="secondary">Desconhecido</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatedNavigation />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Painel do Canil</h1>
          <p className="text-gray-600 dark:text-gray-300">Gerencie seus animais e solicitações de adoção</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-background">
            <CardContent className="p-6 text-center">
              <Users className="h-10 w-10 mx-auto text-primary mb-2" />
              <p className="text-2xl font-bold text-foreground">{stats.totalAnimals}</p>
              <p className="text-gray-600 dark:text-gray-300">Total de Animais</p>
            </CardContent>
          </Card>
          <Card className="bg-background">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-10 w-10 mx-auto text-primary mb-2" />
              <p className="text-2xl font-bold text-foreground">{stats.availableAnimals}</p>
              <p className="text-gray-600 dark:text-gray-300">Disponíveis</p>
            </CardContent>
          </Card>
          <Card className="bg-background">
            <CardContent className="p-6 text-center">
              <Clock className="h-10 w-10 mx-auto text-primary mb-2" />
              <p className="text-2xl font-bold text-foreground">{stats.pendingApplications}</p>
              <p className="text-gray-600 dark:text-gray-300">Solicitações Pendentes</p>
            </CardContent>
          </Card>
          <Card className="bg-background">
            <CardContent className="p-6 text-center">
              <FileText className="h-10 w-10 mx-auto text-primary mb-2" />
              <p className="text-2xl font-bold text-foreground">156</p>
              <p className="text-gray-600 dark:text-gray-300">Animais Adotados</p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="animals">Animais</TabsTrigger>
            <TabsTrigger value="applications">Solicitações</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="space-y-6">
              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Atividade Recente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-muted rounded-lg">
                      <div className="bg-blue-100 p-3 rounded-full mr-4 dark:bg-blue-900">
                        <Users className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">Novo animal cadastrado</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Você cadastrou Thor, um Vira-lata de 2 anos</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-muted rounded-lg">
                      <div className="bg-green-100 p-3 rounded-full mr-4 dark:bg-green-900">
                        <FileText className="h-6 w-6 text-green-600 dark:text-green-300" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">Nova solicitação de adoção</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">João Silva manifestou interesse em Thor</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-muted rounded-lg">
                      <div className="bg-purple-100 p-3 rounded-full mr-4 dark:bg-purple-900">
                        <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">Adoção finalizada</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Maria Oliveira adotou Luna com sucesso</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-background">
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <Users className="h-5 w-5 mr-2" />
                      Animais Recentes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {animals.slice(0, 3).map((animal) => (
                        <div key={animal.id} className="flex items-center">
                          <img 
                            src={animal.image} 
                            alt={animal.name} 
                            className="w-12 h-12 rounded-lg object-cover mr-3"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground">{animal.name}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{animal.breed}</p>
                          </div>
                          {getAnimalStatusBadge(animal.status)}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background">
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <FileText className="h-5 w-5 mr-2" />
                      Solicitações Recentes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {applications.slice(0, 3).map((app) => (
                        <div key={app.id} className="flex items-center">
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground">{app.animalName}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Interessado: {app.adopter}</p>
                          </div>
                          {getStatusBadge(app.status)}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="animals">
            <Card className="bg-background">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <CardTitle className="flex items-center text-foreground">
                    <Users className="h-5 w-5 mr-2" />
                    Animais Cadastrados
                  </CardTitle>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Buscar animais..." className="pl-8" />
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          <Filter className="h-4 w-4 mr-2" />
                          Filtros
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Espécie</DropdownMenuItem>
                        <DropdownMenuItem>Porte</DropdownMenuItem>
                        <DropdownMenuItem>Idade</DropdownMenuItem>
                        <DropdownMenuItem>Status</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Plus className="h-4 w-4 mr-2" />
                      Adicionar Animal
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {animals.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Animal</TableHead>
                        <TableHead>Espécie</TableHead>
                        <TableHead>Raça</TableHead>
                        <TableHead>Idade</TableHead>
                        <TableHead>Porte</TableHead>
                        <TableHead>Sexo</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {animals.map((animal) => (
                        <TableRow key={animal.id}>
                          <TableCell>
                            <div className="flex items-center">
                              <img 
                                src={animal.image} 
                                alt={animal.name} 
                                className="w-10 h-10 rounded-lg object-cover mr-3"
                              />
                              <span className="font-medium text-foreground">{animal.name}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-foreground">{animal.species}</TableCell>
                          <TableCell className="text-foreground">{animal.breed}</TableCell>
                          <TableCell className="text-foreground">{animal.age}</TableCell>
                          <TableCell className="text-foreground">{animal.size}</TableCell>
                          <TableCell className="text-foreground">{animal.gender}</TableCell>
                          <TableCell>{getAnimalStatusBadge(animal.status)}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm" className="mr-2">
                              Editar
                            </Button>
                            <Button variant="outline" size="sm">
                              Ver Perfil
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="text-center py-8">
                    <Users className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 dark:text-gray-300">Você ainda não cadastrou nenhum animal</p>
                    <Button className="mt-4 bg-primary hover:bg-primary/90">
                      <Plus className="h-4 w-4 mr-2" />
                      Adicionar Primeiro Animal
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications">
            <Card className="bg-background">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <CardTitle className="flex items-center text-foreground">
                    <FileText className="h-5 w-5 mr-2" />
                    Solicitações de Adoção
                  </CardTitle>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Buscar solicitações..." className="pl-8" />
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          <Filter className="h-4 w-4 mr-2" />
                          Filtros
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Status</DropdownMenuItem>
                        <DropdownMenuItem>Data</DropdownMenuItem>
                        <DropdownMenuItem>Animal</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {applications.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Animal</TableHead>
                        <TableHead>Interessado</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {applications.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell className="font-medium text-foreground">{app.animalName}</TableCell>
                          <TableCell className="text-foreground">{app.adopter}</TableCell>
                          <TableCell className="text-foreground">{app.date}</TableCell>
                          <TableCell>{getStatusBadge(app.status)}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm" className="mr-2">
                              Ver Detalhes
                            </Button>
                            <Button variant="outline" size="sm">
                              <Calendar className="h-4 w-4 mr-1" />
                              Agendar Visita
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 dark:text-gray-300">Você não tem nenhuma solicitação de adoção</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ShelterDashboard;