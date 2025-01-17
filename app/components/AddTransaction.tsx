'use client'

import { toast } from "react-toastify"
import addTransaction from "../actions/addTransaction"
import { useRef } from "react"

const AddTransaction = () => {

    const formRef = useRef<HTMLFormElement>(null)

    const clientAction = async (formData: FormData) => {
        const {data, error} = await addTransaction(formData)

        if (error) {
            toast.error(error)
            console.error('Error:', error)
            return
        }
        toast.success('Transaction added successfully!')
        formRef.current?.reset()
    }

    return (
        <div>
            <h3>Add Transaction</h3>
            <form ref={formRef} action={clientAction}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" name="text" placeholder='Enter text (paid for) ...' required />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" name="amount" placeholder='Enter amount... (+ for income, - for expense)' required step={0.01} />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
