import { useContext } from "react"
import { ChallengesContext, ChallengesProvider } from "../contexts/ChallengeContext"
import styles from "../styles/components/Profile.module.css"

export function Profile(){
    const { level } = useContext(ChallengesContext)
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/44899286?s=460&u=aee8f32dc26880ccc1b88e3b63049e6d66035b84&v=4" alt="foto"/>
            <div>
                <strong>Luiz Eduardo</strong>
                <p><img src="icons/level.svg" alt="level"/>Level {level}</p>
            </div>
        </div>
    )

}