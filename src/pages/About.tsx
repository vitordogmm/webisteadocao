import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Users, Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const About = () => {
  const teamMembers = [
    {
      name: "Ana Silva",
      role: "Fundadora",
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      name: "Carlos Oliveira",
      role: "Diretor de Tecnologia",
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      name: "Mariana Costa",
      role: "Diretora de Parcerias",
      image: "/placeholder.svg?height=200&width=200"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Sobre Nós</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Conectando animais em situação de abandono com famílias amorosas desde 2023.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <Card className="bg-background">
            <CardHeader>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 dark:bg-blue-900">
                <Heart className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <CardTitle className="text-2xl text-foreground">Nossa Missão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">
                Facilitar o processo de adoção de animais em situação de abandono, conectando-os 
                com famílias responsáveis e amorosas.
              </p>
              <p className="text-foreground">
                Promovemos a conscientização sobre a importância da adoção responsável e o combate 
                ao abandono animal.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background">
            <CardHeader>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 dark:bg-green-900">
                <Eye className="h-8 w-8 text-green-600 dark:text-green-300" />
              </div>
              <CardTitle className="text-2xl text-foreground">Nossa Visão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">
                Ser a maior plataforma de adoção de animais da América Latina, reconhecida pela 
                eficácia em conectar animais e famílias.
              </p>
              <p className="text-foreground">
                Trabalhamos para um mundo onde todos os animais tenham um lar amoroso e responsável.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Nossa História</h2>
          <Card className="bg-background">
            <CardContent className="p-8">
              <p className="text-foreground mb-4">
                A plataforma nasceu em 2023 da necessidade de conectar animais em situação de abandono 
                com famílias que desejam adotar. Nossa fundadora, Ana Silva, percebeu que muitos 
                animais ficavam por anos esperando por um lar devido à falta de visibilidade dos 
                canis e abrigos.
              </p>
              <p className="text-foreground mb-4">
                Com o objetivo de resolver esse problema, reunimos um time de desenvolvedores, 
                designers e especialistas em bem-estar animal para criar uma plataforma que 
                simplificasse o processo de adoção, tornando-o mais acessível e eficiente para 
                todos os envolvidos.
              </p>
              <p className="text-foreground">
                Hoje, já conectamos milhares de animais a famílias amorosas e continuamos 
                crescendo para alcançar ainda mais vidas.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-background">
              <CardHeader>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-purple-900">
                  <Heart className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                </div>
                <CardTitle className="text-foreground">Compaixão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Agimos com empatia e cuidado em todas as nossas ações, priorizando o bem-estar dos animais.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-background">
              <CardHeader>
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-yellow-900">
                  <Target className="h-8 w-8 text-yellow-600 dark:text-yellow-300" />
                </div>
                <CardTitle className="text-foreground">Responsabilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprometemo-nos com a transparência e a ética em todas as nossas relações.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-background">
              <CardHeader>
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-red-900">
                  <Users className="h-8 w-8 text-red-600 dark:text-red-300" />
                </div>
                <CardTitle className="text-foreground">Comunidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Acreditamos no poder da colaboração e na construção de uma comunidade solidária.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Nossa Equipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center bg-background">
                <CardHeader>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-foreground">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Junte-se a Nós</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto dark:text-gray-300">
            Seja um adotante responsável ou cadastre seu canil para ajudar mais animais a encontrarem lares.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/catalog">Adotar um Animal</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/for-shelters">Cadastrar Canil</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;