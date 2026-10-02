import Image from "next/image";

export default function Home() {
  return (
    <div >
      <main>
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />


      </main>
    </div>
  );
}
