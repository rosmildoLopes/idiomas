'use client'

import Link from 'next/link'
import { useTranslation } from '../../i18n/client'
import { Footer } from '../components/Footer/client'
import { useState } from 'react'
import Beneficios from '../components/beneficios/Beneficios'

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng, 'client-page')
  const [counter, setCounter] = useState(0)
  const page = 'client-page'
  return (
    <>
      
      <Beneficios lng={lng} />
      <Footer lng={lng} page={page} />
    </>
  )
}