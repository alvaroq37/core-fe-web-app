import { Country } from './country.interface';

export interface Department {
  id: number;
  name: string;
  date_create: Date;
  date_update: Date | null;
  user_create: number;
  user_update: number | null;
  country: string | null;
}

export interface DepartmentListResponse {
  data: Datum[];
  status: number;
  statusText: string;
}

export interface Datum {
  id: number;
  name: string;
  country?: Country;
  dateCreate: null;
  dateUpdate: null;
  user_create: number;
  userUpdate: number;
}

export interface DepartmentMessageResponse {
  message: string;
}
