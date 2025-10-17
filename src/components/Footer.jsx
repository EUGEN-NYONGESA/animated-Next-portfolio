import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg bg-light dark:bg-dark'>
        <Layout className="py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <span> &copy; {new Date().getFullYear()} Rights Reserved</span>
                <div className='flex items-center gap-1'> Build With
                <Link href="/" target={"_blank"} className="underline underline-offset-2">
                    Digital Blacksmith
                </Link>
                </div>
                <Link href="mailto:digitalblacksmith@gmail.com" target={"_blank"} className="underline underline-offset-2">
                    Contact Me
                </Link>
            </div>
        </Layout>
    </footer>
  )
}

export default Footer