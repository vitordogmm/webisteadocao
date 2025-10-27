import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  FileText, 
  MessageCircle, 
  Calendar, 
  CheckCircle, 
  Clock, 
  XCircle, 
  Plus,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

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
      breed: "Vira-lata",
      age: "2 anos",
      status: "available",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      id: 2,
      name: "Luna",
      breed: "Siamês",
      age: "1 ano",
      status: "in-process",
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
      default:
        return <Badge variant="secondary">Desconhecido</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
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
              <Heart className="h-10 w-10 mx-auto text-primary mb-2" />
              <p className="text-2xl font-bold text-foreground">{stats.adoptedAnimals}</p>
              <p className="text-gray-600 dark:text-gray-300">Animais Adotados</p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="animals">Animais</TabsTrigger>
            <TabsTrigger value="applications">Solicitações</TabsTrigger>
            <TabsTrigger value="messages">Mensagens</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
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
                      <MessageCircle className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Nova mensagem</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Você tem uma nova mensagem de Maria Oliveira</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="animals">
            <Card className="bg-background">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center text-foreground">
                    <Users className="h-5 w-5 mr-2" />
                    Animais Cadastrados
                  </CardTitle>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Animal
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {animals.length > 0 ? (
                  <div className="space-y-4">
                    {animals.map((animal) => (
                      <Card key={animal.id} className="bg-background">
                        <CardContent className="p-4">
                          <div className="flex items-center">
                            <img 
                              src={animal.image} 
                              alt={animal.name} 
                              className="w-16 h-16 rounded-lg object-cover mr-4"
                            />
                            <div className="flex-1">
                              <h3 className="font-bold text-foreground">{animal.name}</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-300">{animal.breed}, {animal.age}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              {getStatusBadge(animal.status)}
                              <Button variant="outline" size="sm">
                                Editar
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
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
                <CardTitle className="flex items-center text-foreground">
                  <FileText className="h-5 w-5 mr-2" />
                  Solicitações de Adoção
                </CardTitle>
              </CardHeader>
              <CardContent>
                {applications.length > 0 ? (
                  <div className="space-y-4">
                    {applications.map((app) => (
                      <Card key={app.id} className="bg-background">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-bold text-foreground">{app.animalName}</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-300">Interessado: {app.adopter}</p>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>{app.date}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {getStatusBadge(app.status)}
                              <Button variant="outline" size="sm">
                                <MessageCircle className="h-4 w-4 mr-1" />
                                Mensagens
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 dark:text-gray-300">Você não tem nenhuma solicitação de adoção</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Mensagens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <MessageCircle className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300">Você não tem mensagens novas</p>
                  <p className="text-sm text-gray-500 mt-2 dark:text-gray-400">As mensagens aparecerão aqui quando você receber uma solicitação de adoção</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ShelterDashboard;