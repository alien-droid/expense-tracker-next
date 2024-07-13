'use client'
import { Transaction } from '@/types/Transaction'
import React from 'react'
import { numberCommas } from '../lib/util'
import { toast } from 'react-toastify'
import deleteTransaction from '../actions/deleteTransaction'

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {

    const handleDelete = async (id: string) => {
        const confirmed = window.confirm('Are you sure you want to delete this transaction')
        if (!confirmed) return
        const { message, error } = await deleteTransaction(id)
        if (error) {
            toast.error(error)
            return
        }
        toast.success(message)
    }

    const sign = transaction.amount > 0 ? '+' : '-';
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}
            <span>{sign}{numberCommas(Math.abs(transaction.amount))}</span>
            <button className='delete-btn' onClick={() => handleDelete(transaction.id)}></button>
        </li>
    )
}

export default TransactionItem
