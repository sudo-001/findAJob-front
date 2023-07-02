import EnterpriseBtnSignup from '@/components/atomes/btns/enterpriseBtnSignup'
import JobFinderBtnSignUp from '@/components/atomes/btns/jobFinderBtnSignUp'
import SignUpBtn from '@/components/atomes/btns/sIgnUpBtn'
import { Images } from '@/utils/assets/Images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function JoinUs({ }: Props) {
    return (
        <div className='h-[70vh] flex flex-row px-8 md:px-12 relative'>

            <div className=' w-1/4 h-full flex flex-col'>
                <h1 className='text-7xl mt-16'>Join<span className='text-[#0066FF]'><br />Us</span></h1>
            </div>

            <div className=' w-2/5 py-8 px-4 relative'>
                <div className='clip-path w-full h-full relative rounded-[5px] flex flex-col items-center justify-end'>
                    <Image src={Images.joinUsEnterpriseBg} alt="enterprise-bg-signup" className='absolute top-0 w-full object-cover h-full' />
                    <div className='absolute bg-[#00000080] top-0 w-full h-full' />

                    <div className='z-10 w-full flex flex-col items-center justify-center mb-4'>
                            <EnterpriseBtnSignup link="" text='Sign Up' />

                        <p className='text-[#fff] my-2 font-bold text-xl'>Enterprise</p>
                    </div>

                </div>
            </div>

            <div className='w-2/5 py-8 px-4 relative'>
                <div className='clip-path w-full h-full relative rounded-[5px] flex flex-col items-center justify-end '>
                    <Image src={Images.joinUsJobFinderBg} alt="enterprise-bg-signup" className='absolute top-0 w-full object-cover h-full' />
                    <div className='absolute bg-[#00000080] top-0 w-full h-full' />

                    <div className='z-10 w-full flex flex-col items-center justify-center mb-4'>
                            <JobFinderBtnSignUp link="" text='Sign Up' />

                        <p className='text-[#fff] my-2 font-bold text-xl'>Job Finder</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default JoinUs