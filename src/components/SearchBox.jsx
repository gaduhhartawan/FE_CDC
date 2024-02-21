import {
    MagnifyingGlassIcon,
    MapPinIcon,
    MinusIcon,
  } from '@heroicons/react/24/outline'

export default function SearchBox() {
    return (
    <div className="rounded-sr h-40 lg:h-fit lg:flex flex-col items-center justify-center bg-bluu">
        <img
            src="bar.svg"
            alt="google"
            className="size-full"
        />
        <div className="lg:flex flex-col gap-8 absolute items-center">
            <div className="text-white text-st font-plusjakarta font-semibold">
                Looking for a new opportunities?
            </div>
            <div className="text-white text-lg font-plusjakarta font-semibold">
                Browse out latest job openings that you want 
            </div>
            <div className="lg:flex flex-row w-full rounded-full bg-search-bar items-center">
                <div className="lg:flex flex-row px-3 self-start justify-start h-14 w-1/2 items-center mx-3 gap-2">
                    <MagnifyingGlassIcon className='h-5 w-5'/>
                    <div className='text-base font-plusjakarta text-slate-400'>
                        Find Job
                    </div>
                </div>
                <MinusIcon className='h-10 w-10 rotate-90 '/>
                <div className="lg:flex flex-row h-14 w-1/2 items-center mx-3 gap-2 justify-between">
                    <div className="lg:flex flex-row h-14 w-1/2 items-center gap-2">
                        <MapPinIcon className='h-5 w-5'/>
                        <div className='text-base font-plusjakarta text-slate-400'>
                            Location
                        </div>
                    </div>
                    <button className='justify-end rounded-full text-white bg-bluu h-10 w-28 text-base font-plusjakarta mx-4'>
                        Search
                    </button>
                </div>
            </div>
        </div>
        
    </div>
    )
}