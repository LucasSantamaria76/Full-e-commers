'use client'

import { useState } from 'react'
import {
  BurgerMenu,
  Logo,
  ItemMenu,
  itemsMenuList,
  NavbarIcons,
  SidebarMenu
} from '@/components/Header'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  const handleCloseMenu = () => setShowMenu(false)

  return (
    <div className='border-b shadow-md dark:bg-gray-900'>
      <div className='p-4 2xl:container 2xl:mx-auto md:py-5 lg:px-20 md:px-6'>
        <div className='flex flex-wrap items-center justify-between'>
          <BurgerMenu showMenu={setShowMenu} />
          <div className='lg:w-6/12 flex flex-col justify-center items-center space-y-3.5'>
            <Logo />
            <div className='hidden lg:block'>
              <ul className='flex items-center space-x-10'>
                {itemsMenuList.map((item) => (
                  <ItemMenu
                    key={item.name}
                    {...item}
                    handleCloseMenu={handleCloseMenu}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className='w-0 sm:hidden' />
          <div className='flex justify-center w-full mt-2 sm:w-fit'>
            <NavbarIcons />
          </div>
        </div>
      </div>
      <SidebarMenu
        showMenu={showMenu}
        handleCloseMenu={handleCloseMenu}
      />
    </div>
  )
}
