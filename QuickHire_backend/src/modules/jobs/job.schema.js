import { model, Schema } from 'mongoose';

const JobSchema = new Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
},
{
    versionKey: false,
    timestamps: true
});


export const Job = model("Job", JobSchema)