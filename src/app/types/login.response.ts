import { User } from "../models/user/user.model"

export interface LoginResponse{
  message : string
  user : User
  auth : {
    token : string
    type : string
  }
}