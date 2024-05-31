"use client"

import { useState } from 'react';
import Link from 'next/link';
import sideMenu from './sideMenu';
import { Menu } from '@/types/menu';
import { CgMenuGridR } from "react-icons/cg";

const Sidebar = () => {
  const [expandedMenus, setExpandedMenus] = useState<{ [key: number]: boolean }>({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (id: number) => {
    setExpandedMenus((prevExpandedMenus) => ({
      ...prevExpandedMenus,
      [id]: !prevExpandedMenus[id],
    }));
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="col-span-3 pt-8 pb-4 sticky top-0 h-screen bg-white border-r border-gray-200 overflow-auto">
      <div className="menu-container md:block hidden">
        <ul className="menu bg-base-200 w-56 rounded-box">
          {sideMenu.map((menu) => (
            <li key={menu.id}>
              <div className="flex items-center justify-between">
                <Link href={`${menu.path}`}>
                  {menu.title}
                </Link>
                {menu.submenu && (
                  <button onClick={() => toggleMenu(menu.id)}>
                    {expandedMenus[menu.id] ? '-' : '+'}
                  </button>
                )}
              </div>
              {menu.submenu && expandedMenus[menu.id] && (
                <ul className="pl-4">
                  {menu.submenu.map((child: Menu) => (
                    <li key={child.id}>
                      <Link href={`${child.path}`}>
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="md:hidden block">
        <button onClick={handleMobileMenuToggle}><CgMenuGridR className='h-5 w-5'/></button>
        {isMobileMenuOpen && (
          <div className="absolute inset-0 bg-white z-50">
            <ul>
              {sideMenu.map((menu) => (
                <li key={menu.id}>
                  <Link href={`${menu.path}`}>
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Sidebar;
