export interface Occupation {
  id: number;
  description: string;
  date_create: Date;
  date_update: Date | null;
  user_create: number;
  user_update: number | null;
}

export interface OccupationMessageResponse {
  message: string;
}

export interface OccupationListResponse {
  id: number;
  description: string;
  date_create: null;
  date_update: null;
  user_create: number;
  user_update: number | null;
}
