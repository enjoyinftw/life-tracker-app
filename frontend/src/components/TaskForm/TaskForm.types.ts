import * as z from "zod";

export const TaskSchema = z.object({
  title: z.string().min(3).max(128),
  id: z.int(),
  created_at: z.iso.datetime(),
  completed_at: z.iso.datetime().nullable(),
  time_taken: z.number().nullable(),
});

export type Task = z.infer<typeof TaskSchema>;
