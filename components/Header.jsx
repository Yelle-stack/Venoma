import Image from "next/image";
import Link from "next/link";
import { FaHeart} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Sidenav from "./Sidenav";

const Header = () => {
  return (
    <header className="xl:absolute max-w-360 mx-auto left-0 right-0 bg-grey-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-10">
          {/* logo & sidenav */}
          <div className="flex items-center justify-between w-full md:w-auto gap-8">
            <Link href={"/"}>
              <Image src="/assets/logo.svg" width={226} height={48} alt=""/>
            </Link>
            <div className="xl:hidden">
              <Sidenav/>
            </div>
          </div>
           {/* nav (desktop) */}
          <nav className="hidden xl:flex gap-6 pl-24 text-primary">
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
          {/* search, favorites, cart */}
          <div className="hidden md:flex items-center justify-end gap-4 w-90">
            {/* search */}
            <input className="input w-31.5 focus:w-50 transition-all pl-7" type="search" placeholder="Search ..."/>
            {/* favorites btn */}
            <button className="btn-icon btn-outline group"><FaHeart className="text-primary group-hover:text-primary/90"/>
            </button>
            {/* cart btn */}
            <button className="btn-icon btn-accent"><FaCartShopping className="text-primary"/>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
