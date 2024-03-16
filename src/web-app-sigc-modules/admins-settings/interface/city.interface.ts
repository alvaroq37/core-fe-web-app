import { Country } from './country.interface';
import { Department } from './department.interface';

export interface City {
  id: number;
  name: string;
  date_create: Date;
  date_update: Date | null;
  user_create: number;
  user_update: number | null;
  country: string | null;
  department: string | null;
}

export interface CityMessageResponse {
  message: string;
}

export interface CityListResponse {
  data: Datum[];
  status: number;
  statusText: string;
}

export interface Datum {
  id: number;
  name: string;
  departament?: Department;
  country?: Country;
  dateCreate: null;
  dateUpdate: null;
  user_create: number;
  userUpdate: number;
}
