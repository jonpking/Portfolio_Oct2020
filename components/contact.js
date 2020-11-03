import styles from "../styles/Contact.module.css"

export default function Contact() {
    return (
        <div id="contact" className={styles.contact}>
            <div className={styles.contactCard}>
                <div className={styles.contactTitle}>
                    <h2>Jonathan King</h2>
                    <h3>Full-Stack Web Developer</h3>
                </div>
                <hr className={styles.hr} />
                <div className={styles.contactInfo}>
                    <p><i className={`fas fa-envelope`}></i>JonPKing@gmail.com</p>
                    <p><i className={`fas fa-phone-alt`}></i>(602)703-1741</p>
                    <p><i className={`${styles.linkedinIcon} fab fa-linkedin`}></i>linkedin.com/in/jonpking314</p>
                    <p><i className={`${styles.githubIcon} fab fa-github-square`}></i>github.com/jonpking</p>
                </div>
            </div>
        </div>
    )
}
