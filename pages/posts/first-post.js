import Head from 'next/head'
import Link from 'next/link'
import { Children } from 'react'
import Layout {Children}from '../../components/layout'

export default function FirstPost() {
  return (
    <>
    <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h1>{Children}</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}