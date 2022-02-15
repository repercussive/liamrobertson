import { styled } from '@/styles/stitches.config'

const FeaturedItem = styled('div', {
  '--padding': '0.75rem',
  '@bp1': { '--padding': '1rem' },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'var(--padding)',
  paddingBottom: 'calc(var(--padding) - 3px)',
  userSelect: 'none',
  bg: '$banner',
  borderRadius: '4px',
  textAlign: 'center',
  transition: 'background-color 80ms ease-out',
  '&:not(:hover) .icon': {
    color: '$accent'
  },
  '&:hover': {
    bg: '$accent',
    color: '$bg'
  }
})

export default FeaturedItem