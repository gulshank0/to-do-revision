export default function Card() {   
    return (
        <div className="flex flex-col h-screen align-center items-center  bg-black " >
            <p className="text-white text-3xl py-2 " >Add Todo for today </p>
<input className="bg-white text-black text-center rounded-xl" type="text" placeholder="title" />
<br />
<input className="bg-white text-black text-center rounded-xl " type="text" placeholder="description" />     
<br />
<button className="bg-teal-300 px-10 rounded-xl " >Add todo</button>


        </div>
    )
}