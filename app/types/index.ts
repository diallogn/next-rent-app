import { User, Listing, Reservation } from '@prisma/client';

export type SafeListing = Omit<Listing, 'createdAt'> & {
  createdAt: string;
};

export type SafeReservation = Omit<
  Reservation,
  'createdAt' | 'starDate' | 'endDate' | 'listing'
> & {
  createdAt: string;
  starDate: string;
  endDate: string;
  listing: SafeListing;
};

export type SafeUser = Omit<
  User,
  'createdAt' | 'updatedAt' | 'emailVerified'
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
