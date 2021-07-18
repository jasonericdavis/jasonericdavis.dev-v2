import {getBlogPost, getAllBlogPostsFrontMatter} from "../../lib/blogPostsLoader"
import Markdown from "markdown-to-jsx";
import Layout from '../../components/layouts/post'

type Post = {
    title: string
    published: string
    path: string
    description: string
    image: string | null
    content: string
}


const Post = ({content, ...props} : Post) => {
    return (
        <Layout {...props}>
            <Markdown >{content}</Markdown>
        </Layout>
    )
}

export async function getStaticProps({params}) {
    const post = getBlogPost(params.post);
    return { props: { ...post, path: params.post } }
}

export async function getStaticPaths() {
    const posts = getAllBlogPostsFrontMatter()
    return {
        paths: posts.map(item => {
            return {params: {post: item.path}}
        }),
        fallback: false
    }
}

export default Post