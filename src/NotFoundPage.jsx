import Navbar from './components/Navabar';

export default function NotFoundPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <img src="/lost.jpg" className="w-[500px] self-center" />
        <div className="text-center">
          <h2 className="font-bubblegum text-5xl">Error 404. </h2>
          <p className="font-poppins">
            Page you are looking for is not on this website
          </p>
        </div>
      </div>
    </div>
  );
}
