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
          { text: `. Looks like you've stumbled across my portfolio page.` }
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