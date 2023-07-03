import SearchFilter from '@/components/templates/search/searchFilter'
import SearchResult from '@/components/templates/search/searchResult'
import React from 'react'

type Props = {}

function Search({}: Props) {
  return (
    <>
        <SearchFilter />
        <SearchResult />
    </>
  )
}

export default Search