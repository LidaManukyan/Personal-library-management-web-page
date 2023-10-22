import './App.css';
import { useState } from 'react';
import Todolist from './todolist';
import Input from './input';
import Footer from './footer';

function App() {
  const[value, setValue]=useState([{}])
  return (
    <div className="App">
      <Input onAdd={(text)=>
      setValue([
        ...value,
        {id:Math.random(),
        text:text,
      isCompleted: false}
      ])
      }/>
      <Todolist props={value}
      onDelete={(item)=> {
        setValue(value.filter(t=> t.id !== item.id))
      }}
      onChange={(newTodo)=>{
        setValue(
          value.map(item=>{
            if(item.id === newTodo.id){return newTodo}
            return item
          })
        )
      }}
     
       />
      <Footer props={value} onCleareCompleted={()=>{
       setValue(value.filter(item=> !item.isCompleted))
      }} />
    </div>
  );
}

export default App;
