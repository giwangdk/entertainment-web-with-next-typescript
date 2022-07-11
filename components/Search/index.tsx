import React from 'react'
import {BiSearch} from 'react-icons/bi'

function Search() {
  return (
      <div className='flex bg-transparent text-white mb-5 items-center text-xl'>
          <BiSearch size={30} className="mr-1" />
          <input type="text" placeholder='Find your favooo!' className='bg-transparent focus:border-0 w-full px-2'/>
    </div>
  )
}

export default Search