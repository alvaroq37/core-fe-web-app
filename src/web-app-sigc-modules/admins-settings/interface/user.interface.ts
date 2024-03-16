import { Agency } from './agency.interface';
import { City } from './city.interface';
import { Gender } from './gender.interface';
import { Occupation } from './occupation.interface';

export interface User {
  id: number;
  ci: string;
  names: string;
  lastNamesPaternal: string;
  lastNamesMaternal: string;
  address: string;
  cellPhone: number;
  phone: number;
  email: string;
  dateBirth: string;
  dateCreate: Date;
  dateUpdate: string | null;
  user_create: number;
  userUpdate: number | null;
  occupation: Occupation | null;
  gender: Gender | null;
  city: City | null;
  agency: Agency | null;
}

export interface UserListResponse {
  id: number;
  ci: string;
  names: string;
  lastNamesPaternal: string;
  lastNamesMaternal: string;
  address: string;
  cellPhone: number;
  phone: number;
  email: string;
  dateBirth: string;
  dateCreate: string;
  dateUpdate: string | null;
  user_create: number;
  userUpdate: number | null;
  occ: Occupation;
  gender: Gender;
  city: City;
  agency: Agency;
}

export interface UserMessageResponse {
  message: string;
}
