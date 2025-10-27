export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderType: 'adopter' | 'shelter';
  receiverId: string;
  receiverName: string;
  receiverType: 'adopter' | 'shelter';
  content: string;
  timestamp: Date;
  isRead: boolean;
  animalId?: string;
  animalName?: string;
  applicationId?: string;
}

export interface Conversation {
  id: string;
  participants: {
    id: string;
    name: string;
    type: 'adopter' | 'shelter';
    avatar?: string;
  }[];
  lastMessage?: Message;
  unreadCount: number;
  animalId?: string;
  animalName?: string;
  applicationId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MessageRequest {
  receiverId: string;
  receiverType: 'adopter' | 'shelter';
  content: string;
  animalId?: string;
  animalName?: string;
  applicationId?: string;
}