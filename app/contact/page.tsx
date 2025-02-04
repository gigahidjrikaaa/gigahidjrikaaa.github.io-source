import React, { FC } from 'react';
import { Button } from '@/components/ui/button';

const ContactPage: FC = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold text-3xl'>Contact Page</h1>
            {/* Add your contact form or any other content here */}
            <Button>Submit</Button>
        </div>
    );
};

export default ContactPage;