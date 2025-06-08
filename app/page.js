import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex items-center flex-row text-black  bg-white">
     <div className="flex h-screen items-center justify-left flex-col">
        <div className="p-7 rounded-2xl text-4xl drop-shadow-black">Mateusz Romanowski</div>
       <div>numer albumu: 124058</div>
      </div>
      <div className="flex h-20 w-800 items-start justify-start flex-col">
      <div className="text-5xl font-extrabold">Moje top 5 serów</div>
      </div>
    </div>
    </>
  );
}
