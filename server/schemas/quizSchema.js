import { z } from "zod";

export const quizSchema = z.object({
  quiz: z.array(
    z.object({
      question: z.string(),
      options: z.array(z.string()).length(4),
      correctAnswer: z.string(),
    }),
  ),
});
