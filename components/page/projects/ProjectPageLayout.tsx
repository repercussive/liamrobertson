import { FC, useContext, useEffect } from 'react'
import { EntranceAnimationContext } from 'pages/_app'
import { styled } from '@/styles/stitches.config'
import SectionWrapper from '@/components/modular/SectionWrapper'
import Text from '@/components/modular/Text'
import Spacer from '@/components/modular/Spacer'
import Divider from '@/components/modular/Divider'
import Flex from '@/components/modular/Flex'
import Icon from '@/components/modular/Icon'
import Link from 'next/link'
import Head from 'next/head'

interface Props {
  name: string,
  icon: () => JSX.Element,
  liveUrl: string,
  githubUrl: string
}

const ProjectPageLayout: FC<Props> = ({ name, icon, liveUrl, githubUrl, children }) => {
  const { setShowEntranceAnimation } = useContext(EntranceAnimationContext)

  useEffect(() => {
    setShowEntranceAnimation(false)
  }, [])

  return (
    <main>
      <SectionWrapper css={{ opacity: 0, animation: 'fade-in forwards 500ms' }}>
        <Head><title>Projects // {name}</title></Head>
        <Spacer mb="$4" bp1={{ mb: '$6' }} />
        <BackLink />
        <Spacer mb="$4" />
        <Flex align="center">
          <Spacer mr="$2" />
          <Icon
            icon={icon}
            css={{ color: '$accent', fontSize: '1.25rem', '@bp1': { fontSize: '1.75rem' }, pointerEvents: 'none' }}
          />
          <Spacer mr="$4" bp1={{ mr: '$6' }} />
          <ProjectHeading>{name}</ProjectHeading>
        </Flex>
        <Spacer mb="$2" />
        <Flex>
          <ProjectLink href={liveUrl}>Live</ProjectLink>
          <Spacer mr="$2" />
          <ProjectLink href={githubUrl}>GitHub</ProjectLink>
        </Flex>
        <Spacer mb="$4" />
        <Divider />
        <Spacer mb="$4" />
        {children}
        <Spacer mb="$4" />
      </SectionWrapper>
    </main>
  )
}

const BackLink = () => {
  return (
    <Link href="/" passHref>
      <a>
        <span aria-hidden>{'< '}</span>
        <Text as="span" css={{ color: '$accent', fontWeight: 'bold' }}>Liam Robertson</Text>
      </a>
    </Link>
  )
}

const ProjectLink: FC<{ href: string }> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <Text
        as="a"
        css={{
          bg: '$banner',
          padding: '$2 $4',
          borderRadius: '4px',
          '&:hover, &:focus': {
            bg: '$accent',
            color: '$bg !important',
            outline: 'none'
          }
        }}
      >
        {children}
      </Text>
    </Link>
  )
}

const ProjectHeading = styled('h1', {
  fontSize: '2rem',
  '@bp1': {
    fontSize: '3rem'
  },
  '@media screen and (max-width: 300px)': {
    fontSize: '1.75rem'
  }
})

const Description = styled('div', {
  '& p': {
    '& b': {
      fontWeight: 'normal',
      textDecoration: 'underline 2px',
      textDecorationColor: '$accent'
    },
    '&:not(:last-of-type)': {
      mb: '$4',
    }
  },
  '& ul': {
    pl: '$4',
    my: '$3',
    '@bp1': { pl: '$6' },
    '@bp2': { pl: '$8' },
    'li': {
      position: 'relative',
      lineHeight: '1.5rem',
      listStyle: 'none',
      '&::before': {
        position: 'absolute',
        inset: 0,
        left: '-15px',
        top: '0.5em',
        content: '""',
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        bg: '$accent'
      }
    }
  }
})

export default Object.assign(ProjectPageLayout, { Description })