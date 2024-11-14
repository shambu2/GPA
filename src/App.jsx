import { useState } from 'react'

import './App.css'

function App() {
 const [maths,setMaths] = useState(null) 
 const [ada,setAda] = useState(null)
 const [gt,setGT] = useState(null)
 const [mc,setMc] = useState(null)
 const [dbms,setDbms] = useState(null)
 const [bio,setBio] = useState(null)
 const [adaLab,setAdaLab] = useState(null)
 const [latex,setLatex] = useState(null)
 const [uhv,setUhv] = useState(null)
//  const threeCredit =parseInt(ada) + parseInt(gt)

 const handleCalculate = ()=>{
  const threeCredit = parseInt(ada)+ parseInt(gt)
  const fourCredit = parseInt(mc) + parseInt(dbms)
  const twoCredit = parseInt(bio)
  const oneCredit = parseInt(adaLab)+ parseInt(latex) +parseInt(uhv)
 }
  return (
   <div className='flex flex-col'>
    <div>
      <div>
        <label htmlFor="">ADA</label>
        <input type="number" onChange={(e)=>{setAda(e.target.value)}} />
      </div>
      <div>
        <label htmlFor="">GT</label>
        <input type="number" onChange={(e)=>{setGT(e.target.value)}} />
      </div>
      <div>
        <label htmlFor="">MC</label>
        <input type="number" onChange={(e)=>{setMc(e.target.value)}} />
      </div>
      <div>
        <label htmlFor="">DBMS</label>
        <input type="number" onChange={(e)=>{setDbms(e.target.value)}} />
      </div>
      <div>
        <label htmlFor="">Biology</label>
        <input type="number" onChange={(e)=>{setBio(e.target.value)}} />
      </div>
      <div>
        <label htmlFor="">ADA Lab</label>
        <input type="number" onChange={(e)=>{setAdaLab(e.target.value)}} />
      </div>
      <div>
        <label htmlFor="">Latex</label>
        <input type="number" onChange={(e)=>{setLatex(e.target.value)}} />
      </div>
      <div>
        <label htmlFor="">UHV</label>
        <input type="number" onChange={(e)=>{setUhv(e.target.value)}} />
      </div>
      
    </div>
    <button >submit</button>
    
    {/* <p>{threeCredit}</p> */}
   </div>
  )

}

export default App
