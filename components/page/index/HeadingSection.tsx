import { styled } from '@/styles/stitches.config'
import Flex from 'components/modular/Flex'
import Spacer from '@/components/modular/Spacer'

const HeadingSection = () => {
  return (
    <Flex align="center">
      <WaveEmoji role="presentation">👋</WaveEmoji>
      <Spacer mr="$3" />
      <MainHeading>Hi, my name is <br /><strong>Liam Robertson</strong>.</MainHeading>
    </Flex >
  )
}

const WaveEmoji = styled('span', {
  fontSize: '2rem',
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