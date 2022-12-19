import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

function Layout({title, children}) {
  return (
    <>
    <div className='flex flex-col justify-between min-h-screen'>
        <Head>
        <title>{title ? title + ' - Amazona' : 'Amazona'}</title>
        <meta name="description" content="Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <nav className='flex items-center justify-between h-12 px-4 shadow-md'>
                <Link href = "/" className='text-lg font-bold'>
                    Amazona
                </Link>
                <div>
                    <Link href ="/cart" className='p-2'>Cart</Link>
                    <Link href ="/login" className='p-2'>Login</Link>
                </div>
            </nav>
        </header>
        {/* container makes the html element responsive based on the screen size */}
        <main className='container px-4 m-auto mt-4'>{children}</main>
        <footer className='flex items-center justify-center h-10 shadow-inner'>Copyright © 2022 Amazona</footer>
    </div>
    </>
  )
}

export default Layout