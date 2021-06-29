import {MDXProvider} from '@mdx-js/react'

const Article = ({children, meta}) => {
    return (
        <MDXProvider
            components={{
                h1: (props) => <h1 {...props} className="text-xl font-light" />,
                p: (props) => <p {...props} className="my-5" />,
                ol: (props) => <ol {...props} className="my-5" />,
                li: (props) => <li {...props} className="my-2 list-disc"  />
             }}>
            <div className="mx-20 my-20 text-gray-700">
                <h1 className="text-gray-500">{meta.title}</h1>
                <p>Published {meta.published}</p>
                {children}
            </div>
        </MDXProvider>
        
    )
}

export default Article