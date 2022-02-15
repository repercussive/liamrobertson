import { styled } from '@/styles/stitches.config'
import FeaturedItem from '@/components/page/index/FeaturedItem'
import Grid from '@/components/modular/Grid'
import Icon from '@/components/modular/Icon'
import SectionWrapper from '@/components/modular/SectionWrapper'
import Spacer from '@/components/modular/Spacer'
import Text from '@/components/modular/Text'
import TypeScriptIcon from '@/components/icons/TypeScriptIcon'
import Flex from '@/components/modular/Flex'
import ReactIcon from '@/components/icons/ReactIcon'
import CssIcon from '@/components/icons/CssIcon'
import NextJsIcon from '@/components/icons/NextJsIcon'
import GitIcon from '@/components/icons/GitIcon'
import FirebaseIcon from '@/components/icons/FirebaseIcon'

const SkillsSection = () => {
  return (
    <SectionWrapper>
      <h2>Tools in my box</h2>
      <Spacer mb="$4" />
      <GridWrapper>
        <Skill name="TypeScript" icon={TypeScriptIcon} />
        <Skill name="React" icon={ReactIcon} />
        <Skill name="CSS & Sass" icon={CssIcon} />
        <Skill name="NextJS" icon={NextJsIcon} />
        <Skill name="Git" icon={GitIcon} />
        <Skill name="Firebase & Firestore" icon={FirebaseIcon} />
      </GridWrapper>
    </SectionWrapper>
  )
}

const Skill = ({ name, icon }: { name: string, icon: () => JSX.Element }) => {
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

const GridWrapper = styled(Grid, {
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(230px, 100%), 1fr))',
  gridGap: '$3',
  '@bp1': { gridGap: '$4' }
})

export default SkillsSection