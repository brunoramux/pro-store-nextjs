'use server'

import { LATEST_PRODUCTS_LIMIT } from "../constants"
import { prisma } from "../prisma"
import { convertToPlainObject } from "../utils"


export async function getLatestProducts() {
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: { createdAt: 'desc' },
    })

    return convertToPlainObject(data)
}

export async function getProductBySlug(slug: string) {
    return await prisma.product.findFirst({
        where: { slug },
    })
}