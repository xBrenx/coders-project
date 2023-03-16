import React from 'react';
import Head from 'next/head'
import Landing from '@/components/Landing/Landing';


export default function Home() {
  return (
    <>
      <Head>
        <title>CodersFlix</title>
      </Head>
      <main>
        <Landing />
      </main>
    </>
  )
}
