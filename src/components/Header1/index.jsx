import React from "react";

const Header1 = () => {
  return (
    <>
      <div className="h-auto bg-pink-100 flex w-full">
        {/* left side started */}
        <div className="w-1/2 p-st pl-12 ">
          <h1 className="text-8xl font-bold">
            Secure a <br></br>Better Future
            <br /> For Your <span className="text-indigo-500">Kids</span>
          </h1>
          <p className="my-7 text-2xl font-semibold ">
            Secure a Better Future For Your Kids
          </p>
          <p className="mb-7 text-xl font-medium pr-20">
            Welcome to Kiddy Star, a playful and engaging website template
            designed to showcase your kindergarten, prep school, tutoring or any
            other services that come to your mind. Explore our classrooms, meet
            our educators, and discover the enriching experiences that await
            your little learners.
          </p>
          <button className="h-10 w-44 bg-indigo-800 text-white hover:bg-white hover:text-indigo-800 rounded-xl mb-3 text-base font-medium ">
            LEARN MORE
          </button>
        </div>
        {/* left side ended */}
        {/* right side started */}
        <div className="w-1/2">
          <div className="flex justify-evenly mt-8 px-8">
            {/* 1st image div */}
            <div className="h-80 w-80 rounded-full   overflow-hidden bg-red-700">
              <img
                className="w-full h-full object-cover object-center"
                src="https://media.istockphoto.com/id/1409722748/photo/students-raising-hands-while-teacher-asking-them-questions-in-classroom.webp?b=1&s=612x612&w=0&k=20&c=zEb3WXVRX0z2Mgw0eDdfSqcAjEd1wPbtrq2yhw6f2D0="
                alt="children studying image 1"
              />
            </div>
            {/* 2nd image */}
            <div className="h-80 w-80 rounded-full   overflow-hidden bg-red-700">
              <img
                className="w-full h-full object-cover object-center"
                src="https://media.istockphoto.com/id/950604826/photo/children-playing-with-skipping-rope.webp?b=1&s=612x612&w=0&k=20&c=4Dohq5W4u6hTZ4ruzwbrG4pDnKlkK8x32wlFpthd5j4="
                alt="children studying image 1"
              />
            </div>
          </div>
          {/* 3rd image */}
          <div className="w-full h-auto flex justify-center items-center">
            <div className="h-40 w-40 rounded-full   overflow-hidden bg-red-700">
              <img
                className="w-full h-full object-cover object-center"
                src="https://media.istockphoto.com/id/1252210017/photo/smiling-girl-playing-on-the-swing.webp?b=1&s=612x612&w=0&k=20&c=lkeUrMxxyz8QiiPkLfI4kZHbaAtD8rAwTGmW1f65lF8="
                alt="children studying image 1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header1;
