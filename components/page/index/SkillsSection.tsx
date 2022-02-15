import FeaturedTechGrid from '@/components/page/index/FeaturedTechGrid'
import SectionWrapper from '@/components/modular/SectionWrapper'
import Spacer from '@/components/modular/Spacer'
import TypeScriptIcon from '@/components/icons/TypeScriptIcon'
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
      <FeaturedTechGrid>
        <FeaturedTechGrid.Item name="TypeScript" icon={TypeScriptIcon} />
        <FeaturedTechGrid.Item name="React" icon={ReactIcon} />
        <FeaturedTechGrid.Item name="CSS & Sass" icon={CssIcon} />
        <FeaturedTechGrid.Item name="NextJS" icon={NextJsIcon} />
        <FeaturedTechGrid.Item name="Git" icon={GitIcon} />
        <FeaturedTechGrid.Item name="Firebase & Firestore" icon={FirebaseIcon} />
      </FeaturedTechGrid>
    </SectionWrapper>
  )
}

export default SkillsSection