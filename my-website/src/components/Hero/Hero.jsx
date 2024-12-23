import React from "react"
import { getImageUrl } from "../../utils"
import styles from "./Hero.module.css"

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Ungchan
            </h1>
            {/* <h2 className={styles.brand}>
                2 Times Dean's List
                2 Times First Runners-Up in Data Competitions
                Proven to learn fast & deliver outstanding results
            </h2> */}
            <p className={styles.description}> 
                I’m an aspiring Data Analyst with a passion for Machine Learning and Artificial Intelligence.
                Reach out if you’d like to have a chat!
            </p>
            <a href="mailto:ungchan052804@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img src={getImageUrl("hero/memoji.png")} alt="hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
    </section>
}