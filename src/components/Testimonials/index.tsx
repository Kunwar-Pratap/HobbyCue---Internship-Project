import React from 'react'
import Image from 'next/image'
const Testimonials = () => {
    return (
        <section className="bg-white md:p-[100px] py-12 px-6 w-full xxl:max-h-[672px] h-full">

            <div className="w-full border-none bg-white rounded-md">
                <div className="h-full  lg:p-[40px] p-6 rounded flex flex-col gap-8 bg-[#F7F5F9]">
                    <div className="flex gap-5 justify-start items-center">
                        <Image
                            src={'/assets/images/site/quote.png'}
                            height={40}
                            width={40}
                            alt='add'
                        />
                        <h3 className="md:text-[24px] md:leading-[36px] font-semibold text-[18px] leading-[27px] text-greyHo">
                            Testimonials
                        </h3>
                    </div>

                    <p className="md:text-[18px] md:leading-[30px] text-xs leading-[20px] text-greyDarkerHo font-light">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
                    <div className="flex justify-between items-center flex-col gap-6 xxl:flex-row xxl:gap-0">
                        <Image
                            src={'/assets/images/site/AudioTrack.png'}
                            height={100}
                            width={776}
                            alt='Audio Player'
                            className='object-cover order-2 xxl:order-1'
                        />
                        <div className="flex justify-center items-center gap-6 order-1 xxl:order-2">
                            <Image
                                src={'/assets/images/site/Ellipse12.png'}
                                height={100}
                                width={100}
                                alt='Singer'
                                className='md:block hidden'
                            />
                            <Image
                                src={'/assets/images/site/Ellipse12.png'}
                                height={60}
                                width={60}
                                alt='Singer'
                                className='block md:hidden'
                            />
                            <div className="flex flex-col">
                                <span className="md:text-[18px] text-base leading-6 font-semibold md:leading-[27px] text-purpleHo">Shubha Nagarajan</span>
                                <span className="md:text-sm text-xs leading-[18px] md:leading-[21px] text-[#0096C8] font-normal">Classical Dancer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials