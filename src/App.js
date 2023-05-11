import React, { useState } from 'react'

import { FaHeart , FaSkullCrossbones } from "react-icons/fa";
const App=()=>{
const [userInput,setUserInput]=useState("")
const [todoAdded,setTodoAdded]=useState([])
let setItem=()=>{
  setTodoAdded(prev=>[...prev,userInput])
  console.log(todoAdded)
}
let itemEvent=(event)=>{
setUserInput(event.target.value)
}

let deleteItem=(deleteItems)=>{
  setTodoAdded(prev=>{
    return prev.filter((item)=>{
      return item!==deleteItems
    })
  })
  
}
return(
 

  <div className='main_div'>
  <div className='center_div'>
    <h1>Todo list</h1>
    <div className='input_button'>
    <input className='input' type='text' placeholder='Add Your Todo' onChange={itemEvent}></input>
    <button onClick={setItem}>+</button>
    </div>
    <ul>
      {todoAdded.map((item)=>{
         return <div className='item_added'><FaHeart className='icon'/><div className='item'>{item}</div><div><FaSkullCrossbones className='delete_item' onCLick={()=>deleteItem(item)}/></div></div>
      })}
    </ul>
    </div>
  </div>


)

}

export default App;
