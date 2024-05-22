import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { languages } from '../../../i18n/settings';
import Image from 'next/image';

const coursesData = [
  {
    category: 'Cursos',
    courses: [
      { name: 'Agilidad y Scrum', href: '/agilidad-scrum' },
      { name: 'Community Manager', href: '/communityManager' },
      { name: 'Project Management Plus', href: '/projectManagement' },
      { name: 'Google Ads', href: '/googleAds' },
      { name: 'Inglés Técnico', href: '/inglesTecnico' },
      { name: 'Gestión de Publicidad Paga', href: '/googleAds' },
    ],
  },
  {
    category: 'Diplomatura',
    courses: [
      { name: 'Desarrollo', href: '/fullstack' },
      { name: 'Marketing', href: '/marketing' },
      { name: 'Ciberseguridad', href: '/ciberseguridad' },
      { name: 'Project Management', href: '/projectManagement' },
    ],
  },
  {
    category: 'Accesos',
    courses: [
      { name: 'Blog', href: '/accesos/blog' },
      { name: 'Testimonios', href: '/accesos/testimonios' },
    ],
  },
];

const contactData = [
  {
    category: 'Contacto',
    details: [
      { icon: '/location.svg', text: 'Huergo 949 Piso 4' },
      { icon: '', text: 'Buenos Aires - Argentina' },
      { icon: '/cell.svg', text: '+54 (11) 3126-2388' },
      { icon: '/mail.svg', text: 'info@academianumen.com' },
    ],
  },
];

const socialLinks = [
  {
    icon: '/facebook.svg',
    link: 'https://www.facebook.com/AcademiaNumen/',
    target: '_blank',
  },
  {
    icon: '/instagram.svg',
    link: 'https://www.instagram.com/academianumen',
    target: '_blank',
  },
  {
    icon: '/twitter.svg',
    link: 'https://twitter.com/Academianumen',
    target: '_blank',
  },
];

export const FooterBase = ({ t, lng, page }) => {
  return (
    <footer className="bg-secondBackground flex flex-col justify-center items-center overflow-x-hidden w-full text-white h-auto lg:px-16 lg:pt-20">
      <div className="w-full px-0 gap-10 flex flex-col md:flex-row md:justify-between">
        <div className="flex md:block py-8 md:py-0 justify-center">
          <Image src="/logo.svg" alt="logo" width={217} height={49.73} />
        </div>
        <div className="flex md:gap-16 flex-col md:flex-row">
          <div className="flex flex-row gap-4 md:gap-4 justify-center mx-auto w-10/12 md:w-full">
            {coursesData.map((categoryData, categoryIndex) => (
              <div key={categoryIndex} className="text-[14px] leading-loose mb-10">
                <h4 className="font-bold text-lg mb-3">{categoryData.category}</h4>
                {categoryData.courses.map((course, courseIndex) => (
                  <div key={courseIndex} className="hover:text-blue-500">
                    <Link href={course.href} target="_blank">{course.name}</Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col mb-4">
            {contactData.map((categoryData, categoryIndex) => (
              <div key={categoryIndex} className="text-[14px] leading-loose mb-1 flex flex-col justify-center items-center md:items-start">
                <h4 className="font-bold text-lg mb-2">{categoryData.category}</h4>
                {categoryData.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex justify-start items-center">
                    {detail.icon && (
                      <Image src={detail.icon} alt="" width={11} height={13} className="mr-2" />
                    )}
                    <p className="hover:text-blue-500">{detail.text}</p>
                  </div>
                ))}
              </div>
            ))}
            <div className="flex justify-center md:justify-start">
              {socialLinks.map((socialLink, socialIndex) => (
                <Link key={socialIndex} href={socialLink.link} target={socialLink.target}>
                  <Image src={socialLink.icon || ''} alt="" width={31} height={31} className="mr-2" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-firstBackground h-auto p-4 w-screen italic text-xs overflow-x-hidden">
        <p>Copyright <span> &copy; {new Date().getFullYear()} Desarrollado por NUMEN PUBLICIDAD.</span></p>
      </div>
      <div className='flex justify-center items-center gap-2'>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{lng}}</strong> to :{'  '}
      </Trans>
      {languages.filter((l) => lng !== l).map((l, index) => (
        <span key={l} className='flex gap-3'>
          {index > 0 && ' or '}
          <Link href={page ? `/${l}/${page}` : `/${l}`}>
            {l}
          </Link>
        </span>
      ))}
      </div>
    </footer>
  );
}
