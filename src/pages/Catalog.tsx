import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, MapPin, Filter, Search, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedNavigation from "@/components/AnimatedNavigation";
import AnimatedAnimalCard from "@/components/AnimatedAnimalCard";
import { useAnimation } from "@/contexts/AnimationContext";
import { fetchStates, fetchCities, IBGEState, IBGECity } from "@/services/ibgeService";
import { Autocomplete } from "@/components/ui/autocomplete";

const Catalog = () => {
  const { reducedMotion } = useAnimation();
  // Filter states
  const [filters, setFilters] = useState({
    species: "",
    size: "",
    age: "",
    gender: "",
    state: "",
    city: ""
  });

  const [states, setStates] = useState<IBGEState[]>([]);
  const [cities, setCities] = useState<IBGECity[]>([]);
  const [loadingStates, setLoadingStates] = useState(true);
  const [loadingCities, setLoadingCities] = useState(false);

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
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch states on component mount
  useEffect(() => {
    const loadStates = async () => {
      setLoadingStates(true);
      const statesData = await fetchStates();
      setStates(statesData);
      setLoadingStates(false);
    };

    loadStates();
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    const loadCities = async () => {
      if (filters.state) {
        setLoadingCities(true);
        const citiesData = await fetchCities(filters.state);
        setCities(citiesData);
        setLoadingCities(false);
      } else {
        setCities([]);
      }
    };

    loadCities();
  }, [filters.state]);

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
    
    // Location filter (state and city)
    if (filters.state) {
      const stateName = states.find(s => s.sigla === filters.state)?.nome || "";
      result = result.filter(animal => 
        animal.location.includes(stateName) || animal.location.includes(filters.state)
      );
    }
    
    if (filters.city) {
      result = result.filter(animal => 
        animal.location.toLowerCase().includes(filters.city.toLowerCase())
      );
    }
    
    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(animal => 
        animal.name.toLowerCase().includes(query) ||
        animal.breed.toLowerCase().includes(query) ||
        animal.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredAnimals(result);
  }, [filters, animals, searchQuery, states]);

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
      state: "",
      city: ""
    });
    setSearchQuery("");
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

  const checkboxVariants = {
    checked: { scale: 1.1 },
    unchecked: { scale: 1 }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.03 },
    tap: { scale: 0.98 }
  };

  const selectVariants = {
    rest: { y: 0 },
    hover: { y: -2 },
    tap: { y: 1 }
  };

  const inputVariants = {
    rest: { boxShadow: "0 0 0 rgba(0, 0, 0, 0)" },
    focus: { boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.3)" }
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatedNavigation />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-3xl font-bold text-foreground mb-6">Animais Disponíveis para Adoção</h1>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.div
            className="w-full md:w-1/4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="h-5 w-5" />
                <h2 className="text-xl font-bold">Filtros</h2>
              </div>
              
              <div className="space-y-6">
                <motion.div variants={itemVariants}>
                  <Label className="text-base">Buscar</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <motion.div
                      variants={!reducedMotion ? inputVariants : {}}
                      whileFocus={!reducedMotion ? "focus" : {}}
                      transition={{ duration: 0.2 }}
                    >
                      <Input
                        placeholder="Nome, raça ou descrição..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 bg-background"
                      />
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Label className="text-base">Espécie</Label>
                  <motion.div
                    variants={!reducedMotion ? selectVariants : {}}
                    whileHover={!reducedMotion ? "hover" : {}}
                    whileTap={!reducedMotion ? "tap" : {}}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Select value={filters.species} onValueChange={(value) => handleFilterChange("species", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cachorro">Cachorro</SelectItem>
                        <SelectItem value="gato">Gato</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Label className="text-base">Porte</Label>
                  <motion.div
                    variants={!reducedMotion ? selectVariants : {}}
                    whileHover={!reducedMotion ? "hover" : {}}
                    whileTap={!reducedMotion ? "tap" : {}}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
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
                  </motion.div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Label className="text-base">Idade</Label>
                  <motion.div
                    variants={!reducedMotion ? selectVariants : {}}
                    whileHover={!reducedMotion ? "hover" : {}}
                    whileTap={!reducedMotion ? "tap" : {}}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
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
                  </motion.div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Label className="text-base">Sexo</Label>
                  <div className="flex gap-4 mt-2">
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                      whileTap={!reducedMotion ? { scale: 0.95 } : {}}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <motion.div
                        animate={filters.gender === "macho" ? "checked" : "unchecked"}
                        variants={!reducedMotion ? checkboxVariants : {}}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <Checkbox 
                          id="macho" 
                          checked={filters.gender === "macho"}
                          onCheckedChange={(checked) => handleGenderChange("macho", !!checked)} 
                        />
                      </motion.div>
                      <label htmlFor="macho" className="text-foreground">Macho</label>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                      whileTap={!reducedMotion ? { scale: 0.95 } : {}}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <motion.div
                        animate={filters.gender === "femea" ? "checked" : "unchecked"}
                        variants={!reducedMotion ? checkboxVariants : {}}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <Checkbox 
                          id="femea" 
                          checked={filters.gender === "femea"}
                          onCheckedChange={(checked) => handleGenderChange("femea", !!checked)} 
                        />
                      </motion.div>
                      <label htmlFor="femea" className="text-foreground">Fêmea</label>
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Label className="text-base">Estado</Label>
                  <motion.div
                    variants={!reducedMotion ? selectVariants : {}}
                    whileHover={!reducedMotion ? "hover" : {}}
                    whileTap={!reducedMotion ? "tap" : {}}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Select 
                      value={filters.state} 
                      onValueChange={(value) => handleFilterChange("state", value)}
                      disabled={loadingStates}
                    >
                      <SelectTrigger>
                        {loadingStates ? (
                          <div className="flex items-center">
                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                            Carregando...
                          </div>
                        ) : (
                          <SelectValue placeholder="Selecione um estado" />
                        )}
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state.id} value={state.sigla}>
                            {state.nome}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </motion.div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Label className="text-base">Cidade</Label>
                  <motion.div
                    variants={!reducedMotion ? inputVariants : {}}
                    whileFocus={!reducedMotion ? "focus" : {}}
                    transition={{ duration: 0.2 }}
                  >
                    <Autocomplete
                      options={cities}
                      value={filters.city}
                      onValueChange={(value) => handleFilterChange("city", value)}
                      placeholder={filters.state ? "Digite o nome da cidade..." : "Selecione um estado primeiro"}
                      loading={loadingCities}
                      disabled={!filters.state}
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="flex gap-2"
                  variants={itemVariants}
                >
                  <motion.div
                    variants={!reducedMotion ? buttonVariants : {}}
                    whileHover={!reducedMotion ? "hover" : {}}
                    whileTap={!reducedMotion ? "tap" : {}}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Aplicar Filtros
                    </Button>
                  </motion.div>
                  <motion.div
                    variants={!reducedMotion ? buttonVariants : {}}
                    whileHover={!reducedMotion ? "hover" : {}}
                    whileTap={!reducedMotion ? "tap" : {}}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Button variant="outline" onClick={clearFilters}>
                      Limpar
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
          
          {/* Animals Grid */}
          <div className="w-full md:w-3/4">
            <motion.div
              className="flex justify-between items-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-foreground">
                {searchQuery ? `Resultados para "${searchQuery}"` : "Todos os Animais"}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {filteredAnimals.length} {filteredAnimals.length === 1 ? "animal encontrado" : "animais encontrados"}
              </p>
            </motion.div>
            
            {filteredAnimals.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredAnimals.map((animal, index) => (
                  <AnimatedAnimalCard key={animal.id} animal={animal} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Heart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Nenhum animal encontrado</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {searchQuery 
                    ? `Não encontramos animais para "${searchQuery}" com os filtros selecionados.` 
                    : "Não há animais disponíveis com os filtros selecionados."}
                </p>
                <motion.div
                  whileHover={!reducedMotion ? { scale: 1.05 } : {}}
                  whileTap={!reducedMotion ? { scale: 0.95 } : {}}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Button onClick={clearFilters} variant="outline">
                    Limpar filtros
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;