import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Link href={'/photos'} className="bg-black px-10 py-4 border rounded-xl text-white">See photos</Link>
    </main>
  );
}
