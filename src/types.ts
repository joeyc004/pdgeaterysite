export type MenuCategory = 
  | 'all'
  | 'breakfast'
  | 'sandwiches'
  | 'potatoes'
  | 'salads'
  | 'specials'
  | 'drinks';

export type DietaryTag = 'vegetarian' | 'vegan' | 'gluten-free' | 'chef-pick';

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'all'>;
  subCategory?: string;
  price: number;
  priceFormatted?: string;
  description: string;
  image: string;
  tags: DietaryTag[];
  calories?: number;
  allergens: string[];
  options?: string[];
  isPopular?: boolean;
}

export type TravelerType = 'All' | 'Couples' | 'Families' | 'Friends' | 'Solo' | 'Business';

export interface TripAdvisorReview {
  id: string;
  authorName: string;
  authorLocation: string;
  authorAvatar?: string;
  travelerType: Exclude<TravelerType, 'All'>;
  rating: 1 | 2 | 3 | 4 | 5;
  title: string;
  date: string;
  stayDate: string;
  content: string;
  helpfulVotes: number;
  visitedDishRecommendation?: string;
  ownerResponse?: {
    responder: string;
    date: string;
    text: string;
  };
  verified: boolean;
}

export interface DaySchedule {
  day: string;
  shortDay: string;
  openTime: string; // e.g., "07:30" (24hr)
  closeTime: string; // e.g., "15:30"
  displayHours: string;
  breakfastService?: string;
  lunchService?: string;
  isClosed?: boolean;
  notes?: string;
}

export interface EateryContact {
  name: string;
  tagline: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    postcode: string;
    landmarks: string[];
  };
  phone: string;
  mobile: string;
  email: string;
  whatsapp: string;
  instagram: string;
  tripAdvisorUrl: string;
  transit: {
    metro: string[];
    bus: string[];
    parking: string[];
  };
}
