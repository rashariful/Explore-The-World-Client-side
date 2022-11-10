import { Navbar } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from '../../../Context/UserContext';

import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);

    // this is for log out function
    const handleLogOut = () => {
        logoutUser()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    };
  
    return (
        <div className="shadow drop-shadow-sm">
            <Navbar className="max-w-screen-xl mx-auto" fluid={true} rounded={true}>
                <Navbar.Brand to='/'>
                    <img
                        src="https://www.logodesign.net/logo/hiker-on-mountain-top-6158ld.png?size=2&industry=travel-hotel"
                        className="mr-3 h-6 sm:h-9"
                        alt="CRUD Logo"
                    />
                    <Link to='/' className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Explore the World
                    </Link>
                </Navbar.Brand>
                
                <Navbar.Collapse>
                    <NavLink to='/home' active={true}>
                        Home
                    </NavLink>


                    {
                        user?
                         <><NavLink to="/addservice" >Add Service</NavLink>
                         <NavLink to="/myreview" >MyReview</NavLink></>
                         : ""
                    }
                    <NavLink to="/blog" >Blog</NavLink>
                   


                </Navbar.Collapse>
                {
                    user || user?.email || user?.uid || user?.displayName

                        ?
                        <div className='flex justify-center items-center gap-4'>
                            <div>  <button onClick={handleLogOut} className='bg-indigo-500 px-10 py-2 rounded-md text-white font-medium hover:bg-indigo-600 transition-all'>
                                <Link to='/' >Sign Out</Link>
                            </button></div>    
                            <img src={user?.photoURL} className="w-10 h-10 rounded-full" alt="" />                
                        </div>

                        :
                        <div className='flex gap-4'>
                            <button className='bg-indigo-500 px-10 py-2 rounded-md text-white font-medium hover:bg-indigo-600 transition-all'>
                                <Link to='/login' >Login</Link>
                            </button>
                        </div>
                }
            </Navbar>
       </div>
    );
};

export default Header;