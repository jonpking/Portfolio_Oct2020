import Head from "next/head"
import Navbar from "../components/navbar.js"
import About from "../components/about.js"
import Projects from "../components/projects.js"
import Contact from "../components/contact.js"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div>

      <Head>
        <title>Jonathan King</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.pageWrapper}>
        <div className={styles.navContainer}>
          <Navbar />
        </div>

        <div className={styles.bodyContainer}>
          <section className={styles.sections}>
            <About />
          </section>
          <section className={styles.sections}>
            <Projects />
          </section>
          <section className={styles.sections}>
            <Contact />
          </section>
        </div>

      </div>

    </div>
  )
}
