import Image from 'next/image'

const NavbarIcons = () => {
  return (
    <div className='flex items-center justify-end space-x-4 lg:w-3/12'>
      <a
        aria-label='Favoritos'
        className='focus:outline-none text-gray-800 dark:text-white focus:ring-1 focus:ring-cyan-300 rounded hover:bg-gray-100 p-0.5'
        href='javascript:void(0)'
      >
        <Image
          height={36}
          width={36}
          alt='Favoritos'
          src='/assets/Heart.png'
        />
      </a>
      <a
        aria-label='Bolsa de compras'
        className='focus:outline-none text-gray-800 dark:text-white focus:ring-1 focus:ring-cyan-300 rounded hover:bg-gray-100 p-0.5'
        href='javascript:void(0)'
      >
        <Image
          height={36}
          width={36}
          alt='Bolsa de compras'
          src='/assets/Shopping-bag.png'
        />
      </a>
    </div>
  )
}
export default NavbarIcons
