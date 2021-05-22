import React, { useState } from 'react';
import './recep.css';

const Recep =({title,calories,image,healthBenefits,ingredients,mealType,url})=>{
    
    const [showIngredients,setShowIngredients] = useState(false);
    const [showHealthBenefits,setShowHealthBenefits] = useState(false);

    let tableIngredients =  ingredients.map(ingredient=>(
        <li >
           <p> {ingredient.text} </p>
        </li>
      )
      );
    
      let tableHealthBenefits = healthBenefits.map(
        benefit=>
    <li>
       <p>{benefit}</p>
    </li>
    );
   

    const  HealthBenefitsHandler=()=>{
        setShowIngredients(false);
        setShowHealthBenefits(!showHealthBenefits);
        
    }
    const IngredientsHandler =()=>{
        setShowHealthBenefits(false);
        setShowIngredients(!showIngredients);
        
    }
    let show=null;

    if(showHealthBenefits)
    show=tableHealthBenefits;

    else if(showIngredients)
    show=tableIngredients;

    else show=null;
    return(

    <div className='recep'>
    <h1>{title}</h1>
    
        <img src={image} className='Image' alt=''/>
        <p className='para'>Dish Type : {mealType}</p>
        <p ><a className='para' href={url} target='_blank'>Go to Recipe</a></p>
        <div className='ingredients'>
            <h2>Recipe Ingredients </h2><i onClick={IngredientsHandler}
             className={showIngredients?"fas fa-arrow-alt-circle-up fa-2x":"fas fa-arrow-alt-circle-down fa-2x"}></i>
           
        </div>
        <div className='healthBenefits'>
        <h2>Health benefits</h2><i onClick={HealthBenefitsHandler}
         className={showHealthBenefits?"fas fa-arrow-alt-circle-up fa-2x":"fas fa-arrow-alt-circle-down fa-2x"}></i>
               
        </div> 
        { show?
        <div className='showingArea'>
            {showIngredients? (<h2>Recipe Ingredients</h2>) : (<h2>Health Benefits</h2>)}
            <ol>
            {show}
            </ol>
            </div> : null
         }
</div>
)};

export default Recep;