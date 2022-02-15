import { styled } from '@/styles/stitches.config'
import Flex from '@/components/modular/Flex'
import Icon from '@/components/modular/Icon'
import SectionWrapper from '@/components/modular/SectionWrapper'
import Spacer from '@/components/modular/Spacer'
import Text from '@/components/modular/Text'
import BookIcon from '@/components/icons/BookIcon'
import LinkIcon from '@/components/icons/LinkIcon'
import SpeechBubbleIcon from '@/components/icons/SpeechBubbleIcon'
import FeaturedItem from '@/components/page/index/FeaturedItem'

const ProjectsSection = () => {
  return (
    <SectionWrapper>
      <h2>Some stuff I've made</h2>
      <Spacer mb="$1" />
      <Text css={{ color: '#ffffff80' }}>
        Click any project for its live page and source code.
      </Text>
      <Spacer mb="$4" />
      <Flex direction="column">
        <Project
          name="Bookboard"
          description="A handy book tracker & logger with cloud sync. Features unlockable plants."
          icon={BookIcon}
        />
        <Project
          name="Intentionist"
          description="A social habit tracking tool. Create linked habits with your friends."
          icon={LinkIcon}
        />
        <Project
          name="Braincache"
          description="A verbal memory game written multiple times in React, Svelte & Vue."
          icon={SpeechBubbleIcon}
        />
      </Flex>
    </SectionWrapper>
  )
}

const Project = ({ name, description, icon }: { name: string, description: string, icon: () => JSX.Element }) => {
  return (
    <ProjectWrapper>
      <Flex align="center" css={{ width: '100%', '@bp1': { width: 'auto' } }}>
        <Flex center css={{ height: '2rem', minWidth: '2.25rem' }}>
          <Icon icon={icon} />
        </Flex>
        <Text as="h3" className="project-name" css={{ ml: '$2', '@bp1': { display: 'none' } }}>
          {name}
        </Text>
      </Flex>
      <Spacer mr="$4" />
      <Flex direction="column" justify="center" >
        <Text as="h3" className="project-name" css={{ display: 'none', '@bp1': { display: 'block' } }}>
          {name}
        </Text>
        <Spacer mb="$1" />
        <Text css={{ px: '$1', '@bp1': { px: '0' } }}>{description}</Text>
      </Flex>
    </ProjectWrapper>
  )
}

const ProjectWrapper = styled(FeaturedItem, {
  '--padding': '1rem',
  textAlign: 'left',
  flexDirection: 'column',
  '@bp1': {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  '@bp2': {
    '--padding': '1.25rem',
    pl: '1.15rem'
  },
  '&:not(:last-of-type)': {
    mb: '$3',
    '@bp1': { mb: '$4' }
  },
  '.project-name': {
    fontWeight: 'bold',
    fontSize: '1.15rem'
  }
})

export default ProjectsSection