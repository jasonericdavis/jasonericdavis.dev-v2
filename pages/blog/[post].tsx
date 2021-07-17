import {getBlogPost, getAllBlogPostsFrontMatter} from "../../lib/blogPostsLoader"
import Markdown from "markdown-to-jsx";
import path from "path";

const Post = ({post}) => {
    return (
        <Markdown>{post.content}</Markdown>
    )
}

export async function getStaticProps({params}) {
    const postsDirectory = path.join(process.cwd(), "posts");
    const postFilename =  path.join(postsDirectory, `${params.post}.md`)
    const post = getBlogPost(params.post);
    
    return {
        props: {
            post
        }
    }
}

export async function getStaticPaths() {
    const posts = getAllBlogPostsFrontMatter()
    return {
        paths: posts.map(item => {
            return {params: {post: item.path}}
        }),
        fallback: true
    }
}

export default Post