import Markdown from "markdown-to-jsx";
import {getAllBlogPostsFrontMatter} from "../../lib/blogPostsLoader"

const BlogItem = ({title, published, path, description}) => {
    return (
        <>
            <section className="my-5">
                <h3 className="pb-2 text-gray-700">
                    <a href={`blog/${path}`} className="no-underline hover:underline">{title}</a>
                </h3>
                <Markdown>{description}</Markdown>
                <p className="italic text-xs text-gray-500">{published}</p>
                <p className="my-5"><a href={`blog/${path}`}>Read More</a></p>
            </section>
        <hr />
        </>
    )
}

const blogIndex = ({posts}) => {
    return (
        <div className="m-20 ">
            <h1 className="text-center my-10">Posts</h1>
            <div>
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