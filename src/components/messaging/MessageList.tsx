import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Message } from '@/types/messaging';
import { messagingService } from '@/services/messagingService';
import { useAnimation } from '@/contexts/AnimationContext';

interface MessageListProps {
  conversationId: string;
  userId: string;
  userType: 'adopter' | 'shelter';
}

const MessageList = ({ conversationId, userId, userType }: MessageListProps) => {
  const { reducedMotion } = useAnimation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadMessages();
  }, [conversationId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadMessages = async () => {
    try {
      const data = await messagingService.getMessages(conversationId);
      setMessages(data);
      
      // Marcar mensagens como lidas
      await messagingService.markAsRead(conversationId, userId);
    } catch (error) {
      console.error('Error loading messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Hoje';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Ontem';
    } else {
      return date.toLocaleDateString('pt-BR');
    }
  };

  const groupMessagesByDate = (messages: Message[]) => {
    const groups: { [date: string]: Message[] } = {};
    
    messages.forEach(message => {
      const date = message.timestamp.toDateString();
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(message);
    });
    
    return groups;
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
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const messageGroups = groupMessagesByDate(messages);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full text-gray-500">
          <p>Nenhuma mensagem nesta conversa</p>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Object.entries(messageGroups).map(([date, dateMessages]) => (
            <div key={date}>
              {/* Date Separator */}
              <div className="flex items-center justify-center my-4">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1">
                  <span className="text-xs text-gray-600 dark:text-gray-300">
                    {formatDate(new Date(date))}
                  </span>
                </div>
              </div>
              
              {/* Messages for this date */}
              {dateMessages.map((message, index) => {
                const isOwn = message.senderId === userId;
                
                return (
                  <motion.div
                    key={message.id}
                    variants={itemVariants}
                    className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-4`}
                  >
                    <div className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      {!isOwn && (
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={message.senderId} />
                          <AvatarFallback>
                            {message.senderName.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      )}
                      
                      <Card className={`${isOwn ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                        <CardContent className="p-3">
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-1 ${isOwn ? 'text-primary-foreground/70' : 'text-gray-500'}`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </motion.div>
      )}
    </div>
  );
};

export default MessageList;