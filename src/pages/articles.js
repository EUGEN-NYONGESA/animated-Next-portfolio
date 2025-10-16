import AnimateText from '@/components/AnimateText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

function articles() {
  return (
    <>
    <Head>
        <title>Digital Blacksmith | Articles Page</title>
        <meta name="description" content="my description" />
    </Head>

    <main>
        <Layout>
            <AnimateText />
            <ul>
                <li>Featured Articles-1</li>
                <li>Featured articles-2</li>
            </ul>
        </Layout>
    </main>
    </>
  )
}

export default articles