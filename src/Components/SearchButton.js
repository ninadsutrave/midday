import React from 'react'
import './SearchButton.css'

const SearchButton = () => {
  return (
    <div className="SearchButton">
        <div className="Circle">
            <img className="SearchIcon" alt="" src={require("../assets/search-icon.png")} />
        </div>        
    </div>
  )
}

export default SearchButton