import fs from "fs";
import path from "path";
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), "_posts");

export const getAllBlogPostsFrontMatter = () => {
    const posts = fs.readdirSync(postsDirectory);
    return posts.map((filename) => {
        if(!filename.endsWith('.md')) return null
        const md = fs.readFileSync(
            path.join(postsDirectory, filename)
            ,"utf8"
        )

        const {data} = matter(md)
        return { ...data, path: filename.replace('.md', '')}
    })
}

export const  getBlogPost = (filename) => {
    const markdownFilename = `${filename}.md`
    const md = fs.readFileSync(
        path.join(postsDirectory, markdownFilename),"utf8"
    )

    const {data, content} = matter(md)
    return { ...data, content}
}