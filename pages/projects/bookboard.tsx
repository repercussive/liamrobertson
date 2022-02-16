import ProjectPageLayout from '@/components/page/projects/ProjectPageLayout'
import BookIcon from '@/components/icons/BookIcon'
import Text from '@/components/modular/Text'

const BookboardPage = () => {
  return (
    <ProjectPageLayout
      name="Bookboard"
      icon={BookIcon}
      liveUrl="https://bookboard.pages.dev/"
      githubUrl="https://github.com/repercussive/bookboard"
    >
      <Text>[description missing]</Text>
    </ProjectPageLayout>
  )
}

export default BookboardPage