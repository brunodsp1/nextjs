import Head from 'next/head'
import Link from 'next/link'
import Layout, { children }from '../../components/layout'

export default function FirstPost() {
  return (
    <>
    <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <post>{children}</post>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}