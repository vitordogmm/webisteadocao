import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, MapPin } from "lucide-react";
import { Application } from "@/types/application";

interface ApplicationDetailsModalProps {
  application: Application;
  onUpdateStatus: (applicationId: string, status: string, notes?: string) => void;
  onClose: () => void;
}

const ApplicationDetailsModal = ({ application, onUpdateStatus, onClose }: ApplicationDetailsModalProps) => {
  const [status, setStatus] = useState(application.status);
  const [notes, setNotes] = useState(application.notes || "");

  const handleUpdateStatus = () => {
    onUpdateStatus(application.id, status, notes);
    onClose();
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary"><Clock className="h-3 w-3 mr-1" /> Pendente</Badge>;
      case "approved":
        return <Badge variant="default"><Clock className="h-3 w-3 mr-1" /> Aprovado</Badge>;
      case "rejected":
        return <Badge variant="destructive"><Clock className="h-3 w-3 mr-1" /> Rejeitado</Badge>;
      default:
        return <Badge variant="secondary">Desconhecido</Badge>;
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Background overlay */}
      <div 
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="relative z-[10000] w-full max-w-2xl max-h-[80vh] overflow-y-auto">
        <Card className="bg-background border border-border">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Detalhes da Solicitação</CardTitle>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Animal Information */}
            <div className="border-b pb-4">
              <h3 className="font-semibold mb-3">Informações do Animal</h3>
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <User className="h-8 w-8 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">{application.animalName}</h4>
                  <p className="text-gray-600">{application.animalSpecies} • {application.animalBreed}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{application.animalLocation}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Applicant Information */}
            <div className="border-b pb-4">
              <h3 className="font-semibold mb-3">Informações do Adotante</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">{application.applicantName}</h4>
                    <p className="text-gray-600">{application.applicantEmail}</p>
                    <p className="text-gray-600">{application.applicantPhone}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Idade</p>
                    <p className="font-medium">{application.applicantAge} anos</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Experiência com animais</p>
                    <p className="font-medium">{application.applicantExperience}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tipo de moradia</p>
                    <p className="font-medium">{application.applicantHousingType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tem outras pets?</p>
                    <p className="font-medium">{application.hasOtherPets ? "Sim" : "Não"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Details */}
            <div className="border-b pb-4">
              <h3 className="font-semibold mb-3">Detalhes da Solicitação</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Solicitado em: {new Date(application.createdAt).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Status: {getStatusBadge(status)}</span>
                </div>
                {application.visitScheduled && (
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Visita agendada para: {new Date(application.visitDate).toLocaleString('pt-BR')}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Motivation */}
            <div>
              <h3 className="font-semibold mb-3">Motivação para Adoção</h3>
              <p className="text-gray-700">{application.motivation}</p>
            </div>

            {/* Status Update */}
            <div className="space-y-4">
              <h3 className="font-semibold">Atualizar Status</h3>
              <div className="space-y-2">
                <label htmlFor="status" className="text-sm font-medium">Novo Status</label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pendente</SelectItem>
                    <SelectItem value="approved">Aprovado</SelectItem>
                    <SelectItem value="rejected">Rejeitado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="notes" className="text-sm font-medium">Observações</label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Adicione observações sobre a decisão..."
                  rows={3}
                />
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button variant="outline" onClick={onClose} className="flex-1">
                Fechar
              </Button>
              <Button onClick={handleUpdateStatus} className="flex-1 bg-primary hover:bg-primary/90">
                Atualizar Status
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApplicationDetailsModal;