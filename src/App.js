import React,{useState,useEffect} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Recep from './components/Recipe/recep';
import RecipeHolder from './components/recipieHolder';

const recipieHolder = (props)=>{

   const [recipe,setRecipe]=useState([]);
   const [query,setQuery]=useState('chips');
   const [temp,setTemp]=useState('');
   const [showLoading,setLoading]=useState(false);

   const APP_ID='aed21dc3';
   const APP_KEY='d2bf4ead671bd34827506bad81cb7bac';
   const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

   
   useEffect(()=>{
     const fetchdata = async ()=>{
        setLoading(true);
        const data = await fetch(exampleReq);
        const data2 = await data.json();
        console.log(data2);
        setRecipe(data2.hits);
        setLoading(false);
     } 
     fetchdata();
   },[query]);
   
   const handleClick=()=>{
      setQuery(temp);setTemp('');
      
   };
   const handleChange=(event)=>{
    setTemp(event.target.value);
 };
    return(
      <div className='App'>   
         
     {
      recipe.map(recipe=>
      <Route key={recipe.recipe.calories}
       path={`/recipe/${recipe.recipe.label}`}
        exact 
        render={(props)=><Recep title={recipe.recipe.label}
                                 calories={recipe.recipe.calories}
                                  image={recipe.recipe.image}
                                  healthBenefits={recipe.recipe.healthLabels}
                                  ingredients={recipe.recipe.ingredients}
                                  mealType={recipe.recipe.mealType}
                                  url={recipe.recipe.url}
                                  />
               }
       >
      </Route>
      )
     }    
     {  
     showLoading?(
         <div className='spinHolder'> 
         <i className="fas fa-pizza-slice fa-3x"></i>
          <h1 className='header'>Recipe finder</h1>
            <div className="spin">

            </div>
          </div>
     )
     :(
      <Route path='/' exact
      render={(props)=><RecipeHolder  val={temp} recipe={recipe} handleClick={handleClick} handleChange={handleChange}/>}>
        </Route>

     )            
    
     }        
      </div>
   );
};

export default recipieHolder;
