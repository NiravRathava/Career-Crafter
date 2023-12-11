import User from "../model/UserModel.js";
import { getAll, getOne, updateOne, deleteOne } from "./crudController.js";

export const getUsers = getAll(User);

export const getUser = getOne(User);

export const updateUser = updateOne(User);

export const deleteUser = deleteOne(User);
