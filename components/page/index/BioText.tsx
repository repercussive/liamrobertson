import { styled } from '@/styles/stitches.config'
import Text from '@/components/modular/Text'

const BioText = () => {
  return (
    <Text>
      I write code and make music.{' '}
      I fancy myself somewhat of a <strong>front-end developer</strong>.{' '}
      <LineBreak />
      For about 10 years I've lived in <strong>Glasgow</strong>.{' '}
      You've stumbled upon a portfolio page of sorts.
    </Text>
  )
}

const LineBreak = styled('br', {
  display: 'none',
  '@media screen and (min-width: 780px)': {
    display: 'block'
  }
})

export default BioText