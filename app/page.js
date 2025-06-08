import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex w-screen items-center justify-center flex-row">
     <div className="flex h-screen items-center justify-center flex-col bg-white">
        <div className="bg-amber-500 p-7 rounded-2xl text-4xl drop-shadow-black">Mateusz Romanowski</div>
       <div>numer albumu: 124058</div>
      </div>
      <div>Moje top 5 serów</div>
    </div>
    </>
  );
}
