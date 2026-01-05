import { PrismaNeon } from '@prisma/adapter-neon'
import { PrismaClient } from './generated/prisma/client'


// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL,
// })

const connectionString = `${process.env.NEON_DATABASE_URL}`

const adapter = new PrismaNeon({
  connectionString,
})

export const prisma = new PrismaClient({
  adapter,
})