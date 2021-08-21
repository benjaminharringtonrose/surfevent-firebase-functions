export interface User {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  timestamp: number;
  chatRooms?: string[];
  surfHeats?: string[];
  surfEvents?: string[];
  providers?: string[];
}
