import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, MessageCircle, PawPrint } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedNavigation from '@/components/AnimatedNavigation';
import ConversationList from '@/components/messaging/ConversationList';
import MessageList from '@/components/messaging/MessageList';
import MessageInput from '@/components/messaging/MessageInput';
import { Conversation } from '@/types/messaging';
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

  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSelectConversation = (conversation: Conversation) => {
    setSelectedConversation(conversation);
  };

  const handleMessageSent = () => {
    setRefreshKey(prev => prev + 1);
  };

  const handleBack = () => {
    setSelectedConversation(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

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
              {selectedConversation && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBack}
                  className="md:hidden"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
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
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="h-[calc(100vh-200px)]"
        >
          <Card className="h-full">
            <CardContent className="p-0 h-full">
              <div className="flex h-full">
                {/* Conversations List - Hidden on mobile when conversation is selected */}
                <div className={`${selectedConversation ? 'hidden md:flex' : 'flex'} w-full md:w-1/3 border-r`}>
                  <ConversationList
                    userId={user.id}
                    userType={user.type}
                    onSelectConversation={handleSelectConversation}
                    selectedConversationId={selectedConversation?.id}
                    key={refreshKey}
                  />
                </div>

                {/* Messages Area */}
                <div className={`${selectedConversation ? 'flex' : 'hidden md:flex'} flex-1 flex-col`}>
                  {selectedConversation ? (
                    <>
                      {/* Conversation Header */}
                      <div className="p-4 border-b">
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleBack}
                            className="md:hidden"
                          >
                            <ArrowLeft className="h-4 w-4" />
                          </Button>
                          
                          <div>
                            <h3 className="font-semibold text-foreground">
                              {selectedConversation.participants.find(p => p.id !== user.id)?.name}
                            </h3>
                            {selectedConversation.animalName && (
                              <p className="text-sm text-gray-500 flex items-center">
                                <PawPrint className="h-3 w-3 mr-1" />
                                {selectedConversation.animalName}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Messages */}
                      <MessageList
                        conversationId={selectedConversation.id}
                        userId={user.id}
                        userType={user.type}
                      />

                      {/* Message Input */}
                      <MessageInput
                        receiverId={selectedConversation.participants.find(p => p.id !== user.id)?.id || ''}
                        receiverType={selectedConversation.participants.find(p => p.id !== user.id)?.type || 'adopter'}
                        senderId={user.id}
                        senderName={user.name}
                        senderType={user.type}
                        animalId={selectedConversation.animalId}
                        animalName={selectedConversation.animalName}
                        applicationId={selectedConversation.applicationId}
                        onMessageSent={handleMessageSent}
                      />
                    </>
                  ) : (
                    <div className="flex-1 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                      >
                        <MessageCircle className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Selecione uma conversa
                        </h3>
                        <p className="text-gray-500">
                          Escolha uma conversa da lista para começar a conversar
                        </p>
                      </motion.div>
                </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Messages;