import { FC } from 'react'
import { styled } from '@/styles/stitches.config'
import FeaturedItem from '@/components/page/index/FeaturedItem'
import Flex from '@/components/modular/Flex'
import Icon from '@/components/modular/Icon'
import Spacer from '@/components/modular/Spacer'
import Text from '@/components/modular/Text'
import NextJsIcon from '@/components/icons/NextJsIcon'

const FeaturedTechGrid: FC = ({ children }) => {
  return (
    <GridWrapper>
      {children}
    </GridWrapper>
  )
}

const Item = ({ name, icon }: { name: string, icon: () => JSX.Element }) => {
  return (
    <FeaturedItem css={{ display: 'grid', placeItems: 'center' }}>
      <Flex center css={{ height: '2rem' }}>
        <Icon icon={icon} css={{ fontSize: icon === NextJsIcon ? '1.4em' : '1em' }} />
      </Flex>
      <Spacer mb="$2" />
      <Text as="h3" css={{ fontSize: '1rem', fontWeight: 'normal' }}>
        {name}
      </Text>
    </FeaturedItem>
  )
}

const GridWrapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',
  '& > *': {
    flex: 1,
    minWidth: '230px'
  },
  '@bp1': { gap: '$4' }
})

export default Object.assign(FeaturedTechGrid, { Item })