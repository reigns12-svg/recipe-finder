import React,{useState} from 'react';
import Recipe from './Recipe/Recipe';
import './recipieHolder.css';

const RecipeHolder=({val,recipe,handleClick,handleChange})=>{
    
   let res =  recipe.length>0?(recipe.map(recipe=>
     
      <Recipe title={recipe.recipe.label}
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          key={recipe.recipe.calories}
          url={recipe.recipe.url}
          />
  
   
   )):<p className='Link'>Please enter a valid entry for displaying recipe.</p>;
   return (

   <div className='recipieHolder'>
      
       <h1 className='header'><i className="fas fa-pizza-slice "></i> Recipe finder </h1>
       
       <div className='inputContainer'>

           <i className="fas fa-search search "></i>

           <input value={val}
           onChange={handleChange}
           className='search-bar'
           placeholder='Search'
            type='text'>
            </input>
            <button onClick={handleClick}className='search-button'>Search</button>
      </div>
             
      {res}
    
   </div>
   );
      };




export default RecipeHolder;