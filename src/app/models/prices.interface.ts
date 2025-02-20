export interface Prices {
  coverages: Coverage[];
  offers: Offer[];
}

export interface Coverage {
  id: number;
  name: string;
  showDetail?: boolean;
  detail?: any[];
}

export interface Offer {
  id: number;
  name: string;
  price: number;
  selected?: boolean;
  recommended?: boolean;
  coverages: any;
}
