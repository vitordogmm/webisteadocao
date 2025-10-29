import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PawPrint, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Animal } from "@/types/animal";

interface AdoptionButtonProps {
  animal: Animal;
  onAdopt: (animalId: number, applicationData: any) => void;
  onSave: (animalId: number) => void;
}

const AdoptionButton = ({ animal, onAdopt, onSave }: AdoptionButtonProps) => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [applicationData, setApplicationData] = useState({
    motivation: "",
    experience: "",
    housingType: "",
    hasOtherPets: false,
    contactPhone: "",
    contactEmail: ""
  });

  const handleAdopt = () => {
    if (!applicationData.motivation.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, preencha a motivação para adoção.",
        variant: "destructive",
      });
      return;
    }

    onAdopt(animal.id, applicationData);
    setIsDialogOpen(false);
    toast({
      title: "Solicitação enviada!",
      description: "Sua solicitação de adoção foi enviada com sucesso.",
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      onSave(animal.id);
      toast({
        title: "Animal salvo!",
        description: `${animal.name} foi adicionado aos seus favoritos.`,
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível salvar o animal. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex gap-2">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="bg-primary hover:bg-primary-90 flex-1 relative">
            <PawPrint className="h-4 w-4 mr-2" />
            Quero Adotar
            <motion.div 
              className="absolute -top-2 -right-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
            >
              <PawPrint className="w-4 h-4 text-white" />
            </motion.div>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Solicitar Adoção - {animal.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="motivation">Motivação para Adoção *</Label>
              <Textarea
                id="motivation"
                value={applicationData.motivation}
                onChange={(e) => setApplicationData(prev => ({ ...prev, motivation: e.target.value }))}
                placeholder="Conte-nos por que você quer adotar este animal..."
                rows={3}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="experience">Experiência com Animais</Label>
              <Textarea
                id="experience"
                value={applicationData.experience}
                onChange={(e) => setApplicationData(prev => ({ ...prev, experience: e.target.value }))}
                placeholder="Já teve experiência com animais? Quais?"
                rows={2}
              />
            </div>
            
            <div>
              <Label htmlFor="housingType">Tipo de Moradia</Label>
              <Input
                id="housingType"
                value={applicationData.housingType}
                onChange={(e) => setApplicationData(prev => ({ ...prev, housingType: e.target.value }))}
                placeholder="Casa, apartamento, etc."
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="hasOtherPets"
                checked={applicationData.hasOtherPets}
                onChange={(e) => setApplicationData(prev => ({ ...prev, hasOtherPets: e.target.checked }))}
                className="rounded"
              />
              <Label htmlFor="hasOtherPets">Possui outros animais?</Label>
            </div>
            
            <div>
              <Label htmlFor="contactPhone">Telefone de Contato *</Label>
              <Input
                id="contactPhone"
                value={applicationData.contactPhone}
                onChange={(e) => setApplicationData(prev => ({ ...prev, contactPhone: e.target.value }))}
                placeholder="(00) 00000-0000"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="contactEmail">Email de Contato *</Label>
              <Input
                id="contactEmail"
                type="email"
                value={applicationData.contactEmail}
                onChange={(e) => setApplicationData(prev => ({ ...prev, contactEmail: e.target.value }))}
                placeholder="seu@email.com"
                required
              />
            </div>
            
            <div className="flex gap-2 pt-2">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="flex-1">
                Cancelar
              </Button>
              <Button onClick={handleAdopt} className="flex-1 bg-primary hover:bg-primary-90">
                Enviar Solicitação
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <Button 
        variant="outline" 
        onClick={handleSave}
        disabled={isSaving}
        className="flex-1"
      >
        <Heart className="h-4 w-4 mr-2" />
        {isSaving ? "Salvando..." : "Salvar Animal"}
      </Button>
    </div>
  );
};

export default AdoptionButton;