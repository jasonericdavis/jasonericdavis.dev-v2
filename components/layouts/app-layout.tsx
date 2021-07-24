type LinkItemProp = {
    title?: string,
    link: string,
    img_src?: string
};

const LinkItem = ({title, link, img_src}:LinkItemProp) => (
    <div className='pb-2'>
        <a href={link} className="no-underline" >
            {(img_src)
                ? <img className="w-12" src={img_src} />
                : <h3 className="w-12">{title.toUpperCase()}</h3>
            }
        </a>
    </div>
)

const AppLayout = ({children}) => (
    <>
    <div className="grid grid-flow-col grid-cols-layout grid-rows-layout p-8 h-screen">
      <div className="col-start-1 col-end-3 row-start-1 row-end-1 flex flex-col-reverse">
        {/* <Navbar /> */}
      </div>
      <div className="col-start-1 col-end-2 row-start-2 row-end-3 flex flex-col-reverse">
        <div style={{position: 'sticky', bottom: 50}}>
            <LinkItem title="Home" link="/"></LinkItem>
            <LinkItem title="Blog" link="/blog"></LinkItem>
            <LinkItem img_src="/Twitter_Logo_Blue.png" link="https://twitter.com/jasonericdavis" />
            <LinkItem img_src="/GitHub-Mark-120px-plus.png" link="https://github.com/jasonericdavis" />
        </div>
      </div>
      <div className="col-start-2 col-end-3 row-start-2 row-end-3">
        {children}
      </div>
    </div>
  </>
)

export default AppLayout;