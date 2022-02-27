import ProjectPageLayout from '@/components/page/projects/ProjectPageLayout'
import BookIcon from '@/components/icons/BookIcon'

const BookboardPage = () => {
  return (
    <ProjectPageLayout
      name="Bookboard"
      icon={BookIcon}
      liveUrl="https://bookboard.pages.dev/"
      githubUrl="https://github.com/repercussive/bookboard"
    >
      <ProjectPageLayout.Description>
        <p>
          Feel free to try this one out without creating a user account.
        </p>
        <p>
          <strong>Bookboard</strong> is a minimalistic web app that allows bookworms to easily track their to-read lists{' '}
          and log a history of everything they've read.{' '}
          Books can be organized into any number of "boards". Once you complete a book, you can leave a rating and review,{' '}
          allowing you to retroactively see which ones you loved (or hated) the most.{' '}
        </p>
        <p>
          <strong>Made with some neat tech.</strong> The app is written in <b>TypeScript</b>,{' '}
          with <b>Firebase</b> handling the database and user authentication. All the business logic is tested with <b>Jest</b>.{' '}
          The interface was created using trusty <b>React</b>, with <b>MobX</b>'s state management magic tying it all together.{' '}
          The styling solution is <b>Stitches</b>, a neat CSS-in-JS library which turned out to be just right for the job.{' '}
          Also, shoutout to CSS pseudo-elements for always having my back.
        </p>
        <p>
          <strong>The interface</strong>, while quirky, is entirely accessible to keyboard users and screen readers.{' '}
          In most cases I'd lean towards sticking with tried-and-true UI strategies,{' '}
          but the simplicity of the app allowed me some freedom.{' '}
          Playful touches help to bring a little joy to the design, such as{' '}
          the interchangeable plants on the shelves, or the lightbulb used to switch color themes.
        </p>
        <p>
          <strong>Make it yours.</strong> Bookboard places a heavy emphasis on customisation.{' '}
          The more books you complete, the more color themes you unlock and the more plants you earn to adorn your shelves.{' '}
          With hundreds of combinations, you can make your page look just the way you want it.
        </p>
      </ProjectPageLayout.Description>
    </ProjectPageLayout>
  )
}

export default BookboardPage