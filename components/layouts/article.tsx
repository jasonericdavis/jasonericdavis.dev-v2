const Article = ({children, meta}) => {
    return (
        <div className="mx-20 text-gray-700">
            <h1 className="text-gray-500">{meta.title}</h1>
            {children}
        </div>
    )
}

export default Article