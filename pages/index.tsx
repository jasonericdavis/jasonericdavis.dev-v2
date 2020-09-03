import Head from 'next/head'

const IndexPage = () => (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
        <div className="wrapper">
          <div className="social grid-item">
            <a href="https://twitter.com/jasonericdavis"><img src="Twitter_Logo_Blue.png" /></a>
            <a href="https://github.com/jasonericdavis"><img src="GitHub-Mark-120px-plus.png" /></a>
          </div>
          <div className="main grid-item">
            <div className="title">
              <h1>@JasonEricDavis</h1>
              <hr />
              <h2>Software Engineer</h2>
            </div>
            <div className="memoji"><img src="memoji.png" /></div>
          </div>
          <div className="nav grid-item">
            <ul className="nav-items">
              <li>
                <h3><a href="">About</a></h3>
              </li>
              <li>
                <h3><a href="">Experience</a></h3>
              </li>
              <li>
                <h3><a href="">Recommmendations</a></h3>
              </li>
              <li>
                <h3><a href="">Contact</a></h3>
              </li>
            </ul>
          </div>
        </div> 
    </div> 
)

export default IndexPage