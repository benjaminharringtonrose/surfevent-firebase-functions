export interface IStringMap<T> {
  [x: string]: T;
}

export interface ListPickerItem {
  id: any;
  label: any;
}

export type Division = ListPickerItem | string;

export interface Score {
  key: string;
  surfer: string;
  color: string;
  waves: number[];
}

export enum Collection {
  events = "events",
  heats = "heats",
  user = "user",
  mail = "mail",
  messages = "messages",
  organizations = "organizations",
  adminRequests = "adminRequests",
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
  title: string | undefined;
  eventId: string;
  heatId: string;
  uid: string;
  division?: (ListPickerItem & Division) | undefined;
  heatType: HeatType;
  scores: IStringMap<Score>;
  dateStart: Date;
  timeStart: Date;
}

export interface Event {
  uid: string;
  eventId: string;
  eventName: string;
  timeStart: Date;
  dateStart: Date;
  dateEnd: Date;
}

export interface AdminRequest {
  adminRequestId: string;
  organizationId: string;
  uid: string;
  name: string;
}
