export interface ClientCategory {
  id: number;
  description: string;
  value: string;
  date_create: Date;
  date_update: Date | null;
  user_create: number;
  user_update: number | null;
}

export interface ClientCategoryMessageResponse {
  message: string;
}

export interface ClientCategoryListResponse {
  id: number;
  description: string;
  value: string;
  date_create: Date;
  date_update: Date | null;
  user_create: number;
  user_update: number | null;
}
