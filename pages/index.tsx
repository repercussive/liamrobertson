import BannerWrapper from '@/components/page/index/BannerWrapper'
import HeadingSection from 'components/page/index/HeadingSection'
import BioText from '@/components/page/index/BioText'
import Divider from '@/components/modular/Divider'
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
      </main>
    </div>
  )
}