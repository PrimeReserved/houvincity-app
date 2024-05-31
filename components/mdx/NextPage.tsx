"use client"


import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import sideMenu from './sideMenu';
import { Menu } from '@/types/menu';


export default function NextPage(){
    const router = useRouter();
    const pathname = usePathname();
    const [currentMenu, setCurrentMenu] = useState<Menu | null>(null);


    useEffect(() => {
        const currentMenuItem = sideMenu.find((menu) => menu.path === pathname);
        setCurrentMenu(currentMenuItem || sideMenu[0]);
      }, [pathname]);
    
      const goToNext = () => {
        if (currentMenu?.next && currentMenu.next.path) {
          router.push(currentMenu.next.path);
        }
      };
    
      const goToPrevious = () => {
        if (currentMenu) {
          const previousMenu = sideMenu.find((menu) => menu.next?.id === currentMenu.id);
          if (previousMenu && previousMenu.path) {
            router.push(previousMenu.path);
          }
        }
      };
    return (
        <main className="w-3/4 p-4">
        {/* Content based on currentMenu */}
        <h1>{currentMenu?.title}</h1>
        <div className="mt-4">
          <button className="btn" onClick={goToPrevious} disabled={!currentMenu || currentMenu.id === sideMenu[0].id}>
            <MdArrowBackIos />
          </button>
          <button className="btn ml-4" onClick={goToNext} disabled={!currentMenu?.next}>
            <MdArrowForwardIos />
          </button>
        </div>
      </main>
    );
}