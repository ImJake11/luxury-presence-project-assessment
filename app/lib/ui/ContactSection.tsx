'use client'

import React, { useState } from 'react'
import AnimatedText from '../components/text-appear-animation'
import TextFadingAnimation from '../components/text-fading-animation'
import Textfield from '../components/textfield'
import Textarea from '../components/textarea'
import PrimaryButton from '../components/primary-button'
import WhatsAppIcon from '../components/whatsapp-icon'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'

const ContactSection = () => {
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

    const currentDay = now.getDay() - 1;

    return (
        <div className='w-full h-auto flex flex-col gap-5 py-15 px-15'>

            <AnimatedText content='Call or Visit Us ' fontSize='medium' />

            <div className='flex w-full gap-5 mt-10'>

                {/** contact fields */}
                <div className='flex-1  flex flex-col gap-5'>
                    <TextFadingAnimation content='Send Message' size='text-xl' color='text-white' />
                    <div className='h-[1rem]' />
                    <Textfield title='Name' />

                    <div className='flex flex-col gap-2'>
                        <Textfield title='Email' />
                        <span className="text-red-500 text-xs">Please enter a valid email address.</span>
                    </div>
                    <Textarea title='Message' />

                    <div className='h-[3rem]' />
                    <div className='place-self-end'>
                        <PrimaryButton>
                            <span>Send </span>
                        </PrimaryButton>
                    </div>
                </div>

                {/** details */}
                <div className='flex-1 flex flex-col text-[var(--foreground-secondary)] gap-5'>

                    <button className='w-fit h-fit flex gap-3 rounded-[4px] bg-green-700 px-5 py-4 transition-all duration-500 ease-in-out hover:bg-green-900 mb-8'>
                        <WhatsAppIcon />
                        <span className='text-white'>Message us on WhatsApp</span>
                    </button>

                    <div className='w-full flex gap-1 flex-col'>
                        <span className='uppercase text-white text-xl font-bold'>Marci Metzger</span>
                        <span className='text-[var(--accent)] text-xs'>THE RIDGE REALTY GROUP</span>
                    </div>

                    <span>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</span>
                    <span className='text-[var(--accent)]'>(206) 919-6886</span>

                    <span className='uppercase text-white text-xl font-bold'>Office Hours</span>

                    {/* Office hours toggle */}
                    <div
                        className="cursor-pointer"
                        onClick={() => setShowFullSchedule(!showFullSchedule)}
                    >
                        {!showFullSchedule ? (
                            <span className='text-gray-300 flex gap-2'>
                                <span>Open today</span>
                                <span> 08:00 am – 07:00 pm</span>
                                <IconChevronDown />
                            </span>
                        ) : (
                            <div className='flex flex-col gap-1 text-gray-300'>
                                {schedule.map((item, index) => (
                                    <div key={index} className={`flex gap-3 ${currentDay === index ? "text-[var(--accent)]" : "text-white"}`}>

                                        <div className={`h-auto rounded-full w-[4px] ${currentDay === index ? "bg-[var(--accent)]" : "bg-gray-500/40"}`}></div>
                                        <span className='w-[10rem]'>{item.day}</span>
                                        <span>{item.time}</span>
                                        {index === 0 && <IconChevronUp />}

                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <span className='text-gray-300 flex gap-2'>
                        <span>Open today</span>
                        <span> 08:00 am – 07:00 pm</span>
                    </span>

                    <span className='text-[var(--accent)]'>Appointments outside office hours available upon request. Just call!</span>
                </div>
            </div>

            <span className='text-xs text-gray-500 text-center mt-5'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span>
        </div>
    )
}

export default ContactSection
