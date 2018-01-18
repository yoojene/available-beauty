export interface User {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  avatarImage?: string;
  homeLocation: number[];
  averageStarRating: number;
  isStylist: boolean;
  expanded: boolean;
}
