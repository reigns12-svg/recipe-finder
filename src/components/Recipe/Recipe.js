import React from 'react';
import {Route,Link} from 'react-router-dom';
import Recep from './recep';
import './Recipe.css';

const Recipe=({title,calories,image,url})=>(

    <div className='Recipe'>
        <h1>{title}</h1>
        
        <img className='image' src={image} alt=''/>
        
        <p ><Link to={`/recipe/${title}`} className='link'>Click here to know more!!</Link></p>
        <p ><a className='link' href={url} target='_blank'>Go straight to Recipe</a></p>
    </div>
);

export default Recipe;