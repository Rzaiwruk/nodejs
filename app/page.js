import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex h-screen items-center justify-center flex-col bg-gradient-to-r from-blue-600 via-black to-blue-600">
      <div className="bg-amber-500 p-7 rounded-2xl text-4xl drop-shadow-black">Mateusz Romanowski</div>
      <div>numer albumu: 124058</div>
    </div>
    </>
  );
}
