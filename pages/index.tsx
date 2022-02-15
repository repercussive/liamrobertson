import BannerWrapper from '@/components/page/index/BannerWrapper'
import HeadingSection from 'components/page/index/HeadingSection'
import SkillsSection from '@/components/page/index/SkillsSection'
import ProjectsSection from '@/components/page/index/ProjectsSection'
import BioText from '@/components/page/index/BioText'
import Divider from '@/components/modular/Divider'
import Spacer from '@/components/modular/Spacer'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Liam Robertson // Front-end Developer</title>
      </Head>

      <main>
        <BannerWrapper>
          <HeadingSection />
          <Divider css={{ my: '$4' }} />
          <BioText />
        </BannerWrapper>
        <Spacer mb="$4" bp1={{ mb: '$6' }} />
        <SkillsSection />
        <Spacer mb="$6" />
        <ProjectsSection />
      </main>
    </div>
  )
}