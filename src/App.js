import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from './recipe'

const App=()=>{
  const APP_ID='';
  const APP_KEY="";

  const [recipes, setRecipes]=useState([]);
  const [search, setSearch]=useState('');
  const [query,setQuery]=useState('chicken');

  const updateSearch = e=>{
    setSearch(e.target.value)
  }

  useEffect(()=>{
    callApi(query)
  }, [query])

  const callApi = input =>{
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        // Examine the text in the response
        response.json().then(function(data) {
          // setRecipes([data])
          console.log(data.hits)
          setRecipes(data.hits)
        });
      }
    )
  }

  const getInput=(e)=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return( 
    <div className="App">
      <form onSubmit={getInput} className="search-form" >
        <input className="search-bar" type="text" onChange={updateSearch} value={search}/>
        <button className="search-button" type="submit">
          Search It!
        </button>
      </form>
      <div className="recipes">
      {recipes.map(function(recipe){
          return(
            <Recipe 
              name={recipe.recipe.label}
              ingredients={recipe.recipe.ingredientLines}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App;
