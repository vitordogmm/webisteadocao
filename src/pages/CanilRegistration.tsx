import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { PawPrint, Upload, MapPin, Phone, Mail, Globe, Facebook, Instagram, MessageCircle } from "lucide-react";
import { fetchStates, fetchCities, IBGEState, IBGECity } from "@/services/ibgeService";

const CanilRegistration = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    cnpj: "",
    address: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    website: "",
    description: "",
    mission: "",
    facebook: "",
    instagram: "",
    whatsapp: "",
    termsAccepted: false,
  });

  const [documents, setDocuments] = useState({
    registration: null as File | null,
    facilityPhotos: [] as File[],
  });

  const [states, setStates] = useState<IBGEState[]>([]);
  const [cities, setCities] = useState<IBGECity[]>([]);
  const [loadingStates, setLoadingStates] = useState(true);
  const [loadingCities, setLoadingCities] = useState(false);
  const [searchAddress, setSearchAddress] = useState("");
  const [addressSuggestions, setAddressSuggestions] = useState<any[]>([]);

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
      if (formData.state) {
        setLoadingCities(true);
        const citiesData = await fetchCities(formData.state);
        setCities(citiesData);
        setLoadingCities(false);
      } else {
        setCities([]);
      }
    };

    loadCities();
  }, [formData.state]);

  // Mock address API (in a real app, you would use a proper address API)
  const searchAddressSuggestions = async (query: string) => {
    if (query.length < 3) {
      setAddressSuggestions([]);
      return;
    }

    // Mock API response - in real app, use ViaCEP or similar
    const mockSuggestions = [
      { id: 1, label: "Rua dos Animais, 123 - Vila Mascote, São Paulo - SP, 04210-000" },
      { id: 2, label: "Avenida Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100" },
      { id: 3, label: "Rua Augusta, 1000 - Consolação, São Paulo - SP, 01320-000" },
    ];

    setAddressSuggestions(mockSuggestions);
  };

  const handleAddressSearch = (value: string) => {
    setSearchAddress(value);
    searchAddressSuggestions(value);
  };

  const selectAddress = (address: string) => {
    setSearchAddress(address);
    setAddressSuggestions([]);
    
    // Extract city and state from address (mock implementation)
    const parts = address.split(', ');
    if (parts.length >= 3) {
      const cityState = parts[parts.length - 2].split(' - ');
      if (cityState.length === 2) {
        const city = cityState[0];
        const state = cityState[1];
        
        setFormData(prev => ({
          ...prev,
          address: parts.slice(0, -2).join(', '),
          city: city,
          state: state
        }));
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, termsAccepted: checked }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    if (e.target.files && e.target.files.length > 0) {
      if (type === "registration") {
        setDocuments(prev => ({ ...prev, registration: e.target.files![0] }));
      } else if (type === "facility") {
        const files = Array.from(e.target.files);
        setDocuments(prev => ({ ...prev, facilityPhotos: [...prev.facilityPhotos, ...files] }));
      }
    }
  };

  // Formatar telefone e WhatsApp
  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    
    if (cleaned.length >= 11) {
      const ddd = cleaned.slice(0, 2);
      const firstPart = cleaned.slice(2, 7);
      const secondPart = cleaned.slice(7, 11);
      
      return `(${ddd}) ${firstPart}-${secondPart}`;
    }
    
    return cleaned;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, whatsapp:
Vou corrigir o erro de sintaxe. O problema parece estar na estrutura do JSX. Vou reescrever o arquivo completo com uma estrutura mais limpa:

<dyad-write path="src/pages/CanilRegistration.tsx">
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { PawPrint, Upload, MapPin, Phone, Mail, Globe, Facebook, Instagram, MessageCircle } from "lucide-react";
import { fetchStates, fetchCities, IBGEState, IBGECity } from "@/services/ibgeService";

const CanilRegistration = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    cnpj: "",
    address: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    website: "",
    description: "",
    mission: "",
    facebook: "",
    instagram: "",
    whatsapp: "",
    termsAccepted: false,
  });

  const [documents, setDocuments] = useState({
    registration: null as File | null,
    facilityPhotos: [] as File[],
  });

  const [states, setStates] = useState<IBGEState[]>([]);
  const [cities, setCities] = useState<IBGECity[]>([]);
  const [loadingStates, setLoadingStates] = useState(true);
  const [loadingCities, setLoadingCities] = useState(false);
  const [searchAddress, setSearchAddress] = useState("");
  const [addressSuggestions, setAddressSuggestions] = useState<any[]>([]);

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
      if (formData.state) {
        setLoadingCities(true);
        const citiesData = await fetchCities(formData.state);
        setCities(citiesData);
        setLoadingCities(false);
      } else {
        setCities([]);
      }
    };

    loadCities();
  }, [formData.state]);

  // Mock address API (in a real app, you would use a proper address API)
  const searchAddressSuggestions = async (query: string) => {
    if (query.length < 3) {
      setAddressSuggestions([]);
      return;
    }

    // Mock API response - in real app, use ViaCEP or similar
    const mockSuggestions = [
      { id: 1, label: "Rua dos Animais, 123 - Vila Mascote, São Paulo - SP, 04210-000" },
      { id: 2, label: "Avenida Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100" },
      { id: 3, label: "Rua Augusta, 1000 - Consolação, São Paulo - SP, 01320-000" },
    ];

    setAddressSuggestions(mockSuggestions);
  };

  const handleAddressSearch = (value: string) => {
    setSearchAddress(value);
    searchAddressSuggestions(value);
  };

  const selectAddress = (address: string) => {
    setSearchAddress(address);
    setAddressSuggestions([]);
    
    // Extract city and state from address (mock implementation)
    const parts = address.split(', ');
    if (parts.length >= 3) {
      const cityState = parts[parts.length - 2].split(' - ');
      if (cityState.length === 2) {
        const city = cityState[0];
        const state = cityState[1];
        
        setFormData(prev => ({
          ...prev,
          address: parts.slice(0, -2).join(', '),
          city: city,
          state: state
        }));
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, termsAccepted: checked }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    if (e.target.files && e.target.files.length > 0) {
      if (type === "registration") {
        setDocuments(prev => ({ ...prev, registration: e.target.files![0] }));
      } else if (type === "facility") {
        const files = Array.from(e.target.files);
        setDocuments(prev => ({ ...prev, facilityPhotos: [...prev.facilityPhotos, ...files] }));
      }
    }
  };

  // Formatar telefone e WhatsApp
  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    
    if (cleaned.length >= 11) {
      const ddd = cleaned.slice(0, 2);
      const firstPart = cleaned.slice(2, 7);
      const secondPart = cleaned.slice(7, 11);
      
      return `(${ddd}) ${firstPart}-${secondPart}`;
    }
    
    return cleaned;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, whatsapp: formatted }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
      toast({
        title: "Erro",
        description: "Você precisa aceitar os termos e condições para continuar.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would be an API call
    console.log("Form Data:", formData);
    console.log("Documents:", documents);
    
    toast({
      title: "Cadastro enviado!",
      description: "Seu canil foi cadastrado com sucesso. Entraremos em contato em breve.",
    });
    
    // Redirect to home or dashboard
    navigate("/");
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
      opacity: 0.1,
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
        className="absolute top-20 right-20 opacity-10"
        initial="hidden"
        animate="visible"
        variants={pawPrintVariants}
        transition={{ delay: 0.2 }}
      >
        <PawPrint className="w-16 h-16 text-primary" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 left-10 opacity-10"
        initial="hidden"
        animate="visible"
        variants={pawPrintVariants}
        transition={{ delay: 0.4 }}
      >
        <PawPrint className="w-12 h-12 text-primary" />
      </motion.div>
      
      <Navigation />
      <div className="container mx-auto px-4 py-8 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">Cadastro de Canil</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Cadastre seu canil para começar a conectar animais com famílias amorosas
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Card className="bg-background">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <PawPrint className="h-5 w-5 mr-2" />
                Informações do Canil
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Nome do Canil *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Nome do seu canil"
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="cnpj" className="text-foreground">CNPJ</Label>
                    <Input
                      id="cnpj"
                      name="cnpj"
                      value={formData.cnpj}
                      onChange={handleInputChange}
                      placeholder="00.000.000/0000-00"
                      className="bg-background"
                    />
                  </div>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="address" className="text-foreground">Endereço *</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="address"
                        name="address"
                        value={searchAddress}
                        onChange={(e) => handleAddressSearch(e.target.value)}
                        placeholder="Digite o endereço..."
                        required
                        className="pl-10 bg-background"
                      />
                    </div>
                    {addressSuggestions.length > 0 && (
                      <div className="absolute z-10 w-full mt-1 bg-background border border-border rounded-md shadow-lg">
                        {addressSuggestions.map((suggestion) => (
                          <div
                            key={suggestion.id}
                            className="px-4 py-2 hover:bg-muted cursor-pointer"
                            onClick={() => selectAddress(suggestion.label)}
                          >
                            {suggestion.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="state" className="text-foreground">Estado *</Label>
                    <Select value={formData.state} onValueChange={(value) => setFormData(prev => ({ ...prev, state: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um estado" />
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
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="city" className="text-foreground">Cidade *</Label>
                    <Select value={formData.city} onValueChange={(value) => setFormData(prev => ({ ...prev, city: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma cidade" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city.id} value={city.nome}>
                            {city.nome}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Telefone *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="(00) 00000-0000"
                        required
                        className="pl-10 bg-background"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        required
                        className="pl-10 bg-background"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="website" className="text-foreground">Website</Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="https://seucanil.com.br"
                        className="pl-10 bg-background"
                      />
                    </div>
                  </motion.div>
                </div>
                
                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="description" className="text-foreground">Descrição do Canil *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre o seu canil, sua história e o trabalho que realizam"
                    required
                    className="bg-background"
                    rows={4}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="mission" className="text-foreground">Missão do Canil *</Label>
                  <Textarea
                    id="mission"
                    name="mission"
                    value={formData.mission}
                    onChange={handleInputChange}
                    placeholder="Qual é a missão do seu canil? O que vocês buscam alcançar?"
                    required
                    className="bg-background"
                    rows={3}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants} className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Redes Sociais</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <motion.div variants={itemVariants} className="space-y-2">
                      <Label htmlFor="facebook" className="text-foreground">Facebook</Label>
                      <div className="relative">
                        <Facebook className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="facebook"
                          name="facebook"
                          value={formData.facebook}
                          onChange={handleInputChange}
                          placeholder="Nome da página"
                          className="pl-10 bg-background"
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="space-y-2">
                      <Label htmlFor="instagram" className="text-foreground">Instagram</Label>
                      <div className="relative">
                        <Instagram className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="instagram"
                          name="instagram"
                          value={formData.instagram}
                          onChange={handleInputChange}
                          placeholder="@seucanil"
                          className="pl-10 bg-background"
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="space-y-2">
                      <Label htmlFor="whatsapp" className="text-foreground">WhatsApp</Label>
                      <div className="relative">
                        <MessageCircle className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          id="whatsapp"
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleWhatsAppChange}
                          placeholder="(00) 00000-0000"
                          className="pl-10 bg-background"
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Documentação</h3>
                  
                  <div className="space-y-6">
                    <motion.div variants={itemVariants}>
                      <Label className="text-foreground mb-2 block">Documento de Registro *</Label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/50">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-2 text-gray-500" />
                            <p className="text-sm text-gray-500">
                              <span className="font-semibold">Clique para enviar</span> ou arraste
                            </p>
                            <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 10MB)</p>
                          </div>
                          <Input 
                            type="file" 
                            className="hidden" 
                            onChange={(e) => handleFileChange(e, "registration")}
                            accept=".pdf,.doc,.docx"
                          />
                        </label>
                      </div>
                      {documents.registration && (
                        <p className="mt-2 text-sm text-foreground">
                          Arquivo selecionado: {documents.registration.name}
                        </p>
                      )}
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <Label className="text-foreground mb-2 block">Fotos das Instalações *</Label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/50">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-2 text-gray-500" />
                            <p className="text-sm text-gray-500">
                              <span className="font-semibold">Clique para enviar</span> ou arraste
                            </p>
                            <p className="text-xs text-gray-500">PNG, JPG, JPEG (MAX. 10MB)</p>
                          </div>
                          <Input 
                            type="file" 
                            className="hidden" 
                            onChange={(e) => handleFileChange(e, "facility")}
                            accept=".png,.jpg,.jpeg"
                            multiple
                          />
                        </label>
                      </div>
                      {documents.facilityPhotos.length > 0 && (
                        <div className="mt-2">
                          <p className="text-sm text-foreground mb-2">
                            {documents.facilityPhotos.length} arquivo(s) selecionado(s):
                          </p>
                          <ul className="text-sm text-gray-500">
                            {documents.facilityPhotos.map((file, index) => (
                              <li key={index}>{file.name}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="border-t pt-6">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.termsAccepted}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <Label htmlFor="terms" className="text-foreground">
                      Eu concordo com os <Link to="/terms" className="text-primary hover:underline">termos e condições</Link> e confirmo que todas as informações fornecidas são verdadeiras.
                    </Label>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex justify-end pt-6">
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90"
                    disabled={!formData.termsAccepted}
                  >
                    Enviar Cadastro
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CanilRegistration;