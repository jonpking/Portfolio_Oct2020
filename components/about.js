import styles from "../styles/About.module.css"

export default function About() {
    return (
        <div id="about" className={styles.about}>
            About
            <h1>Jonathan King</h1>
            <h2>Full-Stack Web Developer</h2>
            <p>Web developer with a passion for user-friendly UI/UX design.
            Currently looking for new development and employment opportunities.
            Skills include HTML, CSS, JS, Git, Bootstrap, Materialize, MySQL,
            MongoDB, NodeJS, ExpressJS, JQuery, ReactJS, Firebase, Rest API’s,
            AJAX.</p>
            <img src="/images/self.jpg" className={styles.selfImage} />
        </div>
    )
}
