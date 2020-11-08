import styles from "../styles/Project.module.css"
import Link from "next/link"

export default function Project() {
    return (
        <div className={styles.projectCard}>
            <h2>Project Name</h2>
            <p>
                Project Description Project Description Project Description
                Project Description Project Description Project Description
                Project Description Project Description Project Description
                </p>
            <img src="/images/self.jpg"></img>
            <div>
                <Link href="#">
                    <a>Repo</a>
                </Link>
                <Link href="#">
                    <a>Live</a>
                </Link>
            </div>
        </div>
    )
}
