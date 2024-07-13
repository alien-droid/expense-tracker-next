import React from 'react'
import { getIncomeExp } from '../actions/fetchBalance'
import { toast } from 'react-toastify'
import { numberCommas } from '../lib/util'

const IncomeExpense = async () => {
    // Simulating API call to fetch income and expenses data
    const { income, expense, error } = await getIncomeExp()
    if (error) {
        toast.error('Failed to fetch income and expenses data')
        return
    }

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income ⬆️</h4>
                <p className='money plus'>${numberCommas(Number(income?.toFixed(2)) ?? 0)}</p>
            </div>
            <div>
                <h4>Expenses ⬇️</h4>
                <p className='money minus'>${numberCommas(Number(expense?.toFixed(2)) ?? 0)}</p>
            </div>
        </div>
    )
}
export default IncomeExpense
