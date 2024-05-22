'use client';
import React, { useState, useEffect } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';
import { useTranslation } from '../../../i18n/client';
import defaultLinks from './MyLinks';

interface SubLink {
    name: string;
    link: string;
}

interface SubMenu {
    Head: string;
    sublink: SubLink[];
}

interface NavLink {
    name: string;
    submenu: boolean;
    sublinks?: SubMenu[];
}

interface NavLinksProps {
    closeMenu: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ closeMenu }) => {
    const [heading, setHeading] = useState<string>('');
    const [subHeading, setSubHeading] = useState<string>('');
    const { t } = useTranslation();
    const [links, setLinks] = useState<NavLink[]>(defaultLinks);

    useEffect(() => {
        const translatedLinks = t('links', { returnObjects: true });
        if (Array.isArray(translatedLinks)) {
            setLinks(translatedLinks);
        }
    }, [t]);

    const handleClick = (): void => {
        closeMenu();
    };

    return (
        <>
            {links.length > 0 ? (
                links.map((link: NavLink) => (
                    <div key={link.name}>
                        <div className='text-center md:cursor-pointer group py-3 px-5 rounded-full hover:bg-firstBlue hover:text-black'>
                            <h1
                                className='flex justify-between items-center group'
                                onClick={() => {
                                    heading !== link.name ? setHeading(link.name) : setHeading('');
                                    setSubHeading('');
                                }}
                            >
                                {link.name}
                                <span className='text-xl md:hidden inline'>
                                    {heading === link.name ? <FiChevronUp /> : <FiChevronDown />}
                                </span>
                                <span className='text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2'>
                                    <FiChevronDown />
                                </span>
                            </h1>
                            {link.submenu && (
                                <div>
                                    <div className='absolute top-20 right-0 hidden group-hover:md:block hover:md:block'>
                                        <div className='py-2 bg-firstBackground'></div>
                                        <div className=' bg-firstBackground shadow-xl shadow-firstBlue rounded-md w-11/12 py-12 mx-auto px-5 grid grid-cols-4 gap-10'>
                                            {link.sublinks?.map((mysublinks: SubMenu) => (
                                                <div key={mysublinks.Head}>
                                                    <h1 className='text-center text-lg font-semibold text-white'>
                                                        {mysublinks.Head}
                                                    </h1>
                                                    {mysublinks.sublink.map((slink: SubLink) => (
                                                        <li className='text-sm text-gray-500 hover:text-firstBlue transition duration-300 my-5' key={slink.name}>
                                                            <Link
                                                                href={slink.link}
                                                                className='hover:text-primary'
                                                                onClick={handleClick}
                                                            >
                                                                {slink.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Mobile menus */}
                        <div className={`${heading === link.name ? 'md:hidden' : 'hidden'}`}>
                            {link.sublinks?.map((slinks: SubMenu) => (
                                <div key={slinks.Head}>
                                    <div>
                                        <h1
                                            onClick={() =>
                                                subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading('')
                                            }
                                            className='py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center'
                                        >
                                            {slinks.Head}
                                            <span className='text-xl md:mt-1 md:ml-2 inline'>
                                                {subHeading === slinks.Head ? <FiChevronUp /> : <FiChevronDown />}
                                            </span>
                                        </h1>
                                        <div className={`${subHeading === slinks.Head ? 'md:hidden' : 'hidden'}`}>
                                            {slinks.sublink.map((slink: SubLink) => (
                                                <li className='py-3 pl-14' key={slink.name}>
                                                    <Link href={slink.link} onClick={handleClick}>
                                                        {slink.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <div>Cargando...</div>
            )}
        </>
    );
};

export default NavLinks;
