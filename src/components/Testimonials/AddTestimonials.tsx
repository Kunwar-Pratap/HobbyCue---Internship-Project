import Image from 'next/image'
import React from 'react'
import OutlineButton from '../Buttons/OutlineButton'

const AddTestimonials = () => {
    return (
        <section className="bg-[#F7FDFF] md:p-[100px] py-12 px-6 w-full max-h-[484px] h-full">

            <div className="w-full border bg-white rounded-md">
                <div className="h-full  lg:p-[40px] p-6 rounded flex flex-col gap-8">
                    <div className="flex gap-5 justify-center sm:justify-start items-center">
                        <Image
                            src={'/assets/images/site/Add.png'}
                            height={40}
                            width={40}
                            alt='add'
                        />
                        <h3 className="text-[24px] leading-[36px] font-medium text-greyHo">
                            Add your own
                        </h3>
                    </div>

                    <p className="text-[18px] leading-[30px] text-greyHo font-light text-center sm:text-left">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
                    <div className="inline-flex">
                        <OutlineButton
                            text={'Add new'}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddTestimonials