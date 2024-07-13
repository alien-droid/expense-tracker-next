'use server'
import { db } from "../lib/db" 
import { auth } from "@clerk/nextjs/server"

interface BalanceResult {
    balance?: number
    error?: string
}

interface incomeExpense {
    income?: number
    expense?: number
    error?: string;
}

export const getBalance = async () : Promise<BalanceResult> => {
    const {userId} = auth()

    if (!userId) return {error: "You must be logged in"}
    try {
        const transactions = await db.transaction.findMany({
            where: {
               userId
            }
        })
        const balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
        return {balance}
    }
    catch (error) {
        return {error: 'Database Error'}
    }
}

export const getIncomeExp = async () : Promise<incomeExpense> => {
    const {userId} = auth()

    if (!userId) return {error: "You must be logged in"}
    try {
        const transactions = await db.transaction.findMany({
            where: {
               userId
            }
        })

        const income = transactions.reduce((acc, transaction) => acc + (transaction.amount > 0? transaction.amount : 0), 0)
        const expense = transactions.reduce((acc, transaction) => acc + (transaction.amount < 0? -transaction.amount : 0), 0)
        return {income, expense: Math.abs(expense)}
    } catch (error) {
        return {error: 'Database Error'}
    }
}

