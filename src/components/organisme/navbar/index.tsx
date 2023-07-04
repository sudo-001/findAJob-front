
import SignUpBtn from '@/components/atomes/btns/sIgnUpBtn'
import SignInBtn from '@/components/atomes/btns/signInBtn'
import { Colors } from '@/utils/assets/Colors'
import { DesignDetails } from '@/utils/assets/DesignDetail'
import { IsActiveRoute } from '@/utils/shared/isActive'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

type Props = {}

function Navbar({ }: Props) {
    const { pathname } = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [pathName, setPathName] = useState(pathname)
    const [mobileOpen, setMobileOpen] = useState(true);

    // This useEffect function concern the browser scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // The function to handle the scroll
    function handleScroll() {
        const st = window.scrollY || document.documentElement.scrollTop;
        const direction = st > lastScrollTop ? 'down' : 'up';
        if (st === 0) {
            setIsScrolled(false);
        } else {
            setIsScrolled(true);
        }
        setLastScrollTop(st);
    }

    // This useEffect function concern the pathName
    useEffect(() => {
        setPathName(pathname)
    }, [pathname])

    return (
        <nav className={`fixed top-0 left-0 w-full py-3 px-12 z-10 ${isScrolled ? 'bg-gray-800 text-white' : 'bg-[#fff] text-gray-800'
            }`} >
            <div className='w-full flex flex-row justify-between items-center'>
                <div className='flex flex-row md:w-2/3 lg:w-2/4 justify-between items-center'>
                    <h1 className='text-3xl font-Almarai'>FindA<span className='font-bold'>Job</span></h1>

                    <ul className='md:flex flex-row list-none justify-around w-3/4 hidden'>
                        <Link href="/" className={IsActiveRoute('/') ? 'text-[#0066FF]' : 'text-[#7F8FA0]'}>
                            <li className={`hover:cursor-pointer hover:text-[#0066FF] transition-all duration-100`} >
                                Home
                            </li>
                        </Link>
                        <Link href="/search/" className={IsActiveRoute('/search') ? 'text-[#0066FF]' : 'text-[#7F8FA0]'}>
                            <li className={`hover:cursor-pointer hover:text-[#0066FF] transition-all duration-100`} >
                                Find Jobs
                            </li>
                        </Link>

                        <Link href="/recommandedJobs" className={IsActiveRoute('/recommandedJobs') ? 'text-[#0066FF]' : 'text-[#7F8FA0]'}>
                            <li className={`hover:cursor-pointer hover:text-[#0066FF] transition-all duration-100`}>
                                Recommanded Jobs
                            </li>
                        </Link>

                        <Link href="/dashboard" className={IsActiveRoute('/dashboard') ? 'text-[#0066FF]' : 'text-[#7F8FA0]'}>
                            <li className={`hover:cursor-pointer hover:text-[#0066FF] transition-all duration-100`}>
                                Dashboard
                            </li>
                        </Link>
                    </ul>
                </div>


                <div className=' md:w-1/3 lg:w-1/5 md:flex flex-row justify-evenly items-center hidden'>

                    <SignUpBtn link="" text='Sign Up' />

                    <SignInBtn text='Login' />
                </div>

                {/* Hamburger Menu */}
                <div className={`md:w-1/3 transition-all duration-200 md:hidden`}>
                    <AiOutlineClose className={`w-6 h-6 font-bold ${mobileOpen == true ? 'hidden' : 'block'}`} onClick={() => { setMobileOpen(!mobileOpen), console.log(mobileOpen) }} />
                    <CiMenuFries className={`w-6 h-6 ${mobileOpen == true ? 'block' : 'hidden'}`} onClick={() => { setMobileOpen(!mobileOpen); console.log(mobileOpen) }} />
                </div>


            </div>
            {/* Mobile Menu */}
            <div className={`h-max py-4 flex flex-col md:hidden transition-all duration-300 ${mobileOpen === true ? 'hidden' : 'block'}`}>

                <ul className={` flex-row list-none justify-around w-3/4 transition-all duration-300 md:hidden ${mobileOpen === true ? 'hidden' : 'block'}`}>
                    <Link href="/" className={IsActiveRoute('/') ? 'text-[#0066FF]' : 'text-[#7F8FA0]'}>
                        <li className={`hover:cursor-pointer hover:text-[#0066FF] transition-all duration-100 py-2`} >
                            Home
                        </li>
                    </Link>
                    <Link href="/search/" className={IsActiveRoute('/search') ? 'text-[#0066FF]' : 'text-[#7F8FA0]'}>
                        <li className={`hover:cursor-pointer hover:text-[#0066FF] transition-all duration-100 py-2`} >
                            Find Jobs
                        </li>
                    </Link>

                    <Link href="/recommandedJobs" className={IsActiveRoute('/recommandedJobs') ? 'text-[#0066FF]' : 'text-[#7F8FA0]'}>
                        <li className={`hover:cursor-pointer hover:text-[#0066FF] transition-all duration-100 py-2`}>
                            Recommanded Jobs
                        </li>
                    </Link>

                    <Link href="/dashboard" className={IsActiveRoute('/dashboard') ? 'text-[#0066FF]' : 'text-[#7F8FA0]'}>
                        <li className={`hover:cursor-pointer hover:text-[#0066FF] transition-all duration-100 py-2`}>
                            Dashboard
                        </li>
                    </Link>
                </ul>

                <div className={`pt-6 w-2/4 flex flex-row justify-between items-center md:hidden ${mobileOpen === true ? 'hidden' : 'block'}`}>

                    <SignUpBtn link="" text='Sign Up' />

                    <SignInBtn text='Login' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar

