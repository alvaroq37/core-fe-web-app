import { Client } from './client.interface';
import { Jewel, JewelListResponse } from './jewel.interface';
import { BusinessDiscount } from './business.discount.interface';
import { Currency } from './currency.interface';
import { Agency } from './agency.interface';
export interface Contract {
  id: number;
  value: number;
  currency: Currency | null;
  rate_interest: number;
  date_create: Date;
  date_expiration: Date;
  agency: Agency | null;
  status: boolean;
  date_update: Date | null;
  user_create: number;
  user_update: number | null;
  client: Client | null;
  jewel: JewelListResponse | null;
  business_discount: BusinessDiscount | null;
}

export interface ContractListResponse {
  id: number;
  value: number;
  currency: Currency;
  date_create: Date;
  date_expiration: Date;
  agency: number;
  status: boolean;
  date_update: Date | null;
  user_create: number;
  user_update: number | null;
  client: Client;
  jewel: Jewel;
  business_discount: BusinessDiscount;
}

export interface ContractMessageResponse {
  message: string;
}
