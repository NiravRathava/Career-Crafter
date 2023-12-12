import Project from "../model/ProjectModel.js";
import { getAll, createOne, updateOne, deleteOne } from "./crudController.js";

export const createProject = createOne(Project);
export const getProjects = getAll(Project);
export const updateProject = updateOne(Project);
export const deleteProject = deleteOne(Project);
