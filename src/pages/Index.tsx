import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MapPin, Users, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [stats] = useState({
    animalsAdopted: 1248,
    partnerShelters: 86,
    activeAnimals: 324
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Encontre seu novo melhor amigo
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Conectamos animais em situação de abandono com famílias amorosas. Adote, não compre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/catalog">Ver Animais Disponíveis</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/how-to-adopt">Como Adotar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <Heart className="h-12 w-12 text-red-500 mb-4" />
                  <span className="text-3xl font-bold text-gray-800">{stats.animalsAdopted}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Animais Adotados</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <Users className="h-12 w-12 text-blue-500 mb-4" />
                  <span className="text-3xl font-bold text-gray-800">{stats.partnerShelters}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Canis Parceiros</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <PawPrint className="h-12 w-12 text-green-500 mb-4" />
                  <span className="text-3xl font-bold text-gray-800">{stats.activeAnimals}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Animais Disponíveis</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Procure</h3>
              <p className="text-gray-600">Navegue pelo nosso catálogo de animais disponíveis para adoção</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Conecte-se</h3>
              <p className="text-gray-600">Entre em contato diretamente com o canil responsável</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Conheça</h3>
              <p className="text-gray-600">Agende uma visita para conhecer o animal pessoalmente</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Adote</h3>
              <p className="text-gray-600">Complete o processo de adoção e leve seu novo amigo para casa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para fazer a diferença?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram suas vidas ao adotar um animal.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link to="/catalog">Ver Animais Disponíveis</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;