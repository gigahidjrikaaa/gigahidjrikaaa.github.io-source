import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full px-4 py-3 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg text-black border-white rounded-ee-xl rounded-es-xl shadow-md z-50">
      <div className='flex justify-between items-center'>
        <div className="flex items-center">
            <Link href="/" passHref>
            <p className="text-xl font-bold cursor-pointer">Logo</p>
            </Link>
        </div>
        <div className="flex space-x-4">
            <Link href="/" passHref>
            <p className="cursor-pointer">Home</p>
            </Link>
            <Link href="/about" passHref>
            <p className="cursor-pointer">About</p>
            </Link>
            <Link href="/blog" passHref>
            <p className="cursor-pointer">Blog</p>
            </Link>
            <div className="relative group">
            <p className="cursor-pointer">Projects</p>
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/projects/cybersecurity" passHref>
                <p className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Cyber Security</p>
                </Link>
                <Link href="/projects/webdev" passHref>
                <p className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Web Development</p>
                </Link>
            </div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;