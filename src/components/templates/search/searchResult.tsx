import Job from '@/components/molecules/cards/job'
import React from 'react'

type Props = {}

function SearchResult({ }: Props) {
    return (
        <div className='px-8 md:px-12 bg-[#fff] h-max py-4'>
            <p className='font-bold text-xl py-8'>Result(s) : 12</p>

            <div className='grid grid-flow-row-dense grid-cols-1 md:grid-cols-4 grid-rows-4 gap-4'>
                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />
                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />
                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />
                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />
                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />
                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />
                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />
                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />

                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />
                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />
                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />
                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />
                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />
                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />
                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />
                <Job enterpriseName='Enterprise Name' location='Location' jobTitle='job Title' jobType='job Type' timeElapsed='2h' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. ' />


            </div>
        </div>
    )
}

export default SearchResult