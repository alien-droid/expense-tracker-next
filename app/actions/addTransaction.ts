'use server'
import { auth } from "@clerk/nextjs/server"
import { db } from "../lib/db"
import { revalidatePath } from "next/cache"

interface TransactionData {
    text: string
    amount: number
}

interface TransactionResult {
    data?: TransactionData
    error?: string
}

async function addTransaction(data: FormData): Promise<TransactionResult> {
    const textValue = data.get('text');
    const amountValue = data.get('amount');

    if (!textValue || !amountValue || textValue === '') {
        return { error: 'Please enter both text and amount' };
    }


    const text = textValue.toString().trim();
    const amount = parseFloat(amountValue.toString().trim());

    const { userId } = auth()

    if (!userId) {
        return { error: 'You need to be logged in to add a transaction' };
    }

    try {
        const transaction: TransactionData = await db.transaction.create({
            data: {
                text,
                amount,
                userId
            }
        })
        revalidatePath('/')
        return { data: transaction }
    } catch (error) {
        return { error: 'Transaction failed' }
    }
}

export default addTransaction;