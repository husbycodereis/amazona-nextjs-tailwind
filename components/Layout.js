import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Store } from "../utils/Store";

function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <Head>
          <title>{title ? title + " - Amazona" : "Amazona"}</title>
          <meta name="description" content="Ecommerce Website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <nav className="flex items-center justify-between h-12 px-4 shadow-md">
            <Link href="/" className="text-lg font-bold">
              Amazona
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                Cart{" "}
                {cart.cartItems.length > 0 && (
                  <span className="px-2 py-1 ml-1 text-xs font-bold text-white bg-red-600 rounded-full ">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                )}
              </Link>
              <Link href="/login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        {/* container makes the html element responsive based on the screen size */}
        <main className="container px-4 m-auto mt-4">{children}</main>
        <footer className="flex items-center justify-center h-10 shadow-inner">
          Copyright © 2022 Amazona
        </footer>
      </div>
    </>
  );
}

export default Layout;
