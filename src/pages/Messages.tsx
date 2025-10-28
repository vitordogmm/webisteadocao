import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, MessageCircle, PawPrint } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedNavigation from '@/components/AnimatedNavigation';
import MessagingLayout from '@/components/messaging/MessagingLayout';
import { useAnimation } from '@/contexts/AnimationContext';

const Messages = () => {
  const { reducedMotion } = useAnimation();
  const navigate = useNavigate();
  
  // Mock user data - em um app real isso viria de um contexto de autenticação
  const [user] = useState({
    id: 'user1',
    name: 'João Silva',
    type: 'adopter' as const
  });

  return (
    <div className="min-h-screen bg-background">
      <AnimatedNavigation />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-foreground">Mensagens</h1>
              {user.type === 'adopter' && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/adopter-dashboard')}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar ao Painel
                </Button>
              )}
              {user.type === 'shelter' && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/shelter-dashboard')}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar ao Painel
                </Button>
              )}
            </div>
            
            <motion.div
              whileHover={!reducedMotion ? { scale: 1.05 } : {}}
              whileTap={!reducedMotion ? { scale: 0.95 } : {}}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button asChild variant="outline">
                <Link to="/catalog">
                  <PawPrint className="h-4 w-4 mr-2" />
                  Ver Animais
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-[calc(100vh-200px)]">
            <CardContent className="p-0 h-full">
              <MessagingLayout userId={user.id} userType={user.type} />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Messages;