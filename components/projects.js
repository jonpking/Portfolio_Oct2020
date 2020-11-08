import styles from "../styles/Projects.module.css"
import Link from "next/link"
import Project from "../components/project.js"

export default function Projects() {
    return (
        <div id="projects" className={styles.projects}>
            <Project />
            <Project />
        </div>
    )
}
