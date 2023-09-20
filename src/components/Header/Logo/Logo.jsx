import { Lobster } from 'next/font/google'
import Image from 'next/image'

const lobster = Lobster({ weight: '400', subsets: ['latin'] })

export default () => (
  <div
    aria-label='Logo'
    role='img'
    className='flex items-center gap-3 text-2xl text-cyan-500'
  >
    <Image
      height={40}
      width={40}
      alt='Logo'
      src='/assets/Logo.png'
    />
    <h1 className={lobster.className}>Por tu culpa Lola</h1>
  </div>
)
