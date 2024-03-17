import { Material } from './material.interface';
export interface Jewel {
  id: number;
  jewel: string;
  number_parts: number;
  jewel_type: number;
  gross_weight: number;
  net_weight: number;
  net_weight_loan: number;
  description: string;
  date_create: Date;
  date_update: Date | null;
  user_create: number;
  user_update: number | null;
  material: Material | null;
}

export interface JewelListResponse {
  id: number;
  jewel: string;
  number_parts: number;
  jewel_type: number;
  gross_weight: number;
  net_weight: number;
  net_weight_loan: number;
  description: string;
  date_create: Date | null;
  date_update: Date | null;
  user_create: number | null;
  user_update: number | null;
  material: Material | null;
}

export interface JewelMessageResponse {
  message: string;
}
export interface JewelFindById {
  id: string;
}
