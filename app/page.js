import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-start">
        <h1 className="text-3xl">aurorarent.net</h1>
        <ol className="list-inside list-decimal text-sm text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-8 py-5 px-4 relative border border-white/30">
            <h2 className="inline-block underline underline-offset-8">Tranzly - Quick translate with Google Translate</h2>
            <p className="mt-4 ml-6 max-w-xl">
              Translate text and images effortlessly with this extension. Instantly translate selected text with a single click or extract and translate text from images.
            </p>
            <Link href="https://tranzly.vercel.app" className="absolute top-0 left-0 w-full h-full">
              <span className="invisible">Tranzly - Quick translate with Google Translate</span>
            </Link>
          </li>
          <li className="mt-16 mb-8 py-5 px-4 relative border border-white/30">
            <Link href="https://zapys.co" className="absolute -top-[42px] left-3">
              <h2 className="inline-block text-xl">MicroTools</h2>
            </Link>

            <h2 className="inline-block underline underline-offset-8">AVIF to JPG converter</h2>
            <p className="mt-4 ml-6 max-w-xl">
              Quickly and easily convert AVIF images to JPG with our reliable AVIF to JPG converter. Maintain image quality while ensuring compatibility with all devices and platforms. Perfect for seamless image optimization—try it today!
            </p>
            <Link href="https://zapys.co/avif-to-jpg" className="absolute top-0 left-0 w-full h-full">
              <span className="invisible">AVIF to JPG converter</span>
            </Link>
          </li>
          <li className="mb-8 py-5 px-4 relative border border-white/30">
            <h2 className="inline-block underline underline-offset-8">AVIF to PNG converter</h2>
            <p className="mt-4 ml-6 max-w-xl">
              Easily convert AVIF files to PNG format with our fast and reliable AVIF to PNG converter. Preserve quality and transparency while ensuring compatibility with all your projects. Try it now!
            </p>
            <Link href="https://zapys.co/avif-to-png" className="absolute top-0 left-0 w-full h-full">
              <span className="invisible">AVIF to PNG converter</span>
            </Link>
          </li>
          
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
        </div>
      </main>
    </div>
  );
}
