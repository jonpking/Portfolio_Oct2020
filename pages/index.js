import Head from "next/head"
import Navbar from "../components/navbar.js"
import About from "../components/about.js"
import Projects from "../components/projects.js"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div>

      <Head>
        <title>Jonathan King</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Quantico&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap" rel="stylesheet"></link>
        </Head>

      <div className={styles.pageWrapper}>
        <div className={styles.navContainer}>
          <Navbar />
        </div>

        <div className={styles.bodyContainer}>
          <About />
          <Projects />
        </div>

      </div>

    </div>
  )
}
