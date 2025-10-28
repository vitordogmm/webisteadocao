import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageCircle, PawPrint } from 'lucide-react';
import { Conversation } from '@/types/messaging';
import { useAnimation } from '@/contexts/AnimationContext';

interface ConversationHeaderProps {
  conversation: Conversation;
  userId: string;
  onBack: () => void;
}

const ConversationHeader = ({ conversation, userId, onBack }: ConversationHeaderProps) => {
  const { reducedMotion } = useAnimation();
  
  const otherParticipant = conversation.participants.find(p => p.id !== userId);

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <Card className="border-b">
      <CardContent className="p-4">
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="md:hidden"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          
          <Avatar className="w-10 h-10">
            <AvatarImage src={otherParticipant?.avatar} />
            <AvatarFallback>
              {otherParticipant?.name?.charAt(0) || '?'}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">
              {otherParticipant?.name}
            </h3>
            {conversation.animalName && (
              <p className="text-sm text-gray-500 flex items-center">
                <PawPrint className="h-3 w-3 mr-1" />
                {conversation.animalName}
              </p>
            )}
          </div>
          
          {conversation.unreadCount > 0 && (
            <Badge variant="default" className="ml-2">
              {conversation.unreadCount}
            </Badge>
          )}
          
          <motion.div
            variants={!reducedMotion ? buttonVariants : {}}
            whileHover={!reducedMotion ? "hover" : {}}
            whileTap={!reducedMotion ? "tap" : {}}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Button variant="ghost" size="sm">
              <MessageCircle className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConversationHeader;