import {
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger
 } from '@/components/ui/sheet';

import Image from 'next/image';
import Link from 'next/link';

import { MdOutlineMenu } from 'react-icons/md';

const Sidenav = () => {
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer flex items-center justify-center">
        <MdOutlineMenu className='text-3xl text-primary'/>
      </SheetTrigger>
     <SheetContent>
      <div className='flex flex-col h-full pt-16'>
        <SheetHeader>
          <SheetTitle className="max-w-max mx-auto mb-48">
            <Link href="#">
            <Image 
            src={"/assets/logo-white.svg"} 
            width={200} 
            height={200} 
            alt=''/>
            </Link>
          </SheetTitle>
          <SheetDescription className="sr-only">
            Navigation Menu
          </SheetDescription>
        </SheetHeader>
        {/* nav */}
        <nav className="flex flex-col items-center gap-12 text-white">
            <a href="#" className="link-primary hover:text-accent2">
              Men
              </a>
              <a href="#" className="link-primary hover:text-accent2">
              Women
              </a>
              <a href="#" className="link-primary hover:text-accent2">
              Kids
              </a>
              <a href="#" className="link-primary hover:text-accent2">
              Sale
              </a>
          </nav>
      </div>
     </SheetContent>
    </Sheet>
  )
};

export default Sidenav;
