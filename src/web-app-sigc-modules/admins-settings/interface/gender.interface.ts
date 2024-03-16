export interface Gender {
  id: number;
  description: string;
  date_create: Date;
  date_update: Date | null;
  user_create: number;
  user_update: number | null;
}

export interface GenderMessageResponse {
  message: string;
}

export interface GenderListResponse {
  id: number;
  description: string;
  date_create: null;
  date_update: null;
  user_create: number;
  user_update: number | null;
}
