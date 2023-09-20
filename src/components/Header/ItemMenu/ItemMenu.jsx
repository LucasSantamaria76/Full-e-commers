import Link from 'next/link'

export const ItemMenu = ({ link, name, handleCloseMenu }) => (
  <li onClick={handleCloseMenu}>
    <Link
      href={link}
      className='p-2 text-base text-gray-800 rounded dark:text-white dark:hover:text-gray-300 hover:bg-cyan-300/50'
    >
      {name}
    </Link>
  </li>
)
