import { styled } from '@/styles/stitches.config'
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

const GridWrapper = styled(Grid, {
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(230px, 100%), 1fr))',
  gridGap: '$3',
  '@bp1': { gridGap: '$4' }
})

const Skill = ({ name, icon }: { name: string, icon: () => JSX.Element }) => {
  return (
    <SkillWrapper>
      <Flex center css={{ height: '2rem' }}>
        <Icon icon={icon} css={{ fontSize: icon === NextJsIcon ? '1.4em' : '1em' }} />
      </Flex>
      <Spacer mb="$2" />
      <Text>{name}</Text>
    </SkillWrapper>
  )
}

const SkillWrapper = styled('div', {
  '--padding': '0.75rem',
  '@bp1': { '--padding': '1rem' },
  display: 'grid',
  placeItems: 'center',
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

export default SkillsSection