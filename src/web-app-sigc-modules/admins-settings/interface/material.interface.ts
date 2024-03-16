export interface Material {
  id: number;
  description: string;
  price: number;
  karat: number;
  status: boolean;
  date_create: Date;
  date_update: Date | null;
  user_create: number;
  user_update: number | null;
}

export interface MaterialListResponse {
  id: number;
  description: string;
  price: number;
  karat: number;
  status: boolean;
  date_create: Date;
  date_update: Date | null;
  user_create: number;
  user_update: number | null;
}

export interface MaterialMessageResponse {
  message: string;
}
