import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Message } from '@/types/messaging';
import { messagingService } from '@/services/messagingService';
import { MessageBubble } from './MessageBubble';
import DateSeparator from './DateSeparator';
import EmptyState from './EmptyState';
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
        <EmptyState type="messages" />
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Object.entries(messageGroups).map(([date, dateMessages]) => (
            <div key={date}>
              <DateSeparator date={new Date(date)} />
              
              {dateMessages.map((message) => (
                <motion.div
                  key={message.id}
                  variants={itemVariants}
                >
                  <MessageBubble
                    message={message}
                    isOwn={message.senderId === userId}
                    userId={userId}
                  />
                </motion.div>
              ))}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </motion.div>
      )}
    </div>
  );
};

export default MessageList;