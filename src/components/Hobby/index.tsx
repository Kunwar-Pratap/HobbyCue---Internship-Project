import React from 'react'
import Image from 'next/image'
import SolidButton from '../Buttons/SolidButton'

const Hobby = () => {
    return (
        <section className="bg-[#F7FDFF] md:p-[100px] py-12 px-6 w-full md:max-h-[662px] h-full">
            <div className="flex gap-5 justify-start items-start flex-col w-fit">
                <h2 className="md:text-[36px] text-[18px] md:leading-[54px] leading-[27px] text-gray-900 md:font-semibold font-medium italic">Your{' '}
                    <span className="text-purpleHo">hobby</span>
                    {' '}Your{' '}
                    <span className="text-skyHo">Community...</span>
                </h2>
                <SolidButton
                    text='Get started'
                />
            </div>
            <div className="inline-flex justify-center items-center pt-[100px] w-full h-full">
                <Image
                    src={'/assets/images/site/Group99.png'}
                    height={302}
                    width={1240}
                    alt='Audio Player'
                />
            </div>
        </section>
    )
}

export default Hobby