export interface BusinessDiscount {
  id: number;
  description: string;
  value: number;
  status: boolean;
  date_create: Date;
  date_update: Date | null;
  user_create: number;
  user_update: number | null;
}

export interface BusinessDiscountListResponse {
  id: number;
  description: string;
  value: number;
  status: boolean;
  date_create: Date;
  date_update: Date | null;
  user_create: number;
  user_update: number | null;
}

export interface BusinessMessageResponse {
  message: string;
}
