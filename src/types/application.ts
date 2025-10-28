export interface Application {
  id: number;
  animalId: number;
  animalName: string;
  animalSpecies: string;
  animalBreed: string;
  animalLocation: string;
  applicantId: number;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  applicantAge: number;
  applicantExperience: string;
  applicantHousingType: string;
  hasOtherPets: boolean;
  motivation: string;
  status: "pending" | "approved" | "rejected";
  notes?: string;
  visitScheduled?: boolean;
  visitDate?: Date;
  visitTime?: string;
  visitWhatsapp?: string;
  createdAt: Date;
  updatedAt: Date;
}