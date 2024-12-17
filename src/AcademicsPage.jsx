import { Icon } from '@iconify/react';
import { useState } from 'react';
import Navbar from './components/Navabar';

const primaryArr = ['Class 1', 'Class 2', 'Class 3', 'Class 4'];
const secondaryArr = ['Class 5', 'Class 6', 'Class 7'];
const highSecondaryArr = ['Class 8', 'Class 9', 'Class 10'];
const intermediateArr = ['Class 11', 'Class 12'];

export default function AcademicsPage() {
  return (
    <div>
      <div>
        <Navbar />
        <img
          src="/logo.jpeg"
          className="opacity-[0.5] fixed w-[800px] m-auto left-0 right-0 z-[-10]"
        />
        <div className="w-[400px] p-[50px] m-auto gap-[15px] flex flex-col justify-center bg-[#ffffff] max-[500px]:opacity-[.90] rounded-2xl mt-[80px]">
          <ListComponent text="Lower Primary Education" arr={primaryArr} />
          <ListComponent text="Upper Primary Education" arr={secondaryArr} />
          <ListComponent
            text="Secondary School Education "
            arr={highSecondaryArr}
          />
          <ListComponent
            text="Higher Secondary Education"
            arr={intermediateArr}
          />
        </div>
      </div>
    </div>
  );
}

function ListComponent({ text, arr }) {
  const [iconDown, setIconDown] = useState(false);
  return (
    <div className="flex flex-col gap-[15px]">
      <div
        className="flex flex-row gap-[10px] items-center"
        onClick={() => setIconDown(!iconDown)}
      >
        {iconDown ? (
          <Icon icon="ic:baseline-arrow-drop-up" width="30" height="30" />
        ) : (
          <Icon icon="ic:baseline-arrow-drop-down" width="30" height="30" />
        )}
        <b>
          {' '}
          <p className="font-manrope text-xl">{text}</p>
        </b>
      </div>
      {iconDown &&
        arr.map((data) => {
          return (
            <div className="ml-[20px]">
              <p className="font-manrope text-[22px]">{data}</p>
            </div>
          );
        })}
    </div>
  );
}
