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
        <div className={styles.brandContainer}>
          <img
            className={styles.selfPic}
            src="/images/self.jpg"
            alt="Jonathan King">
          </img>
          <img
            className={styles.brandImage}
            src="/images/jklogo.png"
            alt="Jonathan King personal brand logo">
          </img>
        </div>
        <div className={styles.titleContainer}>
          <h1>Jonathan King</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
        <div className={styles.linksContainer}>
          <img
            src="/images/github.png"
            alt="GitHub Mark">
          </img>
          <img
            src="/images/linkedin.png"
            alt="LinkedIn Mark">
          </img>
        </div>
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
