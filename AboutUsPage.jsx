import Navbar from './src/components/Navabar';

export default function AboutUsPage() {
  return (
    <div>
      <Navbar />
      <img
        src="/logo.jpeg"
        className="opacity-[0.5] fixed w-[800px] m-auto left-0 right-0 z-[-10]"
      />
      <div id="leadershipSection">
        <p id="leadershiptitle" className="text-center">
          LeaderShip Board
        </p>
        <div id="leadershipContainer">
          <div id="leadership">
            <img src="/leadership1.jpg" id="leadership-image" />
            <div className="textContainer">
              <p>Arnvika Singh</p>
              <div id="percentage">
                <p>91.2%</p>
                <p>Class IX</p>
              </div>
            </div>
          </div>
          <div id="leadership">
            <img src="/leadership2.jpg" id="leadership-image" />
            <div className="textContainer">
              <p>Rahul Kumar</p>
              <div id="percentage">
                <p>91.2%</p>
                <p>Class IV</p>
              </div>
            </div>
          </div>
        </div>

        <div id="leadershipContainer">
          <div id="leadership">
            <img src="/leadership3.jpg" id="leadership-image" />
            <div className="textContainer">
              <p>Veer Kumar Singh</p>
              <div id="percentage">
                <p>91.2%</p>
                <p>Class VIII</p>
              </div>
            </div>
          </div>
          <div id="leadership">
            <img src="/leadership4.jpg" id="leadership-image" />
            <div className="textContainer">
              <p>Mohit Yadav</p>
              <div id="percentage">
                <p>91.2%</p>
                <p>Class X</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="chairmenWrapper">
        <div
          className="flex flex-row justify-between w-[800px] rounded-r-full"
          id="charimenContainer"
        >
          <div className="flex flex-col p-[20px] " id="message">
            <h3 className="font-bold text-[17px] self-center">
              From Chairmen's Desk
            </h3>
            <br />
            <p className="text-xl font-manrope">
              It is with great pride and enthusiasm that I address you today as
              the Chairman of this esteemed institution. As a school, we are
              committed not just to imparting knowledge, but to shaping the
              leaders of tomorrow. Our mission is to provide a nurturing and
              inspiring environment where each one of you can realize your full
              potential, develop critical thinking, and build the character that
              will guide you in all walks of life. <br />
            </p>
          </div>
          <img
            src="/founder.jpg"
            className=" object-cover rounded-full height-[100%] "
            id="image"
          />
        </div>
      </div>

      <div id="founderWrapper">
        <div
          className="flex flex-row justify-between w-[800px] rounded-r-full mt-[20px]"
          id="founderContainer"
        >
          <img
            src="/founder.jpg"
            className=" object-cover rounded-full height-[100%] "
            id="imageFounder"
          />
          <div className="flex flex-col p-[20px] " id="message">
            <h3 className="font-bold text-[17px] self-center">
              From Founder's Desk
            </h3>
            <br />
            <p className="text-xl font-manrope">
              It is with immense joy and gratitude that I extend my heartfelt
              greetings to each one of you. At
              <b> SR L.S. International Public School</b>, we believe in the
              transformative power of education and its ability to shape young
              minds into leaders of tomorrow. Our school is more than just an
              institution; it is a community of learners, dreamers, and
              achievers. We are dedicated to fostering a nurturing environment
              where students can not only excel academically but also grow into
              individuals with strong values. <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
