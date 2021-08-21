export interface User {
  uid: string;
  firstName?: string;
  lastName?: string;
  email: string;
  timestamp: number;
  chatRooms?: string[];
  surfHeats?: string[];
  surfEvents?: string[];
  providers?: string[];
  messagingTokens?: string[];
}

export interface Mail {
  to: string[];
  message: {
    subject: string;
    text: string;
    html?: string;
  };
}

export enum Collection {
  events = "events",
  heats = "heats",
  user = "user",
  mail = "mail",
  messages = "messages",
}
