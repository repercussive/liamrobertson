import type { AppProps } from 'next/app'
import { createContext, Dispatch, SetStateAction, useState } from 'react'
import '@/styles/globals.scss'

export const EntranceAnimationContext = createContext<{
  showEntranceAnimation: boolean,
  setShowEntranceAnimation: Dispatch<SetStateAction<boolean>>
}>(null!)

function App({ Component, pageProps }: AppProps) {
  const [showEntranceAnimation, setShowEntranceAnimation] = useState(true)

  return (
    <EntranceAnimationContext.Provider value={{ showEntranceAnimation, setShowEntranceAnimation }}>
      <Component {...pageProps} />
    </EntranceAnimationContext.Provider>
  )
}

export default App