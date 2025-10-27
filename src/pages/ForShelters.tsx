import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Shield, Users, Heart, FileText, Calendar, MessageCircle, BarChart } from "lucide-react";
import Navigation from "@/components/Navigation";

const ForShelters = () => {
  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Aumento de Visibilidade",
      description: "Amplie o alcance do seu canil e mostre seus animais para um público maior."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Mais Adoções",
      description: "Conecte seus animais com famílias amorosas de forma mais eficiente."
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Relatórios e Estatísticas",
      description: "Acompanhe métricas importantes sobre adoções e engajamento."
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Sistema de Mensagens",
      description: "Comunique-se diretamente com potenciais adotantes."
    }
  ];

  const features = [
    "Cadastro e gerenciamento de animais",
    "Sistema de solicitações de adoção",
    "Dashboard administrativo com estatísticas",
    "Página pública do canil personalizável",
    "Sistema de mensagens integrado",
    "Atualização de status dos animais",
    "Histórico de adoções realizadas"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Para Canis e Abrigos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Conecte seus animais a famílias amorosas e simplifique o processo de adoção com nossa plataforma.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Benefícios da Plataforma</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center bg-background">
                <CardHeader>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-blue-900">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Funcionalidades Disponíveis</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <CheckCircle className="h-6 w-6 mr-2 text-green-500" />
                  Para Gestão de Animais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Cadastro completo com fotos, vídeos e histórico</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Atualização de status (disponível, em processo, adotado)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Informações médicas e comportamentais</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Galeria de fotos e vídeos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Shield className="h-6 w-6 mr-2 text-blue-500" />
                  Para Gestão de Adoções
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Recebimento e gerenciamento de solicitações de adoção</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Sistema de mensagens com adotantes</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Controle de histórico de adoções realizadas</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-foreground">Dashboard com métricas e estatísticas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Validation Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Processo de Validação</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-background">
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-blue-900">
                  <FileText className="h-8 w-8" />
                </div>
                <CardTitle className="text-foreground">1. Inscrição</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Preencha o formulário de inscrição com dados da organização e documentos necessários.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-background">
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-blue-900">
                  <Calendar className="h-8 w-8" />
                </div>
                <CardTitle className="text-foreground">2. Análise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Nossa equipe analisa a documentação e pode agendar uma visita às instalações.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-background">
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-blue-900">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <CardTitle className="text-foreground">3. Aprovação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Após aprovação, sua conta é ativada e você pode começar a cadastrar animais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-background rounded-xl p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Pronto para Começar?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto dark:text-gray-300">
            Junte-se à nossa comunidade de canis e abrigos comprometidos com o bem-estar animal.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">Cadastre seu Canil</Button>
        </div>
      </div>
    </div>
  );
};

export default ForShelters;