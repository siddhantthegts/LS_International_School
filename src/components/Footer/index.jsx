import React from 'react';

const Footer = () => {
  return (
    <div className="bg-pink-200">
      <footer className=" ">
        <div className="mx-8 pt-7 ">
          <hr class="h-1 bg-gray-500 border-none w-1/2 text-center mx-auto mt-14 mb-14" />
          <div className="flex items-center gap-2 ">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden ">
              <img
                className="w-full h-full object-cover "
                src="/logo.jpeg"
                alt="castle"
              />
            </div>
            <p className="text-2xl font-bold text-indigo-500">
              SR. LS International
            </p>
          </div>

          <div className="flex w-full mt-11">
            <div className="w-2/5  pr-6">
              <h1 className="text-xl font-bold mb-9 ">About Us</h1>
              <p className="text-lg font-medium">
                Make a great first impression on your website visitors by
                providing them with a brief summary of your "company. This is a
                demo by OceanWP, which you can import and easily customize to
                your liking.
              </p>
            </div>
            <div className="w-1/5">
              <h1 className="text-xl font-bold mb-9 ">Useful Links</h1>
              <ul className="text-lg font-medium">
                <li>Privacy policy</li>
                <li>Online Classes</li>
                <li>Activities</li>
                <li>Enrollment</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="w-1/5">
              <h1 className="text-xl font-bold mb-9 ">Our terms</h1>
              <ul className="text-lg font-medium">
                <li>Why Choose Us</li>
                <li>About</li>
                <li>Our Programs</li>
                <li>Superstars</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="w-1/5">
              <h1 className="text-xl font-bold mb-9 ">Our terms</h1>
              <ul className="text-lg font-medium">
                <li>Location</li>
                <li>Phone no.</li>
                <li>Email</li>
                <li>Website</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
