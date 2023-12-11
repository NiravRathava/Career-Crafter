import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  technologiesUsed: {
    type: [String],
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  link: {
    type: String,
  },
},{
    timestamps:true
});

export default mongoose.model('Project', projectSchema);

