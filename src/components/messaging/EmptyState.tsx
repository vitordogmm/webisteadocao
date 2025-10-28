import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, PawPrint } from 'lucide-react';
import { useAnimation } from '@/contexts/AnimationContext';

interface EmptyStateProps {
  type: 'conversations' | 'messages';
}

const EmptyState = ({ type }: EmptyStateProps) => {
  const { reducedMotion } = useAnimation();

  const getEmptyStateContent = () => {
    if (type === 'conversations') {
      return {
        icon: MessageCircle,
        title: 'Nenhuma conversa ainda',
        description: 'Comece uma conversa selecionando um animal ou canil',
        action: 'Ver Animais Disponíveis'
      };
    } else {
      return {
        icon: PawPrint,
        title: 'Nenhuma mensagem nesta conversa',
        description: 'Seja o primeiro a enviar uma mensagem',
        action: 'Enviar Mensagem'
      };
    }
  };

  const content = getEmptyStateContent();
  const Icon = content.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-full text-center"
    >
      <motion.div
        whileHover={!reducedMotion ? { scale: 1.1 } : {}}
        transition={{ type: "spring", stiffness: 300 }}
        className="mb-4"
      >
        <Icon className="h-16 w-16 mx-auto text-gray-400" />
      </motion.div>
      
      <h3 className="text-xl font-semibold text-foreground mb-2">
        {content.title}
      </h3>
      <p className="text-gray-500 mb-6 max-w-md">
        {content.description}
      </p>
      
      <motion.div
        whileHover={!reducedMotion ? { scale: 1.05 } : {}}
        whileTap={!reducedMotion ? { scale: 0.95 } : {}}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg">
          {content.action}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default EmptyState;