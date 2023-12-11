import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  skillName: {
    type: String,
    unique: true,
    required: true,
  },
  endorsements: [
    { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  ],
  proficiencyLevel: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
  },
});

export default mongoose.model("Skill", SkillSchema);
