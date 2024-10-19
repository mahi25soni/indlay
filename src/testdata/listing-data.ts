import { BsFuelPumpDieselFill } from "react-icons/bs";
import { FaFire, FaRegHeart, FaTruck } from "react-icons/fa";

export const nameToListingIcon: { [key: string]: React.ElementType } = {
  "Truck Terminal": FaTruck,
  "Fire Station": FaFire,
  "Fuel Station": BsFuelPumpDieselFill,
};

export const listingTestData = {
  "All Properties": [
    {
      name: "Infosys Park",
      address: "28B Highgate Road, London",
      isBestSeller: true,
      amenities: [
        { name: "Truck Terminal", id: "aminity1" },
        { name: "Fire Station", id: "aminity2" },
        { name: "Fuel Station", id: "aminity3" },
        { name: "Parking Garage", id: "aminity4" },
      ],
      id: "fd7s6fs9f",
    },
    {
      name: "Tech Hub",
      address: "12 Silicon Avenue, San Francisco",
      isBestSeller: true,
      amenities: [
        { name: "Wi-Fi", id: "aminity5" },
        { name: "Conference Room", id: "aminity6" },
        { name: "Fire Station", id: "aminity2" },
        { name: "Parking Garage", id: "aminity4" },
      ],
      id: "ab8g7h8j",
    },
    {
      name: "Green Valley",
      address: "45 Green Lane, Melbourne",
      isBestSeller: true,
      amenities: [
        { name: "Truck Terminal", id: "aminity1" },
        { name: "Fuel Station", id: "aminity3" },
        { name: "Gym", id: "aminity7" },
        { name: "Swimming Pool", id: "aminity8" },
      ],
      id: "jk9i0lk9",
    },
    {
      name: "Oceanview Apartments",
      address: "123 Ocean Drive, Miami",
      isBestSeller: false,
      amenities: [
        { name: "Wi-Fi", id: "aminity5" },
        { name: "Fire Station", id: "aminity2" },
        { name: "Parking Garage", id: "aminity4" },
        { name: "Swimming Pool", id: "aminity8" },
      ],
      id: "mn1o2pq3",
    },
    {
      name: "Mountain Retreat",
      address: "200 Mountain Way, Denver",
      isBestSeller: false,
      amenities: [
        { name: "Truck Terminal", id: "aminity1" },
        { name: "Fire Station", id: "aminity2" },
        { name: "Fuel Station", id: "aminity3" },
        { name: "Parking Garage", id: "aminity4" },
      ],
      id: "qr4st5uv",
    },
    {
      name: "City Center Offices",
      address: "99 City Plaza, New York",
      isBestSeller: true,
      amenities: [
        { name: "Wi-Fi", id: "aminity5" },
        { name: "Conference Room", id: "aminity6" },
        { name: "Gym", id: "aminity7" },
        { name: "Parking Garage", id: "aminity4" },
      ],
      id: "wx6yz7za",
    },
    {
      name: "Urban Loft",
      address: "45 Loft Street, Chicago",
      isBestSeller: true,
      amenities: [
        { name: "Truck Terminal", id: "aminity1" },
        { name: "Fuel Station", id: "aminity3" },
        { name: "Swimming Pool", id: "aminity8" },
        { name: "Gym", id: "aminity7" },
      ],
      id: "bc8de9fg",
    },
    {
      name: "Riverside Villas",
      address: "30 Riverbank Road, Seattle",
      isBestSeller: false,
      amenities: [
        { name: "Wi-Fi", id: "aminity5" },
        { name: "Fire Station", id: "aminity2" },
        { name: "Conference Room", id: "aminity6" },
        { name: "Parking Garage", id: "aminity4" },
      ],
      id: "hi1jk2lm",
    },
  ],
  "Best Sellers": [
    {
      name: "Infosys Park",
      address: "28B Highgate Road, London",
      isBestSeller: true,
      amenities: [
        { name: "Truck Terminal", id: "aminity1" },
        { name: "Fire Station", id: "aminity2" },
        { name: "Fuel Station", id: "aminity3" },
        { name: "Parking Garage", id: "aminity4" },
      ],
      id: "fd7s6fs9f",
    },
    {
      name: "Tech Hub",
      address: "12 Silicon Avenue, San Francisco",
      isBestSeller: true,
      amenities: [
        { name: "Wi-Fi", id: "aminity5" },
        { name: "Conference Room", id: "aminity6" },
        { name: "Fire Station", id: "aminity2" },
        { name: "Parking Garage", id: "aminity4" },
      ],
      id: "ab8g7h8j",
    },
    {
      name: "Green Valley",
      address: "45 Green Lane, Melbourne",
      isBestSeller: true,
      amenities: [
        { name: "Truck Terminal", id: "aminity1" },
        { name: "Fuel Station", id: "aminity3" },
        { name: "Gym", id: "aminity7" },
        { name: "Swimming Pool", id: "aminity8" },
      ],
      id: "jk9i0lk9",
    },
    {
      name: "City Center Offices",
      address: "99 City Plaza, New York",
      isBestSeller: true,
      amenities: [
        { name: "Wi-Fi", id: "aminity5" },
        { name: "Conference Room", id: "aminity6" },
        { name: "Gym", id: "aminity7" },
        { name: "Parking Garage", id: "aminity4" },
      ],
      id: "wx6yz7za",
    },
    {
      name: "City Center Offices",
      address: "99 City Plaza, New York",
      isBestSeller: true,
      amenities: [
        { name: "Truck Terminal", id: "amenity45" },
        { name: "Fire Station", id: "amenity46" },
        { name: "Fuel Station", id: "amenity47" },
        { name: "Heart Clinic", id: "amenity48" },
      ],
      id: "wx6yz7za",
    },
    {
      name: "Sunset Villas",
      address: "10 Sunset Boulevard, Los Angeles",
      isBestSeller: true,
      amenities: [
        { name: "Truck Terminal", id: "amenity49" },
        { name: "Fire Station", id: "amenity50" },
        { name: "Fuel Station", id: "amenity51" },
        { name: "Heart Clinic", id: "amenity52" },
      ],
      id: "lm9no1pq",
    },
    {
      name: "The Riverside",
      address: "78 Riverside Road, Boston",
      isBestSeller: true,
      amenities: [
        { name: "Truck Terminal", id: "amenity53" },
        { name: "Fire Station", id: "amenity54" },
        { name: "Fuel Station", id: "amenity55" },
        { name: "Heart Clinic", id: "amenity56" },
      ],
      id: "zy6x4w2q",
    },
    {
      name: "Grand Hotel",
      address: "5 Star Avenue, Las Vegas",
      isBestSeller: true,
      amenities: [
        { name: "Truck Terminal", id: "amenity57" },
        { name: "Fire Station", id: "amenity58" },
        { name: "Fuel Station", id: "amenity59" },
        { name: "Heart Clinic", id: "amenity60" },
      ],
      id: "qr4st5uv",
    },
    {
      name: "Pine Tree Lodge",
      address: "18 Pine Lane, Asheville",
      isBestSeller: true,
      amenities: [
        { name: "Truck Terminal", id: "amenity61" },
        { name: "Fire Station", id: "amenity62" },
        { name: "Fuel Station", id: "amenity63" },
        { name: "Heart Clinic", id: "amenity64" },
      ],
      id: "bc8de9fg",
    },
  ],

  "Featured Lists": [
    {
      name: "Luxury Estates",
      address: "150 Luxury Lane, Beverly Hills",
      isBestSeller: false,
      amenities: [
        { name: "Truck Terminal", id: "amenity65" },
        { name: "Fire Station", id: "amenity66" },
        { name: "Fuel Station", id: "amenity67" },
        { name: "Heart Clinic", id: "amenity68" },
      ],
      id: "featured1",
    },
    {
      name: "Modern Condos",
      address: "220 Modern Street, Toronto",
      isBestSeller: false,
      amenities: [
        { name: "Truck Terminal", id: "amenity69" },
        { name: "Fire Station", id: "amenity70" },
        { name: "Fuel Station", id: "amenity71" },
        { name: "Heart Clinic", id: "amenity72" },
      ],
      id: "featured2",
    },
  ],

  "Latest Properties": [
    {
      name: "Luxury Estates",
      address: "150 Luxury Lane, Beverly Hills",
      isBestSeller: false,
      amenities: [
        { name: "Truck Terminal", id: "amenity65" },
        { name: "Fire Station", id: "amenity66" },
        { name: "Fuel Station", id: "amenity67" },
        { name: "Heart Clinic", id: "amenity68" },
      ],
      id: "featured1",
    },
    {
      name: "Modern Condos",
      address: "220 Modern Street, Toronto",
      isBestSeller: false,
      amenities: [
        { name: "Truck Terminal", id: "amenity69" },
        { name: "Fire Station", id: "amenity70" },
        { name: "Fuel Station", id: "amenity71" },
        { name: "Heart Clinic", id: "amenity72" },
      ],
      id: "featured2",
    },
  ],
};
