import { signoutUser } from "@/redux/user/userActions";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { ImExit } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   const { user, loading } = useSelector((state) => state.userSignin);
   const dispatch = useDispatch();

   return (
      <header className="w-full text-xl sticky top-0 z-50 bg-blue-600 text-white shadow-lg">
         <nav className="w-full h-full container mx-auto flex justify-between items-center px-2 relative">
            <Link href="/">
               <h1 className="text-2xl md:text-3xl font-bold lg:hover:tracking-wider transition-all pr-1">
                  بلاگ اپ
               </h1>
            </Link>
            <button
               onClick={() => setIsOpen((prevState) => !prevState)}
               className="lg:hidden w-14 h-14 flex items-center justify-center text-3xl">
               {isOpen ? (
                  <HiOutlineX />
               ) : (
                  <HiMenuAlt3 className="rotate-180 " />
               )}
            </button>
            {/* mobile and tablet menu */}
            {isOpen && (
               <ul
                  className={`lg:hidden flex flex-col items-center justify-center absolute
                bg-blue-600 w-full bottom-[-211px] md:bottom-[-225px] left-0 right-0 shadow-xl 
                rounded-b md:rounded text-lg`}>
                  <li className="w-full pt-2 md:pt-0">
                     <Link
                        className="w-full block py-5 pr-2 font-medium"
                        href="/">
                        صفحه اصلی
                     </Link>
                  </li>
                  <li className="w-full">
                     <Link
                        className="w-full block py-5 pr-2 font-medium"
                        href="/blogs">
                        بلاگ ها
                     </Link>
                  </li>

                  {user ? (
                     <li className="w-full relative z-40">
                        <Link
                           className="w-full block py-5 pr-2 font-medium"
                           href="/profile">
                           پروفایل
                        </Link>
                        <button
                           className="w-7 h-7 text-red-600 bg-neutral-200 flex items-center justify-center
                        absolute top-5 left-2 rounded-full z-50"
                           onClick={() => dispatch(signoutUser())}>
                           <ImExit className="ml-1" />
                        </button>
                     </li>
                  ) : (
                     <li className="w-full">
                        <Link
                           href="/signin"
                           className="w-full flex items-center justify-start py-5 pr-2 font-medium">
                           ورود
                        </Link>
                     </li>
                  )}
               </ul>
            )}
            {/* desctop menu */}
            <ul
               className={`hidden lg:flex items-center justify-center gap-x-4 text-lg ${
                  loading ? "opacity-0" : "opacity-100"
               } transition-all duration-100`}>
               <li>
                  <Link
                     className="block py-6 lg:px-4 xl:px-6 2xl:px-8 font-medium hover:bg-neutral-200
                      hover:text-blue-600 transition-all rounded-lg"
                     href="/">
                     صفحه اصلی
                  </Link>
               </li>
               <li>
                  <Link
                     className="block py-6 lg:px-4 xl:px-6 2xl:px-8 font-medium hover:bg-neutral-200
                      hover:text-blue-600 transition-all rounded-lg"
                     href="/blogs">
                     بلاگ ها
                  </Link>
               </li>
               {user ? (
                  <li className="relative z-40">
                     <Link
                        className="block py-6 lg:px-4 xl:px-6 2xl:px-8 font-medium hover:bg-neutral-200
                      hover:text-blue-600 transition-all rounded-lg"
                        href="/profile">
                        پروفایل
                     </Link>
                     <button
                        className="w-7 h-7 text-red-600 bg-neutral-200 flex items-center justify-center
                        absolute top-2 left-[-12px] rounded-full z-50 hover:scale-125 transition-all"
                        onClick={() => dispatch(signoutUser())}>
                        <ImExit className="ml-1" />
                     </button>
                  </li>
               ) : (
                  <li>
                     <Link
                        href="/signin"
                        className="block py-6 lg:px-4 xl:px-6 2xl:px-8 font-medium hover:bg-neutral-200
                hover:text-blue-600 transition-all rounded-lg">
                        ورود
                     </Link>
                  </li>
               )}
            </ul>
         </nav>
      </header>
   );
};

export default Header;
