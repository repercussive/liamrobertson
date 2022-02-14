import type { CSS } from '@stitches/react/types/css-util'
import Box from '@/components/modular/Box'

interface Props {
  icon: () => JSX.Element,
  css?: CSS
}

const Icon = ({ icon, css }: Props) => {
  const IconComponent = icon

  return (
    <Box
      as="span"
      className="icon"
      css={{
        ...css,
        display: 'inline-flex',
        alignItems: 'center',
        transform: 'scale(1.7)',
        '& > svg': { height: '1em' }
      }}
    >
      <IconComponent />
    </Box>
  )
}

export default Icon