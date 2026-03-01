import { model, Schema } from 'mongoose';

const ApplicationSchema = new Schema({
  job_id: { type: Schema.ObjectId, ref: "Job", required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  resume_link: { type: String, required: true },
  cover_note: { type: String, required: true },
},
{
    versionKey: false,
    timestamps: true
});


export const Application = model("Application", ApplicationSchema)