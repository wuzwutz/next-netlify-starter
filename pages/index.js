import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>WUZWUTZ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="WUZWUTZ" />
        <p>
          Java 1.18.2 Minecraft Server
        </p>
          <code>
            mc.wuzwutz.com
          </code>
        <a href="https://discord.gg/2XGkkQeCwK">
        <button>Join Discord</button>
        </a>
      </main>

      <Footer />
    </div>
  )
}
