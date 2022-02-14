import { FC } from 'react'
import { CSS } from '@stitches/react/types/css-util'
import Box from '@/components/modular/Box'

const SectionWrapper: FC<{ css?: CSS }> = ({ css, children }) => {
  return (
    <Box css={{ width: '100%', px: '$4', ...css }}>
      <Box css={{ maxWidth: '$max', margin: 'auto' }}>
        {children}
      </Box>
    </Box>
  )
}

export default SectionWrapper