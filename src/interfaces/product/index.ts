import { CartInterface } from 'interfaces/cart';
import { CategoryInterface } from 'interfaces/category';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  category_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  cart?: CartInterface[];
  category?: CategoryInterface;
  organization?: OrganizationInterface;
  _count?: {
    cart?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  category_id?: string;
  organization_id?: string;
}
