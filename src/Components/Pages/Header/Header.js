import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={
                            <Avatar
                                alt="User settings"
                                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                rounded={true}
                            />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">John</span>
                            <span className="block truncate text-sm font-medium">john.doe@gmail.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavLink to='/home' active={true}>
                        Home
                    </NavLink>


                    <NavLink to="/products" >Products</NavLink>
                    <NavLink to="/blog" >Blog</NavLink>
                    <NavLink to="/login" >Login</NavLink>


                </Navbar.Collapse>
            </Navbar>
       </div>
    );
};

export default Header;