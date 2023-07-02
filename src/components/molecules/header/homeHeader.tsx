import ShowAll from '@/components/atomes/header/showAll'
import TitleLeft from '@/components/atomes/header/titleLeft'
import React from 'react'

type Props = {
    titleTextOne: string,
    titleTextTwo: string,
    showAllText: string,
}

function HomeHeader(props: Props) {
    const { titleTextOne, titleTextTwo, showAllText } = props;

    return (
        <div className='flex flex-row justify-between mt-4 py-2'>

            {/* <p className='text-lg md:text-3xl font-bold '>Explore by <span className='text-[#0066FF]'>categories</span></p> */}
            <TitleLeft leftText={titleTextOne} rightText={titleTextTwo} />

            <ShowAll text={showAllText} />

        </div>
    )
}

export default HomeHeader