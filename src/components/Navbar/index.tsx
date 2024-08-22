"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Brand from './Brand'
import { dropdownData } from '@/data/dropdownData'
import type { TFooterLinks, TNavIconsData } from '@/types'
import Link from 'next/link'
import { navIconsData } from '@/data/navIconsData'
import OutlineButton from '../Buttons/OutlineButton'
import LoginBrand from './LoginBrand'

const Navbar = () => {
    const [isDropdownOpen1, setIsDropdownOpen1] = useState<boolean>(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState<boolean>(false);
    const [signIn, setSignIn] = useState<boolean>(false);

    const toggleDropdown1 = () => {
        setIsDropdownOpen1(!isDropdownOpen1);
        setIsDropdownOpen2(false);
    };

    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
        setIsDropdownOpen1(false);
    };

    const handleSignIn = () => {
        console.log("done")
        setSignIn(true);
    }

    const handleSignOut = () => {
        setSignIn(false);
    }

    return (

        <nav className="bg-white border-none sticky top-0 left-0 z-99999">
            <div className="max-w-screen-xxl  mx-auto md:px-[97px] px-[22px] py-2  min-h-20 h-full  flex justify-center items-center">
                <div className="flex  items-center justify-between h-full w-full">
                    <div className="flex justify-start items-center gap-9">
                        {
                            signIn ?
                                <LoginBrand /> :
                                <Brand />
                        }
                        <div className="xlg:flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start hidden">
                            <div className="relative flex h-10 max-w-[360px] w-full">
                                <input
                                    type="text"
                                    placeholder='Search here...'
                                    className="min-w-[260px] bg-[#F8F9FA] rounded-tl-[8px] rounded-bl-[8px] border border-[#EBEDF0] focus:outline-none text-xs outline-none  text-black px-3 placeholder:text-[#939CA3] placeholder:text-xs" />
                                <button className=" py-2 px-2 text-xs leading-4 font-semibold focus:outline-none border border-purpleHo bg-purpleHo text-white rounded-tr-[8px] rounded-br-[8px]">
                                    <Image
                                        src={`/assets/images/site/search.png`}
                                        height={16}
                                        width={16}
                                        alt='Search'
                                        className='bg-purpleHo'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="items-center md:justify-between  flex md:w-auto  md:space-x-8 space-x-6">
                        <ul className="xlg:flex flex-col border-gray-500 font-medium hidden   md:space-x-14  md:flex-row md:mt-0 ">
                            <li>
                                <button
                                    onClick={toggleDropdown1}
                                    className="flex items-center justify-between w-full relative text-black border-0 md:p-0 md:w-auto text-sm font-medium">Explore <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="#939CA3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                    <Image
                                        src={'/assets/images/site/explore.png'}
                                        alt='Explore'
                                        height={20}
                                        width={20}
                                        className='absolute top-0 translate-y-[2px] -left-6'
                                    />
                                </button>
                                {isDropdownOpen1 &&
                                    <div className="z-99999 h-fit absolute top-20 -translate-x-1/4 translate-y-0 font-normal bg-white  rounded-bl-sm rounded-br-sm shadow-sm shadow-[#939CA3] w-48">
                                        <ul className="py-2 text-sm text-greyDarkerHo">
                                            {dropdownData.map((item: TFooterLinks) => (
                                                <li className={item.id === 5 ? 'border-b-0' : 'border-b border-b-gray-400/60'} key={item.id}>
                                                    <Link href="#" className="block px-4 py-2 hover:bg-purpleHo hover:text-white">{item.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                }
                            </li>
                            <li>
                                <button
                                    onClick={toggleDropdown2}
                                    className="flex items-center justify-between w-full text-black text-sm font-medium border-0  md:p-0 md:w-auto relative ">Hobbies <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="#939CA3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                    <Image
                                        src={'/assets/images/site/Hobbies.png'}
                                        alt='Explore'
                                        height={20}
                                        width={20}
                                        className='absolute top-0 translate-y-[2px] -left-6'
                                    />
                                </button>
                                {isDropdownOpen2 &&
                                    <div className="z-99999 h-fit absolute top-20 -translate-x-1/4 translate-y-0  font-normal bg-white  rounded-bl-sm rounded-br-sm shadow-sm shadow-[#939CA3] w-48">
                                        <ul className="py-2 text-sm text-greyDarkerHo">
                                            {dropdownData.map((item: TFooterLinks) => (
                                                <li className={item.id === 5 ? 'border-b-0' : 'border-b border-b-gray-400/60'} key={item.id}>
                                                    <Link href="#" className="block px-4 py-2 hover:bg-purpleHo hover:text-white">{item.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                }
                            </li>
                        </ul>
                        <div className="xlg:hidden block">
                            <Image
                                src={'/assets/images/site/navSearch.png'}
                                alt='Search'
                                height={20}
                                width={20}
                            />
                        </div>
                        <div>
                            <ul className='list-none flex gap-5  slg:items-center slg:justify-center'>
                                {navIconsData.map((item: TNavIconsData) => (
                                    <li key={item.id} className={`relative  ${item.id === 3 ? 'w-[24px] h-[24px]' : 'w-[18px] h-[18px]'} ${item.id === 1 || item.id === 3 ? 'hidden slg:block' : ''}`}>
                                        <Image
                                            src={`/assets/images/site/${item.icon}`}
                                            fill
                                            alt='icon'
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {
                            !signIn &&
                            <div className="hidden md:block">
                                <OutlineButton
                                    text='Sign in'
                                    onClick={handleSignIn}
                                />
                            </div>
                        }
                        {signIn &&
                            <div className=" gap-1 hidden md:flex">
                                <Image
                                    src={'/assets/images/site/user.png'}
                                    alt='Menu'
                                    height={45}
                                    width={45}
                                />
                                <div className="h-6 w-6  my-auto">
                                    <Image
                                        src={'/assets/images/site/Arrow.png'}
                                        alt='Menu'
                                        height={20}
                                        width={20}
                                    />
                                </div>
                            </div>
                        }
                        <div className="md:hidden block">
                            <button>
                                <Image
                                    src={'/assets/images/site/ham.png'}
                                    alt='Menu'
                                    height={22}
                                    width={22}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar