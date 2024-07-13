'use server'

import { auth } from "@clerk/nextjs/server"
import { db } from "../lib/db"
import { Transaction } from "@/types/Transaction"

interface TransactionResult {
    transactions?: Transaction[]
    error?: string
}

export default async function getTransactionHistory(): Promise<TransactionResult> {
    const { userId } = auth()

    if (!userId) return { error: "You must be logged in" }

    try {
        const transactions = await db.transaction.findMany({
            where: {
                userId
            },
            orderBy: {
                createdAt: "desc"
            }
        })
        return { transactions }
    } catch (error) {
        return { error: 'Database error' }
    }
}