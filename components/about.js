import styles from "../styles/About.module.css"

export default function About() {
    return (
        <div id="about" className={styles.about}>
            <div className={styles.aboutCard}>
                <div className={styles.aboutContent}>
                    <p>
                        Full-stack web developer with a passion for
                        user-friendly UI/UX design. Currently looking
                        for new development and employment opportunities.
                        Skills include HTML, CSS, JS, Git, Bootstrap,
                        Materialize, MySQL, MongoDB, NodeJS, ExpressJS,
                        JQuery, ReactJS, Firebase, Rest API’s, AJAX.
                    </p>
                    <img src="/images/self.jpg" className={styles.selfImage} />
                </div>
                <div className={styles.aboutLinks}>
                    <a href="#projects" className={styles.link}>View My Work</a>
                    <a href="#contact" className={styles.link}>Contact Me</a>
                </div>
            </div>
        </div>
    )
}
