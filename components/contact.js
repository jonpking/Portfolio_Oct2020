import styles from "../styles/Contact.module.css"

export default function Contact() {
    return (
        <div id="contact" className={styles.contact}>
            <div className={styles.contactCard}>
                <div className={styles.contactTitle}>
                    <h2>Jonathan King</h2>
                    <h3>Full-Stack Web Developer</h3>
                </div>
                <div className={styles.contactInfo}>
                    <div>
                        <p>JonPKing@gmail.com</p>
                        <p>(602)703-1741</p>
                        <p>2236 E Devonshire, Phoenix, AZ 85016</p>
                    </div>
                    <div>
                        <p>linkedin.com/in/jonpking314</p>
                        <p>github.com/jonpking</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
