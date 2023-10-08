import Head from 'next/head'
import Image from 'next/image'
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
      <div className="max-w-lg mt-16 mx-auto">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="og:title" content={siteTitle} />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js"
            integrity="sha512-zhHQR0/H5SEBL3Wn6yYSaTTZej12z0hVZKOv3TwCUXT1z5qeqGcXJLLrbERYRScEDDpYIJhPC1fk31gqR783iQ=="
            crossOrigin="anonymous"
            defer 
          />
        </Head>
        <header className="flex flex-col items-center">
          {home ? (
            <>
              <h1 className="text-4xl font-black">{name}</h1>
              <div className="flex justify-center align-middle cursor-pointer mt-3">
                {socialNetworks.map(({ name, link }, idx) => (
                  <div className="mx-2.5" key={idx}>
                    <Link href={link}>
                      <Image 
                        src={`/images/${name}.png`}
                        fill="true"
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
              <h2 className="text-2xl">
                <Link legacyBehavior href="/">
                  <a className="text-4xl font-black mb-2">{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className="mt-3">
            <Link legacyBehavior href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    )
  }
