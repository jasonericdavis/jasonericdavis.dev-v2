import {getAllBlogPostsFrontMatter} from "../../lib/blogPostsLoader"
import Markdown from "markdown-to-jsx";

const blogIndex = ({posts}) => {
    return (
        <div>
        {
            posts.map((post, index) => (
                <Markdown key={index}>
                    {`${post.title} ${post.published}`}
                </Markdown>)
            )
        }
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