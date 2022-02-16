import { styled } from '@/styles/stitches.config'
import { useContext, useState } from 'react'
import { EntranceAnimationContext } from 'pages/_app'
import Flex from 'components/modular/Flex'
import Spacer from '@/components/modular/Spacer'
import ScrambledText from '@/components/modular/ScrambledText'

const HeadingSection = () => {
  const [{ showEntranceAnimation }] = useState(useContext(EntranceAnimationContext))

  return (
    <Flex align="center">
      <WaveEmoji role="presentation" css={{ animationDelay: showEntranceAnimation ? 250 : 0 }}>
        👋
      </WaveEmoji>
      <Spacer mr="$3" />
      <MainHeading>
        <ScrambledText
          segments={[
            { text: 'Hi, my name is ' },
            { component: <br /> },
            { text: 'Liam Robertson', strong: true },
            { text: '.', }
          ]}
        />
      </MainHeading>
    </Flex >
  )
}

const WaveEmoji = styled('span', {
  fontSize: '2rem',
  opacity: 0,
  animation: 'fade-in forwards 500ms',
  '@bp1': { fontSize: '4rem' }
})

const MainHeading = styled('h1', {
  position: 'relative',
  top: '1px',
  fontSize: '1.75rem',
  fontWeight: 'normal',
  '@bp1': { fontSize: '2.25rem' },
  '@media screen and (max-width: 325px)': { fontSize: '1.25rem' }
})

export default HeadingSection