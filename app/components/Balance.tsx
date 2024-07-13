import React from 'react'
import {getBalance} from '../actions/fetchBalance'
import { toast } from 'react-toastify'
import { numberCommas } from '../lib/util'
import IncomeExpense from './IncomeExpense'

const Balance = async () => {
    
    const { balance, error } = await getBalance()
    if (error) {
        toast.error('Database error: ')
        return
    }
    return (
        <>
            <h4>Balance 💹</h4>
            <h1>$ {numberCommas(Number(balance?.toFixed(2)) ?? 0)}</h1>
            <IncomeExpense />
        </>
    )
}

export default Balance
