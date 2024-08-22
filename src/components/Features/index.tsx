import { featuresData } from '@/data/featuresData'
import { TFeaturesData } from '@/types'
import React from 'react'
import Image from 'next/image'
import OutlineButton from '../Buttons/OutlineButton'

const Features = () => {
    return (
        <section className="xxl:max-h-[818px] h-full w-full">
            <div className="md:p-[100px] py-12 px-6">
                <div className="flex flex-wrap -m-4">
                    {featuresData.map((item: TFeaturesData) => (
                        <div className="p-4 md:p-3 md:w-1/2 w-full" key={item.id}>
                            <div className="flex rounded-lg h-full bg-transparent border border-[#CED4DA] lg:p-[40px] p-6 flex-col sm:justify-start sm:items-start justify-center items-center gap-6">
                                <div className="flex items-center justify-start gap-6">
                                    <Image
                                        src={`/assets/images/site/${item.ico}`}
                                        alt={item.title}
                                        height={40}
                                        width={40}
                                    />
                                    <h2 className="text-black md:leading-[36px] md:text-2xl text-[18px] leading-[27px] font-semibold">{item.title}</h2>
                                </div>
                                <p className="md:leading-[27px] text-xs leading-[20px] md:text-[18px] font-light text-black text-center sm:text-left h-full">{item.desc}</p>
                                <OutlineButton
                                    text={item.buttonText}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features