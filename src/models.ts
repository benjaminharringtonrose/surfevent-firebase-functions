export enum Collection {
  events = "events",
  heats = "heats",
  user = "user",
  mail = "mail",
  messages = "messages",
}

export enum ESA_DIVISIONS {
  BOYSU12 = "BOYSU12",
  BOYSU14 = "BOYSU14",
  BOYSU16 = "BOYSU16",
  JMENU18 = "JMENU18",
  MEN = "MEN",
  GIRLSU12 = "GIRLSU12",
  GIRLSU14 = "GIRLSU14",
  GIRLSU16 = "GIRLSU16",
  JWOMENU18 = "JWOMENU18",
  WOMEN = "WOMEN",
  LADIES = "LADIES",
  MASTERS = "MASTERS",
  SMEN = "SMEN",
  LEGENDS = "LEGENDS",
  GLEGENDS = "GLEGENDS",
}

export enum HeatType {
  regular = "regular",
  quarterFinal = "quarterFinal",
  semiFinal = "semiFinal",
  final = "final",
}

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

export interface Heat {
  eventId: string;
  heatId: string;
  uid: string;
  division: ESA_DIVISIONS;
  heatType: HeatType;
  surfers: string[];
  dateStart: Date;
  timeStart: Date;
}
