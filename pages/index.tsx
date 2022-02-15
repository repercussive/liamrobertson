import BannerWrapper from '@/components/page/index/BannerWrapper'
import HeadingSection from 'components/page/index/HeadingSection'
import SkillsSection from '@/components/page/index/SkillsSection'
import ProjectsSection from '@/components/page/index/ProjectsSection'
import LearningSection from '@/components/page/index/LearningSection'
import BioText from '@/components/page/index/BioText'
import Divider from '@/components/modular/Divider'
import Spacer from '@/components/modular/Spacer'
import Head from 'next/head'
import Box from '@/components/modular/Box'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Liam Robertson // Front-end Developer</title>
      </Head>

      <main>
        <BannerWrapper>
          <HeadingSection />
          <Divider css={{ my: '$4', opacity: 0, animation: 'fade-in forwards 500ms 800ms' }} />
          <BioText />
        </BannerWrapper>
        <Spacer mb="$4" bp1={{ mb: '$6' }} />
        <Box css={{ opacity: 0, animation: 'fade-in forwards 1s 2s' }}>
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