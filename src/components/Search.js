import { useState } from "react";

function Search(initialfooditems){
    const SearchList = (searchValue) => {
        setsearchItem(searchValue);
        const filteredData = foodItems.filter(item =>
            Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
        );
        setSearchResults(filteredData);
    };
    
    return(
        <div className="search-submit">
        <input
            type="text"
            value={searchItem}
            id="search"
            onChange={(e) => SearchList(e.target.value)}
            placeholder="Search the food items"
        />
        </div>
    );
}
export default Search;