import { FC, useContext, useState } from 'react'
import { EntranceAnimationContext } from 'pages/_app'
import { keyframes } from '@/styles/stitches.config'
import SectionWrapper from '@/components/modular/SectionWrapper'
import Box from '@/components/modular/Box'

const BannerWrapper: FC = ({ children }) => {
  const [{ showEntranceAnimation }] = useState(useContext(EntranceAnimationContext))

  return (
    <SectionWrapper
      css={{
        bg: '$bg',
        py: '$4',
        animation: `${changeBannerColor} forwards 500ms ${showEntranceAnimation ? 2000 : 0}ms`,
        '@bp1': {
          py: '$6'
        },
        '@bp2': {
          py: '$8'
        }
      }}
    >
      <Box css={{ maxWidth: '$max', margin: 'auto' }}>
        {children}
      </Box>
    </SectionWrapper>
  )
}

const changeBannerColor = keyframes({
  '0%': { bg: '$bg' },
  '100%': { bg: '$banner' }
})

export default BannerWrapper