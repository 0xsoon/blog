import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Soon Sung Hong'
const socialNetworks = [];w
export const siteTitle = 'Soon Sung Hong'

export default function Layout({ children, home }) {
    return (
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="og:title" content={siteTitle} />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
              <div className="p-1 text-center">
                (
                  
                )
                <Image 
                  src="/images/linkedin.png"
                  fill 
                  width="30px" 
                  height="30px"
                />
                <Image 
                  src="/images/instagram.png"
                  fill 
                  width="30px" 
                  height="30px"
                />
                <Image 
                  src="/images/linkedin.png"
                  fill 
                  width="30px" 
                  height="30px"
                />
              </div>
            </>
          ) : (
            <>
              <h2 className={utilStyles.heading2Xl}>
                <Link legacyBehavior href="/">
                  <a className="text-black">{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link legacyBehavior href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    )
  }
