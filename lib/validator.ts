import { z } from 'zod';
import { formatNumberWithDecimal } from './utils';
import { Prisma } from './generated/prisma/client';

const currency = z.string().refine(
    value => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))), 
    'Price must have exactly two decimal places (e.g., 49.99)'
)

export const InputProductSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    slug: z.string().min(3, 'Slug must be at least 3 characters long'),
    category: z.string().min(3, 'Category must be at least 3 characters long'),
    brand: z.string().min(3, 'Brand must be at least 3 characters long'),
    description: z.string().min(3, 'Description must be at least 3 characters long'),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1, 'At least one image is required'),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: currency
})

const DecimalLikeSchema = z.union([
  z.number(),
  z.string(),
  z.custom<Prisma.Decimal>(v => v instanceof Prisma.Decimal),
]).transform(v => Number(v))

export const OutputProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  category: z.string(),

  images: z.array(z.string()).min(1),

  brand: z.string(),
  description: z.string(),
  stock: z.number().int().nonnegative(),

  price: DecimalLikeSchema,
  rating: DecimalLikeSchema,

  numReviews: z.number().int().nonnegative(),
  isFeatured: z.boolean(),

  banner: z.string().nullable(),

  createdAt: z.union([z.date(), z.string()]).transform(v =>
    v instanceof Date ? v.toISOString() : v
  ),
})