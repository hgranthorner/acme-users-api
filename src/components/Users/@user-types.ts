export interface UserRequest {
  count: number,
  users: Array<User>
}

export interface User {
  firstName: string,
  middleName: string,
  lastName: string,
  title: string,
  email: string,
  id: number,
  createdAt: Date,
  updatedAt: Date
}
