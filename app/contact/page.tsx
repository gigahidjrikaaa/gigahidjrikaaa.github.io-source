'use client';

import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const ContactPage: FC = () => {
    const handleWhatsappClick = () => {
        window.open('https://wa.me/6281234567890', '_blank');
    };

    return (
        <div className='flex flex-col h-screen min-h-fit'>
            <div className='w-full h-full relative'>
                <div className='absolute w-full h-full bg-gradient-to-tl from-black to-transparent'></div>
                <Image src='/images/giga-dock2.jpg' objectFit='cover' layout='fill' alt='Contact' className='-z-10' />
                <div className='absolute flex-col bottom-0 -translate-y-1/2 right-0 -translate-x-1/2 items-end text-right'>
                    <h1 className='text-4xl text-white font-bold uppercase'>Contact Me</h1>
                    <p className='text-white text-right'>I'm always happy to help!</p>
                    <Button onClick={handleWhatsappClick} className='w-full'>Send me a Whatsapp!</Button>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;