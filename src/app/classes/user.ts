import { Photos } from "./photos";

export interface User {

  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  address: string;
  gender: string;
  birthdate: Date;
  job: string;
  photos:Photos[];
  urlprof?: string;
  urlcov?: string;
  is_admin?: boolean;
  is_blocked?: boolean;

}
