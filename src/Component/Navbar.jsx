import React , {useState} from "react";
import { NavLink } from "react-router-dom";
import Navlogo from "./Navlogo";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const changeBack = () => {
        if(window.scrollY >=100) {
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    };
   window.addEventListener('scroll' , changeBack);

    return(
    <nav className={navbar ? 'navbar active' : 'navbar'}>
            <div className="mainfirst">
                <Navlogo/>
            </div>
            <div className="mainsecond">
                <div className="submain">
                <NavLink className='anav' to='/'>Home</NavLink>
                <NavLink className='anav' to='/ourproduct'>OurProduct</NavLink>
                {/* <NavLink className='anav' to='/center'>Center</NavLink> */}
                <NavLink className='anav' to='/contact'>Contact</NavLink>
                <NavLink className='anav' to='/about'>About</NavLink>
                <NavLink className='anav' to='/login'>Login/Signup</NavLink>
                </div>
            </div>
    </nav>

    )
    }
export default Navbar;