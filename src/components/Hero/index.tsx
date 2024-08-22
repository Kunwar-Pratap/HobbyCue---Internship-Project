import Image from 'next/image'
import React from 'react'
import Form from '../Form'

const Hero = () => {
    return (
        <section className="bg-heroHo xxl:max-h-[678px] h-full w-full border-none">

            <div className=" xxl:p-[100px] pt-8 px-6 xl:pt-[100px] xl:px-[100px]  flex flex-col xl:flex-row h-full w-full xl:items-start xl:justify-between justify-center items-center gap-8 xl:gap-6">

                <div className="md:max-w-[706px] flex flex-col justify-between items-start gap-8 order-1">

                    <h1 className="md:text-[36px] text-[18px] leading-[27px] md:leading-[54px] text-gray-900 font-semibold italic">Explore your{' '}
                        <span className="text-skyHo">hobby</span>
                        {' '}or{' '}
                        <span className="text-purpleHo">passion</span>
                    </h1>
                    <div className='flex flex-col gap-5'>
                        <p className="md:leading-[30px] md:text-sm text-xs leading-[22px]">Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                        </p>

                        <p className="md:leading-[30px] md:text-sm text-xs leading-[22px] hidden sm:block">
                            If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
                        </p>
                    </div>
                    <div className="mt-[42px] order-1 hidden xl:block">
                        <Image
                            src={`/assets/images/site/Group27.png`}
                            height={216}
                            width={697.07}
                            alt='Hero Image'
                        />
                    </div>

                </div>
                <div className="mt-[42px] order-3 block xl:hidden">
                        <Image
                            src={`/assets/images/site/Group27.png`}
                            height={216}
                            width={697.07}
                            alt='Hero Image'
                        />
                    </div>



                <div className="max-w-[406px] bg-gray-100 rounded-lg flex flex-col  w-full order-2 h-full">
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default Hero