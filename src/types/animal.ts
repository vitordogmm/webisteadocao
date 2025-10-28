export interface Animal {
  id: number;
  name: string;
  species: string;
  breed: string;
  age: string;
  size: string;
  gender: string;
  weight?: string;
  location: string;
  description: string;
  status: "available" | "in-process" | "adopted";
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}