import React from 'react'
import Link from 'next/link'
import { hobbyCue, howDoI, quickLinks } from '@/data/footerLinks'
import type { TFooterLinks, TSocialData } from '@/types'
import Image from 'next/image'
import { socialData } from '@/data/socialData'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font max-w-screen-xxl mx-auto">
      <div className="md:px-[102px] md:py-[60px] p-6">

        <div className="flex flex-wrap md:text-left order-first gap-6 md:gap-0">

          <div className="lg:w-1/4 md:w-1/2 w-full">
            <h2 className="text-sm leading-[18px] font-bold text-greyHo mb-3">Hobbycue</h2>
            <nav className="list-none flex flex-col gap-2 md:gap-1">
              {hobbyCue.map((item: TFooterLinks) => (
                <li key={item.id}>
                  <Link href={'#'} className="text-greyHo text-sm leading-[18px] font-normal">{item.label}</Link>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <h2 className="text-sm leading-[18px] font-bold text-greyHo mb-3">How Do I</h2>
            <nav className="list-none flex flex-col gap-2 md:gap-1">
              {howDoI.map((item: TFooterLinks) => (
                <li key={item.id}>
                  <Link href={'#'} className="text-greyHo text-sm leading-[18px] font-normal">{item.label}</Link>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <h2 className="text-sm leading-[18px] font-bold text-greyHo mb-3">Quick Links</h2>
            <nav className="list-none flex flex-col gap-2 md:gap-1">
              {quickLinks.map((item: TFooterLinks) => (
                <li key={item.id}>
                  <Link href={'#'} className="text-greyHo text-sm leading-[18px] font-normal">{item.label}</Link>
                </li>
              ))}
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full flex flex-col gap-6 md:mt-6 lg:mt-0">
            <div >
              <h2 className="text-sm leading-[18px] font-bold text-greyHo mb-3">Social Media</h2>
              <div className="flex  justify-start  items-end list-none gap-5 flex-wrap sm:flex-nowrap">
                {socialData.map((item: TSocialData) => (
                  <li key={item.id} className='h-6 w-6 border inline-flex justify-center items-center rounded-full bg-[#EBEDF0]'>
                    <Image
                      src={`/assets/images/social/${item.image}`}
                      alt={item.alt}
                      height={16}
                      width={16}
                      className='cursor-pointer '
                    />
                  </li>
                ))}
              </div>

            </div>
            <div >
              <h2 className="text-sm leading-[18px] font-bold text-greyHo mb-3">Invite Friends</h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-start items-start md:justify-start">
                <div className="relative flex h-10 max-w-[360px] w-full">
                  <input
                    type="email"
                    placeholder='Email ID'
                    className="w-full bg-[#F8F9FA] rounded-tl-[8px] rounded-bl-[8px] border border-purpleHo focus:outline-none text-xs outline-none  text-black px-3 placeholder:text-[#939CA3] placeholder:text-xs" />
                  <button className=" py-2 px-2 text-xs leading-4 font-semibold focus:outline-none border border-purpleHo bg-purpleHo text-white rounded-tr-[8px] rounded-br-[8px]">
                    Invite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-[#F7F5F9]">
        <div className=" px-5 py-6 mx-auto flex items-center justify-center sm:flex-row flex-col">
          <p className="text-sm font-medium leading-[18px] text-greyHo">© Purple Cues Private Limited</p>

        </div>
      </div>
    </footer>
  )
}

export default Footer