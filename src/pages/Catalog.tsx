import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, MapPin, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Catalog = () => {
  // Filter states
  const [filters, setFilters] = useState({
    species: "",
    size: "",
    age: "",
    gender: "",
    location: "",
    shelter: ""
  });

  // Mock data for animals
  const [animals] = useState([
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
    },
    {
      id: 5,
      name: "Rex",
      species: "Cachorro",
      breed: "Pastor Alemão",
      age: "5 anos",
      size: "Grande",
      gender: "Macho",
      location: "Curitiba, PR",
      image: "/placeholder.svg?height=300&width=300",
      description: "Protetor e leal, ótimo para famílias"
    },
    {
      id: 6,
      name: "Nina",
      species: "Gato",
      breed: "Siamês",
      age: "8 meses",
      size: "Pequeno",
      gender: "Fêmea",
      location: "São Paulo, SP",
      image: "/placeholder.svg?height=300&width=300",
      description: "Brincalhona e muito afetuosa"
    }
  ]);

  const [filteredAnimals, setFilteredAnimals] = useState(animals);

  // Apply filters whenever filters change
  useEffect(() => {
    let result = [...animals];
    
    // Species filter
    if (filters.species) {
      result = result.filter(animal => 
        animal.species.toLowerCase() === filters.species.toLowerCase()
      );
    }
    
    // Size filter
    if (filters.size) {
      result = result.filter(animal => 
        animal.size.toLowerCase() === filters.size.toLowerCase()
      );
    }
    
    // Age filter (simplified for demo)
    if (filters.age) {
      result = result.filter(animal => 
        animal.age.toLowerCase().includes(filters.age.toLowerCase())
      );
    }
    
    // Gender filter
    if (filters.gender) {
      result = result.filter(animal => 
        animal.gender.toLowerCase() === filters.gender.toLowerCase()
      );
    }
    
    // Location filter
    if (filters.location) {
      result = result.filter(animal => 
        animal.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    setFilteredAnimals(result);
  }, [filters, animals]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleGenderChange = (gender: string, checked: boolean) => {
    if (checked) {
      setFilters(prev => ({ ...prev, gender }));
    } else {
      setFilters(prev => ({ ...prev, gender: "" }));
    }
  };

  const clearFilters = () => {
    setFilters({
      species: "",
      size: "",
      age: "",
      gender: "",
      location: "",
      shelter: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
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
                  <Select value={filters.species} onValueChange={(value) => handleFilterChange("species", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cachorro">Cachorro</SelectItem>
                      <SelectItem value="gato">Gato</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-base">Porte</Label>
                  <Select value={filters.size} onValueChange={(value) => handleFilterChange("size", value)}>
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
                  <Select value={filters.age} onValueChange={(value) => handleFilterChange("age", value)}>
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
                      <Checkbox 
                        id="macho" 
                        checked={filters.gender === "macho"}
                        onCheckedChange={(checked) => handleGenderChange("macho", !!checked)} 
                      />
                      <label htmlFor="macho" className="text-foreground">Macho</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="femea" 
                        checked={filters.gender === "femea"}
                        onCheckedChange={(checked) => handleGenderChange("femea", !!checked)} 
                      />
                      <label htmlFor="femea" className="text-foreground">Fêmea</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label className="text-base">Localização</Label>
                  <Input 
                    placeholder="Cidade, Estado" 
                    value={filters.location}
                    onChange={(e) => handleFilterChange("location", e.target.value)}
                    className="bg-background"
                  />
                </div>
                
                <div className="flex gap-2">
                  <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => {}}>
                    Aplicar Filtros
                  </Button>
                  <Button variant="outline" onClick={clearFilters}>
                    Limpar
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Animals Grid */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-foreground">Animais Disponíveis para Adoção</h1>
              <p className="text-gray-600 dark:text-gray-300">{filteredAnimals.length} animais encontrados</p>
            </div>
            
            {filteredAnimals.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAnimals.map((animal) => (
                  <Card key={animal.id} className="overflow-hidden bg-background">
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
                          <h3 className="text-xl font-bold text-foreground">{animal.name}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{animal.breed}</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Heart className="h-5 w-5" />
                        </Button>
                      </div>
                      
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <span>{animal.age}</span>
                          <span className="mx-2">•</span>
                          <span>{animal.size}</span>
                          <span className="mx-2">•</span>
                          <span>{animal.gender}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{animal.location}</span>
                        </div>
                        <p className="text-sm mt-2 text-foreground">{animal.description}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button asChild className="w-full bg-primary hover:bg-primary/90">
                        <Link to={`/animal/${animal.id}`}>Quero Adotar</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-foreground mb-4">Nenhum animal encontrado com os filtros selecionados</p>
                <Button onClick={clearFilters} variant="outline">
                  Limpar filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;