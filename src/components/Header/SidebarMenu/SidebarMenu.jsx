import { CloseIcon, SearchIcon } from '@/components/Icons'
import { ItemMenu, itemsMenuList } from '@/components/Header'

const SidebarMenu = ({ showMenu, handleCloseMenu }) => {
  return (
    <div
      id='md-menu'
      className={`${
        showMenu ? 'block' : 'hidden'
      } lg:hidden absolute z-10 inset-0 h-screen w-full bg-gray-800 bg-opacity-70`}
    >
      <div className='relative w-full h-screen'>
        <div className='absolute inset-0 justify-center w-3/4 min-w-[320px] p-6 bg-white dark:bg-gray-900'>
          <div className='flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700'>
            <div className='flex items-center mx-2 space-x-3'>
              <div>
                <SearchIcon />
              </div>
              <input
                type='text'
                placeholder='Buscar Productos'
                className='text-sm text-gray-600 bg-transparent dark:text-gray-300 focus:outline-none'
              />
            </div>
            <button
              onClick={handleCloseMenu}
              aria-label='close menu'
              className='rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-800'
            >
              <CloseIcon />
            </button>
          </div>
          {/* Menu Tablet */}
          <div className='mt-8'>
            <ul className='flex flex-col space-y-8'>
              {itemsMenuList.map((item) => (
                <ItemMenu
                  key={item.name}
                  link={item.link}
                  name={item.name}
                  handleCloseMenu={handleCloseMenu}
                />
              ))}
            </ul>
          </div>
          {/* Menu Tablet */}
        </div>
      </div>
    </div>
  )
}
export default SidebarMenu
