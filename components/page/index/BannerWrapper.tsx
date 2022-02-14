import { FC } from 'react'
import SectionWrapper from '@/components/modular/SectionWrapper'
import Box from '@/components/modular/Box'

const BannerWrapper: FC = ({ children }) => {
  return (
    <SectionWrapper
      css={{
        bg: '$banner',
        py: '$4',
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

export default BannerWrapper