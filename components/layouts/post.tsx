import Head from 'next/head'

type Props = {
    title: string
    published: string
    description: string
    image: string | null
    path: string
    children: React.ReactChildren | React.ReactElement
}

const Post = ({title, published, description, image, path, children}:Props, ) => {
    return (
        <>
        <Head>
            <title>{title} by JasonEricDavis</title>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@jasonericdavis" />
            <meta name="twitter.title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`https://jasonericdavis.dev/${image || '/memoji.png'}`} />
            <meta name="twitter:image:alt" content={description} />
            <meta name="og:title" content={title} />
            <meta name="og:title" content="article" />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={description} />
            <meta name="og:url" content={`https://jasonericdavis.dev/blog/${path}`} />
            <meta name="og:image" content={`https://jasonericdavis.dev/${image || '/memoji.png'}`} />
            <meta name="og:image:alt" content={description} />
        </Head>
        <div className="pt-10 mx-20">
            <h1 className="pb-4">{title}</h1>
            <p className="italic pb-4">{published}</p>
            <hr />
        </div>
        <article className=" prose prose-lg  prose-yellow mx-20">
            {children}
        </article>
        </>
    )
}

export default Post