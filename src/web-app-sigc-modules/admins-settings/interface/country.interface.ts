export interface Country {
  id: number;
  name: string;
  date_create: Date;
  date_update: Date | null;
  user_create: number;
  user_update: number | null;
}

export interface CountryMessageResponse {
  message: string;
}
export interface CountryListResponse {
  id: number;
  name: string;
  dateCreate: null;
  dateUpdate: null;
  user_create: number;
  userUpdate: number;
}
