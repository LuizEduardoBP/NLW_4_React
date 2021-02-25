import "../styles/global.css"

import { ChallengesContext, ChallengesProvider } from "../contexts/ChallengeContext"
import { CowntdownProvider } from "../contexts/CountdownContext"

function MyApp({ Component, pageProps }) {
  return (
      <ChallengesProvider>
          <Component {...pageProps} />
      </ChallengesProvider>
    )
}

export default MyApp
