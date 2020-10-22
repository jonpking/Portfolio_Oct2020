import Head from "next/head"
import Link from "next/link"
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
          <ul>
            <li>
              <Link href="">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
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

    </div>
  )
}
