import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import { logo } from '../assets'

const navData = [
    {
        name: "Work",
        url: "/work"
    },
    {
        name: "About",
        url: "/about"
    },
    {
        name: "Services",
        url: "/services"
    },
    {
        name: "Ideas",
        url: "/ideas"
    },
    {
        name: "Careers",
        url: "/careers"
    },
    {
        name: "Contact",
        url: "/contact"
    },
]

const Navbar = () => {
    const location = useLocation();
    const [scrollTop, setScrollTop] = useState(false);
    const [scrollBtm, setScrollBtm] = useState(false);
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setScrollBtm(false)
                setScrollTop(false)
            } else if (lastScrollY < window.scrollY) {
                setScrollBtm(true)
                setScrollTop(false)
            } else {
                setScrollBtm(false)
                setScrollTop(true)
            }

            lastScrollY = window.scrollY
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`w-full bg-orange-500 px-16 py-6 flex justify-between items-center z-50 fixed ${scrollBtm ? '-top-40' : 'top-0'} ${scrollTop ? 'opacity-80' : ''} duration-500`}>
            <img src={logo} alt="suitmedia-logo" className='h-16 pl-10' />
            <div className='flex gap-8 text-2xl text-white'>
                {navData.map(data => (
                    <div className='flex flex-col relative items-center justify-center' key={data.name}>
                        <NavLink to={data.url}>
                            {data.name}
                        </NavLink>
                        <div className={`rounded-lg h-1.5 bg-white absolute -bottom-3 ${location.pathname === data.url ? "w-full" : "w-0"} duration-150`}
                        ></div>
                    </div>
                ))}
            </div>
        </nav>
    );
};


export default Navbar