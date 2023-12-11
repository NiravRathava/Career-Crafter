import { getAll, createOne, updateOne, deleteOne } from "./crudController.js";
import Experience from "../model/ExperienceModel.js";

export const createExperience = createOne(Experience);
export const getExperience = getAll(Experience);
export const updateExperience = updateOne(Experience);
export const deleteExperience = deleteOne(Experience);
