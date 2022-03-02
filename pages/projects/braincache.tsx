import ProjectPageLayout from '@/components/page/projects/ProjectPageLayout'
import SpeechBubbleIcon from '@/components/icons/SpeechBubbleIcon'

const BraincachePage = () => {
  return (
    <ProjectPageLayout
      name="Braincache"
      icon={SpeechBubbleIcon}
      liveUrl="https://braincache-react.pages.dev/"
      githubUrl="https://github.com/repercussive/braincache-svelte"
    >
      <ProjectPageLayout.Description>
        <p>
          <strong>Put your brain to the test</strong> with this curious minigame.
          Go for a high score.
        </p>
        <p>
          I had <em>a lot</em> of thoughts after completing this project.
          If you read on, prepare for some rambling and hot takes.
        </p>
        <p>
          <strong>Let's talk JS frameworks</strong>. This game was created three times: once each with{' '}
          <b>React</b>, <b>Vue</b> and <b>Svelte</b>.
          Although the game is simple, it contains the same front-end building blocks as any web application:
        </p>
        <ul>
          <li>Components, which must be structured and styled</li>
          <li>State, which the UI must react to</li>
          <li>Some application logic that manipulates the state</li>
        </ul>
        <p>
          Having only worked with React previously,
          this was a good chance to gain a little insight into a range of JS frameworks.
          With each version, I asked myself these questions:
        </p>
        <ul>
          <li>How enjoyable is this framework to use?</li>
          <li>How simple is it to learn?</li>
          <li>Can I easily style my components?</li>
          <li>Can I write and test my app's logic in isolation, then easily integrate it into the UI?</li>
          <li>How much of this can the framework do without pulling in a bunch of extra libraries?</li>
        </ul>
        <p>
          While these frameworks share some similarities, and are all fairly simple to get started with,
          there are also some pretty big differences between them.
        </p>
        <p>
          Also note that my perspective is mostly informed by making very client-side-focused apps.
          I'm not experienced in much else, so take all this with a grain of salt.
        </p>
        <p>
          <strong>I'll start with Svelte.</strong> This was the one I looked forward to trying out the most.
          Svelte is supposed to be all young and modern and cool.
          I'm happy to report that the hype is generally justified. Overall I had a great time working with this framework.
        </p>
        <p>
          Before I even get to what makes Svelte so nice,
          I need to point out something that gives it a massive leg up on the competition: the killer documentation and tutorials.
          On the official Svelte site, you'll find a sequence of interactive tutorials that guide you through all the major features
          by getting you to write the code yourself. Learning the basics of Svelte was a breeze.
        </p>
        <p>
          All the vital organs of a component (template, script and style) are helpfully grouped into self-contained .svelte files,
          much like Vue's .vue files.
          The templating language has lots of useful features like conditions and loops.
          It's also super easy to opt into TS over JS, or SCSS over CSS.
          Styles are scoped by default, solving the styling crisis once and for all.
          Svelte comes with a built-in solution for handling application-wide observable state
          and reacting to it from within your components.
          Overall, Svelte seems very content to take sole responsibility for your entire front end, and it succeeds.
          Though you do have to accept the dollar signs. The dollar signs are everywhere and they are all-powerful.
        </p>
        <p>
          In a sentence: Svelte gives you one (and only one) quality tool to solve each fundamental problem of building a front-end app.
          There's something freeing about that.
          There's no need to go hunting for the right packages,
          or wasting time making decisions about how to do all the most common tasks,
          because everything is unambiguously <em>just there</em>.
          Svelte, in my opinion, does the best job of allowing you to focus on actually building your application.
        </p>
        <p>
          <strong>What about Vue?</strong> It took slightly longer to "get" Vue,
          but after some confusion I eventually enjoyed using it.
          All of the same advantages of single-file components and scoped styles still apply.
          But before I get into the good, I have to talk about the bad.
        </p>
        <p>Vue gives you <em>too many ways to do the same thing</em>.</p>
        <p>
          Let me clear, I think flexibility is nice, but I also just want to <em>get stuff done. </em>
          Ideally, I prefer to spend little to no time worrying about how to do it.
        </p>
        <p>
          If you want to use any framework, the first and most important thing to learn is how to create components.
          You hop onto the official docs for the latest version of Vue, and immediately you are presented with{' '}
          <em>two completely different ways of writing components</em> (the classic "Options API" and the new "Composition API").
          Already, you have a seemingly arbitrary decision to make that you could waste hours researching.
        </p>
        <p>
          Now you have some global state that needs to be accessed throughout your interface,
          so you go to the docs and read about Vue's built-in reactive store system, which seems simple yet powerful.
          You scroll down and suddenly Vue is recommending that "serious" applications should use Pinia,
          a more sophisticated state management library not included in the Vue package.
          Frustrated, you google "Vue state management" and are flooded with resources about Vuex,
          a battle-tested state manager which was previously officially supported and recommened by Vue,
          but is now in maintenance mode. More decisions. More research. More "Oh no, am I picking the right tool?"
        </p>
        <p>
          Vue fails to take an opinionated stance on any of these things, potentially inviting inconsistent programming practices.
          Unlike Svelte, it has a long legacy, so it can't
          go uprooting old features and totally replacing them with better solutions.
          The result is a confusing mess of different tools that all achieve the same goals,
          with an even more confusing pool of online learning resources.
          Vue's identity crisis is a headache that wastes time you want to spend building your app.
        </p>
        <p>
          Thankfully, the tools themselves all seem pretty solid. For state management, I went with Vue's new reactive stores.
          It was very simple to create read-only state, and to write testable logic that modifies it.
          Accessing the state from within components couldn't be much simpler.
          The system is very similar to Svelte's stores and I had no issues with it.
          For defining components, I tried out the classic Options API, and once it clicked, I mostly loved it.
          Each component file exports an object containing things like props, computed properties, data, methods, and lifecycle actions.
          I like that it forces some level of organisation, in contrast to Svelte,
          whose {'<script>'} section can end up being a bit of a free-for-all.
          After a while with Vue I settled into a rhythm, and at times I found it extremely satisfying to work with.
        </p>
        <p>
          Unfortunately I can't help but feel that, on the whole, Vue is just a slightly more bloated and confusing version of Svelte.
          While Vue does a lot of things right, Svelte builds on them and simplifies them. Especially with growth of its community
          and ecosystem, I think Svelte is growing into a more attractive option for new projects when compared with Vue.
        </p>
        <p>
          <strong>Finally, we come to React.</strong> So far, I've mostly discussed these frameworks in isolation from their
          respective ecosystems. It would be disingenuous to do the same with React,
          whose huge ecosystem is the very reason it's such a great tool. But, for a minute, let's do it anyway.
        </p>
        <p>
          React claims to be nothing more than a UI library,
          but it lacks the tools you need to actually use it as one.
        </p>
        <ul>
          <li>
            It provides no way for your UI to react to external state at all, so in the absence of other libraries,
            you could be forced to essentially write your app within your UI components, which is a painful and messy way to work
            that makes it impossible to test logic in isolation.
            Suddenly your "UI library" has become your entire application.
          </li>
          <li>It's "component-based", but provides no way to create component-based styles.</li>
        </ul>
        <p>
          If you're new to React, and aren't aware of the reasons to use MobX or Redux,
          you'll fall into a pit of despair when you try to write your application logic and it turns into
          untested spaghetti scattered throughout dozens of component files.
          If you don't know to use CSS Modules or a good CSS-in-JS solution,
          you'll fall into yet another pit of despair when you try to style your increasingly complex app.{' '}
          <em>React is kind of a trap</em>.
          I know this, because I fell straight into it when I started learning.
        </p>
        <p>
          Furthermore, instead of the React team creating solutions to these problems,
          they gave us things like Context, which just provide <em>even more ways</em> for people to trap themselves
          into "writing an app <em>in</em> React" instead of "writing an app <em>with</em> React".
          Note that I do think Context is a useful thing overall.
          But there is a sea of online tutorials titled "Todo App with React Context and Hooks" (or similar),
          and so now there is a sea of React devs who think writing an app entirely with Context and Hooks is simply the "React way".
        </p>
        <p>
          But, in reality, there is no "React way". React is the most unopinionated JS library in this discussion,
          and it takes no responsibility for how you create your app.
          By the same token, React <em>provides very few solutions</em> for how to create your app.
          This is in stark contrast to Svelte and Vue, which bypass all of the problems listed above by
          handling the basics out of the box, and handling them well.
        </p>
        <p>
          But here is where the React ecosystem picks up the slack. There are <em>So. Many. React. Libraries</em>.
          Component libraries. State management libraries. Styling libraries.
          Take my complaint about Vue's excessive choice and multiply it by a thousand.
          That said, the flexibility is unmatched, and the community has produced some incredible tools
          that save React and turn it into an absolute powerhouse.
        </p>
        <p>
          After a year of experimenting and building small to medium-sized React projects, I've found a set of tools
          that improve my developer experience massively.
        </p>
        <ul>
          <li>
            Building on top of NextJS makes routing, per-page bundling and static site generation stupidly simple.
          </li>
          <li>
            MobX might just be one of the best things to happen to React.
            It takes one line of boilerplate to create observable state;
            you wouldn't otherwise know it was there. I can just write and test my app logic in normal TypeScript,
            and the logic has no awareness of React at all. React just happens to be the UI layer that sits on top.
          </li>
          <li>
            Radix is an unstyled component library that makes it super easy to ensure that complex components (like dialogs and dropdowns)
            are accessible. It's a massive time-saver.
          </li>
          <li>
            Stitches is my new go-to styling solution.
            Like most CSS-in-JS libraries, it lets you create single-file components with all the power of CSS.
            What I like about Stitches in particular is that it can be easily configured to enforce your design system.
          </li>
        </ul>
        <p>
          Thanks to these tools, I've really enjoyed working with React on my personal projects.
          But without the right set of additional libraries, React is not only limited, but it also discourages good coding practices.
          Any given React project could exist anywhere on the spectrum from DX nightmare to DX paradise.
          It gives all the responsibility to you as the developer to ensure that your experience is a good one.
        </p>
        <p>
          Normally I'd appreciate that empowerment,
          but the issue is that none of the tools I described are solving problems that are unique in any way.
          These problems are <em>basic needs</em> common to every single front-end project,
          and React can't fulfil those needs on its own.
          Defining React as a "UI library" instead of a "framework" doesn't change this fact.
          I don't want to spend my time thinking about how to do all the same things that every other developer has to do -{' '}
          <em>I want to spend my time solving the problems specific to my app</em>.
        </p>
        <p>
          It's okay that React doesn't try to do everything.
          But the credit goes to the community for transforming React into a viable and
          enjoyable tool for building full applications.
        </p>
        <p>
          <strong>In summary</strong> (finally), there's no question that you can do essentially the same things with all three frameworks.
          At the moment, I still find myself gravitating towards React for my own projects;
          I now know what tools will get the job done, and if I'm looking for something, I know I'll find it,
          whether that be a component I don't feel the need to create myself, or simply an answer to a question.
        </p>
        <p>
          If it wasn't obvious though, I align with Svelte's philosophy the most.
          I doubt it will ever get close to React's popularity, but I do hope it continues to grow.
          It has the potential to make front-end work significantly more streamlined, and I think it needs a little more love for that.
        </p>
        <p>
          But that's just my two cents.
        </p>
      </ProjectPageLayout.Description>
    </ProjectPageLayout>
  )
}

export default BraincachePage