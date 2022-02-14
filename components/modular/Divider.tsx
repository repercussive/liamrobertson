import Box from '@/components/modular/Box'
import type { CSS } from '@stitches/react/types/css-util'

const Divider = ({ css }: { css?: CSS }) => {
  return (
    <Box
      role="presentation"
      css={{ 
        width: '100%',
        height: '1px',
        bg: '$divider',
        ...css
      }}
    />
  )
}

export default Divider