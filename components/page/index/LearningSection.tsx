import FeaturedTechGrid from '@/components/page/index/FeaturedTechGrid'
import SectionWrapper from '@/components/modular/SectionWrapper'
import Spacer from '@/components/modular/Spacer'
import CSharpIcon from '@/components/icons/CSharpIcon'
import UnityIcon from '@/components/icons/UnityIcon'
import SvelteIcon from '@/components/icons/SvelteIcon'

const LearningSection = () => {
  return (
    <SectionWrapper>
      <h2>Tech I enjoy, but want to get better at</h2>
      <Spacer mb="$4" />
      <FeaturedTechGrid>
        <FeaturedTechGrid.Item name="C#" icon={CSharpIcon} />
        <FeaturedTechGrid.Item name="Unity" icon={UnityIcon} />
        <FeaturedTechGrid.Item name="Svelte" icon={SvelteIcon} />
      </FeaturedTechGrid>
    </SectionWrapper>
  )
}

export default LearningSection