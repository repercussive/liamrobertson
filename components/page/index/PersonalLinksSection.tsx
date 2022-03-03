import { styled } from '@/styles/stitches.config'
import SectionWrapper from '@/components/modular/SectionWrapper'
import Flex from '@/components/modular/Flex'

const PersonalLinksSection = () => {
  return (
    <SectionWrapper>
      <LinksWrapper center direction="column">
        <a href="https://github.com/repercussive">
          GitHub
        </a>
        <span className="bullet" role="presentation">•</span>
        <a href="https://www.linkedin.com/in/liamgrobertson">
          LinkedIn
        </a>
        <span className="bullet" role="presentation">•</span>
        <a href="mailto:liam2robertson@gmail.com">
          liam2robertson@gmail.com
        </a>
      </LinksWrapper>
    </SectionWrapper>
  )
}

const LinksWrapper = styled(Flex, {
  gap: '$2',
  maxWidth: '100%',
  '@bp1': {
    flexDirection: 'row !important'
  },
  '& .bullet': {
    opacity: 0.25,
    display: 'none',
    '@bp1': {
      display: 'block'
    }
  },
  '& a': {
    minWidth: '100%',
    opacity: 0.55,
    textAlign: 'center',
    '&:hover': {
      opacity: 1
    },
    '@bp1': {
      minWidth: 'auto'
    }
  }
})

export default PersonalLinksSection