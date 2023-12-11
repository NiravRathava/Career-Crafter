import { createOne, getOne, updateOne } from "./crudController.js";
import UserDetails from "../model/UserDetails.js";

export const createUserDetails = createOne(UserDetails);
export const getUserDetails = getOne(UserDetails);
export const updateUserDetails = updateOne(UserDetails);
