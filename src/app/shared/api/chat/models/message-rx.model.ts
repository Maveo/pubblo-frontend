export interface ChatMessageRx {
  id: string,
  senderId: string,
  receiverId: string,
  senderName: string,
  receiverName: string,
  content: string,
  status: 'SENT' | 'READ',
  statusTimestamp: string,
  createdTimestamp: string,
}
