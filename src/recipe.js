import React from 'react'
import Style from './recipe.module.css'

const Recipe=({name,image,ingredients,calories})=>{
let counter=0
return(
    <div className={Style.recipe}>
        <h1>{name.length>15?name.substring(0, Math.min(name.length, 15))+"...":name}</h1>
        <ol>
            {ingredients.map(function(ingredient){
                counter+=1
                return (<li><b>{counter+")"}</b> {ingredient.length>35?ingredient.substring(0, Math.min(ingredient.length, 35))+"...":ingredient}</li>)
            })}
        </ol>
        <p><b>Total Calories:</b>{Math.trunc(calories)}</p>
        <img className={Style.image} src={image} alt="Recipe"/>
    </div>
    )
}

export default  Recipe