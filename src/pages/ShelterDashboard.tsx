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
  Eye,
  Edit
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedNavigation from "@/components/AnimatedNavigation";
import { Input } from "@/components/ui/input";
import AnimalForm from "@/components/animals/AnimalForm";
import VisitScheduleModal from "@/components/applications/VisitScheduleModal";
import ApplicationDetailsModal from "@/components/applications/ApplicationDetailsModal";
import { Animal } from "@/types/animal";
import { Application } from "@/types/application";

const ShelterDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showAnimalForm, setShowAnimalForm] = useState(false);
  const [editingAnimal, setEditingAnimal] = useState<Animal | null>(null);
  const [showVisitModal, setShowVisitModal] = useState(false);
  const [showApplicationDetails, setShowApplicationDetails] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [animalFilters, setAnimalFilters] = useState({});

  // Mock data
  const stats = {
    totalAnimals: 42,
    availableAnimals: 32,
    pendingApplications: 8,
    adoptedAnimals: 156
  };

  const animals: Animal[] = [
    {
      id: 1,
      name: "Thor",
      species: "cachorro",
      breed: "Vira-lata",
      age: "2 anos",
      size: "medio",
      gender: "macho",
      weight: "18 kg",
      location: "São Paulo, SP",
      description: "Brincalhão e muito carinhoso",
      status: "available",
      images: ["/placeholder.svg?height=100&width=100"],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name: "Luna",
      species: "gato",
      breed: "Siamês",
      age: "1 ano",
      size: "pequeno",
      gender: "femea",
      location: "Rio de Janeiro, RJ",
      description: "Muito independente e carinhosa",
      status: "in-process",
      images: ["/placeholder.svg?height=100&width=100"],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      name: "Bidu",
      species: "cachorro",
      breed: "Beagle",
      age: "4 anos",
      size: "medio",
      gender: "macho",
      location: "Belo Horizonte, MG",
      description: "Calmo e ótimo com crianças",
      status: "available",
      images: ["/placeholder.svg?height=100&width=100"],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      name: "Mia",
      species: "gato",
      breed: "Persa",
      age: "3 anos",
      size: "pequeno",
      gender: "femea",
      location: "Porto Alegre, RS",
      description: "Muito brincalhona e sociável",
      status: "adopted",
      images: ["/placeholder.svg?height=100&width=100"],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  const applications: Application[] = [
    {
      id: 1,
      animalId: 1,
      animalName: "Thor",
      animalSpecies: "cachorro",
      animalBreed: "Vira-lata",
      animalLocation: "São Paulo, SP",
      applicantId: 101,
      applicantName: "João Silva",
      applicantEmail: "joao@email.com",
      applicantPhone: "(11) 99999-9999",
      applicantAge: 28,
      applicantExperience: "Experiência com cães de grande porte",
      applicantHousingType: "Casa com quintal",
      hasOtherPets: false,
      motivation: "Estou buscando um companheiro para minha família. Temos crianças e queremos um animal brincalhão.",
      status: "pending",
      createdAt: new Date("2023-10-15"),
      updatedAt: new Date("2023-10-15")
    },
    {
      id: 2,
      animalId: 2,
      animalName: "Luna",
      animalSpecies: "gato",
      animalBreed: "Siamês",
      animalLocation: "Rio de Janeiro, RJ",
      applicantId: 102,
      applicantName: "Maria Oliveira",
      applicantEmail: "maria@email.com",
      applicantPhone: "(21) 88888-8888",
      applicantAge: 35,
      applicantExperience: "Experiência com gatos",
      applicantHousingType: "Apartamento",
      hasOtherPets: true,
      motivation: "Quero adicionar mais um gato à minha família. Já tenho experiência com Siamês.",
      status: "approved",
      visitScheduled: true,
      visitDate: new Date("2023-10-20"),
      visitTime: "14:00",
      visitWhatsapp: "(21) 88888-8888",
      createdAt: new Date("2023-10-14"),
      updatedAt: new Date("2023-10-16")
    },
    {
      id: 3,
      animalId: 3,
      animalName: "Bidu",
      animalSpecies: "cachorro",
      animalBreed: "Beagle",
      animalLocation: "Belo Horizonte, MG",
      applicantId: 103,
      applicantName: "Carlos Santos",
      applicantEmail: "carlos@email.com",
      applicantPhone: "(31) 77777-7777",
      applicantAge: 42,
      applicantExperience: "Primeira experiência com animais",
      applicantHousingType: "Apartamento",
      hasOtherPets: false,
      motivation: "Sempre quis ter um cachorro e achei o Bidu perfeito para mim.",
      status: "pending",
      createdAt: new Date("2023-10-10"),
      updatedAt: new Date("2023-10-10")
    },
    {
      id: 4,
      animalId: 4,
      animalName: "Mia",
      animalSpecies: "gato",
      animalBreed: "Persa",
      animalLocation: "Porto Alegre, RS",
      applicantId: 104,
      applicantName: "Ana Costa",
      applicantEmail: "ana@email.com",
      applicantPhone: "(51) 66666-6666",
      applicantAge: 30,
      applicantExperience: "Experiência limitada",
      applicantHousingType: "Apartamento pequeno",
      hasOtherPets: false,
      motivation: "Achei a Mia muito fofa, mas não tenho experiência com gatos de pelo longo.",
      status: "rejected",
      notes: "Sem experiência adequada para o cuidado de um gato de pelo longo",
      createdAt: new Date("2023-10-05"),
      updatedAt: new Date("2023-10-08")
    }
  ];

  const filteredAnimals = animals.filter(animal => {
    const matchesSearch = animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         animal.breed.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

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

  const handleSaveAnimal = (animalData: Partial<Animal>) => {
    if (editingAnimal) {
      // Update existing animal
      console.log("Updating animal:", animalData);
    } else {
      // Add new animal
      console.log("Adding new animal:", animalData);
    }
    setShowAnimalForm(false);
    setEditingAnimal(null);
  };

  const handleScheduleVisit = (schedule: any) => {
    console.log("Scheduling visit:", schedule);
    setShowVisitModal(false);
  };

  const handleUpdateApplicationStatus = (applicationId: string, status: string, notes?: string) => {
    console.log("Updating application status:", { applicationId, status, notes });
    setShowApplicationDetails(false);
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
                            src={animal.images[0]} 
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
                            <p className="text-sm text-gray-600 dark:text-gray-300">Interessado: {app.applicantName}</p>
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
                      <Input 
                        placeholder="Buscar animais..." 
                        className="pl-8" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Button onClick={() => setShowAnimalForm(true)} className="bg-primary hover:bg-primary/90">
                      <Plus className="h-4 w-4 mr-2" />
                      Adicionar Animal
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {filteredAnimals.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Animal</th>
                          <th className="text-left py-3 px-4">Espécie</th>
                          <th className="text-left py-3 px-4">Raça</th>
                          <th className="text-left py-3 px-4">Idade</th>
                          <th className="text-left py-3 px-4">Porte</th>
                          <th className="text-left py-3 px-4">Sexo</th>
                          <th className="text-left py-3 px-4">Status</th>
                          <th className="text-right py-3 px-4">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredAnimals.map((animal) => (
                          <tr key={animal.id} className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <img 
                                  src={animal.images[0]} 
                                  alt={animal.name} 
                                  className="w-10 h-10 rounded-lg object-cover mr-3"
                                />
                                <span className="font-medium text-foreground">{animal.name}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-foreground">{animal.species}</td>
                            <td className="py-3 px-4 text-foreground">{animal.breed}</td>
                            <td className="py-3 px-4 text-foreground">{animal.age}</td>
                            <td className="py-3 px-4 text-foreground">{animal.size}</td>
                            <td className="py-3 px-4 text-foreground">{animal.gender}</td>
                            <td className="py-3 px-4">{getAnimalStatusBadge(animal.status)}</td>
                            <td className="py-3 px-4 text-right">
                              <div className="flex justify-end gap-2">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => window.open(`/animal/${animal.id}`, '_blank')}
                                >
                                  <Eye className="h-4 w-4 mr-1" />
                                  Ver
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => {
                                    setEditingAnimal(animal);
                                    setShowAnimalForm(true);
                                  }}
                                >
                                  <Edit className="h-4 w-4 mr-1" />
                                  Editar
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Users className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 dark:text-gray-300">
                      {searchQuery 
                        ? "Nenhum animal encontrado com o termo pesquisado" 
                        : "Você ainda não cadastrou nenhum animal"
                      }
                    </p>
                    <Button 
                      onClick={() => setShowAnimalForm(true)} 
                      className="mt-4 bg-primary hover:bg-primary-90"
                    >
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
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Animal</th>
                          <th className="text-left py-3 px-4">Interessado</th>
                          <th className="text-left py-3 px-4">Data</th>
                          <th className="text-left py-3 px-4">Status</th>
                          <th className="text-right py-3 px-4">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applications.map((app) => (
                          <tr key={app.id} className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4 font-medium text-foreground">{app.animalName}</td>
                            <td className="py-3 px-4 text-foreground">{app.applicantName}</td>
                            <td className="py-3 px-4 text-foreground">{new Date(app.createdAt).toLocaleDateString('pt-BR')}</td>
                            <td className="py-3 px-4">{getStatusBadge(app.status)}</td>
                            <td className="py-3 px-4 text-right">
                              <div className="flex justify-end gap-2">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => {
                                    setSelectedApplication(app);
                                    setShowApplicationDetails(true);
                                  }}
                                >
                                  <Eye className="h-4 w-4 mr-1" />
                                  Ver Detalhes
                                </Button>
                                {app.status === "pending" && (
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => {
                                      setSelectedApplication(app);
                                      setShowVisitModal(true);
                                    }}
                                  >
                                    <Calendar className="h-4 w-4 mr-1" />
                                    Agendar Visita
                                  </Button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
        </Tabs>
      </div>

      {/* Animal Form Modal */}
      {showAnimalForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <AnimalForm
              animal={editingAnimal}
              onSave={handleSaveAnimal}
              onCancel={() => {
                setShowAnimalForm(false);
                setEditingAnimal(null);
              }}
            />
          </div>
        </div>
      )}

      {/* Visit Schedule Modal */}
      {showVisitModal && selectedApplication && (
        <VisitScheduleModal
          applicationId={selectedApplication.id}
          applicantName={selectedApplication.applicantName}
          onSave={handleScheduleVisit}
          onCancel={() => setShowVisitModal(false)}
        />
      )}

      {/* Application Details Modal */}
      {showApplicationDetails && selectedApplication && (
        <ApplicationDetailsModal
          application={selectedApplication}
          onUpdateStatus={handleUpdateApplicationStatus}
          onClose={() => setShowApplicationDetails(false)}
        />
      )}
    </div>
  );
};

export default ShelterDashboard;