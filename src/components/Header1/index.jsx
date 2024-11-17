import { Icon } from '@iconify/react';
import React from 'react';

let height = 0;
const anim = (height) => {
  if (height < 200) {
    height += 40;
  }
  return height;
};

const Header1 = () => {
  return (
    <div>
      <div className="h-auto bg-[#FFD8DE] flex flex-row max-[500px]:flex-col w-full">
        {/* left side started */}
        <div className="w-1/2 max-[500px]:w-full p-st p-[100px] max-[500px]:p-[10px] flex flex-col items-center ">
          <h1 className="text-8xl max-[500px]:text-6xl font-bold font-bubblegum text-left">
            Secure a <br></br>Better Future
            <br /> For Your <span className="text-indigo-500">Kids</span>
          </h1>
          <p className="my-7 text-2xl font-semibold max-[500px]:text-center">
            Spark a love of learning in your child’s world.
          </p>
          <p className="mb-7 text-xl font-medium pr-20 max-[500px]:pr-0 leading-loose max-[500px]:text-center">
            Welcome to SR. LS International, a playful and engaging website
            template designed to showcase your kindergarten, prep school,
            tutoring or any other services that come to your mind. Explore our
            classrooms, meet our educators, and discover the enriching
            experiences that await your little learners.
          </p>
          <button className="h-auto  max-[500px]:h-12 w-44 bg-[#416087] hover:bg-black p-[20px]  max-[500px]:p-[8px] max-[500px]:self-center text-white transition-all duration-[500ms] rounded-xl mb-3 text-base font-medium ">
            <span className="flex flex-row  gap-[5px] justify-evenly items-center">
              <Icon icon="ic:baseline-arrow-right" width={30} height={30} />
              <p>LEARN MORE</p>
            </span>
          </button>
        </div>
        {/* left side ended */}
        {/* right side started */}
        <div className="grow flex flex-col justify-center max-[500px]:w-full max-[500px]:p-[4px]">
          <div className="flex flex-row justify-center  max-[500px]:w-full">
            {/* 1st image div */}
            <div className="w-80 h-80 max-[500px]:w-1/2 max-[500px]:h-1/2 ">
              <div className="h-80 w-80 max-[500px]:w-48 max-[500px]:h-48 rounded-full transition-all duration-[1000ms] hover:w-48 hover:h-48 overflow-hidden  hover:opacity-75">
                <img
                  className="w-full h-full object-cover object-center"
                  src="/school.png"
                  alt="children studying image 1"
                />
              </div>
            </div>
            {/* 2nd image */}
            <div className="w-80 h-80 max-[500px]:w-1/2 max-[500px]:h-1/2 max-[500px]:h-auto">
              <div className="h-80 w-80 max-[500px]:w-48 max-[500px]:h-48 rounded-full transition-all duration-[1000ms] hover:w-48 hover:h-48 overflow-hidden  hover:opacity-75">
                <img
                  className="w-full h-full object-cover object-center"
                  src="/chairperson.jpeg"
                  alt="children studying image 1"
                />
              </div>
            </div>
          </div>
          {/* 3rd image */}
          <div className="w-full h-auto flex justify-center align-center">
            <div className="w-60 h-60">
              <div className="h-60 w-60  transition-all duration-[1000ms] hover:w-52 hover:h-52 rounded-full overflow-hidden bg-red-100 hover:opacity-75">
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
      {/* white background content */}
      <div className="bg-white-100">
        <div className="flex flex-row max-[500px]:flex-col max-[500px]:gap-[35px] max-[500px]:items-center max-[500px]:w-full justify-evenly mt-[20px] mb-[20px] pt-[150px] pb-[150px]">
          <div className="flex flex-row w-1/5 max-[500px]:w-full gap-[15px] ">
            <img className="w-[80px] h-[80px]" src="/kindergarten.webp" />
            <div className="flex flex-col ">
              <h3 className="text-6xl font-bold font-bubblegum">Nurture</h3>
              <p className="mt-[4px]">
                Get a safe and productive environment for your children. Healthy
                atmosphere helps a child to grow and learn.
              </p>
            </div>
          </div>
          <div className="flex flex-row w-1/5 max-[500px]:w-full gap-[15px]">
            <img className="w-[80px] h-[80px]" src="/bear-toy.webp" />
            <div className="flex flex-col">
              <h3 className="text-6xl font-bold font-bubblegum">Playtime</h3>
              <p className="mt-[4px]">
                Playtime is an essential part of our school day, offering
                students a chance to relax, socialize, and recharge.
              </p>
            </div>
          </div>
          <div className="flex flex-row w-1/5  max-[500px]:w-full gap-[15px]">
            <img className="w-[80px] h-[80px]" src="/pencil-2.webp" />
            <div className="flex flex-col">
              <h3 className="text-6xl font-bold font-bubblegum">Activities</h3>
              <p className="mt-[4px]">
                At SR. LS, we offer a wide range of extracurricular activities
                that complement and enrich our students' learning experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our resources section */}
      <div className=" bg-[#F5F2FD]">
        <div className="flex flex-col  pt-[70px] pb-[70px] items-center max-[500px]:p-[10px]">
          <p className=" font-bubblegum text-6xl mb-[15px]">Our Resources</p>
          <p className="text-2xl mb-[50px] max-[500px]:text-center">
            This showcases our curriculum and facilities and connects with
            parents seeking the best education for their children.
          </p>
          <div className="flex flex-row max-[500px]:flex-col gap-[50px]">
            <div className="relative">
              <img
                src="banner.jpg"
                className="rounded-3xl max-[500px]:p-[10px]"
                onMouseOver={() => {
                  const element = document.getElementById('blackAnim');
                  element.style.height = '100%';
                }}
              />
              <div
                id="blackAnim"
                onMouseOut={() => {
                  const element = document.getElementById('blackAnim');
                  element.style.height = '0px';
                }}
                className="object-contain w-full h-0 transition-all duration-[500ms] absolute bottom-0 left-0 rounded-3xl  hover:bg-gradient-to-b hover:from-[#00000000] hover:to-[#000000FF] "
              ></div>
            </div>
            <div className="relative">
              <img
                src="banner2.jpg"
                className="rounded-3xl max-[500px]:p-[10px]"
                onMouseOver={() => {
                  const element = document.getElementById('blackAnim2');
                  element.style.height = '100%';
                }}
              />
              <div
                id="blackAnim2"
                className="object-contain w-full h-0 transition-all duration-[500ms] bg-[#00000000] absolute bottom-0 left-0 rounded-3xl  hover:bg-gradient-to-b hover:from-[#00000000] hover:to-[#000000FF] "
                onMouseOut={() => {
                  const element = document.getElementById('blackAnim2');
                  element.style.height = '0px';
                }}
              ></div>
            </div>
            <div className="relative">
              <img
                src="banner3.jpg"
                className="rounded-3xl max-[500px]:p-[10px]"
                onMouseOver={() => {
                  const element = document.getElementById('blackAnim3');
                  element.style.height = '100%';
                }}
              />
              <div
                id="blackAnim3"
                className="object-contain w-full h-0 transition-all duration-[500ms] absolute bottom-0 left-0 rounded-3xl  hover:bg-gradient-to-b hover:from-[#00000000] hover:to-[#000000FF] "
                onMouseOut={() => {
                  const element = document.getElementById('blackAnim3');
                  element.style.height = '0px';
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Admission open section */}
      <div className="bg-white-100">
        <div className="flex flex-row max-[500px]:flex-col justify-center gap-[50px] mt-[20px] mb-[20px] px-[20px] pt-[150px] pb-[150px]">
          <div className="flex w-[500px] max-[500px]:w-full ">
            <img
              className="w-full h-full rounded-[50px]"
              src="/admission.jpg"
            />
          </div>
          <div className="flex flex-col w-1/2 max-[500px]:w-full justify-center gap-[20px]">
            <h3 className="text-6xl font-bold font-bubblegum">
              Help your kids discover and unleash Creativity
            </h3>
            <p className="mt-[4px]">
              Welcome to SR. LS International Public School. Easily personalize
              the content, images, and color scheme to perfectly reflect your
              kindergarten’s atmosphere and connect with parents and children
              alike.
            </p>
            <button className="h-[50px] w-[180px] bg-[#416087] hover:bg-black text-white transition-all duration-[500ms] rounded-full mb-3 text-base font-medium ">
              <span className="flex flex-row justify-center items-center ">
                <Icon icon="ic:baseline-arrow-right" width={30} height={30} />
                <p>ADMISSION</p>
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Learning objectives and outcomes */}
      <div className="bg-cyan-700">
        <div className="flex flex-row justify-center items-center gap-[20px] px-[20px] pt-[150px] pb-[150px]">
          <div className="flex flex-col w-1/2 justify-center gap-[20px]">
            <h3 className="text-6xl text-white font-bold font-bubblegum">
              Learning objectives &{' '}
              <span className="text-[#FFD8DE]">outcomes</span>
            </h3>
            <div className="flex flex-row justify-start items-center gap-[5px]">
              <Icon
                icon="lets-icons:check-fill"
                style={{ color: '#ffffff' }}
                width={25}
                height={25}
              />
              <p className="text-white">Values formation</p>
            </div>
            <div className="flex flex-row justify-start items-center gap-[5px]">
              <Icon
                icon="lets-icons:check-fill"
                style={{ color: '#ffffff' }}
                width={25}
                height={25}
              />
              <p className="text-white">
                Promote social, emotional and intellectual development.
              </p>
            </div>
            <div className="flex flex-row justify-start items-center gap-[5px]">
              <Icon
                icon="lets-icons:check-fill"
                style={{ color: '#ffffff' }}
                width={25}
                height={25}
              />
              <p className="text-white">
                Planned unstructured and structured learning.
              </p>
            </div>
            <div className="flex flex-row justify-start items-center gap-[5px]">
              <Icon
                icon="lets-icons:check-fill"
                style={{ color: '#ffffff' }}
                width={25}
                height={25}
              />
              <p className="text-white">
                Cultivate skills important for mental and overall well-being.
              </p>
            </div>
            <div className="flex flex-row justify-start items-center gap-[5px]">
              <Icon
                icon="lets-icons:check-fill"
                style={{ color: '#ffffff' }}
                width={25}
                height={25}
              />
              <p className="text-white">
                Build a strong foundation in early childhood.
              </p>
            </div>

            <button className="h-[50px] w-[180px] bg-[#416087] hover:bg-black text-white transition-all duration-[500ms] rounded-full mb-3 text-base font-medium ">
              <span className="flex flex-row justify-center items-center ">
                <Icon icon="ic:baseline-arrow-right" width={30} height={30} />
                <p>ADMISSION</p>
              </span>
            </button>
          </div>
          <div className="flex ">
            <img className="w-full h-full rounded-[50px]" src="/learning.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
