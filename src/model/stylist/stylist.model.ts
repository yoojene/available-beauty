export interface Stylist {
  stylistName: string;
  addressLine1?: string;
  addressLine2?: string;
  addressTownCity?: string;
  addressCounty?: string;
  addressPostcode?: string;
  baseLocation?: number[];
  mobile: boolean;
  mobileRange?: number;
  bio?: string;
  phoneNumber?: string;
  emailAddress: string;
  avatarImage?: string;
  bannerImage?: string;
  galleryImages?: string[];

  userId: string;
  loadImages: boolean;
}
