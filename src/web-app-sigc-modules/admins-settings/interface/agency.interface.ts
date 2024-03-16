import { City } from './city.interface';
import { User } from './user.interface';

export interface Agency {
  id: number;
  name: string;
  address: string;
  dateCreate: Date;
  dateUpdate: string | null;
  user_create: number;
  userUpdate: number | null;
  city: City | null;
}

export interface AgencyMessageResponse {
  message: string;
}

export interface AgencyListResponse {
  data: Datum[];
  status: number;
  statusText: string;
}

export interface Datum {
  id: number;
  name: string;
  address: string;
  dateCreate: string;
  dateUpdate: string | null;
  user_create: number;
  userUpdate: number | null;
  city_id: City;
  user_id: User;
}
