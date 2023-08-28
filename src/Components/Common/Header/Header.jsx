/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Contact", path: "/contact" },
        { id: 4, name: "Blog", path: "/blog" },
        { id: 5, name: "Projects", path: "/projects" }
    ];

    return (
        <nav className='bg-purple-600 py-2 relative top-0'>
            <div onClick={() => setOpen(!open)} className=' md:hidden lg:hidden block duration-1000 cursor-pointer'>
                {
                    open === true ? <XMarkIcon className="h-6 w-6 text-white" /> : <Bars3Icon className="h-6 w-6 text-white" />
                }

            </div>


            <ul className={`md:flex justify-center gap-10 text-center m-auto w-full absolute md:static lg:static duration-1000 bg-purple-600 text-white ${open ? 'top-8' : 'hidden'}`}>
                {
                    routes.map(route => <Link route={route} key={route.id} />)
                }
            </ul>
        </nav>
    );
};

const Link = (props) => {
    const { name, path } = props.route
    return (
        <>
            <li className='my-10 md:m-0 lg:m-0 uppercase font-semibold'><a href={path}>{name}</a></li>
        </>
    )
}

export default Header;