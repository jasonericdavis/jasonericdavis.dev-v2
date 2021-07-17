import Head from 'next/head'

type Props = {
    title: String
    published: String
    children: React.ReactChildren | React.ReactElement
}

const Post = ({title, published, children}:Props, ) => {
    return (
        <>
        <Head>
            <title>{title} by JasonEricDavis</title>
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