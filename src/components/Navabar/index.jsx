import React from 'react';

const width = window.innerWidth;
const Navbar = () => {
  return (
    <div className="sticky top-0">
      <nav>
        <div className="w-full h-auto flex justify-between  max-[500px]:justify-center px-14 max-[500px]:px-0 items-center bg-white ">
          <div className="flex flex-row max-[500px]:justify-start  items-center gap-2 p-[20px]  ">
            <img
              className="w-14 h-14 object-contain  "
              src="/logo.jpeg"
              alt="logo"
            />

            <p className="text-[30px] max-[500px]:text-[25px] font-medium text-indigo-500 font-bubblegum grow ">
              SR. LS International School
            </p>
          </div>
          {width > 500 && (
            <ul className="flex flex-row max-[500px]:hidden">
              <li className="flex  mr-6 hover:text-indigo-500 cursor-pointer font-bold text-lg">
                Resources
              </li>
              <li className="flex mr-6 hover:text-indigo-500 cursor-pointer font-bold text-lg">
                About Us
              </li>
              <li className="flex mr-6 hover:text-indigo-500 cursor-pointer font-bold text-lg">
                Creativity
              </li>
              <li className="flex mr-6 hover:text-indigo-500 cursor-pointer font-bold text-lg">
                Teachers
              </li>
              <li className="flex mr-6 hover:text-indigo-500 cursor-pointer font-bold text-lg">
                Contact Us
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
