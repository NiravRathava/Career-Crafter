import { createOne, getAll, getOne, deleteOne } from "./crudController.js";
import Post from "../model/PostModel.js";

export const createPost = createOne(Post);
export const getPosts = getAll(Post);
export const getPost = getOne(Post);
export const deletePost = deleteOne(Post);
