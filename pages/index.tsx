import Intro from "../components/intro";

const IndexPage = () => (
  <div className="flex items-center justify-evenly">
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
);

export default IndexPage;
