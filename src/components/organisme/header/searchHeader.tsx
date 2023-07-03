import FilterBar from '@/components/molecules/content/filterBar'
import SearchBar from '@/components/molecules/content/searchBar'
import React from 'react'

type Props = {}

function SearchHeader({}: Props) {
  return (
    <>
        <div className='py-16 md:py-4 px-4 flex flex-col bg-[#fff] w-screen'>
            <SearchBar />
            <FilterBar />
        </div>
    </>
  )
}

export default SearchHeader