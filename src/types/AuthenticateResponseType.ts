import type { UserType } from './UserType'

export interface AuthenticateResponseType {
  status: boolean;
  data: UserType;
}