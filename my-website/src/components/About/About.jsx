import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/logo.png")}
                    alt= "my logo"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}> 
                    <li className={styles.aboutItem}> 
                        <img src={getImageUrl("about/dataAnalytics.png")} alt = "pic" />
                        <div className={styles.aboutItemText}> 
                            <h3>Data Analytics</h3>
                            <p> 
                                I love handling numbers to solve real-world business problems
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}> 
                        <img src={getImageUrl("about/automation.png")} alt = "pic" />
                        <div className={styles.aboutItemText}> 
                            <h3>Automation</h3>
                            <p> 
                                I have created numerous scripts that replaces repetitive tasks for higher efficiency                             
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}> 
                        <img src={getImageUrl("about/problemSolving.png")} alt = "pic" />
                        <div className={styles.aboutItemText}> 
                            <h3>Problem Solving</h3>
                            <p> 
                               I have a passion and knack for solving problems through critical thinking
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}