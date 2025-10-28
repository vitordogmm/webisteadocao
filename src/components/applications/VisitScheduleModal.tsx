import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";

interface VisitScheduleModalProps {
  applicationId: string;
  applicantName: string;
  onSave: (schedule: any) => void;
  onCancel: () => void;
}

const VisitScheduleModal = ({ applicationId, applicantName, onSave, onCancel }: VisitScheduleModalProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  // Formatar número de WhatsApp
  const formatWhatsAppNumber = (value: string) => {
    // Remove todos os caracteres não numéricos
    const cleaned = value.replace(/\D/g, '');
    
    // Se tiver 11 dígitos (DDI + número)
    if (cleaned.length >= 11) {
      const ddi = cleaned.slice(0, 2);
      const ddd = cleaned.slice(2, 4);
      const firstPart = cleaned.slice(4, 8);
      const secondPart = cleaned.slice(8, 12);
      
      if (cleaned.length === 11) {
        return `(${ddd}) ${firstPart}-${secondPart}`;
      } else {
        // Para números com DDI
        return `+${ddi} (${ddd}) ${firstPart}-${secondPart}`;
      }
    }
    
    // Retorna o valor limpo se não tiver 11 dígitos
    return cleaned;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsAppNumber(e.target.value);
    setWhatsapp(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time) return;

    setIsSubmitting(true);
    try {
      await onSave({
        date,
        time,
        whatsapp,
        notes,
        applicationId
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Background overlay */}
      <div 
        className="fixed inset-0 bg-black/50"
        onClick={onCancel}
      />
      
      {/* Modal content */}
      <div className="relative z-[10000] w-full max-w-md">
        <Card className="bg-background border border-border">
          <CardHeader>
            <CardTitle>Agendar Visita</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="applicant">Visitante</Label>
                <Input
                  id="applicant"
                  value={applicantName}
                  disabled
                  className="bg-muted"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Data da Visita *</Label>
                <div className="relative">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                    onClick={() => setShowCalendar(!showCalendar)}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : "Selecione uma data"}
                  </Button>
                  {showCalendar && (
                    <div className="absolute top-full left-0 mt-1 z-[10001] bg-background border border-border rounded-md shadow-lg p-3">
                      <CalendarComponent
                        mode="single"
                        selected={date}
                        onSelect={(selectedDate) => {
                          setDate(selectedDate);
                          setShowCalendar(false);
                        }}
                        locale={ptBR}
                        className="rounded-md border"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Horário *</Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione um horário" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">09:00</SelectItem>
                    <SelectItem value="10:00">10:00</SelectItem>
                    <SelectItem value="11:00">11:00</SelectItem>
                    <SelectItem value="14:00">14:00</SelectItem>
                    <SelectItem value="15:00">15:00</SelectItem>
                    <SelectItem value="16:00">16:00</SelectItem>
                    <SelectItem value="17:00">17:00</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp *</Label>
                <Input
                  id="whatsapp"
                  value={whatsapp}
                  onChange={handleWhatsAppChange}
                  placeholder="(00) 00000-0000"
                  required
                  maxLength={15}
                />
                <p className="text-xs text-gray-500">Digite o número com DDD</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Observações</Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Informações adicionais sobre a visita..."
                  rows={3}
                />
              </div>

              <div className="flex gap-2 pt-4">
                <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
                  Cancelar
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 bg-primary hover:bg-primary-90"
                  disabled={!date || !time || !whatsapp || isSubmitting}
                >
                  {isSubmitting ? "Agendando..." : "Agendar Visita"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VisitScheduleModal;