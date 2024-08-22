"use client"

import React, { useState } from 'react';
import GoogleButton from '../Buttons/GoogleButton';
import FacebookButton from '../Buttons/FacebookButton';
import Image from 'next/image';
import Link from 'next/link';
import FullWidthOutlineButton from '../Buttons/FullWidthOutlineButton';
import FullWidthSolidButton from '../Buttons/FullWidthSolidButton';

export default function Form() {
    const [isSignIn, setIsSignIn] = useState(true);

    const handleTabClick = (formType: string) => {
        setIsSignIn(formType === 'signin');
    };

    return (
        <div >
            {/* Tabs */}
            <div className="flex xl:justify-start justify-center mb-6 gap-6">
                <button
                    className={`md:text-xl md:leading-[30px] text-base leading-6 font-semibold border-none outline-none focus:outline-none pb-2 ${isSignIn ? ' text-purpleHo decoration-purpleHo underline underline-offset-[12px] decoration-[2px]' : 'no-underline text-[#939CA3]'
                        }`}
                    onClick={() => handleTabClick('signin')}
                >
                    Sign In
                </button>
                <button
                    className={`md:text-xl md:leading-[30px] text-base leading-6 font-semibold border-none outline-none focus:outline-none pb-2 ${!isSignIn ? 'text-purpleHo decoration-purpleHo underline underline-offset-[12px] decoration-[2px]' : 'no-underline text-[#939CA3]'
                        }`}
                    onClick={() => handleTabClick('joinin')}
                >
                    Join In
                </button>
            </div>

            {/* Form Container */}
            <div className="space-y-4">
                {isSignIn ? <SignInForm /> : <JoinInForm />}
            </div>
        </div>
    );
}

function SignInForm() {
    return (
        <form className="space-y-4 flex flex-col">
            <div className="order-3 xl:order-1 mt-4 space-y-4">
                <GoogleButton />
                <FacebookButton />

            </div>

            <div className="inline-flex items-center justify-center w-full relative py-3 order-2">
                <hr className="w-full h-[2px]  bg-greyLightHo border-0" />
                <span className="absolute px-2 font-semibold leading-4 text-black -translate-x-1/2 bg-heroHo left-1/2 text-xs">Or connect with</span>
            </div>
            <div className="order-1 xl:order-3 flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-[#EBEDF0] rounded-lg focus:outline-none text-xs placeholder:text-xs placeholder:text-[#939CA3] font-normal leading-4"
                />
                <div className="relative">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border border-[#EBEDF0] rounded-lg focus:outline-none text-xs placeholder:text-xs placeholder:text-[#939CA3] font-normal leading-4" />
                    <span className="absolute top-1/3 right-4 translate-y-0">
                        <Image
                            src={`/assets/images/site/Password.png`}
                            alt='Password'
                            height={16}
                            width={16}
                        />
                    </span>

                </div>
            </div>
            <div className="flex items-center justify-between py-3 order-1 xl:order-3">
                <div className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4 text-[#F7F5F9] border border-purpleHo rounded-sm" />
                    <label htmlFor="remember-me" className="text-black text-xs leading-4 font-normal">Remember me</label>
                </div>
                <div className="flex gap-2 items-center">
                    <Image
                        src={`/assets/images/site/lock.png`}
                        alt='Password'
                        height={16}
                        width={15.78}
                    />
                    <Link href="#" className="text-black text-xs leading-4 font-normal">Forgot password?</Link>
                </div>
            </div>
            <div className="order-1 xl:order-3">
                <FullWidthOutlineButton
                    text='Continue'
                    className='hidden xl:block'
                />
                <FullWidthSolidButton
                    text='Continue'
                    className='xl:hidden'
                />

            </div>
        </form>
    );
}

function JoinInForm() {
    return (
        <form className="space-y-4 flex flex-col">
            <div className="order-3 xl:order-1 mt-4 space-y-4">
                <GoogleButton />
                <FacebookButton />
            </div>
            <div className="inline-flex items-center justify-center w-full relative py-3 order-2">
                <hr className="w-full h-[2px]  bg-greyLightHo border-0" />
                <span className="absolute px-2 font-semibold leading-4 text-black -translate-x-1/2 bg-heroHo left-1/2 text-xs">Or connect with</span>
            </div>
            <div className="order-1 xl:order-3 flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-[#EBEDF0] rounded-lg focus:outline-none text-xs placeholder:text-xs placeholder:text-[#939CA3] font-normal leading-4"
                />
                <div className="relative">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border border-[#EBEDF0] rounded-lg focus:outline-none text-xs placeholder:text-xs placeholder:text-[#939CA3] font-normal leading-4 relative" />
                    <span className="absolute top-1/4 right-4">
                        <Image
                            src={`/assets/images/site/PasswordA.png`}
                            alt='Password'
                            height={16}
                            width={16}
                        />
                    </span>
                    <div className="flex justify-between items-center mt-1 flex-wrap sm:flex-nowrap">
                        <div className='inline-flex gap-2'>
                            <span className="md:w-[60px] w-[30px] bg-white h-1 inline-block rounded-sm"></span><span className="w-[60px] bg-white h-1 inline-block rounded-sm"></span><span className="w-[60px] bg-white h-1 inline-block rounded-sm"></span>
                        </div>
                        <span className="text-[10px] leading-4 text-[#939CA3] font-semibold">
                            Password strength
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-start translate-y-1 order-1 xl:order-3">
                <p className='text-xs leading-[18px] text-greyDarkerHo'>By continuing, you agree to our
                    <span className="text-greyHo">
                        {' '}Terms of Service{' '}
                    </span>
                    and
                    <span className="text-greyHo">
                        {' '}Privacy Policy{' '}
                    </span>
                    .

                </p>
            </div>
            <div className="order-1 xl:order-3">
                <FullWidthOutlineButton
                text='Agree and Continue'
                className='hidden xl:block'
                />
                <FullWidthSolidButton
                text='Agree and Continue'
                className='xl:hidden'
                />

            </div>
        </form>
    );
}
