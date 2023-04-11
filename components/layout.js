import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Soon Sung Hong'
const socialNetworks = [
  {
    name: "linkedin", 
    link: "https://www.linkedin.com/in/kevinsoonhong/"
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/kaebong/"
  },
  {
    name: "github",
    link: "https://github.com/0xsoon"
  }
];
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
              <div className="flex justify-center align-middle cursor-pointer p-1">
                {socialNetworks.map(({ name, link }) => (
                  <div class="mx-2.5">
                    <Link href={link}>
                      <Image 
                        src={`/images/${name}.png`}
                        fill
                        width="30px"
                        height="30px"
                      />
                    </Link>
                  </div>
                ))}
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
