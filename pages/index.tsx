import Head from "next/head";
import Navbar from "../components/navbar";
import Intro from "../components/intro";

const IndexPage = () => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
        rel="stylesheet"
      />
      <title>JasonEricDavis.dev</title>
    </Head>
    <div className="grid grid-flow-col grid-cols-layout grid-rows-layout p-8 h-screen">
      <div className="col-start-1 col-end-3 row-start-1 row-end-1 flex flex-col-reverse">
        <Navbar />
      </div>
      <div className="col-start-1 col-end-2 row-start-2 row-end-3 flex flex-col-reverse">
        <a href="https://twitter.com/jasonericdavis">
          <img className="w-12" src="Twitter_Logo_Blue.png" />
        </a>
        <a href="https://github.com/jasonericdavis">
          <img className="w-12" src="GitHub-Mark-120px-plus.png" />
        </a>
        <a href="blog" className="py-3 no-underline" >
          <h3 className="w-12">BLOG</h3>
        </a>
      </div>
      <div className="col-start-2 col-end-3 row-start-2 row-end-3 flex items-center justify-evenly">
        <div className="text-center w-1/2">
          <h1>@JasonEricDavis</h1>
          <hr className="border-1 border-solid border-current" />
          <h2>Software Engineer</h2>
          <Intro />
        </div>
        <div className="filter-drop-shadow">
          <img src="memoji.png" />
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
