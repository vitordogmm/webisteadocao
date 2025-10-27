import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { PawPrint, Upload } from "lucide-react";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Cadastro de Canil</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Cadastre seu canil para começar a conectar animais com famílias amorosas
            </p>
          </div>

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
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Nome do Canil *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nome do seu canil"
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cnpj" className="text-foreground">CNPJ</Label>
                    <Input
                      id="cnpj"
                      name="cnpj"
                      value={formData.cnpj}
                      onChange={handleChange}
                      placeholder="00.000.000/0000-00"
                      className="bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-foreground">Endereço *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Rua, número, bairro"
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-foreground">Cidade *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Cidade"
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-foreground">Estado *</Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Estado"
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Telefone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-foreground">Website</Label>
                    <Input
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://seucanil.com.br"
                      className="bg-background"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-foreground">Descrição do Canil *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Conte-nos sobre o seu canil, sua história e o trabalho que realizam"
                    required
                    className="bg-background"
                    rows={4}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="mission" className="text-foreground">Missão do Canil *</Label>
                  <Textarea
                    id="mission"
                    name="mission"
                    value={formData.mission}
                    onChange={handleChange}
                    placeholder="Qual é a missão do seu canil? O que vocês buscam alcançar?"
                    required
                    className="bg-background"
                    rows={3}
                  />
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Redes Sociais</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="facebook" className="text-foreground">Facebook</Label>
                      <Input
                        id="facebook"
                        name="facebook"
                        value={formData.facebook}
                        onChange={handleChange}
                        placeholder="Nome da página"
                        className="bg-background"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="instagram" className="text-foreground">Instagram</Label>
                      <Input
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        placeholder="@seucanil"
                        className="bg-background"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp" className="text-foreground">WhatsApp</Label>
                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className="bg-background"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Documentação</h3>
                  
                  <div className="space-y-6">
                    <div>
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
                    </div>
                    
                    <div>
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
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
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
                </div>
                
                <div className="flex justify-end pt-6">
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90"
                    disabled={!formData.termsAccepted}
                  >
                    Enviar Cadastro
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CanilRegistration;