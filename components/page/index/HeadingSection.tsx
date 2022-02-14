import Flex from 'components/modular/Flex'
import Text from '@/components/modular/Text'
import Spacer from '@/components/modular/Spacer'

const HeadingSection = () => {
  return (
    <Flex align="center">
      <Text
        role="presentation"
        as="span"
        css={{ fontSize: '2rem', '@bp1': { fontSize: '4rem' } }}
      >
        👋
      </Text>
      <Spacer mr="$3" />
      <Text
        as="h1"
        css={{ fontSize: '1.75rem', '@bp1': { fontSize: '2.5rem' } }}
      >
        Hi, my name is <br /><strong>Liam Robertson.</strong>
      </Text>
    </Flex>
  )
}

export default HeadingSection