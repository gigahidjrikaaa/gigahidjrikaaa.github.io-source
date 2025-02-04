import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const ContactPage: FC = () => {
    return (
        <div className='flex flex-col h-screen min-h-fit'>
            <div className='w-full h-1/2 relative'>
                <Image src='/images/giga-dock.jpg' objectFit='cover' layout='fill' alt='Contact' />
                <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold'>Contact Me!</h1>
            </div>
            <Button>Submit</Button>
        </div>
    );
};

export default ContactPage;