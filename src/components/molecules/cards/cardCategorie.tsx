import Image from 'next/image'
import React from 'react'
import ArrowRight from '../../atomes/btns/arrowRight'
import Link from 'next/link'

type Props = {
    imageUrl: string,
    name: string,
    numberJobs: number
}

function CardCategorie(props: Props) {

    const { imageUrl, name, numberJobs } = props
    return (
        <div className=' rounded-[5px] flex flex-col shadow-md transition duration-500  py-8 items-start justify-center hover:shadow-lg hover:cursor-pointer px-4'>
            <Image src={imageUrl} alt={imageUrl.toString()} width={46} height={46} />

            <p className='py-2 text-md md:text-xl font-bold'>{name}</p>

            <div className='flex flex-row items-center w-full justify-between hover:translate-x-1 transition duration-500'>
                <p className='flex flex-row md:text-lg'>{numberJobs}+ jobs available</p>

                <Link href={'/Show'} >
                    <ArrowRight width={16} height={8} />
                </Link>

            </div>
        </div>
    )
}

export default CardCategorie