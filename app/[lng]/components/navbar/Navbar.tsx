'use client';
import React, { useState } from 'react';
import NavLinks from './NavLinks';
import Image from 'next/image';
import { RiCloseFill } from 'react-icons/ri';
import { IoMenu } from 'react-icons/io5';
import Link from 'next/link';
import { useTranslation } from '../../../i18n/client';

const Navbar2 = () => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation('nav');

    return (
        <nav className='fixed bg-firstBackground z-[999] w-screen'>
            <div className='flex items-center font-medium justify-around'>
                <div className='z-50 p-5 md:w-auto w-full flex justify-between bg-firstBackground'>
                    <Link href={'/'}>
                        <Image
                            src='/logo.svg'
                            alt='Academia Numen Logo'
                            width={263}
                            height={60}
                            priority
                            className='pt-3 md:w-56 w-32 '
                        />
                    </Link>
                    <div
                        className='text-4xl md:hidden'
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <p className='text-firstBlue text-5xl'>
                                <RiCloseFill />
                            </p>
                        ) : (
                            <p className='text-firstBlue text-5xl'>
                                <IoMenu />
                            </p>
                        )}
                    </div>
                </div>
                <ul className='md:flex hidden uppercase items-center gap-6 text-white font-bold  tracking-wide '>
                    <NavLinks closeMenu={() => setOpen(false)} />
                    <li>
                        <Link
                            href='/nosotros'
                            className='py-3 px-3 rounded-full hover:bg-firstBlue hover:text-black inline-block'
                        >
                            {t('academy')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/'
                            className='py-3 px-5 rounded-full hover:bg-firstBlue hover:text-black inline-block'
                        >
                            {t('companies')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/contacto'
                            className='py-3 px-5 rounded-full hover:bg-firstBlue hover:text-black inline-block'
                        >
                            {t('contact')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='https://campus.academianumen.com/login/index.php'
                            target='_blank'
                            className='py-3 px-5 rounded-full border-2 border-firstBlue hover:bg-firstBlue hover:text-black inline-block'
                        >
                            {t('campus')}
                        </Link>
                    </li>
                </ul>
                {/* Mobile nav */}
                <ul
                    className={`
        md:hidden bg-firstBackground text-white fixed overflow-x-hidden w-10/12 mx-auto top-0 overflow-y-auto bottom-0 py-24
        duration-500 ${open ? 'left-0' : 'left-[-100%]'}
        `}
                >
                    <li>
                        <Link
                            href='/'
                            className='py-7 px-5 inline-block'
                        >
                            {t('academy')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/'
                            className='py-7 px-5 inline-block'
                        >
                            {t('companies')}
                        </Link>
                    </li>
                    <NavLinks closeMenu={() => setOpen(false)} />
                    <li>
                        <Link
                            href='/'
                            className='py-7 px-5 inline-block'
                        >
                            {t('contact')}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/'
                            className='py-7 px-5 inline-block'
                        >
                            {t('campus')}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar2;
