import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function FirstPost() {
  return (
    <>
    <Head className={utilStyles.headingMd}>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}