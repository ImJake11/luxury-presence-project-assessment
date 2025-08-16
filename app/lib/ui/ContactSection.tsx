'use client'

import React, { useState } from 'react'
import AnimatedText from '../components/text-appear-animation'
import TextFadingAnimation from '../components/text-fading-animation'
import Textfield from '../components/textfield'
import Textarea from '../components/textarea'
import PrimaryButton from '../components/primary-button'
import WhatsAppIcon from '../components/whatsapp-icon'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'

const ContactSection = ({ id }: { id: string }) => {
    const [showFullSchedule, setShowFullSchedule] = useState(false)

    const schedule = [
        { day: "Monday", time: "08:00 am – 07:00 pm" },
        { day: "Tuesday", time: "08:00 am – 07:00 pm" },
        { day: "Wednesday", time: "08:00 am – 07:00 pm" },
        { day: "Thursday", time: "08:00 am – 07:00 pm" },
        { day: "Friday", time: "08:00 am – 07:00 pm" },
        { day: "Saturday", time: "08:00 am – 07:00 pm" },
        { day: "Sunday", time: "08:00 am – 07:00 pm" },
    ]

    const now = new Date();

    const dayInIndex = now.getDay() + 1;
    const currentDay = dayInIndex - 1;


    return (
        <div id={id} className='w-full h-auto flex flex-col gap-5 py-15 px-5 md:px-15'>

            <AnimatedText content='Call or Visit Us' fontSize='medium' />

            <div className='flex flex-col w-full gap-15 mt-10 items-center'>

                {/** contact fields */}
                <div className='flex-1 w-full md:w-[70%] bg-gray-600/10 flex flex-col gap-8 p-10 rounded-[4px]'>
                    <TextFadingAnimation content='Send Message' size='text-xl' color='text-white' />
                    <Textfield title='Name' />

                    <div className='flex flex-col gap-2'>
                        <Textfield title='Email' />
                        <span className="text-red-500 text-xs">Please enter a valid email address.</span>
                    </div>
                    <Textarea title='Message' />

                    <div className='place-self-end'>
                        <PrimaryButton>
                            <span>Send </span>
                        </PrimaryButton>
                    </div>

                    <span className='text-xs text-gray-500 text-center mt-3 place-self-center'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span>
                </div>

                {/** details */}
                <div className='w-full md:w-[70%] bg-gray-600/10 rounded-[4px] p-5 md:p-15 flex flex-col text-[var(--foreground-secondary)] gap-5'>

                    <button className='w-fit h-fit flex gap-3 rounded-[4px] bg-green-700 px-5 py-4 transition-all duration-500 ease-in-out hover:bg-green-900 mb-3'>
                        <WhatsAppIcon />
                        <span className='text-white'>Message us on WhatsApp</span>
                    </button>

                    <div className='w-full flex gap-2 flex-col text-xs md:text-normal'>
                        <span className='uppercase text-white text-normal md:text-xl font-bold mb-2'>Visit us:</span>
                        <span>Marci Metzger</span>
                        <span>THE RIDGE REALTY GROUP</span>
                        <span>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</span>
                    </div>

                    <div className='w-full flex gap-2 flex-col'>
                        <span className='uppercase text-white text-normal md:text-xl font-bold mb-2'>Call us:</span>
                        <span className='text-xs md:text-normal'>(206) 919-6886</span>
                    </div>

                    <span className='uppercase text-white text:normal md:text-xl font-bold'>Office Hours</span>

                    <div className='flex flex-col gap-2 text-gray-300 text-xs md:text-normal'>
                        <div className='flex gap-3 text-white'>
                            <div className="h-auto rounded-full w-[4px] bg-transparent"></div>
                            <span className='w-[12rem]'>We are open today</span>
                            <span>08:00 am – 07:00 pm</span>
                        </div>
                        {schedule.map((item, index) => (
                            <div key={index} className={`flex gap-3 ${currentDay === index ? "text-[var(--accent)]" : "text-[var(--foreground-secondary)]"}`}>

                                <div className={`h-auto rounded-full w-[4px] ${currentDay === index ? "bg-[var(--accent)]" : "bg-gray-500/40"}`}></div>
                                <span className='w-[12rem]'>{item.day}</span>
                                <span>{item.time}</span>
                            </div>
                        ))}
                    </div>
                    <span className='text-[var(--accent)] text-center mt-5'>Appointments outside office hours available upon request. Just call!</span>
                </div>
            </div>

            {/** map */}
            <div className='w-full md:w-[70%] h-[400px] rounded-[8px] overflow-hidden shadow-lg self-center'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.631020271481!2d-115.99869212346952!3d36.21093029893427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d6cf8b18c9f7%3A0xb6c09d1c4b3dff8a!2s3190%20NV-160%20%23F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sus!4v1692195000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </div>
    )
}

export default ContactSection
