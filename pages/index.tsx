import Head from 'next/head'

const IndexPage = () => (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
        <div className="grid grid-flow-col grid-cols-layout grid-rows-layout h-screen p-8">
          <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex flex-col-reverse">
            <a href="https://twitter.com/jasonericdavis"><img className="w-12" src="Twitter_Logo_Blue.png" /></a>
            <a href="https://github.com/jasonericdavis"><img className="w-12"  src="GitHub-Mark-120px-plus.png" /></a>
          </div>
          <div className="col-start-2 col-end-3 row-start-1 row-end-2 flex items-center justify-evenly">
            <div className="title text-center">
              <h1>@JasonEricDavis</h1>
              <hr className="border-1 border-solid border-current"/>
              <h2>Software Engineer</h2>
            </div>
            <div className="filter-drop-shadow"><img src="memoji.png" /></div>
          </div>
          <div className="col-start-1 col-end-3 row-start-2 row-end-3">
            <ul className="flex items-center justify-around">
              <li>
                <h3><a className="no-underline" href="">About</a></h3>
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