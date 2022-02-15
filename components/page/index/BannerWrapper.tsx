import { FC } from 'react'
import { keyframes } from '@/styles/stitches.config'
import SectionWrapper from '@/components/modular/SectionWrapper'
import Box from '@/components/modular/Box'

const BannerWrapper: FC = ({ children }) => {
  return (
    <SectionWrapper
      css={{
        bg: '$bg',
        py: '$4',
        animation: `${changeBannerColor} forwards 1s 2s`,
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