export interface Availability {
  stylistId: string;
  booked: boolean;
  datetime: Date;
  availabilityId: string;
}

export interface AvailabilitySlot {
  date: string;
  time: string;
  epoch: number;
  disabled: boolean;
  period?: string;
}
