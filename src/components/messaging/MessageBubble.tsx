import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Message } from '@/types/messaging';
import { useAnimation } from '@/contexts/AnimationContext';

interface MessageBubbleProps {
  message: Message;
  isOwn: boolean;
  userId: string;
}

const MessageBubble = ({ message, isOwn, userId }: MessageBubbleProps) => {
  const { reducedMotion } = useAnimation();

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
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
        
        <motion.div
          whileHover={!reducedMotion ? { scale: 1.02 } : {}}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className={`${isOwn ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
            <CardContent className="p-3">
              <p className="text-sm">{message.content}</p>
              <p className={`text-xs mt-1 ${isOwn ? 'text-primary-foreground/70' : 'text-gray-500'}`}>
                {formatTime(message.timestamp)}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MessageBubble;