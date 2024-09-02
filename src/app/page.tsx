import Image from "next/image";

export default function Home() {
  return (
    <main className=" p-4">
      <div className="flex rounded-3xl bg-white w-full h-">
        <div className="w-3/5">
          <Image
            src="/background.jpeg"
            alt="image"
            layout="contain"
            width="1000"
            height="1000"
            className="rounded-tl-3xl rounded-bl-3xl"
          />
        </div>
        <div className="flex flex-col w-2/5 p-8 text-black">
          <h2>Bio</h2>
          <p>Frontend & Automations engineer</p>
        </div>


        <div>
          <div className="h-40 w-40 bg-red-500">

          </div>
        </div>
      </div>
    </main>
  );
}
