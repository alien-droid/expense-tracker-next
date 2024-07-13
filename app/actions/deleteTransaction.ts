'use server'
import { auth } from "@clerk/nextjs/server"
import { db } from "../lib/db"
import { revalidatePath } from "next/cache"

interface TransactionResult {
    message?: string
    error?: string
}

async function deleteTransaction(transactionId: string): Promise<TransactionResult> {
    const { userId } = auth()

    if (!userId) {
        return { error: 'You need to be logged in to add a transaction' };
    }

    try {
        await db.transaction.delete({
            where: {
                id: transactionId,
                userId
            }
        })
        revalidatePath('/')
        return { message: "Transaction deleted" }
    } catch (error) {
        return { error: 'Transaction failed' }
    }
}

export default deleteTransaction;