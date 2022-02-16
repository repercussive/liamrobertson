import ProjectPageLayout from '@/components/page/projects/ProjectPageLayout'
import Text from '@/components/modular/Text'
import LinkIcon from '@/components/icons/LinkIcon'

const IntentionistPage = () => {
  return (
    <ProjectPageLayout
      name="Intentionist"
      icon={LinkIcon}
      liveUrl="https://intentionist.pages.dev/"
      githubUrl="https://github.com/repercussive/intentionist"
    >
      <Text>[description missing]</Text>
    </ProjectPageLayout>
  )
}

export default IntentionistPage