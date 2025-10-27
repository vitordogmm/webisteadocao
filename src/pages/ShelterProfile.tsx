import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Globe, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const ShelterProfile = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Shelter Header */}
        <Card className="mb-8">
          <CardContent className="p-0">
            <img 
              src={shelter.images[0]} 
              alt={shelter.name} 
              className="w-full h-64 object-cover rounded-t-lg"
            />
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shelter Info */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <h1 className="text-3xl font-bold">{shelter.name}</h1>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Sobre Nós</h2>
                    <p className="text-gray-700 mb-4">{shelter.description}</p>
                    <h3 className="font-semibold mb-2">Missão</h3>
                    <p className="text-gray-700">{shelter.mission}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Informações de Contato</h2>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-3 text-gray-500" />
                        <div>
                          <p>{shelter.address}</p>
                          <p>{shelter.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-3 text-gray-500" />
                        <span>{shelter.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-3 text-gray-500" />
                        <span>{shelter.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 mr-3 text-gray-500" />
                        <span>{shelter.website}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Shelter Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-10 w-10 mx-auto text-blue-500 mb-2" />
                  <p className="text-2xl font-bold">{shelter.animalsAdopted}</p>
                  <p className="text-gray-600">Animais Adotados</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-10 w-10 mx-auto text-green-500 mb-2" />
                  <p className="text-2xl font-bold">{shelter.founded}</p>
                  <p className="text-gray-600">Ano de Fundação</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-10 w-10 mx-auto text-purple-500 mb-2" />
                  <p className="text-2xl font-bold">{shelter.animalsAvailable}</p>
                  <p className="text-gray-600">Animais Disponíveis</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Animals Available */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Animais Disponíveis</h2>
                <Button variant="outline">Ver Todos</Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {animals.map((animal) => (
                  <Card key={animal.id}>
                    <CardHeader className="p-0">
                      <img 
                        src={animal.image} 
                        alt={animal.name} 
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold">{animal.name}</h3>
                      <p className="text-gray-600">{animal.breed}</p>
                      <div className="flex justify-between mt-2">
                        <Badge variant="secondary">{animal.age}</Badge>
                        <Badge variant="secondary">{animal.size}</Badge>
                        <Badge variant="secondary">{animal.gender}</Badge>
                      </div>
                      <Button asChild className="w-full mt-4">
                        <Link to={`/animal/${animal.id}`}>Conhecer</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Galeria</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {shelter.images.slice(1).map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`Galeria ${index + 1}`} 
                      className="w-full h-24 object-cover rounded"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <span className="font-medium">Facebook:</span> {shelter.socialMedia.facebook}
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <span className="font-medium">Instagram:</span> @{shelter.socialMedia.instagram}
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <span className="font-medium">WhatsApp:</span> {shelter.socialMedia.whatsapp}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShelterProfile;