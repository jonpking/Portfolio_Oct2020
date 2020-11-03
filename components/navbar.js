import Link from "next/link"
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.selfDiv}>
                <h2>Jonathan King</h2>
                <p>JonPKing@gmail.com</p>
                <p>(602)703-1741</p>
            </div>
            <div className={styles.socialDiv}>
                <i className={`${styles.githubIcon} fab fa-github-square fa-2x`}></i>
                <i className={`${styles.linkedinIcon} fab fa-linkedin fa-2x`}></i>
            </div>
            <hr className={styles.hr} />
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
        </div>
    )
}
