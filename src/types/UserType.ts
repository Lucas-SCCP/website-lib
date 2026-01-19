export interface UserType {
  id: number
  email: string
  password: string
  defaultWebsiteId: number
  token: string
  accessLevel: {
    id: number
  }
}
