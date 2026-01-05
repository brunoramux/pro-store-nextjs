import { InputProductSchema, OutputProductSchema } from "@/lib/validator";
import z from "zod";

export type ProductInput = z.infer<typeof InputProductSchema> & {
    id: string,
    createdAt: Date,
    rating: string,
    numReviews: number
}

export type ProductOutput = z.infer<typeof OutputProductSchema>