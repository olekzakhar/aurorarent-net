import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-start">
        <h1 className="text-3xl">aurorarent.net</h1>
        <ol className="list-inside list-decimal text-sm text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-8 py-5 px-4 relative border border-white/30">            
            <h2 className="inline-block underline underline-offset-8">zapys.co - Micro Tools</h2>
            <p className="mt-4 ml-6 max-w-xl">
              Zapys provides a growing list of minimalist tools crafted to tackle specific tasks efficiently. Whether you&apos;re looking for quick converters, or other utilities, find what you need in seconds.
            </p>
            <Link href="https://zapys.co" className="absolute top-0 left-0 w-full h-full"></Link>
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
        </div>
      </main>
    </div>
  );
}
