export interface TokenInterface {
  access: string;
  refresh: string;
}

export interface UserInterface {
  token?: TokenInterface | null;
  id?: number | null;
  full_name?: string | null;
  national_id?: string | null;
  date_of_birth?: string | null;
  address?: string | null;
  phone_number?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface CreateUserInformationInterface {
  full_name: string;
  address: string;
  national_id: string;
  date_of_birth: string;
  phone_number: string;
}
export interface CreateUserFormValuesInterface {
  full_name: string;
  address: string;
  national_id: string;
  date_of_birth: string;
  phone_number: string;
}

export interface LoginInterface {
  email: string;
  password: string;
}
export interface LoginError {
  error: string;
}

export interface LogoutErrorInterface {
  detail: string;
}

export interface CreateUserInformationError {
  detail: string;
}
