import { Transaction } from '@/types/Transaction'
import React from 'react'
import getTransactionHistory from '../actions/getTransactions'
import { toast } from 'react-toastify'
import TransactionItem from './TransactionItem'

const TransactionList = async () => {

  const {transactions, error} = await getTransactionHistory()
  
  if (error) {
    toast.error(error)
    return null
  }
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions && transactions.map((transaction: Transaction) => (
            <> 
                <TransactionItem key={transaction.id} transaction={transaction}/>
            </>
        ))}
      </ul>
    </>
  )
}

export default TransactionList
