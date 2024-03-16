import { ClientCategory } from './client.category.interface';
import { Gender } from './gender.interface';
import { Occupation } from './occupation.interface';
import { City } from './city.interface';

export interface Client {
  id: number;
  names: string;
  ci: string;
  address: string;
  email: string;
  dateBirth: number;
  number_cell_phone: number;
  names_maternal: string;
  names_paternal: string;
  number_phone: number;
  date_create: Date;
  date_update: Date | null;
  user_create: number;
  user_update: number | null;
  city: City | null;
  gender: Gender | null;
  occupation: Occupation | null;
  client_category: ClientCategory | null;
}

export interface ClientMessageResponse {
  message: string;
}

export interface ClientListResponse {
  id: number;
  ci: string;
  names: string;
  lastNamesPaternal: string;
  lastNamesMaternal: string;
  address: string;
  cellPhone: number;
  phone: number;
  email: string;
  dateBirth: number;
  date_create: Date;
  date_update: Date | null;
  user_create: number;
  user_update: number | null;
  city: City;
  sex: Gender;
  occupation: Occupation;
  client_category: ClientCategory;
}
