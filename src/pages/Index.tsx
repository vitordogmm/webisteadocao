import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MapPin, Users, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [stats] = useState({
    animalsAdopted: 1248,
    partnerShelters: 86,
    activeAnimals: 324
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 dark:text-white">
            Encontre seu novo melhor amigo
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto dark:text-gray-300">
            Conectamos animais em situação de abandono com famílias amorosas. Adote, não compre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/catalog">Ver Animais Disponíveis</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/how-to-adopt">Como Adotar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-background">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <Heart className="h-12 w-12 text-red-500 mb-4" />
                  <span className="text-3xl font-bold text-gray-800 dark:text-white">{stats.animalsAdopted}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">Animais Adotados</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-background">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <Users className="h-12 w-12 text-blue-500 mb-4" />
                  <span className="text-3xl font-bold text-gray-800 dark:text-white">{stats.partnerShelters}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">Canis Parceiros</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-background">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <PawPrint className="h-12 w-12 text-green-500 mb-4" />
                  <span className="text-3xl font-bold text-gray-800 dark:text-white">{stats.activeAnimals}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">Animais Disponíveis</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Como Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-blue-900">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Procure</h3>
              <p className="text-gray-600 dark:text-gray-300">Navegue pelo nosso catálogo de animais disponíveis para adoção</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-blue-900">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Conecte-se</h3>
              <p className="text-gray-600 dark:text-gray-300">Entre em contato diretamente com o canil responsável</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-blue-900">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Conheça</h3>
              <p className="text-gray-600 dark:text-gray-300">Agende uma visita para conhecer o animal pessoalmente</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-blue-900">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Adote</h3>
              <p className="text-gray-600 dark:text-gray-300">Complete o processo de adoção e leve seu novo amigo para casa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para fazer a diferença?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram suas vidas ao adotar um animal.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link to="/catalog">Ver Animais Disponíveis</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;