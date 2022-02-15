import { styled } from '@/styles/stitches.config'
import Text from '@/components/modular/Text'
import ScrambledText from '@/components/modular/ScrambledText'

const BioText = () => {
  return (
    <Text>
      <ScrambledText
        order={1}
        segments={[
          { text: 'I write code and make music. ' },
          { text: 'I fancy myself somewhat of a ' },
          { text: 'front-end developer', strong: true },
          { text: '. ' },
          { component: <LineBreak /> },
          { text: `For about 10 years I've lived in ` },
          { text: 'Glasgow', strong: true },
          { text: `. You've stumbled upon a portfolio page of sorts.` }
        ]}
      />
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