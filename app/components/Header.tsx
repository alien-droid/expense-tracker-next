import React from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { checkUser } from '../lib/auth'

const Header = async () => {
    const user = await checkUser()

    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <h2>💰 Tracker</h2>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default Header
