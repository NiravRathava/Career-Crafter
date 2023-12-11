import { getAll, createOne, updateOne, deleteOne } from "./crudController.js";
import Education from "../model/EducationModel.js";

export const createEducation = createOne(Education);
export const getEducation = getAll(Education);
export const updateEducation = updateOne(Education);
export const deleteEducation = deleteOne(Education);
