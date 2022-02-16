import { useContext, useState } from 'react'
import { EntranceAnimationContext } from 'pages/_app'
import BannerWrapper from '@/components/page/index/BannerWrapper'
import HeadingSection from 'components/page/index/HeadingSection'
import SkillsSection from '@/components/page/index/SkillsSection'
import ProjectsSection from '@/components/page/index/ProjectsSection'
import LearningSection from '@/components/page/index/LearningSection'
import BioText from '@/components/page/index/BioText'
import Divider from '@/components/modular/Divider'
import Spacer from '@/components/modular/Spacer'
import Box from '@/components/modular/Box'
import Head from 'next/head'

export default function Home() {
  const [{ showEntranceAnimation: showEntranceAnimation }] = useState(useContext(EntranceAnimationContext))

  return (
    <div>
      <Head>
        <title>Liam Robertson // Front-end Developer</title>
      </Head>

      <main>
        <BannerWrapper>
          <HeadingSection />
          <Divider
            css={{ my: '$4', opacity: 0, animation: `fade-in forwards 500ms ${showEntranceAnimation ? 800 : 0}ms` }}
          />
          <BioText />
        </BannerWrapper>
        <Spacer mb="$4" bp1={{ mb: '$6' }} />
        <Box
          css={{ opacity: 0, animation: `fade-in forwards 500ms ${showEntranceAnimation ? 2000 : 0}ms` }}
        >
          <SkillsSection />
          <Spacer mb="$6" />
          <ProjectsSection />
          <Spacer mb="$6" />
          <LearningSection />
          <Spacer mb="$4" />
        </Box>
      </main>
    </div>
  )
}