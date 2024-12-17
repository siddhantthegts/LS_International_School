import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomePage from '../../HomePage';

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const topNavIconSize = 35;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const toggleNav = () => {
    setIsOpen((prevState) => !prevState);
  };
  window.addEventListener('resize', (e) => {
    setWidth(window.innerWidth);
  });
  return (
    <div style={{ display: 'initial' }} classNameclassName="max-[500px]:w-full">
      <div className="flex flex-row gap-[20px] justify-between bg-[#416087] p-[4px]">
        <div className="flex flex-row gap-[25px]">
          <a target="_blank" href="https://www.facebook.com/share/1AooxYRzLJ/">
            <div className="hover:bg-[#547093] hover:text-white text-[#eeeeee] self-center">
              <Icon
                icon="ic:baseline-facebook"
                width={topNavIconSize}
                height={topNavIconSize}
                className="max-[500px]:w-[20px]"
              />
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/sr_ls_international_pub_school?igsh=NWZ3MTI2ZDVxOXoz"
          >
            <div className=" hover:bg-[#547093] hover:text-white text-[#eeeeee]  self-center">
              <Icon
                icon="lets-icons:insta-fill"
                width={topNavIconSize}
                height={topNavIconSize}
                className="max-[500px]:w-[20px]"
              />
            </div>
          </a>
          <a href="https://youtu.be/CCFqAbaxi74" target="_blank">
            <div className=" hover:bg-[#547093] hover:text-white text-[#eeeeee] self-center">
              <Icon
                icon="line-md:youtube-filled"
                width={topNavIconSize}
                height={topNavIconSize}
                className="max-[500px]:w-[20px]"
              />
            </div>
          </a>
        </div>
        <div className="text-white flex flex-row max-[500px]:flex-col items-center gap-[10px] max-[500px]:gap-[0px]">
          <div className="flex flex-row items-center gap-[10px]">
            <Icon
              icon="line-md:phone"
              width={topNavIconSize}
              height={topNavIconSize}
              className="max-[500px]:w-[20px]"
            />
            <p className="text-xl max-[500px]:text-[15px]">+91-9580900900</p>

            <span className="max-[500px]:hidden">|</span>
          </div>
          <div className="flex flex-row items-center gap-[10px]">
            <Icon
              icon="line-md:email-opened-alt-filled"
              width={topNavIconSize}
              height={topNavIconSize}
              className="max-[500px]:w-[20px]"
            />
            <p className="text-xl max-[500px]:text-[15px]">
              srlsinternation@gmail.com
            </p>
          </div>
        </div>
      </div>
      <nav className="sticky top-0 z-10 bg-white">
        <div className="w-full flex flex-row justify-between max-[500px]:justify-center items-center p-[6px]  ">
          <img
            className="w-[120px]  max-[500px]:w-[60px] object-contain "
            src="/logo.jpeg"
            alt="logo"
          />

          <Link to="/" element={<HomePage />}>
            <p className="text-[75px] max-[500px]:text-[30px] max-[500px]:text-center font-medium text-indigo-500 font-bubblegum  ">
              SR. LS International Public School
            </p>
          </Link>
          <img
            className="w-[120px] max-[500px]:w-[60px] object-contain"
            src="/cbse_newlogo.png"
            alt="logo"
          />
        </div>
      </nav>
      {width > 500 ? (
        <ul className="flex flex-row max-[500px]:hidden justify-evenly  p-[8px] items-center">
          <Link to="/admission">
            <li className="flex  hover:text-white cursor-pointer font-medium text-lg font-poppins p-[10px] rounded-2xl hover:bg-indigo-500 ">
              Admission
            </li>
          </Link>
          <Link to="/campus">
            <li className="flex  hover:text-white cursor-pointer font-medium text-lg font-poppins p-[10px] rounded-2xl hover:bg-indigo-500 ">
              Campus
            </li>
          </Link>
          <Link to="/academics">
            <li className="flex  hover:text-white cursor-pointer font-medium text-lg font-poppins p-[10px] rounded-2xl hover:bg-indigo-500 ">
              Academics
            </li>
          </Link>
          <Link to="/news">
            <li className="flex hover:text-white cursor-pointer font-medium text-lg font-poppins p-[10px]  rounded-2xl hover:bg-indigo-500 ">
              News and Event
            </li>
          </Link>
          <Link to="/carrier">
            <li className="flex  hover:text-white cursor-pointer font-medium text-lg font-poppins p-[10px] rounded-2xl hover:bg-indigo-500 ">
              Carrier
            </li>
          </Link>
          <Link to="/photos">
            <li className="flex  hover:text-white cursor-pointer font-medium text-lg font-poppins p-[10px] rounded-2xl hover:bg-indigo-500 ">
              Photos
            </li>
          </Link>
          <Link to="/fee_structure">
            <li className="flex  hover:text-white cursor-pointer font-medium text-lg font-poppins p-[10px] rounded-2xl hover:bg-indigo-500 ">
              Fee Structure
            </li>
          </Link>
          <Link to="/facilities">
            <li className="flex hover:text-white cursor-pointer font-medium text-lg font-poppins p-[10px]  rounded-2xl hover:bg-indigo-500 ">
              Facilities
            </li>
          </Link>
          <Link to="/aboutus">
            <li className="flex hover:text-white cursor-pointer font-medium text-lg font-poppins p-[10px]  rounded-2xl hover:bg-indigo-500 ">
              About Us
            </li>
          </Link>
          <Link to="/contactus">
            <li className="flex  hover:text-white cursor-pointer font-medium text-lg font-poppins p-[10px] rounded-2xl hover:bg-indigo-500 ">
              Contact Us
            </li>
          </Link>
        </ul>
      ) : (
        <>
          <ul className="flex flex-col m-[5px] transition-all duration-[1000ms]  ">
            <Icon
              icon="ei:navicon"
              width="50"
              height="50"
              className="self-end"
              onClick={toggleNav}
            />
            <div
              id="mobileNav"
              className="bg-indigo-500 text-white"
              style={{
                opacity: isOpen ? 1 : 0,
                maxHeight: isOpen ? '500px' : '0', // adjust '500px' to the maximum height of the menu
                overflow: 'hidden', // prevents content from overflowing when collapsed
                transition: 'opacity 0.5s ease, max-height 0.5s ease',
              }}
            >
              <Link to="/admission">
                <li className="p-[8px] m-[2px] hover:bg-[#eeeeee] hover:text-black rounded-xl">
                  Admission
                </li>
              </Link>
              <li className="p-[8px] m-[2px] hover:bg-[#eeeeee] hover:text-black rounded-xl">
                Campus
              </li>
              <li className="p-[8px] m-[2px] hover:bg-[#eeeeee] hover:text-black rounded-xl">
                Academics
              </li>
              <li className="p-[8px] m-[2px] hover:bg-[#eeeeee] hover:text-black rounded-xl">
                News and Events
              </li>
              <li className="p-[8px] m-[2px] hover:bg-[#eeeeee] hover:text-black rounded-xl">
                Carrier
              </li>
              <li className="p-[8px] m-[2px] hover:bg-[#eeeeee] hover:text-black rounded-xl">
                Photos
              </li>
              <li className="p-[8px] m-[2px] hover:bg-[#eeeeee] hover:text-black rounded-xl">
                Fee Structure
              </li>
              <li className="p-[8px] m-[2px] hover:bg-[#eeeeee] hover:text-black rounded-xl">
                Facilities
              </li>
              <li className="p-[8px] m-[2px] hover:bg-[#eeeeee] hover:text-black  rounded-xl">
                About us
              </li>
              <li className="p-[8px] m-[2px] hover:bg-[#eeeeee] hover:text-black  rounded-xl">
                Contact Us
              </li>
            </div>
          </ul>
        </>
      )}
    </div>
  );
};

export default Navbar;
