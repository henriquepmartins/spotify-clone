import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2 } from 'lucide-react'
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'><img src="./thebeatles.png" width={104} height={104} alt="beatles" />
              <strong>The Beatles</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>

            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'><img src="./thesmiths.jpg" width={104} height={104} alt="the smiths" />
              <strong>The Smiths (1984)</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'><img src="./neutralmilk.jpg" width={104} height={104} alt="neutral milk" />
              <strong>In the Aeroplane Over the Sea</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'><img src="okcomputer.jpg" width={104} height={104} alt="Radiohead" />
              <strong>OK Computer</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'><img src="nuvens tim maia.jpg" width={104} height={104} alt="Tim Maia" />
              <strong>Nuvens</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'><img src="anotherone.jpg" width={104} height={104} alt="Mac Demarco" />
              <strong>Another One</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for henry</h2>

          <div className='grid grid-cols-7 gap-4 mt-4'>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <img src="./daily1.jpg" className='w-full' width={120} height={120} alt="beatles" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>David Bowie, Talking Heads, The Smiths and more</span>
            </a>

            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <img src="./daily2.png" className='w-full' width={120} height={120} alt="beatles" />
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-sm text-zinc-400'>Kendrick Lamar, Kanye West, Y$ and more</span>
            </a>

            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <img src="./daily3.jpg" className='w-full' width={120} height={120} alt="beatles" />
              <strong className='font-semibold'>Daily Mix 3</strong>
              <span className='text-sm text-zinc-400'>Cartola, Elis Regina, 14Bis, Milton Nascimento and more</span>
            </a>

            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <img src="./daily4.png" className='w-full' width={120} height={120} alt="beatles" />
              <strong className='font-semibold'>Daily Mix 4</strong>
              <span className='text-sm text-zinc-400'>Prince, Red Hot Chilli Peppers, Pearl Jam, and more</span>
            </a>

            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <img src="./daily5.png" className='w-full' width={58} height={120} alt="beatles" />
              <strong className='font-semibold'>Daily Mix 5</strong>
              <span className='text-sm text-zinc-400'>Mac Demarco,Car Seat Headrest, Alex G and more</span>
            </a>
          </div>

        </main>
      </div>
      <Footer />
    </div>
  );
}
