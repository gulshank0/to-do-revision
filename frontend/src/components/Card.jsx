import React, { useState } from 'react'

export default function Card() {  
    const [title, setTitle] = useState(""); 
    const [description, setDescription] = useState("");
    return (
        <div className="flex flex-col h-screen align-center items-center  bg-black " >
            <p className="text-white text-3xl py-2 " >Add Todo for today </p>
<input className="bg-white text-black text-center rounded-xl" type="text" placeholder="title" onChange={function(e){
    const value = e.target.value;
    setTitle(e.target.value)
} } />
<br />
<input className="bg-white text-black text-center rounded-xl " type="text" placeholder="description" onChange={function(e){
    const value = e.target.value;
    setTitle(e.target.value)
} } />     
<br />
<button className="bg-teal-300 px-10 rounded-xl hover:cursor-pointer hover:bg-teal-900 " onClick={()=>{
    fetch("http://localhost:3000/todo", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            description
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
}} >Add todo</button>


        </div>
    )
}