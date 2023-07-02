import Job from '@/components/molecules/cards/job'
import HomeHeader from '@/components/molecules/header/homeHeader'
import React from 'react'

type Props = {}

function RecentJobs({ }: Props) {
    return (
        <div className='h-[85vh] bg-[#fff] flex flex-col px-8 md:px-12 '>

            {/* Section title bar */}
            <HomeHeader titleTextOne='Most Recent' titleTextTwo='Jobs' showAllText='Explore' />

            <div className='grid grid-cols-1 md:grid-cols-4 md:gap-8'>
                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />

                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />

                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />

                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />
            </div>
        </div>
    )
}

export default RecentJobs