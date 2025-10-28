import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, Search, PawPrint } from 'lucide-react';
import { Conversation } from '@/types/messaging';
import { messagingService } from '@/services/messagingService';
import EmptyState from './EmptyState';
import { useAnimation } from '@/contexts/AnimationContext';

interface ConversationListProps {
  userId: string;
  userType: 'adopter' | 'shelter';
  onSelectConversation: (conversation: Conversation) => void;
  selectedConversationId?: string;
}

const ConversationList = ({ userId, userType, onSelectConversation, selectedConversationId }: ConversationListProps) => {
  const { reducedMotion } = useAnimation();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadConversations();
  }, [userId, userType]);

  const loadConversations = async () => {
    try {
      const data = await messagingService.getConversations(userId, userType);
      setConversations(data);
    } catch (error) {
      console.error('Error loading conversations:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredConversations = conversations.filter(conv => {
    const otherParticipant = conv.participants.find(p => p.id !== userId);
    if (!otherParticipant) return false;
    
    return otherParticipant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           conv.animalName?.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (hours < 1) return 'Agora';
    if (hours < 24) return `${hours}h`;
    if (hours < 48) return 'Ontem';
    return date.toLocaleDateString('pt-BR');
  };

  const getOtherParticipant = (conversation: Conversation) => {
    return conversation.participants.find(p => p.id !== userId);
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold mb-4 text-foreground">Mensagens</h2>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar conversas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.length === 0 ? (
          <EmptyState type="conversations" />
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="p-2"
          >
            {filteredConversations.map((conversation) => {
              const otherParticipant = getOtherParticipant(conversation);
              const isSelected = conversation.id === selectedConversationId;
              
              return (
                <motion.div
                  key={conversation.id}
                  variants={itemVariants}
                  whileHover={!reducedMotion ? { x: 5 } : {}}
                  transition={{ duration: 0.2 }}
                >
                  <Card 
                    className={`mb-2 cursor-pointer transition-all ${
                      isSelected 
                        ? 'bg-primary/10 border-primary' 
                        : 'hover:bg-muted'
                    }`}
                    onClick={() => onSelectConversation(conversation)}
                  >
                    <CardContent className="p-3 flex items-start space-x-3"> {/* Adjusted padding */}
                      <Avatar>
                        <AvatarImage src={otherParticipant?.avatar} />
                        <AvatarFallback>
                          {otherParticipant?.name?.charAt(0) || '?'}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-foreground truncate">
                            {otherParticipant?.name}
                          </h3>
                          <span className="text-xs text-gray-500 ml-2">
                            {conversation.lastMessage && formatTime(conversation.lastMessage.timestamp)}
                          </span>
                        </div>
                        
                        {conversation.animalName && (
                          <div className="flex items-center text-xs text-gray-500 mb-1">
                            <PawPrint className="h-3 w-3 mr-1" />
                            {conversation.animalName}
                          </div>
                        )}
                        
                        <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                          {conversation.lastMessage?.content}
                        </p>
                      </div>
                      
                      {conversation.unreadCount > 0 && (
                        <Badge variant="default" className="ml-2">
                          {conversation.unreadCount}
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ConversationList;