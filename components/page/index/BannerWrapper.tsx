import { FC } from 'react'
import Box from '@/components/modular/Box'

const BannerWrapper: FC = ({ children }) => {
  return (
    <Box
      css={{
        bg: '$banner',
        width: '100%',
        px: '$4',
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
    </Box>
  )
}

export default BannerWrapper