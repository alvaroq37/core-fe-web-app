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
  cellPhone: number | null;
  phone: number | null;
  email: string | null;
  dateBirth: string | null;
  date_create: string | null;
  date_update: string | null;
  user_create: number | null;
  user_update: number | null;
  city: City | null;
  sex: Gender | null;
  occupation: Occupation | null;
  client_category: ClientCategory | null;
}

export interface ClientFindByNames {
  names: string;
}

export interface ClientFindByCi {
  ci: string;
}
