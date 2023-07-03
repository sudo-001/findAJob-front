import SearchHeader from '@/components/organisme/header/searchHeader'
import React from 'react'

type Props = {}

function SearchFilter({}: Props) {
  return (
    <div className='px-8 md:px-12 flex flex-col md:flex-row h-[50vh] justify-center items-center'>
        <div className='w-full flex items-center justify-center'>
          <SearchHeader />
        </div>
    </div>
  )
}

export default SearchFilter