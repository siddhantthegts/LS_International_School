import Navbar from './src/components/Navabar';
import './styles.css';
import Footer from './src/components/Footer';

export default function AdmissionOpenPage() {
  return (
    <div id="outerdiv">
      <Navbar />
      <hr />
      <div
        id="container"
        className="flex flex-row w-[80%] m-auto max-[500px]:flex-col max-[500px]:w-full"
      >
        <img
          id="bgimage"
          src="/admission.jpg"
          alt="sr ls internation public school"
          className="max-[500px]:w-full"
        />
        <img id="secondimg" src="/school.png" />

        <div id="innerdiv" className="flex flex-col  p-[10px] gap-[10px] ">
          <div id="header" className="flex flex-col ">
            <p id="admissionText">Admission Open!</p>

            <p id="text">
              <b> Get in touch </b>
            </p>
          </div>
          <label className=" font-poppins ">Name of Parent:</label>
          <input type="text" name="parentname" id="input" />
          <label className=" font-poppins">Name of Child:</label>
          <input
            id="input"
            type="text"
            name="childname"
            className="outline-none bg-[#aaaaaa] p-[8px]"
          />
          <label className=" font-poppins">Phone Number:</label>
          <input type="number" name="phonenumber" id="input" />
          <label className=" font-poppins">Email:</label>
          <input type="text" name="email" id="input" />
          <div className="flex flex-row justify-evenly mt-[20px] ">
            <label className=" font-poppins">Class for Admission:</label>
            <select
              id="classes"
              className="w-[80px] text-xl outline-none p-[6px] rounded-xl "
            >
              <option className="first">I</option>
              <option className="second">II</option>
              <option className="third">III</option>
              <option className="fourth">IV</option>
              <option className="fifth">V</option>
              <option className="sixth">VI</option>
              <option className="seventh">VII</option>
              <option className="eighth">VIII</option>
              <option className="ninth">IX</option>
              <option className="tenth">X</option>
            </select>
            <i></i>
          </div>
          <button id="submit" className="bg-[#FFD7DE]">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
