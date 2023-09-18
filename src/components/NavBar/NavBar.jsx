import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Notfound", path: "/portfolio" },
      ];
      
    return (
        <nav className="bg-blue-200 p-6">
           <div className=" md:hidden text-3xl" onClick={() => setOpen(!open)}>{
            open === true? <AiOutlineClose></AiOutlineClose> :  <AiOutlineMenu></AiOutlineMenu>
           }
          
           </div>
            <ul className={`md:flex duration-1000 absolute lg:static bg-blue-200 p-4 ${open ? 'top-16' : '-top-60'}`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;