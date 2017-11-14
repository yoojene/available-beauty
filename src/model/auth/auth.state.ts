export interface LoginDetails {
  email?: string;  // Won't exist for social login?
  password?: string; // ^^
  isNativeLogin: boolean
}

export interface RegistrationDetails {
  userId: number;
  location: string;
  isMobile: boolean;
  travelDistance: number;
  bio: string;
  phone: number;
  email: string;
  avatarphoto: string;
  bannerphoto: string;

}

export interface AuthState {
  isLoggedIn: boolean;
  authToken?: string;
  authTokenExpires?: string;
  userId?: string; // Just for FB Login?
  email?: string; // For native login
}

export const initialState: AuthState = {
  isLoggedIn: false
};

