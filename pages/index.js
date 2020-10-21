import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jonathan King</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.headerContainer}>
        <h1>Jonathan King</h1>
        <h2>Full Stack Web Developer</h2>
      </div>

      <div className={styles.bodyContainer}>
        <section className={styles.sections}>
          <p>About</p>
        </section>
        <section className={styles.sections}>
          <p>Project</p>
        </section>
        <section className={styles.sections}>
          <p>Contact</p>
        </section>
      </div>

    </div>
  )
}
