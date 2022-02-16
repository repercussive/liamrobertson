import ProjectPageLayout from '@/components/page/projects/ProjectPageLayout'
import Text from '@/components/modular/Text'
import SpeechBubbleIcon from '@/components/icons/SpeechBubbleIcon'

const BraincachePage = () => {
  return (
    <ProjectPageLayout
      name="Braincache"
      icon={SpeechBubbleIcon}
      liveUrl="https://braincache-react.pages.dev/"
      githubUrl="https://github.com/repercussive/braincache-svelte"
    >
      <Text>[description missing]</Text>
    </ProjectPageLayout>
  )
}

export default BraincachePage