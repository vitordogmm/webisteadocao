import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, FileText, Calendar, CheckCircle, Clock, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AdopterDashboard = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Painel do Adotante</h1>
          <p className="text-gray-600">Gerencie seus favoritos e acompanhe suas solicitações de adoção</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="favorites">Favoritos</TabsTrigger>
            <TabsTrigger value="applications">Solicitações</TabsTrigger>
            <TabsTrigger value="messages">Mensagens</TabsTrigger>
          </TabsList>

          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2" />
                  Animais Favoritos
                </CardTitle>
              </CardHeader>
              <CardContent>
                {favorites.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {favorites.map((animal) => (
                      <Card key={animal.id}>
                        <CardContent className="flex items-center p-4">
                          <img 
                            src={animal.image} 
                            alt={animal.name} 
                            className="w-16 h-16 rounded-lg object-cover mr-4"
                          />
                          <div className="flex-1">
                            <h3 className="font-bold">{animal.name}</h3>
                            <p className="text-sm text-gray-600">{animal.breed}, {animal.age}</p>
                            <p className="text-sm text-gray-600">{animal.shelter}</p>
                          </div>
                          <Button asChild size="sm">
                            <Link to={`/animal/${animal.id}`}>Ver Perfil</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Heart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600">Você ainda não tem animais favoritos</p>
                    <Button asChild className="mt-4">
                      <Link to="/catalog">Ver Animais Disponíveis</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Solicitações de Adoção
                </CardTitle>
              </CardHeader>
              <CardContent>
                {applications.length > 0 ? (
                  <div className="space-y-4">
                    {applications.map((app) => (
                      <Card key={app.id}>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-bold">{app.animalName}</h3>
                              <p className="text-sm text-gray-600">{app.shelter}</p>
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
                    <p className="text-gray-600">Você ainda não fez nenhuma solicitação de adoção</p>
                    <Button asChild className="mt-4">
                      <Link to="/catalog">Ver Animais Disponíveis</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Mensagens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <MessageCircle className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600">Você não tem mensagens novas</p>
                  <p className="text-sm text-gray-500 mt-2">As mensagens aparecerão aqui quando você enviar uma solicitação de adoção</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdopterDashboard;