export interface Stylist {
  name: string;
  baseLocation: number[];
  mobile: boolean;
  mobileRange?: number;
  bio?: string;
  phoneNumber?: string;
  emailAddress: string;
  avatarImage?: string;
  bannerImage?: string;
  galleryImages?: string[];
  userId: string;
}
