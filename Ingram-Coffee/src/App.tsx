import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>

      <div className='tester'>
      <div className="main__wrapper">
      <main>
        <h1>The Codepen Times</h1>
        <aside>
          <div>
            <div className="issue">Issue #1</div>
            <div className="date">Tuesday, 26 May, 2020</div>
            <div className="edition">Two memes Edition</div>
          </div>
        </aside>
        <h2 className="title--large main-title">
          Woman spends too much time on Codepens despite advice; no plans to
          stop
        </h2>
        <div className="main-text multi-column">
          <p>
            Sometimes, Internet users land themselves in an uncommon situation
            where an app or website can be used for both work and personal
            situations. Well, a young front-end designer was spending up to 13
            hours on the site, Codepen for work and her hobby, which
            unfortunately, is also coding.
          </p>
          <p>
            The designer, whose work includes a <em>To-Do Terrarium</em>,
            clarified, "Well, I didn't <em> have </em>to use it for work but it
            was already part of my workflow. It just made sense as it was more
            efficient." The biggest issue, she said, is that she would hop on
            Codepen for work, but would get distracted by pens made by others in
            the community for unexpectedly long periods of time, which then
            causes her to spend even more time on the site.
          </p>
          <p>
            "I mean, that's terrible right?" she asked. Codepen, which brands
            itself as the best place to build, test, and discover front-end
            code, has declined to comment at this time.
          </p>
        </div>
        <a
          className="terrarium"
          href="https://codepen.io/oliviale/full/oNXJgEM"
          target="_blank"
        >
          <figure>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-terrarium.jpg"
            />
            <figcaption>
              A to-do list that grows succulents when you've completed a task
            </figcaption>
          </figure></a
        ><a
          className="item-with-image plan span--2 long--2"
          href="https://codepen.io/oliviale/full/moLrBq"
          target="_blank"
          ><img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-floorplan.jpg"
          />
          <h4>Can you get inspired to make your own floor plans?</h4>
          <div className="multi-column">
            <p>
              Making a floor Plan with CSS Grid? Talk about using the wrong tool
              for the job. But I guess this is what happens when someone isn't
              happy with any of the floor plans found on Pinterest; she'll start
              making her own for the eventual home that she will never own.
              Nevertheless, there's a home office with a large window to look
              out of pensively during rainy days and a ton of "white space" for
              the cats to run around.
            </p>
          </div></a
        ><a
          className="hogwarts"
          href="https://codepen.io/oliviale/full/MZZYyO"
          target="_blank"
        >
          <div className="hogwarts__title">50% Off Hogwarts Express tickets</div>
          <div className="hogwarts__image">
            <span>Limited time offer</span
            ><img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-hogwarts.svg"
            /></div></a
        ><a
          className="item-with-image pasta with-border"
          href="https://codepen.io/oliviale/full/zYvxXWw"
          target="_blank"
        >
          <h4>A pasta menu</h4>
          <p>
            Everybody loves pasta. It's impossible to not love them, so here are
            15 recipes, served with GSAP. Note the easter egg — the menu icon
            changes according to the pasta that you choose.
          </p></a
        ><a
          className="item-with-image magazine with-border"
          href="https://codepen.io/oliviale/full/GRKQoKM"
          target="_blank"
        >
          <h4>Marvel at a magazine</h4>
          <p>
            A tribute of sorts to an era of cool superhero movies, this is a
            Marvel-themed magazine! Recommended, because it took 45 hours, so
            you know some serious dedication has been poured into this.
          </p></a
        ><a
          className="item-with-image style"
          href="https://codepen.io/collection/XJyNPm"
          target="_blank"
        >
          <h4>Let's adopt, don't shop.</h4>
          <p>
            Explore a style guide and various page layouts for a pet adoption
            site in the <em>Style Guide</em> collection. Inspired by the
            <em>Atomic Design</em> principle, this 8-pen collection includes a
            404 page concept, an admin dashboard and what a Twitter user calls a
            'media card zen garden'. Each pen comes with five (yes, five) color
            themes, including the precious dark mode.
          </p></a
        ><a
          className="item-with-image toggles"
          href="https://codepen.io/oliviale/full/xxboXzo"
          target="_blank"
          ><img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-toggle.gif"
          />
          <h4>Toggles</h4>
          <p>
            Eight playful toggles to toggle on and off for your amusement. Is it
            possible to use these on your site and still adhere to assessibility
            rules? No. But there's a really cute dog one you <em>have </em>to
            see.
          </p></a
        ><a
          className="menu"
          href="https://codepen.io/oliviale/full/LYYrKMV"
          target="_blank"
        >
          <figure>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-menu.jpg"
            />
            <figcaption>See the new and improved menu for Toasty!</figcaption>
          </figure></a
        ><a
          className="social"
          href="https://codepen.io/oliviale/full/QWjjrZX"
          target="_blank"
          ><img
            className="social__image"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-social.gif"
          />
          <div className="social__subtitle">World News</div>
          <div className="social__content">
            Looks like Covid-19 is gonna be around for a while so here is
            another friendly reminder to practice social distancing. Oh, and
            wear a mask!
          </div></a
        >
        <div className="item-with-image cssgrid-collection">
          <a
            className="cssgrid-collection__image"
            href="https://codepen.io/collection/DQvYpQ"
            target="_blank"
            ><img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-co-grid.jpg"
          /></a>
          <div className="cssgrid-collection__content">
            <h4>
              <a href="https://codepen.io/collection/DQvYpQ" target="_blank"
                >More CSS Grid things like this one. Shelves, coupons and more!
              </a>
            </h4>
            <div className="multi-column-3">
              <p>
                Get your fill of more CSS Grid items in this collection. There
                are a total of 32 pens to date... well, 33, if you count this
                one too. What can you expect in this collection? The hidden
                gems, in my totally unbiased opinion, are
                <a
                  href="https://codepen.io/oliviale/full/wbyVWr"
                  target="_blank"
                  >the recreation of the Pac-Man layout</a
                >
                and
                <a href="https://codepen.io/oliviale/pen/wbyVWr" target="_blank"
                  >coupons inspired by junk mail</a
                >. A lot of joke items of things that shouldn't be done in CSS
                Grid, such as
                <a
                  href="https://codepen.io/oliviale/full/PXGgMG"
                  target="_blank"
                  >a shelf</a
                >?
                <a
                  href="https://codepen.io/oliviale/full/qggOog"
                  target="_blank"
                  >Bathroom tiles wtf</a
                >? and
                <a
                  href="https://codepen.io/oliviale/full/bOWqbj"
                  target="_blank"
                  >makeup palettes </a
                >. If you are a cultured person, you will have a chance to enjoy
                a couple of pens inspired by
                <a
                  href="https://codepen.io/oliviale/full/JxVZpX"
                  target="_blank"
                  >Harry Potter </a
                >and
                <a
                  href="https://codepen.io/oliviale/full/RwNdeeQ"
                  target="_blank"
                  >Pokemon.</a
                >
                On the rare occasion that you are looking at this profile for
                something you can use in production, you really shouldn't. But,
                there are <em> some </em>real-world applications, such as
                <a
                  href="https://codepen.io/oliviale/full/GPXozx"
                  target="_blank"
                  >the recipe layout</a
                >,
                <a
                  href="https://codepen.io/oliviale/full/pqoEoJ"
                  target="_blank"
                  >the product catalog</a
                >, and
                <a
                  href="https://codepen.io/oliviale/full/XyqQYL"
                  target="_blank"
                  >color palettes for a style guide</a
                >.
              </p>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <h3 className="title--big">Hot this month</h3>
          <a
            className="codepen-item pie"
            href="https://codepen.io/oliviale/full/BaovGmg"
            target="_blank"
            ><img
              className="pie__image"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-pie.jpg"
            />
            <div className="pie__subtitle">Food</div>
            <div className="pie__content">
              <h4>Pies for everyone!</h4>
              <p>
                No man is left behind. There's infinite pie with this one div
                and a repeating background.
              </p>
            </div></a
          ><a
            className="sidebar-item captcha"
            href="https://codepen.io/oliviale/full/RwWdNRd"
            target="_blank"
          >
            <h5>Frustrated designer runs amok with Captcha ideas</h5>
            <p>
              From Tic Tac Toe to solving meme-based questions, this is a
              different take on how web captchas should be. "I have not
              successfully picked out all photos of a truck on the first try.
              Something's gotta change," says the designer, who has requested to
              remain anonymous.
            </p></a
          ><a
            className="sidebar-item slack-ui with-border"
            href="https://codepen.io/oliviale/full/GRpvNBa"
            target="_blank"
          >
            <h5>Slack UI gets reverse engineered</h5>
            <p>
              Another valiant effort to reverse engineer a web app. However, the
              UI is repurposed to showcase Codepens instead of mock
              conversations. This is a codepen showcase inception situation.
            </p></a
          ><a
            className="workout"
            href="https://codepen.io/oliviale/full/RwWKybY"
            target="_blank"
          >
            <div className="workout__image">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/showcase-workout.jpg"
                alt="Workout"
              />
            </div>
            <div className="workout__blurb">
              Always failing to keep track of your workouts?
            </div>
            <div className="workout__title">Use this tool!</div></a
          >
        </div>
      </main>
    </div>
  </div>
  
    </div>
  )
}

// there we go here is a comment for the first time//
export default App
