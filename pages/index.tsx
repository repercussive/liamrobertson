import { useContext, useState } from 'react'
import { EntranceAnimationContext } from 'pages/_app'
import BannerWrapper from '@/components/page/index/BannerWrapper'
import HeadingSection from 'components/page/index/HeadingSection'
import PersonalLinksSection from '@/components/page/index/PersonalLinksSection'
import SkillsSection from '@/components/page/index/SkillsSection'
import ProjectsSection from '@/components/page/index/ProjectsSection'
import LearningSection from '@/components/page/index/LearningSection'
import BioText from '@/components/page/index/BioText'
import Divider from '@/components/modular/Divider'
import Spacer from '@/components/modular/Spacer'
import Box from '@/components/modular/Box'
import Head from 'next/head'

export default function Home() {
  const [{ showEntranceAnimation }] = useState(useContext(EntranceAnimationContext))

  const getFadeInStyles = (fadeDurationMs: number) => {
    return {
      opacity: 0,
      animation: `fade-in forwards 500ms ${showEntranceAnimation ? fadeDurationMs : 0}ms`
    }
  }

  return (
    <div>
      <Head>
        <title>Liam Robertson // Front-end Developer</title>
      </Head>

      <main>
        <BannerWrapper>
          <HeadingSection />
          <Spacer mb="$4" />
          <Divider css={getFadeInStyles(800)} />
          <Spacer mb="$4" />
          <BioText />
        </BannerWrapper>
        <Spacer mb="$4" bp1={{ mb: '$6' }} />
        <Box css={getFadeInStyles(2000)}>
          <SkillsSection />
          <Spacer mb="$6" />
          <ProjectsSection />
          <Spacer mb="$6" />
          <LearningSection />
        </Box>
      </main>

      <Spacer mb="$6" />
      <footer>
        <Box css={getFadeInStyles(2000)}>
          <PersonalLinksSection />
        </Box>
      </footer>
      <Spacer mb="$6" />
    </div>
  )
}