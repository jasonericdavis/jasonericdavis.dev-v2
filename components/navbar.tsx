
const items = [
]

const NavItem = ({title,path}) => (
  <li>
    <h3>
      <a className="no-underline" href={path}>{title}</a>
    </h3>
  </li>
)


export const Navbar = () => (
  <div>
     <ul className="flex items-end justify-around">
       {items.map((item,index) => <NavItem key={index} {...item} />)}
    </ul>
  </div>
);

export default Navbar;
