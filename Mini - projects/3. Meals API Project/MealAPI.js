import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../CSS/MealAPI.css"

const MealAPI = () => {
    const[items,setItems]= useState([])
    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then(res =>{
            console.log(res);
            setItems(res.data.meals)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
  
    // storing under itemsList
    const itemsList = items.map(({idMeal,strMeal,strMealThumb})=>{
        return (
         <section className='card' key={idMeal}>
            <img src={strMealThumb}/>
            <section className='content'>
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
            </section>
         </section>
        )
     })
     
     return <div className="items-container">
         {itemsList}
     </div>
}

export default MealAPI