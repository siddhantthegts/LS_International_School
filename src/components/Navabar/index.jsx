import React from 'react';

const Navbar = () => {
  return (
    <div className="sticky top-0">
      <nav>
        <div className="w-full h-20 flex justify-between px-14 items-center bg-white ">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full overflow-hidden ">
              <img
                className="w-full h-full object-cover  "
                src="../assets/logo.jpeg"
                alt="logo"
              />
            </div>
            <p className="text-[30px] font-medium font-sans text-indigo-500">
              SR. LS International School
            </p>
          </div>
          <ul className="flex ">
            <li className="flex mr-6 hover:text-indigo-500 cursor-pointer font-bold text-lg">
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
