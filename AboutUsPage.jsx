import Navbar from './src/components/Navabar';
import './styles.css';

export default function AboutUsPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-between w-[800px] m-auto bg-[#f0f0f0] p-[20px]">
        <div className="flex flex-col" id="message">
          <h3 className="font-bold text-[17px]">From Chairmen's Desk</h3>
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
          className=" object-cover rounded-full  "
          id="image"
        />
      </div>
    </div>
  );
}
