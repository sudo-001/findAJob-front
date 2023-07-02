import ExploreBtn from '@/components/atomes/btns/exploreBtn'
import HeaderFloatingBtn from '@/components/atomes/btns/headerFloatingBtn'
import HeaderFunctionalBtnSecond from '@/components/atomes/btns/headerFunctionalBtnSecond'
import Image from 'next/image'
import React from 'react'

type Props = {}

function Header({ }: Props) {
    return (
        <div className='px-8 md:px-12 flex flex-col md:flex-row h-[95vh]'>

            <div className='w-full h-[50%] md:h-full md:w-1/2 justify-center items-center'>
                <div className='w-full h-full flex flex-col justify-end md:justify-center'>
                    <p className='text-4xl md:text-6xl font-bold leading-snug md:leading-tight'>
                        <span className='text-[#0066FF]'>Find A Job</span> from the{"\n"} comfort of your home
                    </p>
                    <p className='text-4xl md:text-5xl font-bold w-max my-4'>500+ jobs</p>
                    <div className=' w-60'>
                        <ExploreBtn text='Explore Now' />
                    </div>
                </div>
            </div>

            <div className='w-full h-3/5 md:h-full md:w-1/2 relative'>
                <div className='w-full h-full flex flex-row md:flex-col justify-center items-center relative'>
                    <HeaderFloatingBtn text='Apply for a Job' />

                    <HeaderFunctionalBtnSecond text='Search a Job' />

                    <Image src="/assets/headerRight.png" alt="headerRight" width={520} height={20} />
                </div>
            </div>
        </div>
    )
}

export default Header