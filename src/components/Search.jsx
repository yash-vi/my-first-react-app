import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search"/>

        <input
        type="text"
        placeholder ="Search through thousands of movies"
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  )
}
export default Search


// destructuring

// const person = {
//   name: 'yashvi';
//   age: 21;
//   location: 'new york';
// }

// const {name, age, location} = person;