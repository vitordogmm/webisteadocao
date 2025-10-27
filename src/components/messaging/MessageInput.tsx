import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { MessageRequest } from '@/types/messaging';
import { messagingService } from '@/services/messagingService';
import { useAnimation } from '@/contexts/AnimationContext';

interface MessageInputProps {
  receiverId: string;
  receiverType: 'adopter' | 'shelter';
  senderId: string;
  senderName: string;
  senderType: 'adopter' | 'shelter';
  animalId?: string;
  animalName?: string;
  applicationId?: string;
  onMessageSent: () => void;
}

const MessageInput = ({
  receiverId,
  receiverType,
  senderId,
  senderName,
  senderType,
  animalId,
  animalName,
  applicationId,
  onMessageSent
}: MessageInputProps) => {
  const { reducedMotion } = useAnimation();
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleSend = async () => {
    if (!message.trim() || sending) return;

    setSending(true);
    try {
      const messageRequest: MessageRequest = {
        receiverId,
        receiverType,
        content: message.trim(),
        animalId,
        animalName,
        applicationId
      };

      await messagingService.sendMessage(messageRequest, senderId, senderName, senderType);
      setMessage('');
      onMessageSent();
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setSending(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <div className="border-t p-4">
      <div className="flex items-end space-x-2">
        <div className="flex-1">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite sua mensagem..."
            className="min-h-[40px] max-h-32 resize-none"
            rows={1}
          />
        </div>
        
        <motion.div
          variants={!reducedMotion ? buttonVariants : {}}
          whileHover={!reducedMotion ? "hover" : {}}
          whileTap={!reducedMotion ? "tap" : {}}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Button
            onClick={handleSend}
            disabled={!message.trim() || sending}
            size="icon"
            className="h-10 w-10"
          >
            {sending ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default MessageInput;