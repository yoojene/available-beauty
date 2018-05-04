export interface Booking {
  availabilityId: string;
  stylistAccepted: boolean;
  userAccepted: boolean;
}

export enum BookingStatus {
  accepted = 'ACCEPTED',
  pending = 'PENDING',
  cancelled = 'CANCELLED',
}
