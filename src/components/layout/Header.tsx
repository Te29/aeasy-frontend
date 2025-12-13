import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const NAV_LINK_CLASS =
  'text-sm font-medium hover:text-yellow-500 transition-colors';

const EXERCISE_LINKS = [
  {
    to: '/exercise/vocabulary',
    label: '词汇',
  },
  {
    to: '/exercise/listening',
    label: '听力',
  },
  {
    to: '/exercise/reading',
    label: '阅读',
  },
  {
    to: '/exercise/speaking',
    label: '口语',
  },
  {
    to: '/exercise/writing',
    label: '写作',
  },
];

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="AEASy" className="h-8" />
        </Link>

        {/* Navigation */}
        <nav className="flex gap-10 items-center">
          <Link to="/" className={NAV_LINK_CLASS}>
            首页
          </Link>

          {/* Dropdown Menu */}
          <Menu as="div" className="relative">
            {({ open }) => (
              <>
                <MenuButton
                  className={`${NAV_LINK_CLASS} cursor-pointer flex items-center gap-1 outline-none`}
                >
                  AEAS练习
                  <ChevronDownIcon
                    className={`w-3 h-3 transition-transform duration-200 ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </MenuButton>
                <MenuItems
                  transition
                  className="absolute left-0 mt-2 w-32 bg-white outline-none rounded-lg shadow-lg py-2 z-50 transition duration-200 ease-out data-closed:opacity-0 data-closed:scale-95"
                >
                  {EXERCISE_LINKS.map((link) => (
                    <MenuItem key={link.to}>
                      {({ focus }) => (
                        <Link
                          to={link.to}
                          className={`block px-4 py-2 text-sm ${
                            focus
                              ? 'bg-yellow-50 text-yellow-500'
                              : 'text-gray-700'
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </>
            )}
          </Menu>

          <Link to="/" className={NAV_LINK_CLASS}>
            课程
          </Link>
          <Link to="/instructors" className={NAV_LINK_CLASS}>
            教师版
          </Link>
          <Link to="/download" className={NAV_LINK_CLASS}>
            资料下载
          </Link>
        </nav>

        {/*Auth buttons  */}
        <div>
          <Button variant="secondary" className="border-none">
            Log in
          </Button>
          <Button variant="secondary" className="border-none">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}
