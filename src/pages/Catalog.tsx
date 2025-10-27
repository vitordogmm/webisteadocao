import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, MapPin, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Catalog = () => {
  const [filters, setFilters] = useState({
    species: "",
    size: "",
    age: "",
    gender: "",
    location: "",
    shelter: ""
  });

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
      location: "São Paulo, SP",
      image: "/placeholder.svg?height=300&width=300",
      description: "Brincalhão e muito carinhoso"
    },
    {
      id: 2,
      name: "Luna",
      species: "Gato",
      breed: "Siamês",
      age: "1 ano",
      size: "Pequeno",
      gender: "Fêmea",
      location: "Rio de Janeiro, RJ",
      image: "/placeholder.svg?height=300&width=300",
      description: "Muito independente e carinhosa"
    },
    {
      id: 3,
      name: "Bidu",
      species: "Cachorro",
      breed: "Beagle",
      age: "4 anos",
      size: "Médio",
      gender: "Macho",
      location: "Belo Horizonte, MG",
      image: "/placeholder.svg?height=300&width=300",
      description: "Calmo e ótimo com crianças"
    },
    {
      id: 4,
      name: "Mia",
      species: "Gato",
      breed: "Persa",
      age: "3 anos",
      size: "Pequeno",
      gender: "Fêmea",
      location: "Porto Alegre, RS",
      image: "/placeholder.svg?height=300&width=300",
      description: "Muito brincalhona e sociável"
    }
  ];

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-1/4">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="h-5 w-5" />
                <h2 className="text-xl font-bold">Filtros</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <Label className="text-base">Espécie</Label>
                  <Select onValueChange={(value) => handleFilterChange("species", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cachorro">Cachorro</SelectItem>
                      <SelectItem value="gato">Gato</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-base">Porte</Label>
                  <Select onValueChange={(value) => handleFilterChange("size", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pequeno">Pequeno</SelectItem>
                      <SelectItem value="medio">Médio</SelectItem>
                      <SelectItem value="grande">Grande</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-base">Idade</Label>
                  <Select onValueChange={(value) => handleFilterChange("age", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="filhote">Filhote (0-1 ano)</SelectItem>
                      <SelectItem value="jovem">Jovem (1-3 anos)</SelectItem>
                      <SelectItem value="adulto">Adulto (3-8 anos)</SelectItem>
                      <SelectItem value="idoso">Idoso (+8 anos)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-base">Sexo</Label>
                  <div className="flex gap-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="macho" onCheckedChange={(checked) => handleFilterChange("gender", checked ? "macho" : "")} />
                      <label htmlFor="macho">Macho</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="femea" onCheckedChange={(checked) => handleFilterChange("gender", checked ? "femea" : "")} />
                      <label htmlFor="femea">Fêmea</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label className="text-base">Localização</Label>
                  <Input 
                    placeholder="Cidade, Estado" 
                    value={filters.location}
                    onChange={(e) => handleFilterChange("location", e.target.value)}
                  />
                </div>
                
                <Button className="w-full">Aplicar Filtros</Button>
              </div>
            </Card>
          </div>
          
          {/* Animals Grid */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Animais Disponíveis para Adoção</h1>
              <p className="text-gray-600">{animals.length} animais encontrados</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {animals.map((animal) => (
                <Card key={animal.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <img 
                      src={animal.image} 
                      alt={animal.name} 
                      className="w-full h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">{animal.name}</h3>
                        <p className="text-gray-600">{animal.breed}</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <span>{animal.age}</span>
                        <span className="mx-2">•</span>
                        <span>{animal.size}</span>
                        <span className="mx-2">•</span>
                        <span>{animal.gender}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{animal.location}</span>
                      </div>
                      <p className="text-sm mt-2">{animal.description}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild className="w-full">
                      <Link to={`/animal/${animal.id}`}>Quero Adotar</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;