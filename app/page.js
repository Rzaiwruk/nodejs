import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex h-screen items-center justify-center flex-col bg-gradient-to-r from-green-800 to-blue-700">
      <div className="bg-amber-500 p-4 rounded-4xl text-4xl">Mateusz Romanowski</div>
      <div>numer albumu: 124058</div>
    </div>
    </>
  );
}
