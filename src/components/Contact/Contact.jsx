import React from 'react'
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";


function Contact  () {
    return (
        <footer id="contact" className={styles.container}>
          <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
          </div>
          <ul className={styles.links}>
            <li className={styles.link}>
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
              <a href="mailto:akhtersohaib56@gmail.com">akhtersohaib56@gmail.com</a>
            </li>
            <li className={styles.link}>
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon"
              />
              <a href="www.linkedin.com/in/sohaib-akhter04">linkedin.com/in/sohaib-akhter04/</a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
              <a href="https://github.com/Sohaib-akhter04">github.com/Sohaib-akhter04</a>
            </li>
          </ul>
        </footer>
      );
}
export default Contact;