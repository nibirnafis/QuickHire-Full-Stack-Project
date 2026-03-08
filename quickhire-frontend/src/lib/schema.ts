import { z } from "zod";

export const addJobSchema = z.object({

    title: z.string("Title must be string"),
    company: z.string("Title must be string"),
    location: z.string("Title must be string"),
    category:  z.literal(["Marketing", "Design", "Business", "Technology"], ("Category Must Be From 'Marketing', 'Design', 'Business', 'Technology'")),
    description: z.string("Title must be string")
});

export type addJobErrors = {
  [K in keyof z.infer<typeof addJobSchema>]?: string[];
};







export const applyJobSchema = z.object({

    name: z.string("Title must be string"),
    email: z.email("Must be Valid Email Address"),
    resume_link: z.string().startsWith("https://drive.google.com/", "Upload CV to Google Drive and Provide the Link"),
    cover_note: z.string("Title must be string")
});

export type applyJobErrors = {
  [K in keyof z.infer<typeof applyJobSchema>]?: string[];
};