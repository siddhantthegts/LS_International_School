import { Icon } from '@iconify/react';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white p-12">
      <footer className="flex flex-row gap-[20px] justify-center items-center max-[500px]:flex-col ">
        {/* Get in touch section */}
        <div className="flex flex-col gap-[15px] w-2/5 max-[500px]:w-full">
          <p className="font-bubblegum text-4xl">Get in touch</p>
          <p className="text-xl">
            Our support team will review your query to respond within 24 hours.
            Feel free to reach us, we happily assist you
          </p>
          <div className="flex flex-row items-center gap-[20px]">
            <Icon
              icon="mdi:location"
              style={{ color: '#383838' }}
              width={35}
              height={35}
            />
            <p className="text-xl">
              Jagdishpur, Kishai Jagdi, Uttar Pradesh 209728
            </p>
          </div>
          <div className="flex flex-row items-center gap-[20px]">
            <Icon
              icon="ic:baseline-phone"
              style={{ color: '#383838' }}
              width={35}
              height={35}
            />
            <p className="text-xl">+91-9415146050</p>
          </div>
          <div className="flex flex-row items-center gap-[20px]">
            <Icon
              icon="material-symbols:mail-outline"
              style={{ color: '#383838' }}
              width={35}
              height={35}
            />
            <p className="text-xl">srlsmail@mailaddress.com</p>
          </div>
          <div className="mt-[20px]">
            <p className="font-bubblegum text-2xl">Social Networks</p>
            <div className="flex flex-row gap-[20px] mt-[20px]">
              <div className="bg-[#dddddd] rounded-full p-[6px] hover:bg-[#547093] hover:text-white text-[#383838] self-center">
                <Icon icon="ic:baseline-facebook" width={20} height={20} />
              </div>
              <div className="bg-[#dddddd] rounded-full p-[6px] hover:bg-[#547093] hover:text-white text-[#383838]  self-center">
                <Icon icon="lets-icons:insta-fill" width={20} height={20} />
              </div>
              <div className="bg-[#dddddd] rounded-full p-[6px] hover:bg-[#547093] hover:text-white text-[#383838] self-center">
                <Icon icon="mdi:twitter" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
        {/* Form to get in touch */}
        <div className="h-auto flex flex-col w-2/5 justify-center max-[500px]:w-4/5  items-center">
          <div className="flex flex-col flex-1 max-[500px]:self-center">
            <label>
              <b className="text-[18px] max-[500px]:self-center max-[500px]:w-80">
                {' '}
                Name <i className="text-[#DC53C5]">*</i>{' '}
              </b>
            </label>
            <input className="outline-none border border-gray-800 rounded-[4px] h-[50px] w-96 p-[6px] mt-[6px] max-[500px]:w-80 max-[500px]:m-auto" />

            <label className="mt-[20px]">
              <b className="text-[18px]">
                Email <i className="text-[#DC53C5]">*</i>{' '}
              </b>
            </label>
            <input className="outline-none border border-gray-800 rounded-[4px] h-[50px] w-96 p-[6px] mt-[6px] max-[500px]:w-80 max-[500px]:m-auto" />

            <label className="mt-[20px]">
              <b className="text-[18px]"> Comment or Message</b>
            </label>
            <textarea className="outline-none border border-gray-800 rounded-[4px] h-[100px] w-96 p-[6px] mt-[6px] max-[500px]:w-80 max-[500px]:m-auto" />

            <button className="bg-[#0B5489] text-white p-[10px] rounded-xl w-36 mt-[20px]">
              <b>Submit</b>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
