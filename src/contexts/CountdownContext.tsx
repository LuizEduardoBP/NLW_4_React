import { ReactNode, createContext, useState, useContext, useEffect } from "react";
import { ChallengesContext } from "./ChallengeContext";

interface CowntdownContextData {
    minutes: number,
            seconds: number,
            hasFinished : boolean,
            isActive: boolean,
            startCountdown: ()=>void,
            resetCountdown: ()=>void
}

interface CowntdownProviderProps {
    children: ReactNode;
}

export const CowntdownContext = createContext({} as CowntdownContextData)

let cowntdownTimeout: NodeJS.Timeout;

export function CowntdownProvider({ children }: CowntdownProviderProps){
    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown() {
        clearInterval(cowntdownTimeout)
        setIsActive(false)
        setTime(0.05 * 60)
        setHasFinished(false)
    }

    useEffect(() => {
        if (isActive && time > 0) {
            cowntdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge()
        }
    }, [isActive, time])
    
    return (
        <CowntdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CowntdownContext.Provider>
    )
}