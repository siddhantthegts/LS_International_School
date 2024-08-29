import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="w-full h-20 flex justify-between px-14 items-center bg-white">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full overflow-hidden ">
              <img
                className="w-full h-full object-cover "
                src="https://images.unsplash.com/photo-1509407336566-fca158fddcce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FzdGxlfGVufDB8fDB8fHww"
                alt="castle"
              />
            </div>
            <p className="text-2xl font-bold text-indigo-500">Kiddystar</p>
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
