import fs from "fs";
import path from "path";
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), "_posts");

export const getAllBlogPostsFrontMatter = () => {
    const posts = fs.readdirSync(postsDirectory);
    return posts.map((filename) => {
        console.log(`Creating Post: ${filename}`)
        //if(!filename.endsWith('.md')) return null
        const realSlug = filename.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, `${realSlug}.md`)

        const md = fs.readFileSync(fullPath,"utf8")

        const {data} = matter(md)
        return { ...data, path: fullPath}
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