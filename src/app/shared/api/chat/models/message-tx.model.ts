export interface ChatMessageTx {
  senderId: string,
  receiverId: string,
  content: string,
  status: 'SENT',
}
