import {MDXProvider} from '@mdx-js/react'

const Article = ({children, meta}) => {
    return (
        <MDXProvider
            components={{
                h1: (props) => <h1 {...props} className="text-xl font-light" />,
                h3: (props) => <><h3 {...props} className="font-bold mt-5"/><hr/></>,
                p: (props) => <p {...props} className="my-5" />,
                ol: (props) => <ol {...props} className="my-5" />,
                li: (props) => <li {...props} className="my-2 list-disc"  />
             }}>
            <article className="mx-20 my-20 text-gray-700">
                <h1 className="mb-10">{meta.title}</h1>
                <p>Published {meta.published}</p>
                {children}
            </article>
        </MDXProvider>
        
    )
}

export default Article