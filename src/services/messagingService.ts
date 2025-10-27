import { Message, Conversation, MessageRequest } from '@/types/messaging';

// Mock data - em um app real isso viria de uma API
const mockConversations: Conversation[] = [
  {
    id: '1',
    participants: [
      { id: 'user1', name: 'João Silva', type: 'adopter' },
      { id: 'shelter1', name: 'Abrigo Amor aos Animais', type: 'shelter' }
    ],
    lastMessage: {
      id: 'msg1',
      senderId: 'shelter1',
      senderName: 'Abrigo Amor aos Animais',
      senderType: 'shelter',
      receiverId: 'user1',
      receiverName: 'João Silva',
      receiverType: 'adopter',
      content: 'Olá João! Vi seu interesse no Thor. Gostaria de agendar uma visita para conhecê-lo?',
      timestamp: new Date('2023-10-15T14:30:00'),
      isRead: false,
      animalId: '1',
      animalName: 'Thor',
      applicationId: 'app1'
    },
    unreadCount: 1,
    animalId: '1',
    animalName: 'Thor',
    applicationId: 'app1',
    createdAt: new Date('2023-10-14T10:00:00'),
    updatedAt: new Date('2023-10-15T14:30:00')
  },
  {
    id: '2',
    participants: [
      { id: 'user2', name: 'Maria Oliveira', type: 'adopter' },
      { id: 'shelter1', name: 'Abrigo Amor aos Animais', type: 'shelter' }
    ],
    lastMessage: {
      id: 'msg2',
      senderId: 'user2',
      senderName: 'Maria Oliveira',
      senderType: 'adopter',
      receiverId: 'shelter1',
      receiverName: 'Abrigo Amor aos Animais',
      receiverType: 'shelter',
      content: 'Oi! Ainda está disponível para adoção?',
      timestamp: new Date('2023-10-14T16:45:00'),
      isRead: true,
      animalId: '2',
      animalName: 'Luna',
      applicationId: 'app2'
    },
    unreadCount: 0,
    animalId: '2',
    animalName: 'Luna',
    applicationId: 'app2',
    createdAt: new Date('2023-10-13T09:00:00'),
    updatedAt: new Date('2023-10-14T16:45:00')
  }
];

const mockMessages: Message[] = [
  {
    id: 'msg1',
    senderId: 'shelter1',
    senderName: 'Abrigo Amor aos Animais',
    senderType: 'shelter',
    receiverId: 'user1',
    receiverName: 'João Silva',
    receiverType: 'adopter',
    content: 'Olá João! Vi seu interesse no Thor. Gostaria de agendar uma visita para conhecê-lo?',
    timestamp: new Date('2023-10-15T14:30:00'),
    isRead: false,
    animalId: '1',
    animalName: 'Thor',
    applicationId: 'app1'
  },
  {
    id: 'msg2',
    senderId: 'user1',
    senderName: 'João Silva',
    senderType: 'adopter',
    receiverId: 'shelter1',
    receiverName: 'Abrigo Amor aos Animais',
    receiverType: 'shelter',
    content: 'Olá! Sim, tenho muito interesse. Quando posso visitar?',
    timestamp: new Date('2023-10-15T15:00:00'),
    isRead: true,
    animalId: '1',
    animalName: 'Thor',
    applicationId: 'app1'
  },
  {
    id: 'msg3',
    senderId: 'shelter1',
    senderName: 'Abrigo Amor aos Animais',
    senderType: 'shelter',
    receiverId: 'user1',
    receiverName: 'João Silva',
    receiverType: 'adopter',
    content: 'Podemos agendar para sábado às 10h. Funciona para você?',
    timestamp: new Date('2023-10-15T15:30:00'),
    isRead: true,
    animalId: '1',
    animalName: 'Thor',
    applicationId: 'app1'
  }
];

class MessagingService {
  // Obter todas as conversas do usuário
  async getConversations(userId: string, userType: 'adopter' | 'shelter'): Promise<Conversation[]> {
    // Simulando delay de rede
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return mockConversations.filter(conv => 
      conv.participants.some(p => p.id === userId && p.type === userType)
    );
  }

  // Obter mensagens de uma conversa
  async getMessages(conversationId: string): Promise<Message[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return mockMessages.filter(msg => {
      // Em um app real, isso filtraria pela conversa
      return msg.animalId === '1'; // Mock para Thor
    });
  }

  // Enviar mensagem
  async sendMessage(messageRequest: MessageRequest, senderId: string, senderName: string, senderType: 'adopter' | 'shelter'): Promise<Message> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const newMessage: Message = {
      id: `msg${Date.now()}`,
      senderId,
      senderName,
      senderType,
      receiverId: messageRequest.receiverId,
      receiverName: '', // Seria preenchido pela API
      receiverType: messageRequest.receiverType,
      content: messageRequest.content,
      timestamp: new Date(),
      isRead: false,
      animalId: messageRequest.animalId,
      animalName: messageRequest.animalName,
      applicationId: messageRequest.applicationId
    };

    // Em um app real, isso enviaria para a API
    mockMessages.push(newMessage);
    
    return newMessage;
  }

  // Marcar mensagens como lidas
  async markAsRead(conversationId: string, userId: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Em um app real, isso atualizaria no banco de dados
    mockMessages.forEach(msg => {
      if (msg.receiverId === userId) {
        msg.isRead = true;
      }
    });
  }

  // Obter contagem de mensagens não lidas
  async getUnreadCount(userId: string, userType: 'adopter' | 'shelter'): Promise<number> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    return mockMessages.filter(msg => 
      msg.receiverId === userId && !msg.isRead
    ).length;
  }

  // Iniciar nova conversa
  async startConversation(
    participant1: { id: string; name: string; type: 'adopter' | 'shelter' },
    participant2: { id: string; name: string; type: 'adopter' | 'shelter' },
    initialMessage: string,
    animalId?: string,
    animalName?: string,
    applicationId?: string
  ): Promise<Conversation> {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const newConversation: Conversation = {
      id: `conv${Date.now()}`,
      participants: [participant1, participant2],
      unreadCount: 0,
      animalId,
      animalName,
      applicationId,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Enviar mensagem inicial
    await this.sendMessage(
      {
        receiverId: participant2.id,
        receiverType: participant2.type,
        content: initialMessage,
        animalId,
        animalName,
        applicationId
      },
      participant1.id,
      participant1.name,
      participant1.type
    );

    return newConversation;
  }
}

export const messagingService = new MessagingService();