import './component/style.css';
import Body from './component/body';
import Show from './component/show';
import { useState,createContext,useEffect } from 'react';
export const Context = createContext()
function App() {
// const [Title ,setTitle ]=useState([])
// const [Fisrtname,setFisrtname]=useState([])
// const [Lastname,setLastname]=useState([])
// const [Birthday,setBirthday]=useState([])
// const [Nationality,setNationality]=useState([])
// const [CitizenID1,setCitizenID1]=useState([])
// const [CitizenID2,setCitizenID2]=useState([])
// const [CitizenID3,setCitizenID3]=useState([])
// const [CitizenID4,setCitizenID4]=useState([])
// const [CitizenID5,setCitizenID5]=useState([])
// const [Gender,setGender]=useState([])
// const [MobilePhone,setMobilePhone]=useState([])
// const [Phone,setPhone]=useState([])
// const [PassportNo ,setPassportNo ]=useState([])
// const [ExpectedSalary,setExpectedSalary]=useState([])
// const [check,setCheck]=useState(false)

 
  
      const [Items,setItems] = useState([])
      const [Item,setItem] = useState([])
  const newItem = (event) =>{
    setItems( [...Items,event] )
    
     } 
     
     const data =
     [
      {Items,setItems}
     ]

  //  useEffect(()=>{
  //   console.log(Items.map((e)=>Object.entries(e.Fisrtname)))
    
  //  },[Items])  
   console.log(Items);
  return (
    <Context.Provider  value={data}>
        <div className="App">
          <Body onAddItem={newItem}/>
         <Show/>
        </div>
    </Context.Provider>
  );
}

export default App;
