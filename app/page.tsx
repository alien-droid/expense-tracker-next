import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import Guest from '@/app/components/Guest'
import AddTransaction from '@/app/components/AddTransaction'
import Balance from './components/Balance'
import TransactionList from './components/TransactionList'

// Page to display home page when user is logged in
const Home = async () => {

  const user = await currentUser()

  if (!user) {
    return <Guest />
  }

  return (
    <main>
      <h1>Welcome, {user.firstName}</h1>
      <Balance />
      <AddTransaction />
      <TransactionList />
    </main>
  )
}

export default Home
