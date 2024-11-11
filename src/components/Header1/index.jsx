import React from 'react';

const Header1 = () => {
  return (
    <div>
      <div className="h-auto bg-[#FFD8DE] flex flex-row w-full">
        {/* left side started */}
        <div className="w-1/2 p-st p-[100px] ">
          <h1 className="text-8xl font-bold">
            Secure a <br></br>Better Future
            <br /> For Your <span className="text-indigo-500">Kids</span>
          </h1>
          <p className="my-7 text-2xl font-semibold ">
            Spark a love of learning in your child’s world.
          </p>
          <p className="mb-7 text-xl font-medium pr-20 leading-loose">
            Welcome to SR. LS International, a playful and engaging website
            template designed to showcase your kindergarten, prep school,
            tutoring or any other services that come to your mind. Explore our
            classrooms, meet our educators, and discover the enriching
            experiences that await your little learners.
          </p>
          <button className="h-auto w-44 bg-indigo-800 hover:bg-black p-[20px] text-white transition-all duration-[500ms] rounded-xl mb-3 text-base font-medium ">
            LEARN MORE
          </button>
        </div>
        {/* left side ended */}
        {/* right side started */}
        <div className="grow flex flex-col justify-center">
          <div className="flex flex-row justify-evenly mt-8 px-8 gap-[40px]">
            {/* 1st image div */}
            <div className="w-80 h-80">
              <div className="h-80 w-80 rounded-full transition-all duration-[1000ms] hover:w-72 hover:h-72 overflow-hidden bg-pink-500 hover:opacity-75">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://media.istockphoto.com/id/1409722748/photo/students-raising-hands-while-teacher-asking-them-questions-in-classroom.webp?b=1&s=612x612&w=0&k=20&c=zEb3WXVRX0z2Mgw0eDdfSqcAjEd1wPbtrq2yhw6f2D0="
                  alt="children studying image 1"
                />
              </div>
            </div>
            {/* 2nd image */}
            <div className="w-1/2 h-80">
              <div className="h-80 w-80 rounded-full transition-all duration-[1000ms] hover:w-72 hover:h-72   overflow-hidden bg-pink-500 hover:opacity-75">
                <img
                  className="w-full h-full object-cover object-center "
                  src="https://media.istockphoto.com/id/950604826/photo/children-playing-with-skipping-rope.webp?b=1&s=612x612&w=0&k=20&c=4Dohq5W4u6hTZ4ruzwbrG4pDnKlkK8x32wlFpthd5j4="
                  alt="children studying image 1"
                />
              </div>
            </div>
          </div>
          {/* 3rd image */}
          <div className="w-full h-auto flex justify-center align-center">
            <div className="w-60 h-60">
              <div className="h-60 w-60 transition-all duration-[1000ms] hover:w-52 hover:h-52 rounded-full overflow-hidden bg-red-100 hover:opacity-75">
                <img
                  className="w-full h-full object-cover object-center "
                  src="https://media.istockphoto.com/id/1252210017/photo/smiling-girl-playing-on-the-swing.webp?b=1&s=612x612&w=0&k=20&c=lkeUrMxxyz8QiiPkLfI4kZHbaAtD8rAwTGmW1f65lF8="
                  alt="children studying image 1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white-100">
        <div className="flex flex-row justify-evenly mt-[20px] mb-[20px] pt-[150px] pb-[1¸50px]">
          <div className="flex flex-row w-1/5 gap-[15px]">
            <img
              className="w-[80px] h-[80px]"
              src="../assets/kindergarten.webp"
            />
            <div className="flex flex-col">
              <h3>Nurture</h3>
              <p>
                Launch your kindergarten's website with ease using the Kiddy
                Star template by OceanWP.
              </p>
            </div>
          </div>
          <div className="flex flex-row w-1/5 gap-[15px]">
            <img className="w-[80px] h-[80px]" src="../assets/bear-toy.webp" />
            <div className="flex flex-col">
              <h3>Playtime</h3>
              <p>
                Launch your kindergarten's website with ease using the Kiddy
                Star template by OceanWP.
              </p>
            </div>
          </div>
          <div className="flex flex-row w-1/5 gap-[15px]">
            <img className="w-[80px] h-[80px]" src="../assets/pencil-2.webp" />
            <div className="flex flex-col">
              <h3>Activities</h3>
              <p>
                Launch your kindergarten's website with ease using the Kiddy
                Star template by OceanWP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
