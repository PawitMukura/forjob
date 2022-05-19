import { useState,useEffect } from "react";
import './style.css'
const Table =()=> {
const [filter] = useState(["categories"]) 
const [word,setWord] = useState("")
 const [data,setData]=useState(null)
 
 useEffect(()=>{

    fetch('https://api.publicapis.org/categories')
    .then(res => res.json())
    .then(res =>setData(res))


 },[])
 const SearchName =(info)=>{

   return info.filter((data)=>{
     
       return filter.some(()=>{
         console.log(data.toString().toLowerCase().indexOf(word.toLowerCase())>-1);
         return data.toString().toLowerCase().indexOf(word.toLowerCase())>-1
         

       })
   })
} 
   

return(
      <div>
         <label>
            Search
            <input type="text" placeholder="Put some keyword" onChange={(e)=>setWord(e.target.value)}></input>
        </label>
        <div className="Table">
            <table>
               <thead>
                  <tr>
                     <th>No.</th>
                     <th>Data</th>
                  </tr>
               </thead>
               <tbody>
                     {data? SearchName(data.categories).map((e,id)=><tr key={id}><td>{id}</td><td>{e}</td></tr>):console.log(null)}
                  
               </tbody>
            </table>
         </div>
      </div>


);
}
export default Table;