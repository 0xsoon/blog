import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
 
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello I'm Soon. First of all, please excuse my poor css skills - I am still learning how to center div. I'm a software engineer and currently serving in ROK Army. I have worked for Amazon for 2.5 years and developed primarily on building automation tools for setting up infrastructures which enable search for Alexa Music. I am always constantly learning and trying to improve in various ways. This website will pertain resume, personal projects, music covers, and etc. Please tune in!! </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Personal Projects</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <h2>Books</h2>
        <ul>
          <li>
            How to Stop Worrying by Dale Carnegie
          </li>
        </ul>
      </section>
    </Layout>
  )
}
