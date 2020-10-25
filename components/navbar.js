import Link from "next/link"
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <ul className={styles.nav}>
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
    )
}
