import Link from "next/link"
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.selfDiv}>
                <img src="/images/self.jpg" className={styles.selfImage} />
                <img src="/images/jklogo.png" className={styles.jklogo} />
                <h2>Jonathan King</h2>
            </div>
            <ul className={styles.navLinks}>
                <li>
                    <Link href="#about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="#projects">
                        <a>Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href="#contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
            <div className={styles.socialDiv}>
                <img src="/images/github.png" className={styles.githubImage} />
                <img src="/images/linkedin.png" className={styles.linkedinImage} />
            </div>
        </div>
    )
}
