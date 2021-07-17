import Markdown from "markdown-to-jsx";
import {getAllBlogPostsFrontMatter} from "../../lib/blogPostsLoader"

const BlogItem = ({title, published, path, description}) => {
    return (
        <article className="my-10 w-auto rounded-lg shadow-xl bg-primary text-white ">
            <h3 className="p-5 text-center">{title}</h3>
            <div className="p-5 bg-white text-black">
                <p className="text-base">
                    <Markdown>{description}</Markdown>
                </p>
                <a href={`blog/${path}`}>Read More</a>
                <p className="mt-5 italic text-xs text-gray-500">{published}</p>
            </div>
        </article>
    )
}

const blogIndex = ({posts}) => {
    return (
        <div className="m-20 ">
            <h1 className="text-center">Posts</h1>
            <div className="flex justify-evenly items-stretch">
                {posts.map((post, index) => (
                    <div key={index}><BlogItem {...post} /></div>)
                )}
            </div>
        </div> 
    )
}

export async function getStaticProps() {
    const posts = getAllBlogPostsFrontMatter();
    return {
        props: {
            posts
        }
    }

}

export default blogIndex