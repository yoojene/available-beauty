import { Stylist } from '../model/stylist/stylist.model';

export const MOCK_STYLISTS: Stylist[] = [
  {
    stylistName: "Anna's Nail Salon",
    baseLocation: [51.427944, -0.086653],
    mobile: false,
    bio: 'A nail salon in Gipsy Hill',
    emailAddress: 'anna@annasnailsalon.com',
    avatarImage: 'http://google.localdataimages.com/800_WM/2335/23350960.jpg',
    userId: 'test',
    loadImages: false,
    addressLine1: '1',
    addressLine2: 'High Street',
    addressTownCity: 'Newtown',
    addressCounty: 'Newtownshire',
    addressPostcode: 'NT1 123'
  },
  {
    stylistName: 'Nails 2000',
    baseLocation: [51.42795, -0.130874],
    mobile: false,
    bio: 'A nail bar in Streatham Hill',
    emailAddress: 'hello@nails2000.co.uk',
    avatarImage: 'http://s3.amazonaws.com/ldc/large/2335/23358130.jpg',
    userId: 'test',
    loadImages: false,
    addressLine1: '1',
    addressLine2: 'High Street',
    addressTownCity: 'Newtown',
    addressCounty: 'Newtownshire',
    addressPostcode: 'NT1 123'
  },
  {
    stylistName: 'Crystal Nails',
    baseLocation: [51.419838, -0.081319],
    mobile: false,
    bio: 'A nail bar in Crystal Palace',
    emailAddress: 'bookings@crystalnails.co.uk',
    avatarImage: 'http://s3.amazonaws.com/ldc/large/2298/22980398.jpg',
    userId: 'test',
    loadImages: false,
    addressLine1: '1',
    addressLine2: 'High Street',
    addressTownCity: 'Newtown',
    addressCounty: 'Newtownshire',
    addressPostcode: 'NT1 123'
  },
  {
    stylistName: 'Willie Smarts',
    baseLocation: [51.419897, -0.082971],
    mobile: false,
    bio: 'Men and Womens hair styling in SE19',
    emailAddress: 'hello@williesmarts.co.uk',
    avatarImage: 'http://www.williesmarts.co.uk/Images/header.gif',
    userId: 'test',
    loadImages: false,
    addressLine1: '1',
    addressLine2: 'High Street',
    addressTownCity: 'Newtown',
    addressCounty: 'Newtownshire',
    addressPostcode: 'NT1 123'
  }
];
