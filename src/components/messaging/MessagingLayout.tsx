import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageCircle, PawPrint } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ConversationList from './ConversationList';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { Conversation } from '@/types/messaging';
import { useAnimation } from '@/contexts/AnimationContext';

interface MessagingLayoutProps {
  userId: string;
  userType: 'adopter' | 'shelter';
}

const MessagingLayout = ({ userId, userType }: MessagingLayoutProps) => {
  const { reducedMotion } = useAnimation();
  const navigate = useNavigate();
  
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-full"
    >
      <Card className="h-full">
        <CardContent className="p-0 h-full">
          <div className="flex h-full">
            {/* Conversations List - Hidden on mobile when conversation is selected */}
            <div className={`${selectedConversation ? 'hidden md:flex' : 'flex'} w-full md:w-1/3 border-r`}>
              <ConversationList
                userId={userId}
                userType={userType}
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
                          {selectedConversation.participants.find(p => p.id !== userId)?.name}
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
                    userId={userId}
                    userType={userType}
                  />

                  {/* Message Input */}
                  <MessageInput
                    receiverId={selectedConversation.participants.find(p => p.id !== userId)?.id || ''}
                    receiverType={selectedConversation.participants.find(p => p.id !== userId)?.type || 'adopter'}
                    senderId={userId}
                    senderName={selectedConversation.participants.find(p => p.id === userId)?.name || ''}
                    senderType={userType}
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
  );
};

export default MessagingLayout;