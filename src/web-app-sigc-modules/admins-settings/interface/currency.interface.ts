export interface Currency {
  id: number;
  description: string;
  abbreviation: string;
  dateCreate: Date;
  dateUpdate: string | null;
  userCreate: number;
  userUpdate: number | null;
}

export interface CurrencyMessageResponse {
  message: string;
}

export interface CurrencyListResponse {
  id: number;
  description: string;
  abbreviation: string;
  dateCreate: Date;
  dateUpdate: string | null;
  userCreate: number;
  userUpdate: number | null;
}
