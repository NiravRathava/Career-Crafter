import { getAll, createOne, deleteOne } from "./crudController.js";
import Skill from "../model/SkillModel.js";

export const createSkill = createOne(Skill);
export const getSkill = getAll(Skill);
export const deleteSkill = deleteOne(Skill);
