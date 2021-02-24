import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/ChallengeBox.module.css"

export function ChallengeBox(){
    const {activeChallenge, resetChallenge} = useContext(ChallengesContext);

    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} XP</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={resetChallenge}>Falhei</button>
                        <button
                        type="button"
                        className={styles.challengeSuceededButton}>Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                    <p><img src="icons/level-up.svg" alt="Level Up"/>Avance de level completando desafios</p>
                </div>
            )}
        </div>
    )
}