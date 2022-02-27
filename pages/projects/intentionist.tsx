import ProjectPageLayout from '@/components/page/projects/ProjectPageLayout'
import LinkIcon from '@/components/icons/LinkIcon'

const IntentionistPage = () => {
  return (
    <ProjectPageLayout
      name="Intentionist"
      icon={LinkIcon}
      liveUrl="https://intentionist.pages.dev/"
      githubUrl="https://github.com/repercussive/intentionist"
    >
      <ProjectPageLayout.Description>
        <p>
          <strong>Intentionist</strong> is a simple habit-tracking app for friends with similar goals.
          Whether it's exercising or learning a language, tracking your habits' daily streaks alongside your friends
          helps you stay encouraged.
        </p>
        <p>
          <strong>I wanted to combine my skills in a larger project. </strong>
          The app is written in <b>TypeScript</b>, with the UI built with React.{' '}
          <b>Firebase</b> pulls a lot of weight - not only is it responsible for the database and
          user authentication, but some of the app's functionality (such as friend requests) would not be possible
          without Firebase Cloud Functions.
          The logic is tested with <b>Jest</b>. State is kept simple with MobX, a tool which always impresses me.{' '}
          The styling solution is Theme UI, which did the job but in the future I would prefer to work with other tools.
          Having previously mostly worked on small projects, tackling a medium-sized one on my own
          (some 10,000 lines of code, not including scrapped features)
          gave me a little more understanding of what scales and what doesn't.
        </p>
        <p>
          <strong>The concept is simple enough.</strong> You can create any number of habits,
          which appear on your page in rows of empty spaces. Each space can be filled with an emoji representing the
          progress you made that day. The spaces will connect visually when you achieve daily streaks.
        </p>
        <p>
          Everything is private by default. There's a friend requests system that allows you to add your mates via username.
          Your friends can see the habits that you've explicitly marked as public.
          I won't lie, the friends feature was definitely a tricky one to implement.
        </p>
        <p>
          <strong>From there, you can create linked habits</strong>.
          If you share a similar goal with a friend, you can link their habit with yours,
          and they'll show up side-by-side on your page. 
          The idea is that having these linked habits at a glance increases accountability,
          giving you that extra boost you need to develop new routines and skills.
        </p>
      </ProjectPageLayout.Description>
    </ProjectPageLayout>
  )
}

export default IntentionistPage