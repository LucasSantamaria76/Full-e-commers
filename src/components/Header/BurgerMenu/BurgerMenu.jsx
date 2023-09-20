import { BurgerMenuIcon, SearchIcon } from '@/components/Icons'

export default ({ showMenu }) => (
  <div className='lg:w-3/12'>
    <div className='items-center hidden w-7/12 pb-2 space-x-3 border-b border-gray-200 lg:flex'>
      <div>
        <SearchIcon />
      </div>
      <input
        type='text'
        placeholder='Buscar productos'
        className='text-sm text-gray-600 bg-transparent focus:outline-none'
      />
    </div>
    <button
      onClick={() => showMenu(true)}
      aria-label='Open Menu'
      className='block text-gray-800rounded dark:text-white lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-800'
    >
      <BurgerMenuIcon />
    </button>
  </div>
)
