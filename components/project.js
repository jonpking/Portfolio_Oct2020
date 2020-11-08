import styles from "../styles/Project.module.css"
import Link from "next/link"

export default function Project() {
    return (
        <div className={styles.projectCard}>
            <h2>Project Name</h2>
            <div>
                <Link href="#">
                    <a>Repo</a>
                </Link>
                <Link href="#">
                    <a>Live</a>
                </Link>
            </div>
            <p>
                An app that pulls various gifs from the giphy API based on
                keywords that can be submitted by the user
                <br />
                <br />
                By clicking the buttons on the screen you will be provided
                with 10 gifs from the giphy API. You can add more search
                buttons by typing in the input box and pressing the "Add a
                new comic!" button. Each gif will also have a rating posted
                to the screen with it in a manner similar to movie ratings
                (ie "g", "pg", "r", etc.).
            </p>
            <img src="/images/self.jpg"></img>
        </div>
    )
}
