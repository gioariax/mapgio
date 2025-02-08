export interface Prices {
  coverages: Coverage[];
  offers: Offer[];
}

export interface Coverage {
  id: number;
  name: string;
}

export interface Offer {
  id: number;
  name: string;
  price: number;
  selected?: boolean;
  recommended?: boolean;
  coverages: any;
}
