export interface User {
  key: string;
  name: string;
  emailAddress: string;
  phoneNumber: string;
  avatarImage?: string;
  homeLocation: number[];
  averageStarRating: number;
  isStylist: boolean;
  skillsExpanded: boolean;
  availsExpanded: boolean;
  addressCounty?: string;
  addressLine1?: string;
  addressLine2?: string;
  addressPostcode?: string;
  bannerImage?: string;
  baseLocation?: string[];
  bio?: string;
  galleryImages?: string[];
  stylistName?: string;
  mobile?: boolean;
  stylistRating?: string;
}
