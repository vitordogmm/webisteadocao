import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, MapPin, Calendar, Ruler, VenetianMask, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const AnimalProfile = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Animal Images */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-0">
                <img 
                  src={animal.images[0]} 
                  alt={animal.name} 
                  className="w-full h-96 object-cover rounded-t-lg"
                />
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-3 gap-4 mt-4">
              {animal.images.slice(1).map((image, index) => (
                <Card key={index}>
                  <CardContent className="p-0">
                    <img 
                      src={image} 
                      alt={`${animal.name} ${index + 2}`} 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Animal Info */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-3xl font-bold">{animal.name}</h1>
                    <p className="text-gray-600">{animal.breed}</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Heart className="h-6 w-6" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{animal.age}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Ruler className="h-5 w-5 mr-2" />
                    <span>{animal.size} • {animal.weight}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <VenetianMask className="h-5 w-5 mr-2" />
                    <span>{animal.gender}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{animal.location}</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Personalidade</h3>
                  <div className="flex flex-wrap gap-2">
                    {animal.personality.map((trait, index) => (
                      <Badge key={index} variant="secondary">{trait}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Saúde</h3>
                  <div className="flex flex-wrap gap-2">
                    {animal.health.map((status, index) => (
                      <Badge key={index} variant="outline">{status}</Badge>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full mb-4">Quero Adotar</Button>
                <Button variant="outline" className="w-full">Salvar Animal</Button>
              </CardContent>
            </Card>
            
            {/* Shelter Info */}
            <Card>
              <CardHeader>
                <CardTitle>Canil Responsável</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-lg mb-2">{animal.shelter.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
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
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link to={`/shelter/${animal.shelter.id}`}>Ver Perfil do Canil</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Animal Description */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Sobre {animal.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{animal.description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AnimalProfile;