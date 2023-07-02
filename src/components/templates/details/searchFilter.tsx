import SearchHeader from '@/components/organisme/header/searchHeader'
import React from 'react'

type Props = {}

function SearchFilter({}: Props) {
  return (
    <div className='px-8 md:px-12 flex flex-col md:flex-row h-[95vh] justify-center items-center'>
        <div className='w-full bg-red-600 flex items-center justify-center'>
          <SearchHeader />
        </div>
    </div>
  )
}

export default SearchFilter